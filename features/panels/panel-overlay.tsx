"use client";

import { AnimatePresence, motion } from "framer-motion";
import { panelIndex, sceneNodes } from "@/content/portfolio-data";
import { useSceneStore } from "@/lib/scene-store";
import styles from "@/styles/panel-overlay.module.css";

export function PanelOverlay() {
  const selectedNodeId = useSceneStore((state) => state.selectedNodeId);
  const selectNode = useSceneStore((state) => state.selectNode);

  const selectedNode = sceneNodes.find((node) => node.id === selectedNodeId);
  const panel = selectedNode ? panelIndex[selectedNode.panelKey] : null;

  return (
    <AnimatePresence>
      {selectedNode && panel ? (
        <>
          <motion.button
            animate={{ opacity: 1 }}
            aria-label="Close panel overlay"
            className={styles.backdrop}
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            onClick={() => selectNode(null)}
            type="button"
          />
          <motion.aside
            animate={{ opacity: 1, x: 0 }}
            aria-label={`${selectedNode.label} details`}
            className={styles.overlay}
            exit={{ opacity: 0, x: 24 }}
            initial={{ opacity: 0, x: 24 }}
            transition={{ duration: 0.35 }}
          >
            <button
              aria-label="Close panel"
              className={styles.closeButton}
              onClick={() => selectNode(null)}
              type="button"
            >
              Close
            </button>
            <div className={styles.header}>
              <span className={styles.zone}>{selectedNode.zone}</span>
              <h2>{panel.title}</h2>
              <p>{panel.summary}</p>
            </div>

            <div className={styles.body}>
              {panel.sections.map((section) => (
                <section className={styles.section} key={section.heading}>
                  <h3>{section.heading}</h3>
                  <p>{section.body}</p>
                </section>
              ))}

              {panel.media?.length ? (
                <section className={styles.dataGrid}>
                  {panel.media.map((item) => (
                    <div className={styles.dataCard} key={item.label}>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                    </div>
                  ))}
                </section>
              ) : null}

              {panel.links?.length ? (
                <section className={styles.links}>
                  {panel.links.map((link) => (
                    <a href={link.href} key={link.label}>
                      {link.label}
                    </a>
                  ))}
                </section>
              ) : null}
            </div>

            <footer className={styles.footer}>
              <strong>{panel.cta.label}</strong>
              <p>{panel.cta.description}</p>
            </footer>
          </motion.aside>
        </>
      ) : null}
    </AnimatePresence>
  );
}
