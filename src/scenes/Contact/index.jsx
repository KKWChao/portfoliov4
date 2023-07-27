import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Section from "../../components/Reusable/Section";
import Footer from "../../components/Footer";

function Contact() {
  const formStyle = "md:w-1/3 p-5 rounded-md opacity-90 text-black w-full";
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <Section id="contact" className="">
      <h1 className="text-5xl py-10 title">Contact Me</h1>
      <motion.div className="px-2">
        <form
          className="flex flex-col items-center gap-10"
          target="_blank"
          onSubmit={onSubmit}
          // add my link from from submit
          action="https://formsubmit.co/b027a09c64d7703deb2e4956f8e6d717"
          method="POST"
        >
          {/* NAME INPUT */}
          <input
            type="text"
            className={`${formStyle}`}
            placeholder="NAME"
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
          />
          {errors.name && (
            <p className="text-red-300">
              {errors.name.type === "required" && "This field is required."}
              {errors.name.type === "maxLength" && "Max length is 100 char."}
            </p>
          )}
          {/* EMAIL INPUT */}
          <input
            className={`${formStyle}`}
            type="text"
            onSubmit={onSubmit}
            placeholder="EMAIL"
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />
          {errors.email && (
            <p className="text-red-300">
              {errors.email.type === "required" && "This field is required."}
              {errors.email.type === "pattern" && "Invalid email address."}
            </p>
          )}

          {/* MESSAGE INPUT */}
          <textarea
            className={`${formStyle}`}
            placeholder="MESSAGE"
            rows={4}
            onSubmit={onSubmit}
            cols={50}
            {...register("message", {
              required: true,
              maxLength: 2000,
            })}
          />
          {errors.message && (
            <p className="text-red-300">
              {errors.message.type === "required" && "This field is required."}
              {errors.message.type === "maxLength" &&
                "Max length is 2000 char."}
            </p>
          )}
          <button
            type="submit"
            className="button w-1/3 rounded-lg border-4 border-white border-opacity-80 
              py-3 text-xl font-bold transition duration-200 ease-in-out hover:bg-gray-300 active:bg-gray-400 hover:border-gray-300"
          >
            SUBMIT
          </button>
        </form>
        <Footer />
      </motion.div>
    </Section>
  );
}

export default Contact;
