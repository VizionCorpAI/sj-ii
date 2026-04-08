import Spline from "@splinetool/react-spline/next";

const sentinelScene =
  "https://prod.spline.design/nBcxZMDF-GCtzXY6/scene.splinecode";

export default function Home() {
  return (
    <main className="home-shell">
      <div className="scene-layer" aria-hidden="true">
        <Spline scene={sentinelScene} />
      </div>

      <section className="hero-copy">
        <p className="eyebrow">Sentinel Interface</p>
        <h1>I AM VIZION</h1>
        <p className="summary">
          The portal opens through the crystal first. The deeper navigation map
          comes next.
        </p>
      </section>
    </main>
  );
}
