function Menu(props) {
  const { onSectionChange, menuOpen, setMenuOpen } = props;

  return (
    <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="w-10 h-10 bg-white z-10 top-10 right-10 absolute"
      ></button>
    </>
  );
}

export default Menu;
