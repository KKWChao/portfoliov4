import { motion } from "framer-motion";
import Section from "../../components/Reusable/Section";

function About() {
  return (
    <Section id="about" className="">
      <div className="overflow-hidden mx-auto">
        <motion.h1
          className="text-5xl title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          About Me
        </motion.h1>
        <motion.div
          className="w-full flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 3 }}
        >
          <p className="lg:text-2xl lg:w-1/2 text-sm md:px-10 px-2 md:text-2xl md:w-3/4 mt-10">
            I am an experienced web developer with a strong background in
            building websites and projects. With a focus on JavaScript,
            HTML/CSS, and Bootstrap, I am dedicated to creating exceptional user
            experiences that captivate visitors and drive tangible business
            outcomes. I possess a deep understanding of JavaScript, allowing me
            to develop elegant and scalable front-end solutions using modern
            frameworks such as React and Vue.js. <br />
            <br />
            In my previous work, I have seamlessly integrated front-end
            frameworks with back-end technologies like Express.js and MongoDB,
            enabling me to create robust web applications. I am well-versed in
            developing RESTful APIs that power complex systems. Additionally, I
            have a solid foundation in Statistics and Data Analysis, leveraging
            tools like Python, R, and Django to gain insights from data. My
            proficiency extends to working with databases such as MySQL,
            PostGreSQL, and MongoDB.
            <br />
            <br />
            As a web developer, I am committed to staying abreast of emerging
            web technologies and industry best practices. I am constantly
            seeking opportunities to enhance my skill set and deliver
            cutting-edge solutions. If you are seeking a talented and dedicated
            web developer to bring your vision to life, I would be delighted to
            connect with you. I am eager to learn more about your project and
            discuss how I can contribute to its success.
            <br />
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

export default About;
