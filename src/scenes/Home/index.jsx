import Section from "../../components/Reusable/Section";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";

function Home() {
  return (
    <Section id="home" className="">
      <div className="relative h-screen flex flex-col justify-center">
        <h1 className="title md:text-6xl text-3xl">
          Hi, My name is Kelvin Chao
        </h1>
        <h1 className="title text-xl pt-10">Full Stack Engineer</h1>
        <div className="absolute bottom-0 w-full">
          <h3 className="flex flex-col items-center">
            Scroll Down for More Info!
            <ArrowCircleDownIcon
              className="drop-shadow-lg p-1 scale-150 animate-bounce"
              fontSize="large"
            />
          </h3>
        </div>
      </div>
    </Section>
  );
}

export default Home;
