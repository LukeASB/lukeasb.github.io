import Entry from "./entry";

const Employment: React.FC = () => {
    return (
        <div id="employment">
            <section className="container my-3 pb-3 sectionMinHeight sectionBorder text-light">
                <div className="row text-center pb-3">
                    <h1>Employment</h1>
                </div>
                <Entry title="bet365 | Software Developer - User Platform User Interface (UPUI)" date="Oct 2023-Ongoing" description="Description"/>
                <Entry title="RedEye | Software Engineer" date="Sep 2021-Oct 2023" description="Description"/>
                <Entry title="bet365 | Junior Software Developer - Member’s Back Office (MBO)" date="Sep 2021-Oct 2023" description="Description"/>
                <Entry title="Capula Ltd | Graduate Software Engineer - Nuclear Department" date="Jun 2018-Aug 2019" description="Description"/>
                <Entry title="KeeleSU - Web Developer (Part-Time)" date="Feb 2017-Jun 2018" description="Description"/>
                <Entry title="Dimensions Leisure Centre / Fenton Manor - Lifeguard / Gym Assistant" date="Jun 2015-Jun 2019" description="Description"/>
            </section>
        </div>
    )
}

export default Employment;