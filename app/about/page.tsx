import Spline from "@splinetool/react-spline/next";

const aboutScene =
  "https://prod.spline.design/8YbFAmab9awhpO1T/scene.splinecode";

export default function AboutPage() {
  return (
    <main className="about-shell">
      <div className="scene-layer" aria-hidden="true">
        <Spline scene={aboutScene} />
      </div>

      <div className="scene-vignette about-vignette" aria-hidden="true" />

      <section className="about-copy">
        <p className="eyebrow">About</p>
        <h1>Inside the Crystal</h1>
        <p className="summary">
          This is the interior map: identity at the core, engineering to the
          left, creativity to the right, and synthesis running through the
          centerline.
        </p>
      </section>
    </main>
  );
}
