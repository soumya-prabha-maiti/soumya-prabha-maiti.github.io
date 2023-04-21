const projectList=[
    {
        "title":"Flask Blog App",
        "image":"",
        "description":"A simple blog application created using Flask,HTML,CSS and SQLite. The application allows users to create, read, update and delete posts. It also has a user authentication system.",        
        "code":"#",
        "demo":"#",
        "tags":[]
    },
    {
        "title":"Flask Weather App",
        "image":"",
        "description":"A simple weather application created using Flask,HTML,CSS and OpenWeatherMap API. The application allows users to search for weather information of any city in the world.",        
        "code":"#",
        "demo":"#",
        "tags":[]
    },
    {
        "title":"Cotton Disease Detection APP",
        "image":"",
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
        <div className="text-center shadow-lg p-10 rounded-xl my-10 mx-auto max-w-3xl">
            <h3 className="text-2xl my-2">
                {props.data.title}
            </h3>
            <p>
                {props.data.description}
            </p>
            <button className="rounded-lg m-3 p-3 border-2 border-emerald-400 hover:bg-emerald-400">
                <a href={props.data.code}>Code</a>
            </button>
            <button className="rounded-lg m-3 p-3 border-2 border-emerald-400 hover:bg-emerald-400">
                <a href={props.data.demo}>Demo</a>
            </button>
        </div>
    );
};
const Projects = () => {
    return (
        <section>
            <div>
            <h2 className="text-3xl py-1">Projects</h2>
            <div className="flex">
                {projectList.map((item)=>(<ProjectItem data={item} />))}   
            </div>
            </div>
        </section>
    );
};

export default Projects;