import CarRental from "@/assets/project/CarRental.jpg";
import Dashboard from "@/assets/project/Dashboard.jpg";
import LinkTree from "@/assets/project/LinkTree.jpg";
import Mooc from "@/assets/project/MOOC.jpg";
import Todo from "@/assets/project/TodoList.jpg";
import Movie from "@/assets/project/Movie.jpg";
import Porto from "@/assets/project/Portofolio.jpg";
import SKILLHEALTH from "@/assets/project/skillhealth.png";
import Meraih from "@/assets/project/Meraih.png";
import Koperasi from "@/assets/project/Koperasi.jpg";
import Semiotika from "@/assets/project/Semiotika.png";
import REACT from "../assets/skill/reactjs.svg";
import FLUTTER from "../assets/skill/flutter.svg";
import RIVERPOD from "../assets/skill/riverpod.png";
import TAILWINDS from "../assets/skill/tailwind.svg";
import REDUX from "../assets/skill/redux.svg";
import EXPRESS from "../assets/skill/express.svg";
import VUE from "../assets/skill/vue-js.svg";
import HTML from "../assets/skill/html.svg";
import JS from "../assets/skill/js.svg";
import NEXT from "../assets/skill/next-js.svg";
export const Projects = [
  {
    id: 1,
    image: LinkTree,
    tittle: "LinkTree",
    describe:
      "Building a website aims to provide users with an easy way to find and access my social media accounts.",
    tool: [
      {
        id: 1,
        image: REACT,
      },
      {
        id: 2,
        image: TAILWINDS,
      },
    ],
    pathGit: "https://github.com/ArwinMarinta/link-tree",
    pathApp: "https://link-tree.arwinmarinta.com",
  },
  {
    id: 2,
    image: CarRental,
    tittle: "Card Rental",
    describe:
      "Building a responsive website in promoting car rentals to make it easier for users to find car rentals in their area.",
    tool: [
      {
        id: 1,
        image: HTML,
      },
      {
        id: 2,
        image: JS,
      },
      {
        id: 3,
        image: TAILWINDS,
      },
    ],
    pathGit: "https://github.com/ArwinMarinta/Car-Rental",
    pathApp: "https://car-rental.arwinmarinta.com",
  },
  {
    id: 3,
    image: Todo,
    tittle: "TodoList",
    describe:
      "Building a website that makes it easy for users to record tasks they want to do and have done",
    tool: [
      {
        id: 1,
        image: REACT,
      },
      {
        id: 2,
        image: TAILWINDS,
      },
    ],
    pathGit: "https://github.com/ArwinMarinta/Todo-List",
    pathApp: "https://todo.arwinmarinta.com",
  },
  {
    id: 4,
    image: Movie,
    tittle: "Web Movie",
    describe:
      "Building a movie application where users can view the latest movies, movie details, and movie trailers",
    tool: [
      {
        id: 1,
        image: REACT,
      },
      {
        id: 2,
        image: TAILWINDS,
      },
      {
        id: 3,
        image: REDUX,
      },
    ],
    pathGit: "https://github.com/ArwinMarinta/ch6-movie-useRedux",
    pathApp: "https://web-movie.arwinmarinta.com",
  },
  {
    id: 5,
    image: Mooc,
    tittle: "Masive Online Open Course",
    describe:
      "Building MOOC applications in the form of videos that can be accessed at any time and can be used on various devices",
    tool: [
      {
        id: 1,
        image: REACT,
      },
      {
        id: 2,
        image: TAILWINDS,
      },
      {
        id: 3,
        image: REDUX,
      },
    ],
    pathGit: "https://github.com/ArwinMarinta/Front-End-iLearnTech",
    pathApp: "https://ilearn-tech.arwinmarinta.com",
  },
  {
    id: 6,
    image: Dashboard,
    tittle: "Dashboard MOOC",
    describe:
      "Building an admin dashboard from the mooc application in making it easier to manage data",
    tool: [
      {
        id: 1,
        image: REACT,
      },
      {
        id: 2,
        image: TAILWINDS,
      },
      {
        id: 3,
        image: REDUX,
      },
    ],
    pathGit: "https://github.com/ArwinMarinta/Dashboard-Admin-iLearnTech",
    pathApp: "https://ilearn-tech-admin.arwinmarinta.com",
  },
  {
    id: 7,
    image: Porto,
    tittle: "Portofolio",
    describe:
      "create a personal website that contains information about myself, my education, skills, and projects that I have worked on.",
    tool: [
      {
        id: 1,
        image: NEXT,
      },
      {
        id: 2,
        image: TAILWINDS,
      },
    ],
    pathGit: "https://github.com/ArwinMarinta/Portofolio-nextjs",
    pathApp: "https://portofolio.arwinmarinta.com",
  },
  {
    id: 8,
    image: Koperasi,
    tittle: "Koperasi",
    describe:
      "Building a web-based cooperative application in selling goods and entrusting goods. Members can also pay dues and withdraw contributions.",
    tool: [
      {
        id: 1,
        image: NEXT,
      },
      {
        id: 2,
        image: TAILWINDS,
      },
      {
        id: 3,
        image: REDUX,
      },
    ],
    pathGit: "https://github.com/orgs/Koperasi-ITK/repositories",
    pathApp: "",
  },
  {
    id: 9,
    image: Meraih,
    tittle: "Employee Attendance",
    describe:
      "Create a mobile application to record employee attendance in a company. In addition, employees can also apply for permits, sickness, and more.",
    tool: [
      {
        id: 1,
        image: FLUTTER,
      },
      {
        id: 2,
        image: RIVERPOD,
      },
    ],
    pathGit: "https://github.com/ippl-hr-application/frontend-mobile",
    pathApp: "",
  },
  {
    id: 10,
    image: Semiotika,
    tittle: "Semiotika",
    describe:
      "Create a website as a medium of information and for the list of seminars to be conducted.",
    tool: [
      {
        id: 1,
        image: VUE,
      },
      {
        id: 2,
        image: TAILWINDS,
      },
    ],
    pathGit: "https://github.com/ArwinMarinta/semiotika-clone",
    pathApp: "https://semiotikaclone.arwinmarinta.com",
  },
  {
    id: 11,
    image: SKILLHEALTH,
    tittle: "Skilhealth",
    describe: "This website is still under development",
    tool: [
      {
        id: 1,
        image: VUE,
      },
      {
        id: 2,
        image: TAILWINDS,
      },
    ],
    pathGit: "https://github.com/ArwinMarinta/fe-skillhealt",
    pathApp: "https://semiotikaclone.arwinmarinta.com",
  },
];
