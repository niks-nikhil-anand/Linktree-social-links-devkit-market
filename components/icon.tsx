import type { IconName } from "@/data/profile";
export function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  const paths: Record<IconName, React.ReactNode> = {
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    code: <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" />,
    grid: (
      <>
        <rect
          x="3"
          y="3"
          width="7"
          height="7"
          rx="1.5"
          fill="currentColor"
          stroke="none"
        />
        <rect
          x="14"
          y="3"
          width="7"
          height="7"
          rx="1.5"
          fill="currentColor"
          stroke="none"
          opacity=".5"
        />
        <rect
          x="3"
          y="14"
          width="7"
          height="7"
          rx="1.5"
          fill="currentColor"
          stroke="none"
          opacity=".5"
        />
        <rect
          x="14"
          y="14"
          width="7"
          height="7"
          rx="1.5"
          fill="currentColor"
          stroke="none"
        />
      </>
    ),
    github: (
      <>
        <path
          d="M9 19c-4.3 1.3-4.3-2.2-6-2.7M15 22v-4a3.4 3.4 0 0 0-1-2.7c3.3-.4 6.7-1.6 6.7-7.3a5.7 5.7 0 0 0-1.5-4 5.3 5.3 0 0 0-.1-4s-1.3-.4-4.2 1.5a14.2 14.2 0 0 0-7.6 0C4.4-.4 3.1 0 3.1 0a5.3 5.3 0 0 0-.1 4 5.7 5.7 0 0 0-1.5 4c0 5.7 3.4 6.9 6.7 7.3a3.4 3.4 0 0 0-1 2.7v4"
          transform="translate(2 2) scale(.86)"
        />
      </>
    ),
    x: <path d="M4 3h4.5L20 21h-4.5L4 3Zm16 0L4 21" />,
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M7.5 10v7m0-10v.1M11 17v-7m0 3a3 3 0 0 1 6 0v4" />
      </>
    ),
  };
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
