# DA × Oak — DA CLI pre-0.6.0 dogfood report

## Release-cycle closure — 2026-07-23

This point-in-time run is now explicitly attributed to the DA CLI **0.6.0
dogfood cohort**. The source-tree candidate correctly reported package version
`0.5.1` during the run; the retained CLI SHA and the 0.6.0 rubric evidence bind
the work to the release cycle without pretending that a 0.6.0 package had
already been published.

After review, the passing `canon` code change was approved for merge to `main`
through [PR #2](https://github.com/somarc/da-oak/pull/2). This closes the code
integration gap only. DA-authored content was **not** published to
`*.aem.live`, so the original no-live-publish boundary and poster-only
Riverboat result remain unchanged.

The findings fed the 0.6.0 work directly: F-005 was resolved by
[da-cli PR #73](https://github.com/somarc/da-cli/pull/73), F-004 by
[PR #74](https://github.com/somarc/da-cli/pull/74), F-006 by
[PR #75](https://github.com/somarc/da-cli/pull/75), and F-007 by
[PR #76](https://github.com/somarc/da-cli/pull/76). F-001 and F-002 remain
bounded, non-gating investigations in
[issues #61](https://github.com/somarc/da-cli/issues/61) and
[#62](https://github.com/somarc/da-cli/issues/62).

The original report follows unchanged as historical run evidence.

**Date:** 2026-07-22
**Repository:** `somarc/da-oak`
**Feature branch:** `canon`
**Feature preview:** https://canon--da-oak--somarc.aem.page/
**Review issue:** https://github.com/somarc/da-oak/issues/1
**Draft PR:** https://github.com/somarc/da-oak/pull/2
**Live publication:** not performed
**CLI under test:** `@somarc/da-cli` reports `0.5.1`, source-tree candidate
`f0b0078` during orientation

## Result

A virgin AEM boilerplate and its three DA boilerplate documents became a
five-route, DA-authored, claim-safe architecture site:

- `/` — proposition, ownership planes, continuity flow, and edge invariant;
- `/architecture` — stable resource identity and clean Oak model;
- `/writes` — x402 action binding, deterministic commit, and recovery;
- `/edge` — immutable releases, activation, caching, and rollback;
- `/proof` — demonstrated ingredients, production gates, and bounded PoC.

Git owns EDS code and the reviewed media-generation contract. DA owns all seven
HTML documents and the original hero media. No authored HTML mirror was added to
Git.

## Operator path exercised

1. Read-only first contact: `status`, `site info`, `site doctor --agent --deep`,
   `content tree`, `audit contracts --verify-code`.
2. Project target pinned in `.da.json`.
3. DA source cloned into the managed `.da/workspace`.
4. Authored changes staged and checkpointed with `content add` / `content commit`.
5. Riverboat plan dry-run proved eight approved shell steps and zero ungated
   shell steps.
6. Trusted Riverboat execution invoked Grok with one-tool allowlists.
7. Frozen WebP uploaded through `content put`, then registered on preview.
8. Content push dry-run preceded committed push.
9. Git `canon` push triggered AEM Code Sync; public code bytes were verified.
10. Seven HTML routes previewed with `.plain.html` verification.
11. Source/render reconciliation, semantic, design, contract, freshness, browser,
    responsive, keyboard, no-JS, dependency, and PageSpeed checks ran.

## Original media evidence

### Accepted poster

- Tool: Grok Imagine `image_gen`
- Riverboat run: `b6bb5dfb`
- Session: `019f87eb-595b-7091-a9b6-8e89bb01bb68`
- Output: 2400×1350 WebP, 196,122 bytes
- SHA-256: `b9084c0242293a7ab9f117ec9963aba2d50adb702fa0b1055b74c95225f4293c`
- Public rewrite: `media_16ba7b3340cc009cd2b12bd241b301a8e7765943c.webp`

### Optional video

The allowlisted `image_to_video` call reached the provider but returned HTTP 400:
the active Zero Data Retention team required an `output.upload_url` unavailable
to the sandbox. No MP4 was written. The pipeline continued through its reviewed
poster-only contract, and no alternate provider or synthetic video was used.

## Hosted validation

### DA CLI

- `preview tree / --verify`: 7/7 ok.
- `audit full`: zero errors and zero warnings on all five narrative routes.
- `design audit --severity warning`: zero findings on all five routes.
- `audit contracts --verify-code`: all seven real/autoblock contracts resolve;
  zero missing JS/CSS assets.
- `site doctor --agent --deep`: agent diagnostics ok; section shape clean.
- Preview freshness: every authored HTML route fresh when checked; live was
  deliberately stale or absent.
- `content status`: clean after final pushes.

### Browser runtime

- All authored blocks loaded; zero block errors and zero console errors.
- One H1 per route; semantic `<ol>` sequence and `<dl>` data-model output.
- Lifted Metadata and Section Metadata absent from rendered body.
- Hero media HTTP 200 with no `about:error`.
- `index.plain.html`: readable, one H1, zero scripts, zero broken media refs.
- 375, 900, and 1440-pixel responsive harnesses: zero horizontal overflow.
- Hero wrapper is truly full-bleed at 1440 pixels.
- Responsive image selection: 750-pixel derivative at 375; 2000-pixel derivative
  at larger viewports.
- CTAs: 46-pixel target height; primary/secondary semantics preserved.
- Keyboard: skip link first, visible focus, mobile menu toggles from keyboard,
  Escape closes and restores focus.

### PageSpeed Insights

Mobile, Lighthouse 13.4.0, slow 4G:

- Performance **100**
- Accessibility **100**
- Best Practices **100**
- Agentic Browsing **2/2**
- FCP 0.9 s; LCP 1.1 s; TBT 0 ms; CLS 0; Speed Index 1.0 s

Desktop:

- Performance **100**
- Accessibility **100**
- Best Practices **100**
- Agentic Browsing **2/2**
- FCP 0.3 s; LCP 0.3 s; TBT 0 ms; CLS 0; Speed Index 0.4 s

SEO is 69 only because feature preview is intentionally blocked from indexing.
That is expected preview behavior, not a page-content defect.

### Repository

- `npm run lint`: pass.
- `npm audit --omit=dev`: zero production vulnerabilities.
- GitHub Build workflow on `canon`: pass.
- Draft PR checks: Build pass; AEM PSI check pass.
- Code Sync bytes verified for global tokens and every custom block.

The `canon--*.aem.live` route still serves the original boilerplate title and
content (`Home | AEM Boilerplate` / `Congrats, you are ready to go!`), directly
confirming that the new DA canon was not promoted to live.

## Dogfood findings

### F-001 — cached-token health can disagree with DA

`auth status` reported a locally fresh token while DA rejected a committed media
put with 401. `auth login --refresh` reused the helper's independently fresh
cache. Recovery required `auth logout`, then a fresh browser-backed login. This
reconfirms the pre-0.6.0 auth-refresh boundary already documented in the release
work.

### F-002 — Riverboat video needs a ZDR output contract

`image_to_video` was present and invoked correctly, but Zero Data Retention
requires a caller-owned `output.upload_url`. A production Riverboat video
integration needs an approved upload target that does not weaken the credential
or filesystem boundary. Poster-only degradation worked exactly as intended.

### F-003 — ordinary HTML tables become authored block contracts

A table headed `DA operation` became a `da-operation` block; a table headed
`Gate` became a `gate` block. Page-level audits passed, but
`audit contracts --verify-code` correctly refused release readiness because
those assets did not exist. The content was recast as the existing semantic
`data-model` and `sequence (gates)` blocks. This is a useful CDD proof: rendered
appearance alone was insufficient.

### F-004 — `preview explain` still warns on expected Section Metadata removal

Every page had one valid nested Metadata channel and correct section wrappers.
`preview explain` still labeled consumed `section-metadata` as a warning with a
repair instruction to wrap it again. Browser output and section classes proved
the transform was correct. This remains diagnostic noise, not a site defect.

### F-005 — managed content push JSON output is not one envelope

`content push --format json` emitted a bare path array followed by human
preflight text rather than the shared one-envelope response contract. The
operation and safety gates worked, but machine-channel consistency remains
unfinished.

### F-006 — binary preview verifies like a document

Committed preview of the WebP succeeded, but the command warned that rendered
verification was unavailable because it probed
`oak-edge-hero-poster.webp.plain.html` and received 404. Public binary delivery
was later proved by the rewritten media response. Binary preview should use a
content-type/status check rather than document `.plain.html` verification.

### F-007 — local source priority does not equal decorated visual preview

`da up` correctly served local code, local `.da/workspace`, and preview fallback
with observable source headers. Local DA documents were returned as source bytes
without EDS head/script injection, so direct visual QA required feature preview.
The command is useful for source-priority diagnostics; its visual-preview
contract should be stated more narrowly or gain a decorated mode.

## Honest posture

The site demonstrates a coherent architecture and an effective operator loop.
It does not claim that Oak Segment Consensus is already a production DA primary,
that payment and content commit are atomic, that physical Segment identities
converge, or that any page will universally score 100. The current preview did
score 100 in the recorded mobile and desktop PageSpeed runs.

The next changes should be driven by human review of the architecture narrative.
No live promotion, merge, or main-branch publication should occur before that
feedback is incorporated.
