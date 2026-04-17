import { SceneMenu } from "@/components/scene-menu";
import { SplineScene } from "@/components/spline-scene";

const skillsScene = "/spline/skills-orbit.splinecode";

export default function SkillsPage() {
  return (
    <main className="skills-shell">
      <SceneMenu current="skills" />

      <div className="scene-layer" aria-hidden="true">
        <SplineScene
          localScene={skillsScene}
          loadingLabel="Loading skills constellation"
          mobileZoom={0.58}
        />
      </div>

      <div className="scene-vignette skills-vignette" aria-hidden="true" />
    </main>
  );
}
