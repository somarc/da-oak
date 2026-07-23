# DA × Oak content architecture

The public site is a claim-safe visual explainer and a DA CLI dogfood surface.
DA owns all authored HTML and media. Git owns block code, design intent,
trusted local media-generation contracts, certification pipelines, and immutable
evidence. Generated assets remain outside Git until an exact reviewed file is
uploaded through normal DA CLI commands.

## Route map

| Route | Job | Primary proof surface |
|---|---|---|
| `/` | State the architecture in one glance | cinematic hero, plane cards, sequence |
| `/architecture` | Explain distance, model, and ownership | plane cards, data model, columns |
| `/writes` | Follow one x402-gated semantic action | sequence, operation state machine |
| `/edge` | Explain immutable release delivery and 100-score compatibility | release sequence, metric cards |
| `/proof` | Separate present implementation from target and define the PoC | readiness cards, roadmap sequence |
| `/nav` | Global route spine | shared fragment |
| `/footer` | Thesis, provenance, source links | shared fragment |

## Homepage copy hierarchy

**Eyebrow:** `AUTHORING · CONSENSUS · EDGE`
**H1:** `One source of truth. Every edge, still fast.`
**Lede:** `A clean-sheet exploration of DA-native authoring on Oak Segment Consensus: x402-gated writes become immutable releases, then EDS serves them without touching the write plane.`

Primary CTA: `/architecture` — **See the architecture**
Secondary CTA: `/writes` — **Follow a paid write**

### Plane map

1. **Oak / Authority** — durable document identities, revisions, aliases, receipts, and release intent.
2. **DA / Protocol** — resource-oriented authoring APIs and collaboration checkpoints.
3. **x402 / Admission** — quote, settlement, action binding, idempotency, and recovery.
4. **EDS / Delivery** — materialized semantic markup, immutable media, CDN activation, and public reads.

### Hard read-path invariant

`A public page request makes zero synchronous calls to an Oak validator, x402 facilitator, wallet, EVM RPC, or collaboration room.`

## Architecture page

**H1:** `Same substrate. Different semantics.`

Sections:

1. Current DA reality: resource API, object storage, collaboration, preview/live.
2. Current Oak reality: NodeStore, Segment persistence, ordered logical commands.
3. Clean model: stable document, immutable revision, mutable path binding, release.
4. DA operation mapping: GET, PUT, move, copy, delete, list, version.
5. Technology distance: contract-close, semantics-far, delivery-near.

## Writes page

**H1:** `Pay for the action. Commit the intent once.`

Ordered flow:

1. Authenticate and authorize.
2. Validate schema, route, quota, and expected revision before payment.
3. Canonicalize the semantic action and derive `operationId`.
4. Return a 402 quote bound to the exact action digest.
5. Verify and settle the paid retry.
6. Persist settlement/outbox state.
7. Submit one deterministic command to the site consensus cell.
8. Commit revision, path updates, and receipt atomically.
9. Materialize preview or live release asynchronously.

Collaboration rule: Yjs/websocket rooms coordinate high-frequency editing;
Oak receives sealed checkpoints or bounded write-grant consumption, not every
keystroke.

## Edge page

**H1:** `Consensus stops before the first byte is served.`

Sections:

1. Publish intent pins exact revisions, assets, code, renderer, and config.
2. Materializer writes a complete immutable release.
3. Verification precedes activation.
4. A small route/release pointer activates the candidate.
5. CDN misses reach an immutable release origin, never Oak.
6. Lighthouse remains an output, LCP, JS, and CDN concern.

Proof metrics:

- `0` Oak/x402/EVM calls on a synchronous page read.
- `1` complete immutable release selected per route.
- `100` Lighthouse target, continuously tested rather than asserted.

## Proof page

**H1:** `A credible target, with visible consolidation work.`

Current strengths:

- Aeron-ordered logical mutations.
- Independent Oak Segment stores.
- Queueing, durability acknowledgements, cloud persistence seams.
- Existing DA/EDS adapter direction.

Claim labels used throughout this page:

- **DEMONSTRATED** — observed or tested with evidence.
- **PROPOSED** — part of the clean-sheet target.
- **REQUIRES PROOF** — a cutover or production gate.
- **LIMIT** — a known scope boundary.

Required gates before DA-primary authority:

- deterministic apply with no local clocks or generated IDs;
- stable document paths and revision/CAS contracts;
- global operation idempotency;
- failover-safe payment/action lifecycle state;
- truthful committed/durable receipts;
- fail-stop replicated apply errors;
- atomic, available blob references;
- recursive logical convergence and bounded failover evidence.

PoC sequence:

1. One site, HTML/JSON, Source API compatibility.
2. Existing EDS preview/live projection unchanged.
3. x402 shadow binding, then one gated checkpoint/publish.
4. Collaboration write lease and asset availability.
5. Charter-grade fault, restart, and logical-digest validation.

## Metadata contract

Every page declares one nested body metadata block with:

- `Title`
- `Description`
- `Nav` = `/nav`
- `Footer` = `/footer`
- `Theme` = `dark`

Do not combine document-head metadata with a body metadata block.

## Primary navigation

```text
DA × Oak
Architecture
Paid writes
Edge
Proof
GitHub
```

Primary navigation remains flat. Detailed sections live within pages rather
than nested menus.
