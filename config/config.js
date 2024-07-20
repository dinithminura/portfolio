
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Dinith",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    },
    {
      title: "Links",
      link: "/links",
    },
    {
      title: "Blog",
      link: "https://medium.com/@dinithminura",
    }
  ],
}
export const intro = {
  title: "Hey, I'm Dinith Minura",
  description: "Software Engineer | Full Stack Developer | Javascript | Python",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://docs.google.com/document/d/1xnILFEW3gpZPU3tT-jciBJH4bbskQrbz/edit?usp=sharing&ouid=106847210939603691464&rtpof=true&sd=true",
      isPrimary: false,
    },
  ],
}

export const about = {
  title: "Who I am",
  description: [
    "With over seven years of experience in software engineering, I bring expertise in backend development and full-stack solutions, with a specialization in JavaScript. My skill set extends to technologies like React, React Native, Python, and AWS Cloud Services, where I've contributed significantly to system design, solution engineering, and end-to-end development across diverse product teams.",
    "As a data engineering enthusiast, I am dedicated to leveraging data-driven insights to drive innovation and solve real-world problems. My proficiency in the entire software development life cycle allows me to bring a commitment to precision and innovation to every project.",
    "Currently open to new opportunities, I am eager to bring my combined expertise in software and data engineering to a dynamic team where I can make impactful contributions and continue my professional growth. Let's connect and explore how we can collaborate to drive success."
  ],
}

export const work = {
  title: "What I do",
  cards: [
    {
      title: "Web Development",
      description: "I create responsive static websites using ReactJS and Backend using NodeJS",
      icons: null,
    },
    {
      title: "Mobile App Development",
      description: "I create pixel perfect iOS and Andriod apps using React Native.",
      icons: null,
    },
  ],
}

export const projects = {
  title: "Projects",
  cards: [
    {
      title: "Go-Social",
      description: "This is a mobile application template with customizable components for community-based application developments.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/scorelab/Go-social",
        },
      ]
    },
    {
      title: "Global Price Index",
      description: "This API fetches order book data from three different exchanges (Binance, Kraken, and Huobi), computes the mid-price for each order book, and returns the average of these mid-prices.",
      icons: [
        {
          icon: faGithub,
          link: "https://github.com/dinithminura/crypto-mid-price",
        }
      ]
    },
    {
      title: "Bus Promo",
      description: "A system to track advertising on public transportation implemented for Raspberry Pi and Intel Galileo platforms using technology related to the field of IoT.",
      icons: [
        {
          icon: faGithub,
          link: "",
        },
      ]
    },
  ],
}

export const contact = {
  title: "Get in touch",
  description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at dinithminura@gmail.com.",
  buttons: [
    {
      title: "Email Me",
      link: "mailto:dinithminura@gmail.com",
      isPrimary: true,
    },
    {
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/dinithminura/",
      isPrimary: false,
    },
  ]
}

// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Dinith Minura | Software Engineer | Fullstack Developer | Javascript Developer | Python Developer",
  description: "With over seven years of experience in software engineering, I bring expertise in backend development and full-stack solutions, with a specialization in JavaScript.",
  image: profile.src,
}

export const links = {
  image: profile.src,
  title: "@dinithminura",
  description: "Software Engineer | Fullstack Developer | Javascript",
  cards: [
    {
      title: "My website",
      link: "",
    },
    {
      title: "My GitHub",
      link: "https://github.com/dinithminura/",
    },
    {
      title: "My LinkedIn",
      link: "https://www.linkedin.com/in/dinithminura/",
    },
  ]
}