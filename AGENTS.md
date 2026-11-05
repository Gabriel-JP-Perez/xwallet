# Prototype Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Approved X Wallet direction
- First pass: approved animated hero plus store-account benefits section. Later passes add full shopping journey, preferences, FAQ and signup integration.
- Visual source: public/assets/approved-artwork.png. Preserve warm ivory, plum, Apple Card left, BofA debit right, three-card Apple Wallet stack inside phone, one dining multiplier on Gold only.
- No more generated images. Reuse supplied and issuer imagery; Phosphor category icons.
- Broader value includes store accounts, credits, permitted connected inbox promotions, coupons and loyalty, even with one payment card.
- Never fake successful signup or imply real payment execution. Existing live signup requires names; replacement is launch-pass scope.

## Pass 2 decisions
- Continue past the hero with concrete fictional purchase examples, wallet-size options, user preference controls, FAQ and closing signup.
- State that one card is enough; store accounts can be useful without linking cards, but remaining purchase balances need a payment method.
- Never equate an existing store-credit balance with newly earned savings. Label numerical offers as examples.
- Preview signup must stay honest until the real endpoint is available and storage has been tested. Do not publish or modify the existing Vercel website without a deployment request.

## Final interactive demo
- User authorized a hosted, clickable review site with no real backend or email collection on 2026-09-28. Use the existing Sites project identity after registration; GitHub is optional and not needed for this demo.
- Both forms validate email format and show an explicit demo-only confirmation. Do not send visitors to the live waitlist, persist email input, add analytics that captures it, or connect a signup backend unless separately requested.
