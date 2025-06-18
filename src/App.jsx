// import { useState } from 'react';
// import Header from './components/Header';
// import Navigation from './components/Navigation';
// import Hero from './components/Hero';
// import About from './components/About';
// import Education from './components/Education';
// import Experience from './components/Experience';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';

// function App() {
//   const [activeSection, setActiveSection] = useState('home');

//   const renderSection = () => {
//     switch(activeSection) {
//       case 'about':
//         return <About />;
//       case 'education':
//         return <Education />;
//       case 'experience':
//         return <Experience />;
//       case 'skills':
//         return <Skills />;
//       case 'projects':
//         return <Projects />;
//       case 'contact':
//         return <Contact />;
//       default:
//         return <Hero />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />
//       <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
//       <main className="container mx-auto px-4 py-8">
//         {renderSection()}
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;





import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <hr />
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* Redirect any unknown paths to home */}
            <Route path="*" element={<Hero />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;