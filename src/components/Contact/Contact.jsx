import style from "./Contact.module.scss";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <div id='contact' className={style.contact}>
      <h2>Contact Me</h2>

      <div className={style.infoContainer}>
        <div className={style.emailInfo}>
          <SiGmail size={20} />
          <span>normanbobgomez@gmail.com</span>
        </div>
        <a
          href='https://www.linkedin.com/in/norman-bob-gomez/'
          target='_blank'
          rel='noopener noreferrer'
          className={style.linkedIn}
        >
          <FaLinkedin size={30} color='black' />
          <span>My LinkedIn</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
