import { motion } from "framer-motion";
import { styles } from "../styles";
//import { ComputersCanvas } from "./canvas";
import videobg from "../assets/videobg.mp4";
import { Typewriter } from 'react-simple-typewriter'


const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover">
        <source src={videobg} type="video/mp4"/>
        {/* position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} */}
      </video>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-[#ffff]`}>
            Hi, I'm <span className='text-[#a3bed1]'>Pritam</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            programmer &<br className='sm:block hidden' />
            full stack software developer
          </p>

         {/* Typewriter */}

         <span style={{ color: 'red', fontWeight: 'bold' }}
          className={" mt-2 text-2xl "}
         >
          {/* Style will be inherited from the parent element */}
          <Typewriter 
            words={['Eat', 'Sleep', 'Code', 'Repeat!']}
            loop={10}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={90}
            delaySpeed={900}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>




        </div>
      </div>

      {/* <ComputersCanvas /> */}

    {/* const ComputersCanvas = () => {
        const [isMobile, setIsMobile] = useState(false);} */}

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;