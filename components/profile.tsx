import Image from "next/image";
import { profile } from "@/data/profile";
export function Profile() {
  return (
    <section className="profile" aria-labelledby="profile-name">
      <div className="portrait-wrap">
        <div className="portrait">
          <div className="portrait-crop">
            <Image
              src={profile.image}
              alt={profile.name}
              width={144}
              height={144}
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 768px) 260px, 230px"
            />
          </div>
        </div>
        <svg
          className="portrait-spark"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 0c0 8-4 12-12 12 8 0 12 4 12 12 0-8 4-12 12-12C16 12 12 8 12 0Z" />
        </svg>
      </div>
      <p className="eyebrow profile-hello">HEY THERE, I’M</p>
      <h1 id="profile-name">
        Nikhil <em>Anand.</em>
      </h1>
      <p className="profile-role">{profile.role}</p>
      <p className="profile-bio">
        {profile.bio}
        <br />
        The maker behind{" "}
        <a href="https://www.devkitmarket.com/">
          DevKit Market<span aria-hidden="true"> ↗</span>
        </a>
      </p>
      <div className="profile-rule" aria-hidden="true">
        <span />
        <span className="rule-diamond" />
        <span />
      </div>
    </section>
  );
}
