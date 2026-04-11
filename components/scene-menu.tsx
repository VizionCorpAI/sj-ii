import Link from "next/link";

type SceneMenuProps = {
  current: "home" | "about" | "skills";
};

export function SceneMenu({ current }: SceneMenuProps) {
  return (
    <nav className="scene-menu" aria-label="Scene navigation">
      <Link
        href="/"
        className={`scene-menu__link${current === "home" ? " is-active" : ""}`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`scene-menu__link${current === "about" ? " is-active" : ""}`}
      >
        About
      </Link>
      <Link
        href="/skills"
        className={`scene-menu__link${current === "skills" ? " is-active" : ""}`}
      >
        Skills
      </Link>
    </nav>
  );
}
