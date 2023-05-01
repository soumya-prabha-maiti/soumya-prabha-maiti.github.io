import { FaGithub } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";

const projectList=[
    {
        "title":"Flask Blog App",
        "image":"../images/projects/flaskBlog.jpg",
        "description":"A simple blog application created using Flask,HTML,CSS and SQLite. The application allows users to create, read, update and delete posts. It also has a user authentication system.",        
        "code":"#",
        "demo":"#",
        "tags":[]
    },
    {
        "title":"Flask Weather App",
        "image":"../images/projects/flaskWeather.jpg",
        "description":"A simple weather application created using Flask,HTML,CSS and OpenWeatherMap API. The application allows users to search for weather information of any city in the world.",        
        "code":"#",
        "demo":"#",
        "tags":[]
    },
    {
        "title":"Cotton Disease Detection App",
        "image":"../images/projects/cotton.jpg",
        "description":"Application to detect disease in cotton plant using CNN. Built using TensorFlow, Flask, HTML and CSS. The application allows users to upload an image of cotton leaf and detect the disease.",
        "code":"#",
        "demo":"#",
        "tags":[]
    },
    // template
    // {
    //     "title":"",
    //     "image":"",
    //     "description":"",        
    //     "code":"#",
    //     "demo":"#",
    //     "tags":[]
    // },
    
];

const ProjectItem = (props) => {
    return(
        <div className="relative max-w-md my-10 mx-auto overflow-hidden shadow-lg rounded-xl group ">
            <img src={props.data.image} className="transition-transform group-hover:scale-110 duration-200 " />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20 text-white">
                <div className="absolute inset-x-0 bottom-0 m-4">
                    <h3 className="text-2xl my-2">
                        {props.data.title}
                    </h3>
                    <p>
                        {props.data.description}
                    </p>
                    <button className="rounded-lg m-1 p-2 border-2 border-emerald-400 hover:bg-emerald-400">{/* TODO fix color*/}
                        <a href={props.data.code}><FaGithub className="h-5 w-5"/></a>
                    </button>
                    <button className="rounded-lg m-1 p-2 border-2 border-emerald-400 hover:bg-emerald-400">{/* TODO fix color*/}
                        <a href={props.data.demo}><BsGlobe2 className="h-5 w-5"/></a>
                    </button>
                </div>
            </div>
        </div>
    );
};
const Projects = () => {
    return (
        <section id="projects">
            <div>
                <h2 className="text-3xl py-1">Projects</h2>
                <div className="flex ">
                    {projectList.map((item)=>(<ProjectItem data={item} />))}   
                </div>
            </div>
        </section>
    );
};

export default Projects;