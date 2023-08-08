import { motion } from "framer-motion";
import Section from "@/components/Reusable/Section";

const skillList = {
  frontEndSkills: [
    "HTML/CSS",
    "Javascript",
    "Typescript",
    "React",
    "NextJS",
    "Three.js",
    "MUI",
    "TailwindCss",
    "SASS",
  ],
  backEndSkills: [
    "MongoDB",
    "MySQL / PostGreSQL",
    "Python",
    "Django",
    "Express",
    "Mongoose",
    "Node.js",
    "GraphQL",
  ],
};

function Skills() {
  return (
    <Section id="skills" className="">
      <h1 className="text-5xl py-10 title">Skills</h1>
      <div className="flex justify-center m-4">
        <div className="grid grid-cols-2 md:gap-10 gap-1  bg-black bg-opacity-70 rounded-lg p-2">
          <h2 className="md:text-4xl text-2xl font-semibold">FrontEnd</h2>
          <h2 className="md:text-4xl text-2xl font-semibold">Backend</h2>
          <div>
            {skillList.frontEndSkills.map((item, idx) => (
              <motion.p
                key={`frontend_${item}_${idx}`}
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: idx, type: "spring" }}
                className="text-2xl p-1"
              >
                {item}
              </motion.p>
            ))}
          </div>
          <div>
            {skillList.backEndSkills.map((item, idx) => (
              <motion.p
                key={`backend_${item}_${idx}`}
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: idx, type: "spring" }}
                className="text-2xl p-1 "
              >
                {item}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
      {/* <div className="md:mt-20">
        <h2 className="text-3xl font-semibold p-2">Tools</h2>
        <div className="flex justify-center md:gap-10 gap-0 md:flex-row flex-col">
          {skillList.tools.map((item, idx) => (
            <motion.p
              key={`${item}_${idx}_tools`}
              initial={{ y: 200, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, type: "spring" }}
            >
              {item}
            </motion.p>
          ))}
        </div>
      </div> */}
    </Section>
  );
}

export default Skills;
