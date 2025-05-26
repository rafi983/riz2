import { socialLinks } from "../data/navigation";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__builder">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="social-links scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                {socialLinks.map((social) => (
                  <a
                    key={social.title}
                    target="_blank"
                    rel="nofollow"
                    href={social.href}
                  >
                    <i aria-hidden="true" className={social.icon} />
                  </a>
                ))}
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-center scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                © 2025 <strong>Rafi Zaman</strong>. All rights reserved
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <div
                className="copyright-text align-right scrolla-element-anim-1 scroll-animate"
                data-animate="active"
              >
                Developed by <strong>RafiZaman.</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
