import Employment from "./employment";
import Entry from "./entry";
import { Tabs, Tab } from 'react-bootstrap';


const Education: React.FC = () => {
    return (
        <div id="education">
            <section className="container my-3 pb-3 sectionMinHeight sectionBorder text-light">
                <div className="row text-center pb-3">
                    <h1>Education</h1>
                </div>
                <Entry title="Keele University – BSc Computer Science (2:1)" date="Jun 2015 – Jun 2018" description="Description"/>
                <Entry title="Newcastle-Under-Lyme College – BTEC Level 3 in Computing (D*D*D*)" date="Nov 2013-Jun 2015" description="Description"/>
                <Entry title="Newcastle-Under-Lyme College – BTEC Level 3 in Public Services (DDM)" date="Nov 2011-Jun 2013 " description="Description"/>
                <Entry title="Haywood Academy – 10 GCSEs (A in IT and B in Maths/English)" date="Sep 2006 – July 2011" description="Description"/>
            </section>
        </div>
    )
}

export default Education;