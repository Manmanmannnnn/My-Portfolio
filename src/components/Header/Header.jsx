import style from "./Header.module.scss";
import profile from "./../../assets/profile.png";
import resume from "./../../assets/resume.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <div id='header' className={style.header}>
      <img src={profile} alt='profile picture' />
      <div className={style.info}>
        <p>Hello, I'm</p>
        <p>Norman</p>
        <p>Frontend Developer based in Philippines</p>
        <div className={style.headerAction}>
          <a className={style.connect} href='#projects'>
            Connect with me
          </a>
          <div className={style.myCV} onClick={() => window.open(resume)}>
            My resume
          </div>
        </div>
        <div className={style.socialsContainer}>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <FaGithub size={40} color='black' />
          </a>
          <a href='#' target='_blank' rel='noopener noreferrer'>
            <FaLinkedin size={40} color='black' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
