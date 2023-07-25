function Section({ children }) {
  return (
    <section className="text-white text-center overflow-hidden flex justify-center align-middle flex-col h-screen w-screen">
      {children}
    </section>
  );
}

export default Section;
