import { socialLinks } from "@/data/profile";
import { Icon } from "./icon";
import { LinkLogo } from "./link-logo";
export function SocialLinks() {
  return (
    <nav className="social-section" aria-labelledby="social-heading">
      <div className="section-label">
        <h2 id="social-heading" className="eyebrow">
          FIND ME ONLINE
        </h2>
        <span>
          Let’s connect <span aria-hidden="true">↘</span>
        </span>
      </div>
      <ul className="social-list">
        {socialLinks.map((link) => (
          <li key={link.href}>
            <a className="social-link" href={link.href}>
              <span className="social-icon">
                <LinkLogo src={link.logo} />
              </span>
              <span className="social-copy">
                <span className="social-title">{link.title}</span>
                <span className="social-description">{link.description}</span>
              </span>
              <Icon name="arrow" className="link-arrow" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
