import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    java,
    redux,
    python,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    //docker,
    school,
    college,
    exclamation_mark,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    voice,
    sudoku,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Java Developer",
      icon: mobile,
    },
    {
      title: "React & Node js Developer",
      icon: backend,
    },
    {
      title: "Voice Artist",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "BidhanNagar Municipal School",
      company_name: "School(10th & 12th Board)",
      icon: school,
      iconBg: "#383E56",
      date: " 2018 - 2020",
      points: [
        "10th Board result 89.57%  ",
        "12th Board result 83.8% ",
      ],
    },

    {
      title: "Techno Internatiol New Town",
      company_name: "Btech CSE undergrad.",
      icon: college,
      iconBg: "#E6DEDD",
      date: "2020 - Present",
      points: [
        "YGPA of First Semester is :  9.58",
        "YGPA of Second Semester is : 9.09",
        "YGPA of Third Semester is :  7.92(till Fifth Semester)",
      ],
    },

    {
      title: "Not Worked Professionally & Waiting for Internship/PPO",
      company_name: "job",
      icon: exclamation_mark,
      iconBg: "#ffff",
      //date: "2020 - Present",
      points: [
        "Developing software using latest techs ",
        "Grinding on leetcode , codechef & various other platfrom",
        
      ],
    },



    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },




  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      media: "https://www.linkedin.com/feed/",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      media: "https://www.linkedin.com/feed/",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      media: "https://www.linkedin.com/feed/",
    },
  ];
  
  const projects = [
    {
      name: "Sudoku",
      description:
        "Web-based Game that allows users to play Sudoku of different difficulty level. User can also upgrade the dificulty level by selecting lower number of errors.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "vanilajs",
          color: "pink-text-gradient",
        },
      ],
      image: sudoku,
      source_code_link: "https://github.com/Pritamgit2002/Sudoku-Game",
      demo_link: "https://pritamsudoku.netlify.app/",
    },
    {
      name: " E-Shopping App",
      description:
        "A desktop applicaation for e-selling using java-swing and used mysql for the database. It has login,signup,catagory-wise dress division, add to cart option and purchase.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "javaswing",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
      // demo_link: "https://www.youtube.com/watch?v=_CL6n0FJZpk",
    },
    {
      name: "Speech to Text",
      description:
        "Convert your speech into text , it supports Hindi and English as well. A wesite made of React js , css , tailwind css . [In my device , in Brave browser it's not working , let me know how it's working ?]",
      tags: [
        {
          name: "React js",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "tailwind css",
          color: "pink-text-gradient",
        },
      ],
      image: voice,
      source_code_link: "https://github.com/Pritamgit2002/Speech-to-Text",
      demo_link: "https://speech2textpro.netlify.app/",
    },
    {
      name: "Coming Soon",
      description:
        "A new project is going on . I will host it ASAP",
      tags: [
        {
          name: "project_soon",
          color: "blue-text-gradient",
        },
        // {
        //   name: "supabase",
        //   color: "green-text-gradient",
        // },
        // {
        //   name: "css",
        //   color: "pink-text-gradient",
        // },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
      demo_link: "https://www.youtube.com/watch?v=_CL6n0FJZpk",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };