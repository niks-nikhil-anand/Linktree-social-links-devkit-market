import { featuredLinks } from "@/data/profile";
import { Icon } from "./icon";
import { LinkLogo } from "./link-logo";
export function FeaturedLinks() {
  return (
    <section
      className="featured-links"
      aria-label="Work with me and explore my products"
    >
      {featuredLinks.map((link) => (
        <a
          key={link.href}
          className={`featured-button featured-button--${link.variant}`}
          href={link.href}
        >
          <LinkLogo src={link.logo} />
          <span>{link.variant === "primary" ? "Hire me" : link.title}</span>
          <Icon name="arrow" className="link-arrow" />
        </a>
      ))}
    </section>
  );
}
