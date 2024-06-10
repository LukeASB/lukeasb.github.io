import IEntry from "../shared/interfaces/IEntry";
import Entry from "./entry";

const entries: IEntry[] = [
    { 
        title: "Keele University – BSc Computer Science (2:1)", 
        date: "Jun 2015 – Jun 2018",
        description: (
            <>
                <p>Grade: 2:1</p>
                <p>The scope of modules I studied whilst completing my degree:</p>
                <ul>
                    <li>Cybercrime</li>
                    <li>Programming, Programming II and Advanced Programming Practices (Java)</li>
                    <li>Information Systems, Advanced Information Systems</li>
                    <li>Computational Intelligence, Computational Intelligence II</li>
                    <li>Machine Learning</li>
                    <li>Website Technologies (HTML, CSS, JavaScript, PHP)</li>
                    <li>Software Engineering Project Management</li>
                    <li>System Lifecycles & Design</li>
                    <li>IT Architectures</li>
                    <li>Database Systems (SQL)</li>
                    <li>Communication & Networks</li>
                    <li>Bioinformatics</li>
                    <li>Computer Animation & Multimedia</li>
                </ul>
            </>
        ) },
    { 
        title: "Newcastle-Under-Lyme College – BTEC Level 3 in Computing (D*D*D*)",
        date: "Nov 2013-Jun 2015",
        description: (
            <>
                <p>Grade: D*D*D*</p>
                <p>The scope of modules I studied whilst completing my Diploma:</p>
                <ul>
                    <li>Object-Oriented Programming (OOP), Event-Driven Programming</li>
                    <li>Website Development, E-Commerce</li>
                    <li>Computer Games & Design, Developing Computer Games</li>
                    <li>Database Design, Data Analysis & Design</li>
                    <li>Controlling Systems Using IT</li>
                    <li>Project Management, Business Planning</li>
                    <li>System Analysis & Design</li>
                </ul>
            </>
        ) 
    },
    { 
        title: "Open Study College - Personal Fitness Trainer (Distinction)",
        date: "Sep 2012-Dec 2012",
        description: <></> 
    }, 
    { 
        title: "Newcastle-Under-Lyme College – BTEC Level 3 in Public Services (DDM)",
        date: "Nov 2011-Jun 2013",
        description: <></> 
    },
    { 
        title: "National Pool Lifeguard Qualification",
        date: "Jun 2012-Aug 2019",
        description: <></> 
    },
    { 
        title: "Haywood Academy – 10 GCSEs (A in IT and B in Maths/English)",
        date: "Sep 2006–July 2011",
        description: <></> 
    },
]

const Education: React.FC = () => {
    return (
        <div id="education">
            <section className="container my-3 pb-3 sectionMinHeight sectionBorder text-light">
                <div className="row text-center pb-3">
                    <h1>Education</h1>
                </div>
                { entries.map((item, i) => <Entry key={`${item.title}_${i}`} title={item.title} date={item.date} description={item.description}/>)}
            </section>
        </div>
    )
}

export default Education;