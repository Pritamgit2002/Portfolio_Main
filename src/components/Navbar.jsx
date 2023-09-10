import React,{useEffect,useState} from 'react';
import {Link } from 'react-router-dom';
import {styles } from '../styles';
import { navLinks } from '../constants';
import {logo,menu,close} from '../assets';

const Navbar = () => {
  // const [first,setfirst]= useState(second);
  const [active,setActive]= useState("");
  const [toogle,setToggle]= useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 770) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${
      styles.paddingX
    } w-full flex items-center py-5 fixed top-0 z-20 ${
      scrolled ? "    backdrop-filter backdrop-blur-lg" : "bg-transparent"
    }`}
    >
    <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
      <Link
        to="/"
        className="flex items-center gap-2"
        onClick={() => {
          setActive("");
          window.scrollTo(0,0);
        }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-obtain"/>

          <p className="text-white text-[18px] font-bold cursor-pointer flex"> Pro Star &nbsp;
          <span className="sm:block hidden">|  &nbsp;Engineer
          </span></p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
            
            
          ))}
           
        </ul>

       

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
          src={toogle ? close :menu}
          alt="menu" 
          className='w-[28px] h-[28px] object-contain cursor-pointer'
          onClick={()=> setToggle(!toogle)}
          />

          <div className={`${!toogle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}>
          <ul className='list-none flex justify-end items-start flex-col gap-4'>
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-white" : "text-secondary"
              } font-poppins font-medium cursor-pointer text-[16px]`}
              onClick={() =>{ 
                setToggle(!toogle)
                setActive(Link.title)
              }}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
              
            </li>
          ))}
        </ul>
          </div>
        </div>

    </div >              

    {/* <a href="Resume(Pritam Gain).pdf" download="pritam Gain_Resume">
      <button className= {`${
      styles.paddingX
    }    ${
      scrolled ? "  text-white font-bold  py-3 px-1 rounded-full mx-3 transition-all duration-500	"	 : " bg-green-500  hover:bg-green-600 text-white py-3 px-3 rounded-lg shadow-lg z-10 mx-3	"
    }`}>
          <span>Download</span> 
          <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        </button>
      </a> */}

      

      <a href="Resume(Pritam Gain).pdf" download="pritam Gain_Resume">

      <button class="text-secondary font-poppins font-medium cursor-pointer text-[18px] inline-flex items-center ml-7 hover:text-white">
        <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
        <span>Resume</span>      
      </button>
    </a>


    </nav>
  )
}

export default Navbar



