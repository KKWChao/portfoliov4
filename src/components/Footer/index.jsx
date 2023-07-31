import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <footer className="absolute text-white bottom-0 w-full text-center h-20 left-0">
      <div className="flex justify-center align-middle gap-10 items-center">
        <a
          href="https://github.com/KKWChao/"
          target="_blank"
          rel="noreferrer"
          className="p-2"
        >
          <GitHubIcon className="scale-150" />
        </a>
        <img
          src="/assets/images/009-astronaut-8-alt.png"
          alt="KelvinChaoImg"
          className="w-12"
        />

        <a
          href="https://www.linkedin.com/in/kelvinkchao/"
          target="_blank"
          rel="noreferrer"
          className="p-2"
        >
          <LinkedInIcon className="scale-150" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
