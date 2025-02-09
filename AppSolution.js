import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  let location = useLocation();
  console.log('Current Location:', location);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/*Fallback Route for unexpected behavior*/}
        <Route path="*" element={<div>404 - Page not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 

//Home.js

function Home(){
    return(
        <div>Home</div>
    );
}
export default Home;

//About.js

function About(){
    return(
        <div>About</div>
    );
}
export default About;

//Contact.js

function Contact(){
    return(
        <div>Contact</div>
    );
}
export default Contact;