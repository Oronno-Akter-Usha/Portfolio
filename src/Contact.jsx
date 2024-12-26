import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container py-5 md:py-14 mx-auto px-6 md:px-12">
        <h2 className="text-2xl font-bold text-center text-white mb-10">
          CONTACT ME
        </h2>
        <div
          className="flex justify-center space-x-6 mt-8"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a
            href="https://www.facebook.com/OronnoUsha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-all duration-300 text-4xl"
            title="Facebook"
          >
            <CiFacebook />
          </a>
          <a
            href="https://www.linkedin.com/in/oronno-akter-usha/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-all duration-300 text-4xl"
            title="LinkedIn"
          >
            <CiLinkedin />
          </a>

          <a
            href="https://github.com/Oronno-Akter-Usha"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-600 transition-all duration-300 text-4xl"
            title="GitHub"
          >
            <FaGithubSquare />
          </a>
          <a
            href="mailto:ushaoronno1@gmail.com"
            className="text-red-500 hover:text-red-700 transition-all duration-300 text-4xl"
            title="Gmail"
          >
            <SiGmail />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
