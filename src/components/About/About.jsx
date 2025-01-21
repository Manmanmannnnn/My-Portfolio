import style from "./About.module.scss";
import profile from "./../../assets/profile.png";
import { IoSchool } from "react-icons/io5";
import { GiAchievement } from "react-icons/gi";
function About() {
  return (
    <div id='about' className={style.about}>
      <h2 className={style.title}>About Me</h2>

      <div className={style.aboutContent}>
        <img src={profile} alt='' />
        <div className={style.aboutSections}>
          <div className={style.aboutBox}>
            <div className={style.aboutExperience}>
              <GiAchievement size={30} />
              <p>2+ years</p>
              <p>Frontend Development</p>
            </div>
            <div className={style.aboutEducation}>
              <IoSchool size={30} />
              <p>Bachelor of Science </p>
              <p>in Electrical Engineering</p>
            </div>
          </div>
          <p className={style.aboutParagraph}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            incidunt enim expedita saepe pariatur, sunt reprehenderit minima
            tempore, harum dolorum ab assumenda commodi illum rerum maxime et,
            amet delectus modi?
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
