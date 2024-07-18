import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "../data";
export default function About() {
  return (
    <section id="skills">
      <div className="conatiner px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I am proficient in full-stack web development, specializing in
            Node.js and React. I excel in building responsive, user-friendly
            interfaces with React and creating robust APIs with Node.js and
            Express.js. My skills include database management with MongoDB,
            version control using Git, and deployment on cloud platforms. I am
            dedicated to delivering efficient solutions through clean code and
            effective problem-solving.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
