import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination } from "swiper";
import PropTypes from "prop-types";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const projects = [
  {
    id: 0,
    imageSrc: "./images/Project3.png",
    projectName: "Cyberwares",
    projectDescription:
      "Cyberwares is a sleek e-commerce platform offering cutting-edge tech products. Powered by Next.js, it delivers a seamless shopping experience with responsive design. Secure payments are facilitated by Stripe integration. The admin site, built with Next.js, NextAuth, Tailwind CSS, and Chart.js, enables efficient product and category management. Explore and purchase the latest tech innovations with Cyberwares.",
    projectLink: "https://github.com/KKWChao/CyberwaresFrontend",
    githubLink: "https://cyberwares-frontend.vercel.app/",
  },
  {
    id: 1,
    imageSrc: "./images/Project2.png",
    projectName: "Youtube Clone",
    projectDescription:
      "Experience the YouTube Clone, a dynamic web application developed with React, JavaScript, and Material-UI (MUI). Explore a vast library of videos, search for your favorite content, and enjoy an immersive viewing experience. This clone emulates the popular video-sharing platform, providing a seamless interface for discovering and watching videos.",
    projectLink: "https://github.com/KKWChao/YoutubeClone",
    githubLink:
      "https://632a22c204beb617c6d1078a--meek-marzipan-6344b2.netlify.app/",
  },

  {
    id: 2,
    imageSrc: "./images/Project1.png",
    projectName: "EvoGym",
    projectDescription:
      "Discover EvoGym Demo, a sleek and interactive fitness website that showcases the features and capabilities of EvoGym. Explore various workout routines, browse fitness classes, and learn about personalized training programs. With its modern design and user-friendly interface, EvoGym Demo offers an immersive experience for fitness enthusiasts looking to achieve their health and wellness goals.",
    projectLink: "https://evogym-demo.pages.dev/",
    githubLink: "https://github.com/KKWChao/DemoSite",
  },
  // {
  //   id: 3,
  //   imageSrc: "./images/Project4.png",
  //   projectName: "Sociopedia",
  //   projectDescription:
  //     "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis corporis ab itaque tempora accusamus quas excepturi? Facere ex alias autem corrupti exercitationem, repellat fuga placeat qui labore, eos laboriosam magnam?",
  //   projectLink: "",
  //   githubLink: "#",
  // },
];

function Projects() {
  const Card = ({
    imageSrc,
    projectName,
    projectLink,
    projectDescription,
    githubLink,
  }) => {
    return (
      <div className="overflow-hidden rounded-lg text-white bg-transparent border-4 border-white md:m-20 m-2 p-4 flex flex-col justify-center items-center bg-black">
        <h1 className="py-5 md:text-3xl">{projectName}</h1>
        <img src={imageSrc} alt={projectName} className="" />
        <div className="flex flex-col justify-center items-center">
          <div className=" p-4">
            <p className="py-2 lg:text-xl lg:w-1/2 text-sm">
              {projectDescription}
            </p>
          </div>

          <div className="flex justify-center gap-10 md:mt-5 align-middle">
            <a
              href={projectLink}
              className="hover:bg-gray-500 px-2 py-1 rounded-md"
              target="_blank"
              rel="noreferrer"
            >
              <LaunchIcon fontSize="large" />
            </a>
            <a
              href={githubLink}
              className="hover:bg-gray-500 px-2 py-1 rounded-md"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon fontSize="large" />
            </a>
          </div>
        </div>
      </div>
    );
  };

  Card.propTypes = {
    imageSrc: PropTypes.string,
    projectName: PropTypes.string,
    projectLink: PropTypes.string,
    projectDescription: PropTypes.string,
    githubLink: PropTypes.string,
  };

  return (
    <section
      id="projects"
      className="absolute text-white top-[250vh] w-full text-center overflow-hidden"
    >
      <h1 className="text-5xl pt-10 title">Projects</h1>

      <Swiper
        grabCursor={true}
        centeredSlides={true}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        autoplay={{
          disableOnInteraction: true,
        }}
        pagination={true}
        speed={2000}
        resizeObserver={true}
        loop={true}
        modules={[EffectCoverflow, Autoplay, Pagination]}
        className="md:mt-0 md:w-1/2"
      >
        {projects.map((item) => (
          <SwiperSlide key={`${item.projectName}_${item.id}`} className="">
            <Card
              imageSrc={item.imageSrc}
              projectName={item.projectName}
              projectDescription={item.projectDescription}
              projectLink={item.projectLink}
              githubLink={item.githubLink}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <p className="text-sm mt-5">Swipe or drag the items...</p>
    </section>
  );
}

export default Projects;
