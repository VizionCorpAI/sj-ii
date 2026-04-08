import Link from "next/link";

type SceneMenuProps = {
  current: "home" | "about";
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
    </nav>
  );
}
