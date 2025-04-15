// src/components/App.js
import React from "react";

function Navbar() {
  return (
    <nav>
      <h1>My Portfolio</h1>
    </nav>
  );
}

function Home() {
  return (
    <main id="home">
      <h2>Welcome to my site!</h2>
    </main>
  );
}

function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
