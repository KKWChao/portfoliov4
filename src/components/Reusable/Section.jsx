import { AnimatePresence, motion } from "framer-motion";

function Section({ children }) {
  return (
    <AnimatePresence>
      <motion.section
        className="text-white text-center overflow-hidden flex justify-center align-middle flex-col h-screen w-screen"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          ease: "linear",
          duration: 1.5,
        }}
        key={{}}
      >
        {children}
      </motion.section>
    </AnimatePresence>
  );
}

export default Section;
