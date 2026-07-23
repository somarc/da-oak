# DA × Oak

A claim-safe visual architecture exploration of DA-native persistence on Oak
Segment Consensus with x402-gated writes and immutable Edge Delivery Services
releases.

The central invariant is deliberately simple:

> Oak may own durable authority without entering the synchronous public page path.

## Environments

- Main preview: https://main--da-oak--somarc.aem.page/
- Main live: https://main--da-oak--somarc.aem.live/ (authored canon not published)
- Historical dogfood preview: https://canon--da-oak--somarc.aem.page/

## DA CLI 0.6.0 release attribution

This site is part of the `@somarc/da-cli` **0.6.0 dogfood cohort**. The run
started against a source-tree candidate that still reported package version
`0.5.1`; immutable CLI SHAs, findings, fixes, and validation evidence bind it to
the 0.6.0 release cycle rather than to the published 0.5.1 package.

The original run is retained in [`dogfood/REPORT.md`](./dogfood/REPORT.md). Its
poster-only Riverboat result and no-live-publish boundary remain part of the
record. Merging the reviewed EDS code to `main` does not publish DA-authored
content to `*.aem.live`.

## Source ownership

DA is the source of truth for authored HTML, navigation, footer, and media.
This repository owns EDS code, block contracts, design intent, trusted local
Riverboat inputs, and dogfood evidence. Generated media remains under ignored
`.da/media-staging/` and is uploaded through the normal `da-cli` content path.

Project targeting is pinned in `.da.json`:

```json
{ "org": "somarc", "repo": "da-oak", "branch": "main" }
```

## DA CLI dogfood loop

The pre-0.6.0 candidate intentionally still reports package version `0.5.1`.
Record its source-tree Git SHA in evidence rather than claiming a published
0.6.0 binary.

```sh
DA="node /Users/mhess/aem/aem-code/da/da-cli/bin/da.js"

$DA status --format json
$DA site doctor --agent --deep --format json
$DA content status --format json
$DA content diff /index.html
$DA content push                         # dry-run
$DA --org somarc --repo da-oak --branch canon --commit content push
$DA --org somarc --repo da-oak --branch canon --commit preview tree / --verify --yes
$DA audit contracts --prefix / --branch canon --verify-code --format json
```

Publishing to `*.aem.live` remains a separate explicit approval boundary.

## Trusted Riverboat media boundary

`pipelines/grok-imagine-media.yaml` is trusted local YAML that can execute
arbitrary shell through the hidden `--riverboat-gambler` mode. Root `--commit`
does not gate that side effect. Review and dry-run it before any execution.

The recorded dogfood run generated and accepted one 2400×1350 WebP poster.
The optional `image_to_video` attempt was correctly contained but unavailable:
the provider's Zero Data Retention policy required an `output.upload_url` not
present in the sandbox. No replacement provider or synthetic fallback was used.
See `dogfood/MEDIA-PROVENANCE.md`.

## Repository checks

```sh
npm ci
npm run lint
```

Use `da up --format json` for source-priority diagnostics. For local visual
inspection of complete source documents, load the project styles and
`scripts/scripts.js`; shared feature-preview validation remains the canonical
browser proof because EDS consumes metadata and section metadata server-side.
