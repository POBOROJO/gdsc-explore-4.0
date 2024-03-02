import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from "react-icons/ai";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.mail}>
        <h1 className={style.heading}>Email us at</h1>
        <p className={style.subHeading}>exploregdsc@gmail.com</p>
      </div>
      <div className={style.graphic}>
        <a href="mailto:exploregdsc@gmail.com">
          <img src="/assets/images/email-logo.svg" alt="email" />
        </a>
      </div>
      <div className={style.links}>
        <h1 className={style.heading}>Follow us on</h1>
        <div className={style.socials}>
          <a
            href="https://twitter.com/exploregdsc"
            target="_blank"
            aria-label="twitter link"
          >
            <AiOutlineTwitter id={style.twitter} />
          </a>
          <a
            href="https://www.youtube.com/channel/UCMLgnvt5f-GPdpj-mwgvbmw"
            target="_blank"
            aria-label="youtube link"
          >
            <AiFillYoutube id={style.youtube} />
          </a>
          <a
            href="https://www.instagram.com/exploregdsc/"
            target="_blank"
            aria-label="instagram link"
          >
            <AiFillInstagram id={style.instagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
