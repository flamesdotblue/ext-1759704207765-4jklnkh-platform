import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import NewsList from './components/NewsList';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <section className="relative z-10">
          <NewsList />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
