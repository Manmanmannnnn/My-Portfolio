import style from "./Experience.module.scss";
import {
  FaReact,
  FaSass,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiPrettier, SiEslint } from "react-icons/si";

function Experience() {
  function renderExp() {
    const skills = [
      { name: "HTML", url: <FaHtml5 size={35} />, level: "Intermediate" },
      { name: "CSS", url: <FaCss3Alt size={35} />, level: "Basic" },
      { name: "JS", url: <FaJsSquare size={35} />, level: "Basic" },
      { name: "SASS", url: <FaSass size={35} />, level: "Basic" },
      {
        name: "PRETTIER",
        url: <SiPrettier size={35} />,
        level: "Basic",
      },
      { name: "ESLINT", url: <SiEslint size={35} />, level: "Basic" },
      { name: "REACT", url: <FaReact size={35} />, level: "Basic" },
    ];

    return skills.map((skill, index) => (
      <div className={style.skillList} key={index}>
        <div className={style.icon}>{skill.url}</div>
        <div className={style.description}>
          <p>{skill.name}</p>
          <p>{skill.level}</p>
        </div>
      </div>
    ));
  }

  return (
    <div id='experience' className={style.experience}>
      <h2>Experience</h2>
      <div className={style.skills}>{renderExp()}</div>
    </div>
  );
}

export default Experience;
