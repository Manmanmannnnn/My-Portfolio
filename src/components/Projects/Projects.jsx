import style from "./Projects.module.scss";
import { myProjects } from "../../assets/myProjects";

function Projects() {
  // for returning all projects we can make
  // a .map() for an array of objects that returns
  //the image of project,showCode, preview
  return (
    <div id='projects' className={style.myWork}>
      <h2>Projects</h2>

      <div className={style.projectContainer}>
        {myProjects.map((proj, index) => {
          return (
            <div className={style.project} key={index}>
              <p>{proj.name}</p>
              <img src={proj.img} alt='' />
              <button>Show code</button>
              <button>Preview</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
