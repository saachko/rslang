import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="/book" element={<p>Book</p>} />
        <Route path="/games" element={<p>Games</p>} />
        <Route path="/games/sprint" element={<p>Sprint</p>} />
        <Route path="/games/audio" element={<p>Audio</p>} />
        <Route path="/statistics" element={<p>Statistics</p>} />
        <Route path="/about-project" element={<p>About Project</p>} />
        <Route path="/about-team" element={<p>About Team</p>} />
      </Routes>
      <div>RsLang</div>
      <Footer />
    </>
  );
}

export default App;
