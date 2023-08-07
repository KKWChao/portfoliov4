import React from "react";
import Section from "../../components/Reusable/Section";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useAtom } from "jotai";
import {
  currentProjectAtom,
  projects,
} from "../../components/Fiber/scenes/projectScene";
function Projects() {
  const [currentProjeect, setCurrentProject] = useAtom(currentProjectAtom);

  function nextProject() {
    setCurrentProject((currentProjeect + 1) % projects.length);
  }

  function previousProject() {
    setCurrentProject((currentProjeect - 1) % projects.length);
  }

  return (
    <section className="h-screen text-white flex flex-col justify-around text-center">
      <h1 className="text-5xl mb-[15%]">Projects</h1>
      <div className="flex justify-center gap-32">
        <button className="text-xl p-2" onClick={previousProject}>
          <ArrowBackIosIcon fontSize="large" />
          Prev
        </button>

        <button className="text-xl p-2" onClick={nextProject}>
          Next
          <ArrowForwardIosIcon fontSize="large" />
        </button>
      </div>
    </section>
  );
}

export default Projects;

/* UNUSED */

// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectCoverflow, Autoplay, Pagination } from "swiper";
// import PropTypes from "prop-types";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LaunchIcon from "@mui/icons-material/Launch";

// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/autoplay";
// import "swiper/css/pagination";
// import "swiper/css/effect-fade";
// import Section from "../../components/Reusable/Section";

// const projects = [
//   {
//     id: 0,
//     imageSrc: "./assets/images/ProjectImage1.png",
//     projectName: "Cyberwares Storepage",
//     projectDescription:
//       "Cyberwares is a sleek e-commerce platform offering cutting-edge tech products. Powered by Next.js, it delivers a seamless shopping experience with responsive design. Secure payments are facilitated by Stripe integration. The admin site, built with Next.js, NextAuth, Tailwind CSS, and Chart.js, enables efficient product and category management. Explore and purchase the latest tech innovations with Cyberwares.",
//     githubLink: "https://github.com/KKWChao/CyberwaresFrontend",
//     projectLink: "https://cyberwares-frontend.vercel.app/",
//     technologies: ["NextJS", "MongoDB", "Node.js", "Stripe"],
//   },
//   {
//     id: 1,
//     imageSrc: "./assets/images/ProjectImage2.png",
//     projectName: "Cyberwares Admin",
//     projectDescription:
//       "Explore Cyberwares Admin, a web application designed for product management and administration. This site serves as the back-end administration panel for the Cyberwares e-commerce store. It provides a user-friendly interface to manage product inventory, categories, and other essential information. Experience efficient product management and seamless integration with the Cyberwares e-commerce platform.",
//     githubLink: "https://github.com/KKWChao/CyberwaresAdmin",
//     projectLink: "https://cyberwares-admin.vercel.app/",
//     technologies: [
//       "NextJS",
//       "Next Auth",
//       "MongoDB",
//       "TailwindCSS",
//       "Google Cloud API",
//     ],
//   },
//   {
//     id: 2,
//     imageSrc: "./assets/images/ProjectImage4.png",
//     projectName: "Youtube Clone",
//     projectDescription:
//       "Experience the YouTube Clone, a dynamic web application developed with React, JavaScript, and Material-UI (MUI). Explore a vast library of videos, search for your favorite content, and enjoy an immersive viewing experience. This clone emulates the popular video-sharing platform, providing a seamless interface for discovering and watching videos.",
//     githubLink: "https://github.com/KKWChao/YoutubeClone",
//     projectLink:
//       "https://632a22c204beb617c6d1078a--meek-marzipan-6344b2.netlify.app/",
//     technologies: ["React", "MUI", "API"],
//   },

//   {
//     id: 3,
//     imageSrc: "./assets/images/ProjectImage3.png",
//     projectName: "EvoGym",
//     projectDescription:
//       "Discover EvoGym Demo, a sleek and interactive fitness website that showcases the features and capabilities of EvoGym. Explore various workout routines, browse fitness classes, and learn about personalized training programs. With its modern design and user-friendly interface, EvoGym Demo offers an immersive experience for fitness enthusiasts looking to achieve their health and wellness goals.",
//     projectLink: "https://evogym-demo.pages.dev/",
//     githubLink: "https://github.com/KKWChao/DemoSite",
//     technologies: ["React", "TypeScript", "TailwindCSS"],
//   },
//   {
//     id: 4,
//     imageSrc: "./assets/images/ProjectImage5.png",
//     projectName: "Sociopedia",
//     projectDescription:
//       "A social media site to show the world your personality. ",
//     projectLink: "",
//     githubLink: "https://github.com/KKWChao/FullstackSite",
//     technologies: ["MongoDB", "React", "Node.js", "MUI"],
//   },
// ];

// function Projects() {
//   const Card = ({
//     imageSrc,
//     projectName,
//     projectLink,
//     projectDescription,
//     githubLink,
//     technologies,
//   }) => {
//     return (
//       <div className="rounded-lg text-white border-4 border-white md:m-20 m-2 px-2 flex flex-col justify-center items-center bg-black">
//         <h1 className="py-5 md:text-3xl">{projectName}</h1>
//         <div className="w-full md:w-3/4 ">
//           <img src={imageSrc} alt={projectName} className="rounded-md" />
//         </div>

//         <div className="flex flex-col justify-center items-center w-full md:w-3/4 ">
//           <div className="">
//             <p className="py-2 lg:text-xl lg:w-1/2 text-sm">
//               {projectDescription}
//             </p>
//             <h1>Technologies</h1>
//             <div className="flex justify-center pt-1 text-sm gap-3">
//               {technologies.map((tech) => (
//                 <p key={`${tech}`}>{tech}</p>
//               ))}
//             </div>
//           </div>

//           <div className="flex justify-around w-full md:my-5 align-middle">
//             <a
//               href={githubLink}
//               className="hover:bg-gray-500 px-2 py-1 rounded-md"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <GitHubIcon fontSize="large" />
//             </a>

//             <a
//               href={projectLink}
//               className="hover:bg-gray-500 px-2 py-1 rounded-md"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <LaunchIcon fontSize="large" />
//             </a>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   Card.propTypes = {
//     imageSrc: PropTypes.string,
//     projectName: PropTypes.string,
//     projectLink: PropTypes.string,
//     projectDescription: PropTypes.string,
//     githubLink: PropTypes.string,
//     technologies: PropTypes.array,
//   };

//   return (
//     <Section id="projects">
//       <h1 className="text-5xl pt-5 title">Projects</h1>

//       <Swiper
//         grabCursor={true}
//         centeredSlides={true}
//         effect={"coverflow"}
//         coverflowEffect={{
//           rotate: 30,
//           stretch: 0,
//           depth: 100,
//           modifier: 2,
//           slideShadows: true,
//         }}
//         autoplay={{
//           disableOnInteraction: true,
//         }}
//         pagination={true}
//         speed={2000}
//         resizeObserver={true}
//         loop={true}
//         modules={[EffectCoverflow, Autoplay, Pagination]}
//         className="md:w-1/2"
//       >
//         {projects.map((item) => (
//           <SwiperSlide key={`${item.projectName}_${item.id}`} className="">
//             <Card
//               imageSrc={item.imageSrc}
//               projectName={item.projectName}
//               projectDescription={item.projectDescription}
//               projectLink={item.projectLink}
//               githubLink={item.githubLink}
//               technologies={item.technologies}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       <p className="text-sm mt-3">Swipe or drag the items...</p>
//     </Section>
//   );
// }

// export default Projects;
