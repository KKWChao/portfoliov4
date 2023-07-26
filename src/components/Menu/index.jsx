import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
function Menu(props) {
  const { onSectionChange, menuOpen, setMenuOpen } = props;

  return (
    <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="w-10 h-10 bg-white z-10 top-10 right-10 absolute rounded opacity-90 transition-all duration-100"
      >
        {!menuOpen ? <MenuIcon /> : <CloseIcon />}
      </button>
      <div
        className={`absolute z-9 bg-gray-800 top-0 right-0 h-screen transition-all duration-100 ease-in-out ${
          menuOpen ? "w-80" : "w-0"
        }`}
      >
        <div className="flex flex-col mt-44 h-screen gap-12 text-white text-3xl">
          <button onClick={() => onSectionChange(0)}>Home</button>
          <button onClick={() => onSectionChange(1)}>About</button>
          <button onClick={() => onSectionChange(2)}>Projects</button>
          <button onClick={() => onSectionChange(3)}>Skills</button>
          <button onClick={() => onSectionChange(4)}>Contact Me</button>
        </div>
      </div>
    </>
  );
}

export default Menu;
