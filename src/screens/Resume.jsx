import Header from "../components/Header";
import resume from "../RC-resume.pdf";

const Resume = () => {
    document.title = "rchishty - resume";
    return(
        <div className="App">
            <Header />
            <a href={resume} download="RC-resume.pdf">Download resume here</a>
            <h1 style={{marginTop: 1000}}>RESUME SCREEN</h1>
        </div>
    )
}

export default Resume;