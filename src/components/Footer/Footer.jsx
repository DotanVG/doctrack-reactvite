import "./Footer.css"

export const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-text">
        Copyright © {new Date().getFullYear()} DocTrack. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
