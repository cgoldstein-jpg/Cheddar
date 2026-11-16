Cheddar Design System (cds)
React 18.3.1+ and React 19 TypeScript/Vite component library for the Cheddar product, with Figma Code Connect wired up against the Cheddar Product Design System file.

v1.4.2
Aligns large and selected article cards, chart typography/layout, Tag, and Nav with the latest Product Design System masters.
Removes unsupported ArticleCard eyebrows and visible Nav labels, updates Make guidance, and keeps full App Designs compositions out of the component gallery.
Removes obsolete Tag-only Instrument Sans assets and publishes the matching Code Connect templates.
v1.4.1
Corrects package-rendered component geometry, typography, colors, and icon artwork against the selected Product Design System component masters.
Includes the verified package fonts, tokens, Code Connect mappings, and Make guidance from the same audited revision.
v1.4.0
Aligns component geometry, spacing, color, typography, icons, and interaction states with the audited Cheddar App Designs and Product Design System.
Keeps Brand as the semantic variable collection with only Light and Dark modes; removes the incorrect branded appearance mode from code and generated tokens.
Adds the complete token-backed spacing scale and fixes component APIs, semantic Figma property names, variable bindings, and all 42 Code Connect mappings.
Expands the Make Kit with eight executable screen recipes, strict design-to-code alignment guidance, packaged assets, and reference-screen regression coverage.
Bundles and applies the official Mona Sans variable font with SS05 enabled across Figma, components, and custom Make-authored text.
v1.3.0
Makes the published package self-contained and reliable in Figma Make: components load their CSS, fonts, tokens, and stable asset URLs without consumer-side bundler workarounds.
Supports React 18.3.1 and React 19, with a packed-package React 18 consumer test guarding the Make runtime.
Matches the Figma library more closely across component geometry, states, theme semantics, imagery, typography, and Code Connect mappings.
Bundles the official Mona Sans variable webfont and enables Figma's SS05 double-storey lowercase a.
Keeps application shells and full-screen mocks out of the library. The Make Kit instead provides eight consumer-owned composition recipes for mobile and fluid full-page apps.
What's in this repo
Path	Purpose
src/App.tsx	Dev gallery app — rendered by the Vite dev server for visual development
src/index.ts	Library entry point — all exported components and types
src/components/	React components
src/styles/	CSS source files (tokens.css is generated — see Tokens below)
src/tokens/	Generated typed token accessors for React consumers
src/demo-assets/	Legacy asset inventory used by build-time checks
tokens/cheddar.tokens.json	Source of truth for every design token (DTCG)
platforms/	Generated Swift token output
docs/	Parity audit and migration notes
docs/make-kit/	Guidelines shipped to the Figma Make kit, plus the prompt that tests them
tests/visual/	Committed Playwright regression suite and screenshot baselines
**/*.figma.ts	Figma Code Connect mapping files
Components
Every component is exported from the package root along with its props type (import { GoalCard, type GoalCardProps } from '@screentime/cheddar-ds').

Group	Exports
Actions	Button, IconButton, TextLink
Forms	InputField, Textarea, Search, Checkbox, Radio, SwitchField, Slider, NumberPad
Navigation & overlays	Nav, PageHeader, Sheet, SectionHeader
Content	ActivityItem, Avatar, Tag, Toast, Notification, EmptyState, Icon, Logo, Wordmark, IntroIllustration, LargeIllustration
Cards & panels	TotalSavingsCard, GoalCard, CompletedGoalCard, ArticleCard, ActivityCard, ProfileCard, BadgeCard, AccountCard, GoalSummaryCard, SpendingChartPanel, SavingsStreak
Theming	ThemeScope
The catch-all Card, which rendered hardcoded demo content selected by variant, was removed in v1.2.2. Use the card component matching your shape; see docs/migration-1.2.md for the variant-to-component table.

Demo imagery is exposed as direct static imports so the consuming bundler owns the URL:

import headphones from '@screentime/cheddar-ds/demo/headphones.png'
Further reading: docs/figma-parity-audit.md records how the library maps onto the Figma file and where the two had drifted.

Getting started
npm install
cp .env.example .env.local   # then fill in FIGMA_ACCESS_TOKEN
npm run dev
Open the dev server URL printed in the terminal to see the component gallery.

Environment
This repo reads secrets from .env.local (gitignored). See .env.example for the full list.

Variable	Required for	How to obtain
FIGMA_ACCESS_TOKEN	npm run figma:* (Code Connect publish, URL sync)	Figma → Settings → Personal access tokens. Scopes: File content (read) + Code Connect (write).
npm run dev, npm run build, and npm run lint do not require any env vars.

Scripts
Command	What it does
npm run dev	Start the Vite dev server with the component gallery.
npm run build	Token generation → Vite library build → type declarations (tsc -p tsconfig.build.json) → asset copy (CSS layers, fonts, tokens, platform outputs) into dist/.
npm run preview	Preview the last Vite production build locally.
npm run lint	Run ESLint across the repo.
npm run typecheck	Type-check all three TS projects without emitting: library source, build scripts, and the Code Connect templates.
npm run tokens:build	Regenerate every platform's tokens from tokens/cheddar.tokens.json.
npm run tokens:check	Fail if any generated token output is stale (CI guard).
npm run assets:check	Fail if the demo-asset manifest references a file that is missing or empty.
npm run make-kit:check	Validate the packed guidance, eight recipes, exports, shell, and forbidden drift patterns.
npm run test	Interaction + accessibility tests (Vitest, jsdom).
npm run test:a11y	Accessibility tests only (axe-core).
npm run test:consumer	Pack the library, install it in a React 18.3.1 Vite fixture, and verify styles, fonts, images, refs, and build output.
npm run test:visual	Screenshot tests against the gallery (Playwright + Chromium). Local-only — see below.
npm run test:visual:update	Re-record screenshot baselines.
npm run verify	tokens:check + assets:check + lint + typecheck + test.
npm run release:check	release:check-targets + verify + build + Code Connect validation + npm pack --dry-run. Run this before tagging.
npm run release:publish	Build once, pack once, and publish that tarball to every Figma registry in publish-targets.json under npm's latest tag.
npm run release:publish:dry-run	Same, without uploading. Echoes back which registry each target would hit.
npm run release:check-targets	Probe every target: registry reachable, credentials accepted, and whether it already holds this version. Seconds, no build.
(guard)	prepublishOnly refuses a bare npm publish, which would silently reach only one instance. Not run for tarball publishes, so release:publish is unaffected.
npm run figma:check-urls	Verify every .figma.ts URL points at the file in figma.config.json. Node IDs are validated by figma:publish:dry-run, which resolves them against the live file.
npm run figma:url-sync	Refresh stale node URLs in .figma.ts files.
npm run figma:publish	Publish Code Connect mappings to the Figma file. Runs figma:url-sync first.
npm run figma:publish:dry-run	Same as above but no upload — useful for previewing the diff.
npm run figma:unpublish	Remove Code Connect mappings from the Figma file.
Visual tests
Playwright specs and Chromium screenshot baselines under tests/visual/ are committed. They cover every foundation/component gallery section, theme state, interaction, font, and icon knockout behavior. Regenerate baselines only after reviewing the rendered change:

npm run test:visual:update
Build output
npm run build produces the following in dist/:

Output	Description
dist/index.js	ESM component bundle (tree-shakeable)
dist/index.d.ts	TypeScript declarations
dist/styles/index.css	All-in-one stylesheet — imports fonts → tokens → foundation → component layers → typography in order
dist/styles/fonts.css	Official Mona Sans variable face plus Oswald declarations
dist/styles/tokens.css	CSS custom properties (design tokens)
dist/styles/foundation.css	Package foundations and accessibility utilities
dist/styles/components.css	All component class definitions
dist/fonts/	Self-contained .woff2 files and Mona Sans OFL license
dist/tokens/cheddar.tokens.json	The authoritative DTCG token document
dist/tokens/tokens.js + .d.ts	Typed token accessors (@screentime/cheddar-ds/tokens)
dist/demo/	Directly importable imagery (@screentime/cheddar-ds/demo/*)
dist/make-kit/	The guideline snapshot verified with this build
dist/platforms/swift/CheddarTokens.swift	Generated SwiftUI tokens
Tokens
tokens/cheddar.tokens.json is the single source of truth (DTCG 2025.10). Everything else is generated from it by scripts/build-tokens.mjs:

tokens/cheddar.tokens.json
        ├── src/styles/tokens.css                  web / React
        ├── src/tokens/tokens.ts                   typed accessors
        └── platforms/swift/CheddarTokens.swift     SwiftUI
Never hand-edit a generated file — change the JSON and run npm run tokens:build. npm run tokens:check fails the build if an output has drifted.

Semantic tokens use their base $value for Light and carry Dark overrides in $extensions["com.cheddar.mode"].dark; Brand is the collection name, not a mode. Brand selection alpha is preserved end-to-end: as rgba() in CSS and as opacity on CheddarColor in Swift. Tokens that are brand-derived tints declare a com.cheddar.mix recipe so every platform stays reactive to the selected brand instead of freezing a magenta value.

Layout and theming
The package does not prescribe a page shell. Consuming applications own their content width, breakpoints, scrolling, safe areas, grids, sidebars, and persistent-navigation placement. This keeps the same components usable in mobile flows and fluid full-page applications. The gallery contains foundations and component specimens only; full screens and flows belong in consumer code.

ThemeScope provides layout-neutral Light/Dark and alternate-brand token resolution. Brand-filled regions are explicit app compositions, not a third mode. The Make Kit's styles.md contains an app-owned 430px reference layout for reproducing those mobile screens, plus a fluid full-page example.

Publishing / distribution
The DS reaches consumers through two channels, both under the package name @screentime/cheddar-ds:

Channel	Consumer	How it's distributed
Figma registries — Figma Advocates and Figma instances	Figma Make	npm run release:publish (published versions)
GitHub (git+ssh)	App code outside Make	Consumers install directly from the matching GitHub release tag
Why not GitHub Packages? The figma org blocks classic personal access tokens and GitHub Packages' npm registry does not support fine-grained tokens, so the app code is consumed straight from git over SSH.

Figma registries (@screentime)
The package name is the same on both instances, so one build serves both. The targets are declared in publish-targets.json — add or remove an instance there, not in a script:

[
  { "id": "advocates", "label": "Figma Advocates", "registry": "https://registry.figma.com/npm/<advocates-uuid>/registry/" },
  { "id": "figma", "label": "Figma", "registry": "https://registry.figma.com/npm/<figma-uuid>/registry/" }
]
Credentials live in the publisher's .npmrc (gitignored, so tokens are never committed). Copy .npmrc.example and fill in one token per instance:

@screentime:registry=https://registry.figma.com/npm/<advocates-uuid>/registry/
//registry.figma.com/npm/<advocates-uuid>/registry/:_authToken=<advocates-token>
//registry.figma.com/npm/<figma-uuid>/registry/:_authToken=<figma-token>
Both tokens coexist because npm matches _authToken lines by URI path prefix and the two instances differ in their path.

The @screentime:registry= line decides where an unqualified npm install or npm publish in this repo goes, and it is worth understanding before touching the publish path:

A scope mapping outranks --registry. With @screentime:registry set, npm publish --registry=<somewhere-else> is silently ignored and the package goes to the mapped registry. Verified against these registries: npm view @screentime/cheddar-ds --registry=http://127.0.0.1:9/ still returns a version from the Advocates instance, while adding --@screentime:registry=http://127.0.0.1:9/ correctly fails to connect.

This is why the old publish:figma script only appeared to work — its --registry flag did nothing, and the scope mapping happened to point at the intended registry. With two instances that same setup would publish both releases to whichever one the mapping named.

release:publish therefore passes both --registry and --@screentime:registry on every command, so the target is never ambiguous and never depends on what .npmrc happens to map. Either instance can sit on the scope line.

Nobody has to remember that, either: a prepublishOnly guard refuses a bare npm publish and points at release:publish. npm fires that hook only for a directory publish, so it never interferes with the tarball publishes release:publish performs. Override it with CHEDDAR_ALLOW_BARE_PUBLISH=1 if you genuinely mean to ship to one instance by hand.

To release: bump version in package.json, then run npm run release:publish. It builds once, packs once, and publishes that same tarball to each target in turn, which is what makes a given version byte-identical across instances — the sha256 it prints is the receipt. Publishing a tarball skips the pack lifecycle, so nothing is rebuilt between targets.

A target that already holds the version is skipped rather than failed. That makes a partial failure safe to re-run, and lets a newly added instance be backfilled without disturbing the ones already up to date. Scope a run with --target=<id>:

npm run release:publish -- --target=figma
npm run release:publish:dry-run          # rehearse both, upload nothing
npm run release:check-targets            # just probe the registries
Every target is probed before the build, so a bad URL or a missing token fails in seconds instead of between the two publishes. The probe reads the package document with the credentials on hand. Note what that does and does not prove: npm whoami is not usable here because the Figma registries do not implement /-/whoami, and npm redacts npm config get :_authToken, so an authenticated read is the strongest available signal. It confirms read access — a token too narrowly scoped to publish would still fail at the publish step.

GitHub release (app code)
Consumers install from the Git tag and the prepare script builds dist/ during installation. The tag must point at the committed release contents; never tag the previous release while the version bump is still uncommitted.

For 1.4.2, use this order after the release commit has landed on main:

npm run release:check
git tag v1.4.2
npm run release:publish
npm run figma:publish
git push origin v1.4.2
gh release create v1.4.2 --verify-tag --generate-notes --title "v1.4.2"
release:publish updates both Figma npm registries, and figma:publish publishes Code Connect from the same release revision. Pushing the matching tag enables Git installs, and the final command creates the GitHub Release object. If either publish fails, do not push the tag; fix the failure and safely rerun it.

Note: Use npm pack to inspect what would be shipped; do not rely on --dry-run publishes.

Installing as a consumer
Both channels install under the name @screentime/cheddar-ds; only the dependency source differs.

Option A — Git install (git+ssh, for app code)
Add the DS to your app's package.json, pinned to a tag (or branch/commit):

{
  "dependencies": {
    "@screentime/cheddar-ds": "git+ssh://git@github.com/figma/screentime-cheddar-ds.git#v1.4.2"
  }
}
Then run npm install. npm clones the repo over SSH, runs the prepare script to build dist/, and packs it — so dist/ does not need to be committed. This relies only on your existing SSH access to the repo; no registry token is required. CI runners must also have an SSH key (or git token) with read access to the repo.

To update, bump the tag/ref in your app's package.json and reinstall.

npm also accepts a range here — …screentime-cheddar-ds.git#semver:^1.4.2 resolves against the repo's tags — but an explicit tag is the documented form on purpose. This package's version numbers have not always strictly tracked semver: 1.2.2 removed public exports, and a caret range would have delivered that as an automatic upgrade. Pinning keeps every DS bump a visible, reviewable line in the consuming app's diff. Either form records the resolved commit in package-lock.json, so committed lockfiles install identically; the range only drifts when the lockfile is regenerated.

Option B — Figma registry (@screentime, for Figma Make)
Add the dependency to your Make project's package.json and Make resolves it against its preconfigured registry — no .npmrc or scope mapping needed:

{
  "dependencies": {
    "@screentime/cheddar-ds": "^1.4.2"
  }
}
This channel is for Figma Make only. For app code outside Make, use Option A.

The guidelines that ship alongside the package in the Make kit live in docs/make-kit/ — Guidelines.md is the entry point Make always loads, with setup.md, styles.md, tokens.md, and components.md behind it. docs/make-kit/test-prompt.md is the prompt and checklist for testing whether Make actually uses the package correctly; run it after every guidelines edit or release.

Usage (both channels)
Peer dependencies: react@^18.3.1 || ^19.0.0, react-dom@^18.3.1 || ^19.0.0.

The package root loads the all-in-one stylesheet automatically. The explicit subpath remains available for layered or legacy setups:

import '@screentime/cheddar-ds/styles.css'
Types ship with the package (dist/index.d.ts) — no separate @types/* install needed. Ensure your app's TypeScript moduleResolution is bundler, node16, or nodenext so the package's exports map and type declarations resolve correctly.
