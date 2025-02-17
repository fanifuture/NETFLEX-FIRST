import React from "react";
import styles from "./Footer.module.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
const Footer = () => {
  return (
    <div className={styles.outer_container}>
      <div className={styles.inner_container}>
        <div className={styles.icon_container}>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className={styles.footer_links}>
          <ul>
            <li>Audio Discription</li>
            <li>Investor Relation</li>
            <li>Legal Notice</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Job</li>
            <li>Cookie Preferinces</li>
          </ul>
          <ul>
            <li>Gift Cards</li>
            <li>Terms Of Use</li>
            <li>Corporate information</li>
          </ul>
          <ul>
            <li>Media Center</li>
            <li>Privecy</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <p className={styles.service_code}>Service Code</p>
          <p className={styles.copy_right}>&copy;By Fanuel In 2025</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
