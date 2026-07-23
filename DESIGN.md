# DESIGN.md — DA × Oak

## Visual direction: cinematic systems atlas

**Industry pattern:** full-bleed cinematic hero + dark technical editorial
**EDS skill:** `eds-cinematic-hero` at `cinematic` depth
**Media path:** reviewed Riverboat → Grok Imagine poster; optional loop only when the current video tool and retention policy permit it
**Product posture:** architecture exploration presented with demonstrated facts, explicit hypotheses, and visible proof boundaries

### One-line thesis

An ancient persistence substrate becomes a living edge canopy: Oak remembers,
DA provides the authoring protocol, x402 admits durable writes, and EDS serves
immutable releases without placing consensus on the public read path.

## Emotional operating system

1. **Continuity** — a single luminous signal survives changes of system and place.
2. **Depth** — segments, roots, rings, and ledgers imply durable history.
3. **Clarity** — every plane has one owner and every claim has a boundary.
4. **Restraint** — cinematic does not mean noisy, neon, or scroll-jacked.
5. **Delight** — motion is atmospheric; diagrams reward inspection; the static path remains complete.

## Domain metaphors

- **Oak roots → immutable segment history**
- **Growth rings → document revisions and checkpoints**
- **A sap-green signal → continuity of intent through the write path**
- **A sealed gate → x402 authorization and settlement admission**
- **A luminous canopy → immutable releases distributed to edge POPs**

Avoid blockchain coins, binary rain, neural-network brains, generic cloud
icons, humanoid robots, and stock enterprise teams.

## Material and color system

| Token role | Value | Intent |
|---|---:|---|
| Night field | `#06100d` | cinematic base |
| Deep forest | `#0b1c17` | section and panel field |
| Segment stone | `#172b24` | cards and diagrams |
| Primary text | `#edf4ed` | clear editorial type |
| Secondary text | `#aebdb4` | supporting copy |
| Continuity signal | `#a8ff78` | active state, path, primary CTA |
| Settlement amber | `#ffc96b` | x402 and warning state |
| Hairline | `#355148` | structure without chrome |

No glassmorphism. Panels are opaque mineral surfaces with hairlines and quiet
shadows. Texture is CSS-only and stays below six percent opacity.

## Typography

- **Display:** `Iowan Old Style`, `Baskerville`, `Georgia`, serif
- **Body:** local `Roboto`, system sans-serif fallback
- **Labels:** local `Roboto Condensed`, tracked uppercase
- **Code:** `SFMono-Regular`, `Consolas`, monospace

The display face carries editorial authority; the label face names planes,
states, and receipts. Hero H1 stays within two lines on desktop and four short
lines on narrow mobile.

## Experience anatomy

### Homepage

1. Full-viewport cinematic hero with poster-first LCP and muted loop enhancement.
2. Four-plane ownership map: Oak, DA, x402, EDS.
3. End-to-end signal flow from author to immutable edge release.
4. Technology-distance cards: adjacent contracts, different semantics.
5. Edge proof band: zero synchronous Oak calls on a public page request.
6. Honest readiness callout and proof-plan CTA.

### Secondary pages

Use a compact editorial hero rendered from default content and a section style,
not another autoplaying video. Each page owns one job:

- `/architecture` — data model, planes, and why this is not a storage-driver swap.
- `/writes` — x402 action binding, idempotency, collaboration, and recovery.
- `/edge` — immutable release materialization, caching, and Lighthouse discipline.
- `/proof` — current implementation reality, consolidation gates, and a bounded PoC.

## Authorable block system

| Block | Author contract | Purpose |
|---|---|---|
| `video-hero` | video link row, poster image row, copy row | poster-first full-bleed stage |
| `cards (planes)` | standard card rows, one per plane | ownership map |
| `cards (metrics)` | standard card rows: value, label, note | concise proof claims |
| `sequence (flow/roadmap)` | label, step copy, durable output | write/publish sequence |
| `data-model` | term and definition rows | semantic resource dictionary |
| `cards` | standard boilerplate rows | comparisons, risks, next steps |
| `columns (edge)` | standard column rows | prose + code/model split |

No content is embedded in JavaScript. Authors own copy, links, media references,
and ordered rows in DA.

## Performance contract

1. Poster is the LCP candidate; video starts only after the poster can paint.
2. Video is decorative, muted, looped, `playsInline`, and absent under reduced motion.
3. No scroll-jacking, WebGL, framework runtime, or page-load fetch to Oak.
4. Public page requests may use only EDS/CDN and immutable release artifacts.
5. The first section contains only hero CSS/JS and media needed for LCP.
6. All diagrams are CSS/HTML and readable with JavaScript disabled.
7. Focus states, semantic heading order, and WCAG-oriented contrast are required.

## Claim discipline

- Say **“proposed architecture”** for the clean-sheet target.
- Say **“current Oak Segment Consensus demonstrates”** only where local evidence exists.
- Use logical revision IDs and operation receipts; never present physical Segment
  RecordId equality as a correctness guarantee.
- A PageSpeed score of 100 is an engineering target, not a universal promise.
- x402 settlement, Oak commit, and edge delivery are separate milestones.

## Provenance

```text
Aesthetic: full-bleed cinematic systems atlas
Skill: eds-cinematic-hero
Media: trusted Riverboat local pipeline → Grok Imagine
Static-first: poster + fallback field + overlay type
Motion: six-second atmospheric loop, reduced-motion safe
Adapted for: somarc/da-oak
```
