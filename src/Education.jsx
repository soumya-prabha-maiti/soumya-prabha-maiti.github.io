const educationList=[
    {
        "school":"Jadavpur University",
        "link":"https://jadavpuruniversity.in/",
        "degree":"Bachelor of Engineering",
        "field":"Electronics and Tele-Communication Engineering",
        "start":"2019",
        "end":"2023",
        "grade":"9.62 / 10",
        "description":""
    },
    {
        "school":"Nava Nalanda",
        "link":"https://navanalanda.org.in/",
        "degree":"Higher Secondary (WBCHSE)",
        "field":"Science (Physics, Chemistry, Mathematics and Computer Science)",
        "start":"2017",
        "end":"2019",
        "grade":"95 %",
        "description":""
    },
    {
        "school":"Nava Nalanda",
        "link":"https://navanalanda.org.in/",
        "degree":"Secondary (WBBSE)",
        "field":"Mathematics, Physcal Science, Life Science, English, Bengali, History, Geography",
        "start":"2006",
        "end":"2017",
        "grade":"95.29 %",
        "description":""
    }
    // template
    // {
    //     "school":"",
    //     "link":"",
    //     "degree":"",
    //     "field":"",
    //     "start":"",
    //     "end":"",
    //     "grade":"",
    //     "description":""
    // }
];

const EducationItem = (props) => {
    return(
        <div className="text-center shadow-lg p-10 rounded-xl my-10 mx-auto max-w-3xl">
            <h3 className="text-2xl my-2">
                {props.data.school}
            </h3>
            <p>
                {props.data.degree} - {props.data.field}
            </p>
            <p>
                {props.data.start} - {props.data.end}
            </p>
        </div>
    );
};
const Education = () => {
    return (
        <section>
            <div>
            <h2 className="text-3xl py-1">Education</h2>
            <div>
                {educationList.map((item)=>(<EducationItem data={item} />))}   
            </div>
            </div>
        </section>
    );
};

export default Education;