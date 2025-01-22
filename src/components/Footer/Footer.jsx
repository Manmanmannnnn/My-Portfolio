import style from "./Footer.module.scss";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Footer() {
  return (
    <div className={style.footer}>
      <nav>
        <ul className={style.footerMenu}>
          <li>
            <AnchorLink href='#header' duration={1000}>
              Home
            </AnchorLink>
          </li>

          <li>
            <AnchorLink href='#about' offset='70' duration={1000}>
              About
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href='#experience' offset='70' duration={1000}>
              Experience
            </AnchorLink>
          </li>
          <li>
            <AnchorLink href='#projects' offset='70' duration={1000}>
              Projects
            </AnchorLink>
          </li>
        </ul>
      </nav>
      <p>Copyright &#169; 2025 Norman. All Rights Reserved </p>
    </div>
  );
}
export default Footer;
