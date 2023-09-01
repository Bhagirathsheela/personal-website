export function scrollIntoViews(selectorQuery) {
    //console.log(selectorQuery);
    
  const _elm = document.querySelector(selectorQuery);
  if (_elm) {
    _elm.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }
}

export const educationInfo = [
  {
    uniqueStateClass: "graduation",
    period: "2013 - 2017",
    title: "Graduation in Computer Science & Engineering From NITK, Surathkal",
    expandedInfo: {
      title: "Projects",
      pointsList: [
        "Trip Story Blog to share awesome trip experience",
        "Face detection using neural Network",
        "Web Crawler using threads count",
      ],
    },
  },
  {
    period: "2010 - 2011",
    uniqueStateClass: "higherSecondary",
    title: "Higher Secondary School from Shri Shyam Sr. Sec.School Bhadra",
    expandedInfo: {
      title: "Competitions",
      pointsList: [
        "IIT-JEE Examination",
        "ICAR(Indian Council of Agricultural Research) Examination",
        "RPET(Rajasthan Pre-Engineering Test) Examination",
      ],
    },
  },
  {
    period: "2009 - 2010",
    uniqueStateClass: "highSchool",
    title: "High School from Shri Shyam Sr. Sec.School Bhadra",
    expandedInfo: {
      title: "Seminars",
      pointsList: [
        "How to uplift level of education in rural areas?",
        "Women's empowerment",
        "Why everyone should plant a tree in a year",
      ],
    },
  },
];

export const projectsInfo = [
  {
    language: "ReactJS",
    title: "Balaji Consultancy",
    intro:
      "Designed and launched a dynamic website to serve the needs of consultancy service providers, based in Hisar, Haryana.",
    linkBtnTxt: "Know More",
    link: "https://www.balajiconsultancy13333.com/",
  },
  {
    language: "JavaScript",
    title: "Indore Cares",
    intro:
      "Crafted an impactful website dedicated to frontline workers, facilitating their requests for essential face shields as a defense against COVID-19 exposure.",
    linkBtnTxt: "Indore Cares",
    link: "",
  },
  {
    language: "React Native",
    title: "TicTacToe",
    intro:
      "Developed a foundational tic-tac-toe game using React Native, providing a hands-on learning experience with this technology.",
    linkBtnTxt: "TicTacToe",
    link: "https://play.google.com/store/apps/details?id=com.TicTocToe.myapp&pcampaignid=web_share",
  },
  {
    language: "Android, Java",
    title: "Knowledge Stuff",
    intro:
      "Designed and developed a fundamental Android application for sharing inspirational stories, jokes, and educational content, fostering a platform for engaging and informative experiences",
    linkBtnTxt: "Knowledge Stuff",
    link: "",
  },
  {
    language: "Android, Java",
    title: "Opin Network",
    intro:
      "Collaboratively designed and developed an Android app alongside friends, providing a platform to generate, submit, and interact with polls. This app also facilitates connections among individuals who share similar interests, reflecting our joint efforts.",
    linkBtnTxt: "Opin Network",
    link: "",
  },
];