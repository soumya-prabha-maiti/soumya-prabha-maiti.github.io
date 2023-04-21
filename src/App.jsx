import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillMail,
} from "react-icons/ai";
import dp from "/dp.jpg";
import Education from "./Education.jsx";
import Projects from "./Projects.jsx";

function App() {
  return (
    <main className="px-10">
      <section>
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className="text-xl font-burtons">Soumya Prabha Maiti</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-blue-400 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <div className="text-center p-10 ">
          <h1 className="text-5xl py-4 text-teal-700 font-medium">
            Soumya Prabha Maiti
          </h1>
          <p className="text-lg py-4">
            Hello everyone! Welcome to my website. My name is Soumya and I am a
            final year undergraduate student of Electronics and
            Tele-Communication Engineering at Jadavpur University.
            {/* I love to code and have a strong interest in AI/ML and Image processing. */}
            {/* Here, you will find a collection of my work, achievements, and skills.  */}
          </p>
        </div>
        <div className="text-4xl flex gap-8 justify-center text-gray-700">
          <AiFillLinkedin />
          <AiFillTwitterCircle />
          <AiFillMail />
        </div>
        <div className="relative mx-auto bg-teal-500 rounded-full w-80 h-80 mt-10 overflow-hidden">
          <img src={dp} alt="" />
        </div>
      </section>

      <Education/>

      <Projects/>

      
    </main>
  );
}

export default App;
