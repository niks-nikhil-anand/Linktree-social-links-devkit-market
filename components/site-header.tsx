import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link
        className="wordmark"
        href="#social-heading"
        aria-label="Let’s connect — find me online"
      >
        <span className="monogram">
          na<span>.</span>
        </span>
        <span>Let’s connect</span>
      </Link>
      <span className="header-caption">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2v20M2 12h20M5 5l14 14M5 19 19 5" />
        </svg>{" "}
        IDEAS INTO REALITY
      </span>
    </header>
  );
}
