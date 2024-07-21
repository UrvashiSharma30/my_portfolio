import React from 'react';
import NavBar from './Components/Navbar/NavBar';
import ProfileSummary from './Components/ProfileSummary/ProfileSummary';
import Skills from './Components/Skills/Skills';
import ContactMe from './Components/ContactMe/ContactMe';
import Footer from './Components/Footer/Footer';
import Experience from './Components/Experience/Experience';

const App = () => {
  return (
    <>
      <NavBar />
      <ProfileSummary />
      <Skills />
      <Experience />
      <ContactMe />
      <Footer />
    </>
  );
};

export default App;
