export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently working on .....",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
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
    thumbnail: "/exp4.svg",
  },
  {
    id: 2,
    title: "Advanced React Course",
    organisation: "Meta | Coursera",
    des: [
      "Created robust and reusable components using advanced techniques and learned different patterns to reuse common behaviors.",
      "Interacted with a remote server and successfully fetched and posted data via an API.",
      "Seamlessly tested React applications using React Testing Library.",
    ],
    link: "https://coursera.org/share/1d7d99e754e42c576a3d876909da349a",
    thumbnail: "/exp3.svg",
  },
  {
    id: 3,
    title: "React Basics Course",
    organisation: "Meta | Coursera",
    des: [
      "Worked with reusable components to render views where data changes over time.",
      "Utilized props to pass data between components, creating dynamic and interactive web pages and apps.",
      "Implemented forms to allow users to interact with the app and built a complete application in React.",
    ],
    link: "https://coursera.org/share/8e0fd3c69d46c878e12b05095c589c56",
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "JavaScript Algorithms & Data Structures Course",
    organisation: "freeCodeCamp",
    des: [
      "Learned fundamental programming concepts in JavaScript, including variables, loops, functions, arrays, objects, and linked lists, gaining skills to manipulate and organize data effectively.",
      "Developed algorithmic thinking by studying common algorithms such as sorting and searching.",
      "Completed coding challenges to strengthen problem-solving abilities.",
    ],
    link: "https://freecodecamp.org/certification/HainerStefan/javascript-algorithms-and-data-structures-v8",
    thumbnail: "/exp1.svg",
  },
  {
    id: 5,
    title: "Responsive Web Design",
    organisation: "freeCodeCamp",
    des: [
      "Learned the fundamentals of HTML and CSS to structure and style web pages.",
      "Built responsive layouts using CSS Flexbox and Grid to ensure designs adapt to different screen sizes.",
      "Applied accessibility principles and built responsive projects, like portfolios and landing pages, developing a solid foundation in user-friendly, adaptable web design.",
    ],
    link: "https://freecodecamp.org/certification/HainerStefan/responsive-web-design",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
