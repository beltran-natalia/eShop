import React from "react";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.links}>
        <div>
          <h4>About Montessori Planet</h4>
          <p>Store Locator and Hours</p>
          <p>Careers</p>
          <p>Blogs</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <h4>Customer Support</h4>
          <p>Contact Us</p>
          <p>Click and Collect</p>
          <p>FAQ</p>
          <p>Returns and Exchanges</p>
        </div>
      </div>
      <small>&copy; 2026 Planet Montessori | All Rights Reserved</small>
    </footer>
  );
};
