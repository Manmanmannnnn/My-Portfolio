import style from "./Header.module.scss";
import profile from "./../../assets/Untitled design.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Header() {
  return (
    <div id='header' className={style.header}>
      <img src={profile} alt='profile picture' />
      <div className={style.info}>
        <p>Hello, I'm</p>
        <p>Norman</p>
        <p>Frontend Developer</p>
        <div className={style.headerAction}>
          <AnchorLink
            href='#contact'
            offset='70'
            duration={1000}
            className={style.connect}
          >
            Connect with me
          </AnchorLink>
          <a
            className={style.myCV}
            href='https://mycv2.my.canva.site/creativecvprofile3652'
            target='_blank'
            rel='noopener noreferrer'
          >
            My resume
          </a>
        </div>
        <div className={style.socialsContainer}>
          <a
            href='https://github.com/Manmanmannnnn'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub size={40} color='black' />
          </a>
          <a
            href='https://www.linkedin.com/in/norman-bob-gomez/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin size={40} color='black' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
