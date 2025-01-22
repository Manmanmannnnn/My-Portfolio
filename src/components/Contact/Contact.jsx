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
          <span>Example@gmail.com</span>
        </div>
        <div className={style.linkedIn}>
          <FaLinkedin size={20} />
          <span>My LinkedIn</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
