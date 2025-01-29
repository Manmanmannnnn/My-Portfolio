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
            I'm an electrical engineer who recently made the decision to pursue
            a career in the tech industry by learning web development. I’m
            excited to explore new things and manifest my imagination in coding
            and design. Even though I'm just new in web development, I’m excited
            to learn more and grow in this field. I believe that my engineering
            background will help me understand complex systems. I’m looking
            forward to being part of the web development team and helping create
            meaningful and user-friendly digital experiences.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
