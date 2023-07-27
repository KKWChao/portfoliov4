import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Menu(props) {
  const { onSectionChange, menuOpen, setMenuOpen } = props;

  return (
    <>
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="w-10 h-10 bg-white z-10 top-10 right-10 absolute rounded opacity-90 transition-all transform duration-200 hover:bg-blue-200"
      >
        {!menuOpen ? <MenuIcon /> : <CloseIcon />}
      </button>
      <div
        className={`absolute z-9 bg-gray-800 top-0 right-0 h-screen transition-all duration-100 ease-in-out ${
          menuOpen ? "w-96" : "w-0"
        }`}
      >
        <div className="flex flex-col mt-44 h-screen gap-12 text-white text-3xl">
          <button
            className="hover:bg-blue-400 transition-all duration-150 p-2"
            onClick={() => onSectionChange(0)}
          >
            Home
          </button>
          <button
            className="hover:bg-blue-400 transition-all duration-150 p-2"
            onClick={() => onSectionChange(1)}
          >
            About
          </button>
          <button
            className="hover:bg-blue-400 transition-all duration-150 p-2"
            onClick={() => onSectionChange(2)}
          >
            Projects
          </button>
          <button
            className="hover:bg-blue-400 transition-all duration-150 p-2"
            onClick={() => onSectionChange(3)}
          >
            Skills
          </button>
          <button
            className="hover:bg-blue-400 transition-all duration-150 p-2"
            onClick={() => onSectionChange(4)}
          >
            Contact Me
          </button>

          <div
            className={`flex justify-center gap-10 bottom-5 absolute w-full ${
              menuOpen ? "visible" : "hidden"
            }`}
          >
            <a
              href="https://github.com/KKWChao/"
              target="_blank"
              rel="noreferrer"
              className="rounded hover:bg-blue-400 transition-all ease-in-out duration-150"
            >
              <GitHubIcon className="m-4 scale-150 " />
            </a>
            <img
              src="./images/009-astronaut-8-alt.png"
              alt="KelvinChaoImg"
              className="w-14"
            />

            <a
              href="https://www.linkedin.com/in/kelvinkchao/"
              target="_blank"
              rel="noreferrer"
              className="rounded hover:bg-blue-400 transition-all ease-in-out duration-150"
            >
              <LinkedInIcon className="m-4 scale-150" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
