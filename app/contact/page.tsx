import { SceneMenu } from "@/components/scene-menu";
import { SplineScene } from "@/components/spline-scene";

const contactScene = "/spline/contact-signal.splinecode";

export default function ContactPage() {
  return (
    <main className="contact-shell">
      <SceneMenu current="contact" />

      <div className="scene-layer" aria-hidden="true">
        <SplineScene localScene={contactScene} loadingLabel="Loading contact signal" />
      </div>

      <div className="scene-vignette contact-vignette" aria-hidden="true" />
    </main>
  );
}
