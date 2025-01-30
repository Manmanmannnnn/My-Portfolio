import style from "./About.module.scss";
import profile from "./../../assets/aboutprofile.png";
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
              <p>Fresher:</p>
              <p>Frontend Development</p>
            </div>
            <div className={style.aboutEducation}>
              <IoSchool size={30} />
              <p>Bachelor of Science </p>
              <p>in Electrical Engineering</p>
            </div>
          </div>
          <p className={style.aboutParagraph}>
            I’m a fresher front-end developer with a background in electrical
            engineering. Before transitioning to web development, I worked as a
            college instructor and solutions engineer. I don't have much to
            offer right now, but I'm excited to learn and grow in this career.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
