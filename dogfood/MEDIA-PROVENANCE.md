# DA × Oak hero media provenance

## Generation boundary

- Riverboat pipeline: `pipelines/grok-imagine-media.yaml`
- Pipeline run: `b6bb5dfb`
- Git branch: `canon`
- Git commit presented to generator: `92e6187b94f6b71c2e60cee402bcf8541c96a5f1`
- Generator: `grok 0.2.106 (bde89716f679) [stable]`
- Trust boundary: hidden `da-cli --riverboat-gambler`, trusted tracked YAML,
  every local shell step explicitly approved
- Credential posture: the pipeline used the existing encrypted/authenticated
  Grok session; no credential value was supplied to, read by, printed by, or
  copied into the workflow

## Poster

- Tool: `image_gen`
- Session: `019f87eb-595b-7091-a9b6-8e89bb01bb68`
- Normalized output: `.da/media-staging/oak-edge-hero-poster.webp`
- Delivery route: `/media/oak-edge-hero-poster.webp`
- Dimensions: 2400×1350
- Bytes: 196,122
- SHA-256: `b9084c0242293a7ab9f117ec9963aba2d50adb702fa0b1055b74c95225f4293c`
- Review state: accepted for the `canon` feature preview

## Optional video

- Tool attempted: `image_to_video`
- Session: `019f87eb-90e5-7591-a285-efc496f05984`
- Result: no managed MP4 output
- Provider response: HTTP 400; the active Zero Data Retention team policy
  required an `output.upload_url` unavailable to the sandboxed workflow
- Decision: poster-only is canonical; no synthetic fallback or unapproved
  provider was used

## Claims deliberately not made

- deterministic image regeneration
- byte-identical replay from the same prompt
- automatic visual acceptance
- successful Grok video generation in the current retention configuration

## DA and EDS delivery

- DA binary put: committed successfully to
  `da://somarc/da-oak/media/oak-edge-hero-poster.webp`
- Feature code/content branch: `canon`
- Public preview page: `https://canon--da-oak--somarc.aem.page/`
- EDS media rewrite:
  `media_16ba7b3340cc009cd2b12bd241b301a8e7765943c.webp`
- Browser response: HTTP 200; rendered responsive derivative 2000×1125 on
  desktop and 750-pixel source selected in the 375-pixel responsive harness
- `index.plain.html`: one H1, readable static content, zero `about:error`
  references, and no script dependency

The feature preview—not the source image model transcript—is the visual
delivery oracle. Live publication remains a separate, unexercised approval
boundary.
