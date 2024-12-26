import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import profile from "/profile.jfif";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about">
      <div className="container py-5 md:py-14 mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-5">
        {/* Image*/}
        <div className="md:w-1/2 flex justify-center" data-aos="fade-right">
          <img
            src={profile}
            alt="Oronno Akter Usha"
            className="rounded-full w-56 h-56 md:w-[350px] md:h-[350px] object-cover shadow-lg"
          />
        </div>
        {/* Text */}
        <div
          className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
          data-aos="fade-left"
        >
          <h1 className="text-3xl font-bold ">Oronno Akter Usha</h1>
          <h3 className="text-xl font-medium mb-4">Frontnd Developer</h3>
          <p>
            Hi, I’m Oronno Akter Usha, a passionate Frontend Developer. I am
            proficient in HTML, CSS, and JavaScript, with a particular focus on
            React.js and Tailwind CSS. I also have practical experience with
            Node.js, Express.js, MongoDB, and Firebase. I am always eager to
            learn and grow in the tech world through courses, personal projects,
            and continuous research. I’m excited to take on challenges, expand
            my skills, and contribute to the success of any team or organization
            I work with.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
