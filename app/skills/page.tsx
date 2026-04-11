import { SceneMenu } from "@/components/scene-menu";
import { SplineScene } from "@/components/spline-scene";

const skillsScene = "/spline/skills-orbit.splinecode";

const skillGroups = [
  {
    title: "Systems",
    items: ["Cloud architecture", "Platform design", "Networking", "Security"],
  },
  {
    title: "Build",
    items: ["DevOps", "Automation", "Observability", "CI/CD systems"],
  },
  {
    title: "Creative",
    items: ["Art direction", "Music systems", "Visual storytelling", "Concept design"],
  },
];

export default function SkillsPage() {
  return (
    <main className="skills-shell">
      <SceneMenu current="skills" />

      <div className="scene-layer" aria-hidden="true">
        <SplineScene localScene={skillsScene} loadingLabel="Loading skills constellation" />
      </div>

      <div className="scene-vignette skills-vignette" aria-hidden="true" />

      <section className="skills-copy">
        <p className="eyebrow">Skills</p>
        <h1>Constellation of Practice</h1>
        <p className="summary">
          This field maps the working disciplines behind the portal: systems,
          engineering rigor, automation, and the creative layer that gives the
          work character.
        </p>
      </section>

      <section className="skills-grid" aria-label="Skill groups">
        {skillGroups.map((group) => (
          <article key={group.title} className="skills-card">
            <p className="panel-label">{group.title}</p>
            <ul className="panel-list">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
