export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 2,
    title: "",
    description: "",
    className: "md:col-span-3 md:row-span-2 lg:col-span-3 ",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack:",
    description: "I constantly try to improve",
    className: " md:col-span-4 md:row-span-1 lg:col-span-3 lg:min-h-[60vh] ",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: " md:col-span-2 md:row-span-1 lg:col-span-2 col-span-full",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const personalprojects = [
  {
    id: 1,
    title: "ToDo List App",
    des: "This is a ToDo list App with LocalStorage",
    img: "/projects/TodoListAppScreenshot.jpg",
    tech: ["/html.svg", "/css.svg", "/javascript.svg"],
    source: "https://github.com/HainerSt/ToDoList-JS",
    link: "https://todolist-topaz-five.vercel.app/",
  },
  {
    id: 2,
    title: "Edutech",
    des: "This is an educational single-page application.",
    img: "/projects/project-edutech.jpg",
    tech: ["/html.svg", "/css.svg", "/javascript.svg"],
    source: "https://github.com/HainerSt/EduTech.git",
    link: "https://edutech-mu-liart.vercel.app/",
  },
  {
    id: 3,
    title: "Crypto Monitoring App",
    des: "Crypto Monitoring App with CoinGecko API",
    img: "/projects/chainer-background.jpg",
    tech: ["/html.svg", "/css.svg", "/javascript.svg", "/react.svg"],
    source: "https://github.com/HainerSt/Chainer---Crypto-App",
    link: "https://chainer-crypto-app.vercel.app/",
  },
];

export const profilelinks = [
  { id: 1, title: "LinkedIn", link: "https://www.linkedin.com/in/hainerstefan/", img: "/link.svg" },
  {
    id: 2,
    title: "GitHub",
    link: "https://github.com/HainerSt",
    img: "/git.svg",
  },
];

export const experience = [
  {
    id: 1,
    title: "FrontEnd Software Developer",
    company: "BNG Tracking",
    des: [
      "Designed and implemented new features in a GPS tracking app for logistics companies.",
      "Used React to migrate multi-page user experiences to single-page apps.",
      "Made a feature that shows the status of an invoice on the client-side allowing users to easily view payment status (paid/unpaid) and outstanding balance, improving user experience.",
    ],
    className: "md:col-span-2",
    thumbnail: "/gps.svg",
  },
  {
    id: 2,
    title: "Unit Testing in React.js [Course]",
    organisation: "Coursera",
    des: [
      "Constructed a variety of test cases using diverse selection methods.",
      "Developed and implemented negative test assertions for conditionally rendered elements and asynchronous scenarios.",
      "Employed mocking techniques to simulate component behavior for more effective testing.",
    ],
    link: "https://coursera.org/share/68214800d63b7f98be22657ea4dfdb4c",
    thumbnail: "/magnifier.svg",
    img: "/exp/UTR.jpg",
  },
  {
    id: 3,
    title: "Advanced React [Course]",
    organisation: "Meta | Coursera",
    des: [
      "Created robust and reusable components using advanced techniques and learned different patterns to reuse common behaviors.",
      "Interacted with a remote server and successfully fetched and posted data via an API.",
      "Seamlessly tested React applications using React Testing Library.",
    ],
    link: "https://coursera.org/share/1d7d99e754e42c576a3d876909da349a",
    thumbnail: "/exp3.svg",
    img: "/exp/MReactA.jpg",
  },
  {
    id: 4,
    title: "React Basics [Course]",
    organisation: "Meta | Coursera",
    des: [
      "Worked with reusable components to render views where data changes over time.",
      "Utilized props to pass data between components, creating dynamic and interactive web pages and apps.",
      "Implemented forms to allow users to interact with the app and built a complete application in React.",
    ],
    link: "https://coursera.org/share/8e0fd3c69d46c878e12b05095c589c56",
    thumbnail: "/exp2.svg",
    img: "/exp/MREACTB.jpg",
  },
  {
    id: 5,
    title: "JavaScript Algorithms & Data Structures [Course]",
    organisation: "freeCodeCamp",
    des: [
      "Learned fundamental programming concepts in JavaScript, including variables, loops, functions, arrays, objects, and linked lists, gaining skills to manipulate and organize data effectively.",
      "Developed algorithmic thinking by studying common algorithms such as sorting and searching.",
      "Completed coding challenges to strengthen problem-solving abilities.",
    ],
    link: "https://freecodecamp.org/certification/HainerStefan/javascript-algorithms-and-data-structures-v8",
    thumbnail: "/exp1.svg",
    img: "/exp/JSADS.jpg",
  },
  {
    id: 6,
    title: "Responsive Web Design [Course]",
    organisation: "freeCodeCamp",
    des: [
      "Learned the fundamentals of HTML and CSS to structure and style web pages.",
      "Built responsive layouts using CSS Flexbox and Grid to ensure designs adapt to different screen sizes.",
      "Applied accessibility principles and built responsive projects, like portfolios and landing pages, developing a solid foundation in user-friendly, adaptable web design.",
    ],
    link: "https://freecodecamp.org/certification/HainerStefan/responsive-web-design",
    thumbnail: "/exp5.svg",
    img: "/exp/RWD.jpg",
  },
];
