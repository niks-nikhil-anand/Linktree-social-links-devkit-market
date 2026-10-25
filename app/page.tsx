import { SiteHeader } from "@/components/site-header";
import { Profile } from "@/components/profile";
import { FeaturedLinks } from "@/components/featured-links";
import { SocialLinks } from "@/components/social-links";
import { SiteFooter } from "@/components/site-footer";
export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="link-page">
        <Profile />
        <SocialLinks />
        <FeaturedLinks />
        <SiteFooter />
      </main>
      <span className="edge-note" aria-hidden="true">
        A LITTLE CORNER OF THE INTERNET
      </span>
    </div>
  );
}
