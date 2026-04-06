import type { PanelContent } from "@/lib/types";

export const panelContent: Record<string, PanelContent> = {
  "iam-vizion": {
    title: "IAM VIZION",
    summary:
      "Systems architect, builder, and creative operator shaping technical worlds that feel alive.",
    sections: [
      {
        heading: "Identity",
        body:
          "VIZION stands for disciplined sight: the ability to engineer systems clearly while designing for emotional resonance."
      },
      {
        heading: "Current Focus",
        body:
          "Building cloud-native systems, cinematic interfaces, and automation layers that turn complexity into motion."
      }
    ],
    media: [
      { label: "Signal", value: "Systems + art + story" },
      { label: "Mode", value: "Architecture / Direction / Execution" }
    ],
    links: [{ label: "Open Collaboration", href: "#collaborate" }],
    cta: {
      label: "Initiate contact",
      description: "Available for selected builds, creative systems, and technical direction."
    }
  },
  mission: {
    title: "Mission",
    summary:
      "Build intelligent digital environments where engineering rigor and artistic intention reinforce each other.",
    sections: [
      {
        heading: "Why",
        body:
          "Technology without atmosphere becomes forgettable. Atmosphere without systems breaks. The work lives in the union."
      },
      {
        heading: "Outcome",
        body:
          "Create experiences that are stable, scalable, and unmistakably authored."
      }
    ],
    media: [{ label: "Trajectory", value: "Platform thinking + cinematic execution" }],
    cta: {
      label: "See the system philosophy",
      description: "Explore the rules that shape the rest of the universe."
    }
  },
  "systems-philosophy": {
    title: "System Philosophy",
    summary:
      "Good systems reduce friction, preserve signal, and give people leverage without noise.",
    sections: [
      {
        heading: "Principles",
        body:
          "Design for clarity first. Favor data-driven structures. Keep interfaces legible under pressure."
      },
      {
        heading: "Translation",
        body:
          "Architecture decisions should make collaboration easier, not just infrastructure cleaner."
      }
    ],
    media: [{ label: "Bias", value: "Simple surfaces, deep capability" }],
    cta: {
      label: "Follow the left hemisphere",
      description: "Dive into engineering, infrastructure, and operational thinking."
    }
  },
  "logic-art": {
    title: "Logic + Art",
    summary:
      "The centerline where precision and imagination stop competing and start composing.",
    sections: [
      {
        heading: "Synthesis",
        body:
          "Every system has a visual language. Every visual language has an operational model. The work becomes stronger when both are intentional."
      }
    ],
    media: [{ label: "Bridge", value: "Architecture <-> Creative Direction" }],
    cta: {
      label: "Traverse both hemispheres",
      description: "Use this node as the conceptual bridge across the world."
    }
  },
  collaborate: {
    title: "Collaborate",
    summary:
      "Open for projects that need system design, technical direction, worldbuilding, or interface execution.",
    sections: [
      {
        heading: "Ideal engagements",
        body:
          "Portfolio-grade product surfaces, infrastructure-heavy platforms, creative technologies, and brand systems with real technical depth."
      }
    ],
    media: [
      { label: "Response cadence", value: "Selective / direct / serious" },
      { label: "Working style", value: "Strategic + hands-on" }
    ],
    cta: {
      label: "Send a signal",
      description: "Placeholder: your email, booking link, or contact form endpoint lives here."
    }
  },
  architecture: {
    title: "Architecture",
    summary:
      "Designing systems that scale structurally, not just cosmetically.",
    sections: [
      {
        heading: "Focus",
        body:
          "Service boundaries, deployment topology, resilience, and decisions that remain coherent as complexity grows."
      }
    ],
    media: [
      { label: "Patterns", value: "Modular platforms / typed contracts / automation first" }
    ],
    cta: {
      label: "Open project archive",
      description: "Featured systems case studies connect here."
    }
  },
  "cloud-systems": {
    title: "Cloud Systems",
    summary:
      "Infrastructure thinking across runtime, networking, and environments.",
    sections: [
      {
        heading: "Scope",
        body:
          "Cloud foundations, containers, environment strategy, and operational coherence across deployments."
      }
    ],
    media: [{ label: "Domains", value: "AWS / Azure / edge-aware design" }],
    cta: {
      label: "Inspect observability",
      description: "Follow this path into runtime visibility and feedback loops."
    }
  },
  devops: {
    title: "DevOps",
    summary:
      "Delivery systems that shorten feedback loops without sacrificing confidence.",
    sections: [
      {
        heading: "Practice",
        body:
          "Pipelines, release controls, environment parity, and deployment paths designed for momentum."
      }
    ],
    media: [{ label: "Objective", value: "Fast changes, predictable outcomes" }],
    cta: {
      label: "Follow automation",
      description: "Automation is where release quality becomes leverage."
    }
  },
  automation: {
    title: "Automation",
    summary:
      "Turning repeated effort into repeatable systems.",
    sections: [
      {
        heading: "Use cases",
        body:
          "Agents, scripts, operational workflows, and glue code that clears human attention for higher-order work."
      }
    ],
    media: [{ label: "Result", value: "Lower friction, stronger throughput" }],
    cta: {
      label: "View project systems",
      description: "Connect automation examples to real delivery work."
    }
  },
  networking: {
    title: "Networking",
    summary:
      "Connectivity, routing, latency, and the invisible paths that shape experience.",
    sections: [
      {
        heading: "Interest",
        body:
          "How information moves, where it slows, and how edge behavior changes system feel."
      }
    ],
    media: [{ label: "Topics", value: "DNS / routing / edge / traffic flow" }],
    cta: {
      label: "Inspect security",
      description: "Move from connectivity into trust boundaries."
    }
  },
  security: {
    title: "Security",
    summary:
      "Security as design discipline, not bolt-on ceremony.",
    sections: [
      {
        heading: "Approach",
        body:
          "Identity, access, secrets handling, and practical threat awareness folded into the architecture from the start."
      }
    ],
    media: [{ label: "Goal", value: "Trust through structure" }],
    cta: {
      label: "Trace observability",
      description: "Security and visibility should reinforce each other."
    }
  },
  observability: {
    title: "Observability",
    summary:
      "Logs, metrics, traces, and the feedback systems that make operations legible.",
    sections: [
      {
        heading: "Signals",
        body:
          "Instrumentation and alerting tuned for clarity, not dashboard clutter."
      }
    ],
    media: [{ label: "Stack", value: "Telemetry / insight / action loops" }],
    cta: {
      label: "Open featured projects",
      description: "Case studies can show how visibility drove decisions."
    }
  },
  projects: {
    title: "Projects",
    summary:
      "Featured builds where architecture, execution, and visual intent intersect.",
    sections: [
      {
        heading: "Placeholder case studies",
        body:
          "Project Alpha: cloud-native platform. Project Beta: immersive product experience. Project Gamma: automation-driven operations layer."
      }
    ],
    media: [
      { label: "Format", value: "Problem / system / outcome" },
      { label: "Depth", value: "Case study overlay shards" }
    ],
    cta: {
      label: "Add real projects here",
      description: "Replace the placeholders with production case studies."
    }
  },
  "experience-archive": {
    title: "Experience Archive",
    summary:
      "A timeline layer for roles, phases, and meaningful technical chapters.",
    sections: [
      {
        heading: "Structure",
        body:
          "Organize by year, role, or platform era. Each shard can expand into a concise summary and measurable outcomes."
      }
    ],
    media: [{ label: "Format", value: "Timeline shards / role snapshots / outcomes" }],
    cta: {
      label: "Populate the archive",
      description: "This panel is ready for your real experience history."
    }
  },
  music: {
    title: "Music",
    summary:
      "Sound as architecture: texture, pressure, rhythm, and emotional control.",
    sections: [
      {
        heading: "Creative lane",
        body:
          "Production, atmosphere, sonic identity, and the structural side of musical storytelling."
      }
    ],
    media: [{ label: "Outputs", value: "Tracks / fragments / sound design studies" }],
    cta: {
      label: "Open gallery layer",
      description: "Bridge audio work into visual and experimental output."
    }
  },
  "visual-art": {
    title: "Visual Art",
    summary:
      "Concepts, digital work, and experiments that sharpen the site’s visual language.",
    sections: [
      {
        heading: "Role",
        body:
          "A place for artwork, studies, and pieces that inform the tone of the entire portfolio."
      }
    ],
    media: [{ label: "Formats", value: "Stills / sequences / mixed media placeholders" }],
    cta: {
      label: "Enter the gallery",
      description: "The gallery panel can host images, captions, and motion pieces."
    }
  },
  philosophy: {
    title: "Philosophy",
    summary:
      "Ideas, questions, and frameworks behind the visible work.",
    sections: [
      {
        heading: "Themes",
        body:
          "Consciousness, design ethics, system behavior, discipline, and the role of imagination in technical work."
      }
    ],
    media: [{ label: "Form", value: "Notes / excerpts / essays / prompts" }],
    cta: {
      label: "Cross into imagination",
      description: "Philosophy feeds the speculative side of the world."
    }
  },
  "creative-direction": {
    title: "Creative Direction",
    summary:
      "Visual systems, atmosphere, and intentionality across interface, brand, and motion.",
    sections: [
      {
        heading: "Approach",
        body:
          "Direction is not garnish. It is the rule set that makes the work recognizable across mediums."
      }
    ],
    media: [{ label: "Scope", value: "Aesthetic systems / motion language / narrative framing" }],
    cta: {
      label: "Connect back to logic + art",
      description: "This panel shares the same centerline as the core synthesis node."
    }
  },
  imagination: {
    title: "Imagination",
    summary:
      "Speculative concepts, worldbuilding, and the mental space where new systems begin.",
    sections: [
      {
        heading: "Function",
        body:
          "Hold the ideas that are not yet products but already have gravity."
      }
    ],
    media: [{ label: "Signals", value: "Fragments / futures / sketches" }],
    cta: {
      label: "Drift into the dream layer",
      description: "Keep this space loose, suggestive, and open-ended."
    }
  },
  "dream-layer": {
    title: "Dream Layer",
    summary:
      "A surreal pocket for spiritual texture, symbolic fragments, and atmospheric memory.",
    sections: [
      {
        heading: "Tone",
        body:
          "This is the least literal part of the system. Keep it sparse and evocative rather than explanatory."
      }
    ],
    media: [{ label: "Use", value: "Ambient visuals / fragments / symbolic text" }],
    cta: {
      label: "Return to gallery",
      description: "Use the gallery as the concrete outlet for this atmosphere."
    }
  },
  gallery: {
    title: "Gallery",
    summary:
      "The memory shard archive for images, visuals, clips, and future mixed-media work.",
    sections: [
      {
        heading: "Structure",
        body:
          "A modular media panel ready for image grids, video stills, captions, and external links."
      }
    ],
    media: [
      { label: "Slot 01", value: "Placeholder image / study" },
      { label: "Slot 02", value: "Placeholder clip / motion test" },
      { label: "Slot 03", value: "Placeholder caption / note" }
    ],
    cta: {
      label: "Replace with portfolio media",
      description: "Drop in real creative assets once the shell is stable."
    }
  }
};
