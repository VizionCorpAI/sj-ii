import { SceneMenu } from "@/components/scene-menu";
import { SplineScene } from "@/components/spline-scene";

const aboutScene = "/spline/about-map.splinecode";

const mapGuide = [
  { label: "Logo", target: "Home" },
  { label: "Brain", target: "About" },
  { label: "Earth", target: "Hobbies" },
  { label: "Neptune", target: "Contact" },
  { label: "Uranus", target: "Tools" },
  { label: "Saturn", target: "Experience" },
  { label: "Mars", target: "Skills" },
];

export default function AboutPage() {
  return (
    <main className="about-shell">
      <SceneMenu current="about" />

      <div className="scene-layer" aria-hidden="true">
        <SplineScene localScene={aboutScene} loadingLabel="Loading navigation map" />
      </div>

      <div className="scene-vignette about-vignette" aria-hidden="true" />

      <aside className="map-guide" aria-label="Navigation map guide">
        <p className="map-guide__title">Scene Guide</p>
        <ul className="map-guide__list">
          {mapGuide.map((item) => (
            <li key={item.label}>
              <span>{item.label}</span>
              <span>{item.target}</span>
            </li>
          ))}
        </ul>
      </aside>
    </main>
  );
}
