import { motion } from "framer-motion";
import Section from "../../components/Reusable/Section";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

function Home() {
  return (
    <Section id="home" className="">
      <div className="">
        <h1 className="title md:text-7xl text-3xl">
          Hi, My name is Kelvin Chao
        </h1>
        <h1 className="title text-xl">Web Developer</h1>
      </div>
      {/* <div className="absolute bottom-10 flex justify-center w-screen flex-col gap-10">
        <h3 className="">Scroll Down for More Info!</h3>

        <motion.div
          className=""
          initial={{ opacity: 1, y: -20 }}
          animate={{ opacity: 0, y: 10 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 1,
          }}
        >
          <ArrowCircleDownIcon
            className="drop-shadow-lg p-1"
            fontSize="large"
          />
        </motion.div>
      </div> */}
    </Section>
  );
}

export default Home;
