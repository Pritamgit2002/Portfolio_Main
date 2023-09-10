import { BrowserRouter } from "react-router-dom";
import React,{useEffect,useState} from 'react';
//import {styles } from './styles';

//import videobg from "./assets/videobg.mp4";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

 const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
return (
    <BrowserRouter>
      {/* <a href="Resume(Pritam Gain).pdf" download="pritam Gain_Resume">
      <button className= {`${
      styles.paddingX
    }    ${
      scrolled ? "fixed bottom-4 right-4  z-10 bg-transparent hover:bg-red-600 text-white font-bold py-3 px-3 rounded-full"	 : "fixed bottom-4 right-4 bg-green-500  hover:bg-green-600 text-white py-3 px-6 rounded-lg shadow-lg z-10"
    }`}>
          CV        
        </button>
      </a> */}
      <div className="relative z-0 bg-[#0d151d]">
      {/* <video className=" " src={videobg.mp4} autoPlay loop muted /> */}
        <div >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;