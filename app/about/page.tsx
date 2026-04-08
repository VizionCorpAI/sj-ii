import { SceneMenu } from "@/components/scene-menu";
import { SplineScene } from "@/components/spline-scene";

const aboutScene = "/spline/about-brain.splinecode";

export default function AboutPage() {
  return (
    <main className="about-shell">
      <SceneMenu current="about" />

      <div className="scene-layer" aria-hidden="true">
        <SplineScene localScene={aboutScene} loadingLabel="Loading brain archive" />
      </div>

      <div className="scene-vignette about-vignette" aria-hidden="true" />

      <section className="about-copy">
        <p className="eyebrow">About</p>
        <h1>Inside the Crystal</h1>
        <p className="summary">
          The brain scene is the interior map: identity at the core,
          engineering to the left, creativity to the right, and synthesis
          running through the centerline.
        </p>
      </section>

      <section className="about-panel about-panel--core">
        <p className="panel-label">Core Signal</p>
        <h2>I AM VIZION</h2>
        <p>
          This chamber holds the identity layer, mission, and the logic-art
          union that drives the rest of the site.
        </p>
      </section>

      <section className="about-panel about-panel--left">
        <p className="panel-label">Left Hemisphere</p>
        <h2>Systems and Engineering</h2>
        <ul className="panel-list">
          <li>Architecture</li>
          <li>Cloud systems</li>
          <li>DevOps and automation</li>
          <li>Networking, security, observability</li>
        </ul>
      </section>

      <section className="about-panel about-panel--right">
        <p className="panel-label">Right Hemisphere</p>
        <h2>Creation and Philosophy</h2>
        <ul className="panel-list">
          <li>Music and visual art</li>
          <li>Creative direction</li>
          <li>Imagination and dream layer</li>
          <li>Gallery and reflective work</li>
        </ul>
      </section>
    </main>
  );
}
