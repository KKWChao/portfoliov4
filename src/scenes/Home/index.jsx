import { motion } from "framer-motion";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

function Home() {
  return (
    <section
      id="home"
      className="absolute text-white w-full text-center overflow-hidden top-0 flex justify-center align-middle flex-col"
    >
      <div className="text-center md:mt-[25%] mt-[70%]">
        <h1 className="title md:text-7xl text-3xl">
          Hi, My name is Kelvin Chao
        </h1>
        <h1 className="title pt-8 text-xl">Web Developer</h1>
      </div>
      <h3 className="absolute bottom-14 w-full">Scroll Down for More Info!</h3>
      <motion.div
        className="text-center md:mt-[15%] mt-[90%]"
        initial={{ opacity: 1, y: -20 }}
        animate={{ opacity: 0, y: 10 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatDelay: 0.5,
        }}
      >
        <ArrowCircleDownIcon className="drop-shadow-lg" fontSize="large" />
      </motion.div>
    </section>
  );
}

export default Home;
