# Pass 2 design QA

final result: passed

## Scope and visual truth

Source visual truth: `public/assets/approved-artwork.png` (1422 × 1106). The approved pass-1 implementation supplies the below-hero typography, spacing, tokens and icon language. The new lower-page sections intentionally extend that system; they are not claimed to match an unseen mockup.

Implementation: browser-rendered local Vite app, Chrome cloud tab 2. The previous preview process was stopped; it was restarted and the actual root page is left open. No public deployment performed.

## Evidence and normalization

- Full hero: `qa/pass2-hero-comparison.png`. Source normalized from 1422 × 1106 to 1138 × 885. Implementation rendered in a 1422 × 1106 CSS iframe at 0.8 scale, then cropped to 1138 × 885. Effective body width 1407 CSS px due to scrollbar. The same baseline state and scale are used for both sides.
- Current hero: `qa/pass2-hero.png`. Preserves approved headline, card arrangement, single dining multiplier, outline Apple logo, receipt and tagline.
- Focused phone comparison: `qa/pass2-phone-comparison.png`. Crops both sides of the current normalized full comparison. Real issuer images retain the acceptable pass-1 difference from the generated mock.
- Desktop lower-page evidence: `qa/pass2-benefits.jpg`, `qa/pass2-store-accounts.jpg`, `qa/pass2-wallet-desktop.png`, `qa/pass2-preferences-desktop.png`, `qa/pass2-faq-desktop.png`.
- Mobile: 390 × 844 CSS iframe, 375 px content plus scrollbar, scale 1. `qa/pass2-mobile-wallet.png`, `qa/pass2-mobile-preferences.png`, `qa/pass2-mobile-faq.png`, `qa/pass2-mobile-signup.png`.
- Mobile viewport overflow measurement: scrollWidth 375 equals clientWidth 375. Desktop: 1407 equals 1407.

## Comparison history and resolved findings

1. [P2] The visually styled preference switch had a 1 px native input hit area. A role-based uncheck action failed to update the state. Native inputs now cover their full visible labels. Rechecked switch and radio behavior on desktop and mobile; checked state and dependent copy update. Keyboard Space toggles the switch, and arrow keys change the radio selection. Evidence: browser state plus preference screenshots.
2. [P2] Hiding the FAQ heading’s line break on mobile joined two words. Added an explicit space. The final mobile FAQ screenshot shows the corrected wording and wrap.
3. [P2] Initial hash navigation could run before React created its targets. Added a mount-time anchor scroll. Direct section entry was then verified in the desktop wallet, preference and FAQ captures.

No actionable P0/P1/P2 findings remain in this frontend pass.

## Required fidelity surfaces

- Fonts/typography: self-hosted Inter retained. Approved hero sizing and weight unchanged. Lower-page headline hierarchy uses 60–68 px desktop and 39–51 px mobile, with legible body copy. FAQ wraps cleanly after the spacing fix.
- Spacing/layout: hero composition preserved. New sections use the existing maximum width, generous gaps and mobile stacking. Wallet selector fits at 375 px content width. All controls remain reachable; no horizontal overflow.
- Colors/tokens: ivory and muted plum retained; deeper plum provides the preference section’s contrast. No new competing accent palette. Green credit and warm coupon tints come from pass 1.
- Image quality/assets: original approved exterior cards and official issuer card images retained. Phosphor icons used throughout. No generated images or replacement drawings created. Hero raster sharpness remains a P3 item at very high density.
- Copy/content: concrete numbers are explicitly fictional examples. $7 − $5 credit = $2 remaining; $60 − 15% = $51; $80 − $10 = $70. The same payment card appears across these examples. No universal best-card, guaranteed savings or unsupported security certification claim. Store-only wording explains remaining payment needs.

## Interaction checks

- Hero navigation and section links; preserved replay behavior from pass 1.
- All three benefit tabs; ArrowRight keyboard navigation and matching content.
- Wallet options: one, several and store-only; native keyboard radio behavior.
- Preferences: all three choices; pointer switch and keyboard Space; live dependent copy.
- FAQ expand/collapse on desktop and mobile.
- Bottom email form: malformed email blocked by browser validation; valid synthetic input shows the explicit no-submission notice. Dismiss checked. Mobile notice remains reachable. Both forms have unique IDs and labels.
- Initial section anchors after React mounts.
- Browser console reviewed: no application error observed. Browser-extension metadata errors were present and are unrelated to app source.
- Final production build passed.

## Practical limits

- This is a frontend completion checkpoint, not a launch certification. Email storage, live payment behavior, card/store/inbox integrations and supported-product availability are not implemented or validated.
- Reduced-motion CSS was reviewed and covers the new animations/transitions, but OS-level emulation was not available in this browser session.
- No temporary QA HTML remains in shipping source.

## Checklist

- [x] Preserve and compare the approved hero.
- [x] Inspect new desktop and mobile layouts.
- [x] Verify core controls, keyboard interaction, FAQ and form validation.
- [x] Fix observed P2 issues and recapture evidence.
- [x] Remove temporary QA page and rebuild.
- [x] Save updated source, build and evidence checkpoint.

## Final demo handoff — 2026-09-28

The user explicitly deferred backend/email collection and requested a hosted interactive demo. Both forms now say that email will not be saved and display an explicit demo confirmation; the old live-signup redirect was removed. The layout and approved visuals are unchanged. This intentional scope change replaces the previous “remaining launch work” blocker for review. Hosting requires the bundled worker checks and final build.
