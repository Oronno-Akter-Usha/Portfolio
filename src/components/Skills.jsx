import skills from "./data/skills.json";

const Skills = () => {
  return (
    <section id="skills">
      <div className="container py-5 md:py-14 mx-auto px-6 md:px-12">
        <h2 className="text-2xl font-bold text-center text-white mb-10">
          SKILLS
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 justify-items-center">
          {skills.map((data) => (
            <div
              className="item group relative flex justify-center items-center bg-gray-700 rounded-lg p-6 transition-all duration-300 hover:bg-gray-800 hover:shadow-xl hover:scale-105 w-full"
              key={data.title}
              data-aos="flip-left"
              data-aos-duration="1000"
            >
              {/* Skill Icon */}
              <div className="w-full flex justify-center items-center">
                <img
                  src={`../assets/skills/${data.imageSrc}`}
                  alt={data.title}
                  className="w-16 h-16 object-contain transition-all duration-300 group-hover:scale-110"
                />
              </div>

              {/* Skill Title */}
              <h3 className="absolute text-white opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-y-0 translate-y-4 text-lg font-semibold bg-black bg-opacity-50 p-2 rounded-md">
                {data.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
