import React from 'react';
import { ExternalLink, MessageSquare, ThumbsUp, Clock, Loader } from 'lucide-react';

function timeAgo(unixSeconds) {
  const diff = Date.now() / 1000 - unixSeconds;
  const units = [
    { s: 60, label: 's' },
    { s: 60, label: 'm' },
    { s: 24, label: 'h' },
    { s: 7, label: 'd' },
  ];
  let val = diff;
  let i = 0;
  for (; i < units.length && val >= units[i].s; i++) {
    val = Math.floor(val / units[i].s);
  }
  const labels = ['s', 'm', 'h', 'd', 'w'];
  return `${Math.max(1, Math.floor(val))}${labels[i] || 'w'}`;
}

export default function NewsList() {
  const [stories, setStories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [count, setCount] = React.useState(20);

  React.useEffect(() => {
    let active = true;
    async function load() {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json');
        if (!res.ok) throw new Error('Failed to fetch top stories');
        const ids = await res.json();
        const slice = ids.slice(0, count);
        const items = await Promise.all(
          slice.map(async (id) => {
            const r = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
            if (!r.ok) return null;
            return r.json();
          })
        );
        const filtered = items.filter(Boolean);
        if (active) setStories(filtered);
      } catch (e) {
        if (active) setError(e.message || 'Error');
      } finally {
        if (active) setLoading(false);
      }
    }
    load();
    return () => {
      active = false;
    };
  }, [count]);

  return (
    <div id="feed" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-lg sm:text-2xl font-semibold tracking-tight">Top Stories</h2>
          <p className="text-sm text-white/60">Live from Hacker News API</p>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm text-white/60">Items</label>
          <select
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
            className="rounded-md bg-white/5 border border-white/10 px-2 py-1 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {[10, 20, 30, 50].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>

      {loading && (
        <div className="flex items-center justify-center py-16 text-white/70">
          <Loader className="h-5 w-5 animate-spin mr-3" /> Loading stories...
        </div>
      )}

      {error && (
        <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-red-200">
          {error}
        </div>
      )}

      {!loading && !error && (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stories.map((s) => (
            <li key={s.id} className="group rounded-xl border border-white/10 bg-white/[0.03] p-4 hover:bg-white/[0.06] transition">
              <div className="flex flex-col gap-2">
                <a
                  href={s.url || `https://news.ycombinator.com/item?id=${s.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base sm:text-lg font-medium leading-snug text-white group-hover:text-emerald-300 transition inline-flex items-start gap-2"
                >
                  <span className="flex-1">{s.title}</span>
                  <ExternalLink className="h-4 w-4 mt-1 shrink-0 opacity-70 group-hover:opacity-100" />
                </a>
                <div className="flex flex-wrap items-center gap-3 text-xs text-white/60">
                  <span className="inline-flex items-center gap-1"><ThumbsUp className="h-3.5 w-3.5" /> {s.score}</span>
                  <span className="inline-flex items-center gap-1"><MessageSquare className="h-3.5 w-3.5" /> {s.descendants ?? 0}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {timeAgo(s.time)} ago</span>
                  <span className="inline-flex">by {s.by}</span>
                </div>
                <div className="mt-2 flex items-center gap-2">
                  <a
                    href={`https://news.ycombinator.com/item?id=${s.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs rounded-md border border-white/10 bg-white/5 px-2 py-1 text-white/80 hover:bg-white/10 transition"
                  >
                    Discuss on HN
                  </a>
                  {s.url && (
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs rounded-md border border-emerald-500/20 bg-emerald-500/10 px-2 py-1 text-emerald-300 hover:bg-emerald-500/20 transition"
                    >
                      Source
                    </a>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
