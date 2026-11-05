# X Wallet — interactive demo

A responsive marketing website built around the approved warm ivory and plum hero. Published as a private review site through Sites.

## Run

- `npm ci`
- `npm run dev -- --host 0.0.0.0 --port 4173 --strictPort`
- `npm run build`
- `npm run test:sites`

## Included

- Approved animated hero, real issuer card artwork and replay.
- Three fictional shopping examples with credits, eligible discounts and remaining balances.
- Interactive wallet selector: one card, several cards or store accounts only.
- Preference choices and expiring-offer switch.
- Expandable FAQs, section navigation, top and bottom signup forms.
- Responsive desktop/mobile layouts, keyboard interaction and reduced-motion CSS.

## Demo behavior

Both signup forms validate email format and then display “Demo complete. No email saved.” No email is transmitted, persisted, added to a waitlist or forwarded to the original signup. Inputs exist only in the page’s current React state and reset on reload. The forms do not require a backend. Preferences are also illustrative and do not persist.

The examples do not execute payments or connect cards, store accounts or inboxes. Compatibility, product availability and live integrations remain separate launch work. All numerical offers are fictional and labelled. Existing store credit is distinguished from a discount; any remaining balance still needs a payment method.

The original Vercel website is unchanged. Sites owns this demo’s source and deployment; retain the exact project ID in `.openai/hosting.json` for subsequent updates.

## Design and QA

Visual source: `public/assets/approved-artwork.png`. Exterior cards reuse that artwork; page text, controls and phone content are web UI. Sources are recorded in `asset-sources.md`. Full desktop/mobile verification evidence is in `qa/` and `design-qa.md`.
