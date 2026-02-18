# Source-to-Target Migration Matrix

- Source repo analyzed: `/Users/kmanns/Documents/Edge Delivery/buildright-eds-playground` (fork of BuildRight prototype)
- Target repo: `/Users/kmanns/Documents/Edge Delivery/builditright-eds`
- Migration mode: phased
- Priority rule: ACCS/EDS best practices over source parity when conflicts occur

## 1) Route & Template Mapping

| Source route | Target route | Page type | Strategy | Tag |
|---|---|---|---|---|
| `/index.html` | `/` | Storefront landing | Use authored landing page with ACCS-compatible blocks and links into commerce flows | `content-only` |
| `/pages/login.html`, `/login.html` | `/customer/login` | Auth | Use existing auth drop-in route | `reuse-existing-block` |
| `/pages/signup.html`, `/signup.html` | `/customer/create-account` | Auth | Use existing create-account block + auth drop-in | `reuse-existing-block` |
| `/pages/account.html`, `/account.html` | `/customer/account` | Account dashboard | Use existing account header/nav/sidebar + company switcher | `reuse-existing-block` |
| `/pages/order-history.html` | `/customer/orders` | Order history | Use `commerce-orders-list` + order initializers | `reuse-existing-block` |
| `/pages/cart.html`, `/cart.html` | `/cart` | Cart | Use existing `commerce-cart` page contract | `reuse-existing-block` |
| `/pages/catalog.html` | `/products` | PLP | Use `product-list-page` + product discovery initializers | `adapt-existing-block` |
| `/pages/product-detail.html` | `/products/default` (template) or product URL | PDP | Use `product-details` + pdp initializer | `adapt-existing-block` |
| `/pages/build-configurator.html` | `/customer/requisition-lists` | B2B list creation | Reframe configurator intent to requisition-list flow | `adapt-existing-block` |
| `/pages/bom-review.html` | `/customer/negotiable-quote` | B2B quote flow | Use negotiable quote blocks | `adapt-existing-block` |
| `/pages/project-builder.html`, `/pages/builder.html` | `/customer/requisition-list-view` | B2B detail flow | Use requisition list detail page | `adapt-existing-block` |
| `/pages/dashboard.html`, `/pages/dashboard-templates.html`, `/pages/project-selector.html` | `/customer/account` (+ account subpages) | Dashboard | Collapse into ACCS account IA | `content-only` |

## 2) Block/Component Mapping

| Source block/component | Target block(s) | Strategy | Tag |
|---|---|---|---|
| `header`, `user-menu`, `mini-cart` | `header`, `commerce-mini-cart`, auth dropdown/company switcher renderers | Reuse target header architecture; avoid custom header JS fork | `reuse-existing-block` |
| `footer` | `footer` | Content + visual adaptation only | `reuse-existing-block` |
| `product-grid`, `product-tile`, `filters-sidebar` | `product-list-page` + discovery drop-ins | Implement source visual styling as wrapper CSS, not custom data fetching | `adapt-existing-block` |
| `product-gallery`, `product-detail`, `inventory-status`, `pricing-display`, `tier-badge` | `product-details` + storefront-pdp containers | Map UI affordances to PDP slot/container composition | `adapt-existing-block` |
| `cart-summary` | `commerce-cart` + `commerce-order-cost-summary` patterns | Preserve checkout data model; style parity only | `reuse-existing-block` |
| `project-builder`, `wizard-progress`, `wizard-sidebar`, `wizard-vertical-progress`, `project-filter`, `project-bundle` | `commerce-b2b-requisition-list`, `commerce-b2b-requisition-list-view`, `commerce-b2b-negotiable-quote-template` | Convert bespoke wizard to B2B-native requisition/template flows | `adapt-existing-block` |
| `breadcrumbs` | default content or existing nav pattern | Implement if needed as lightweight block later | `new-block-required` |
| `featured-products` | `product-recommendations`, cards/carousel | Use existing recommendations/event plumbing | `reuse-existing-block` |

## 3) Initializer & JS Architecture Mapping

| Source script area | Target architecture | Strategy | Tag |
|---|---|---|---|
| `scripts/app.js`, `url-router.js`, `site-config.js` | `scripts/scripts.js` + `scripts/commerce.js` + `default-site.json` | Keep ACCS initialization flow and config providers | `reuse-existing-block` |
| `scripts/auth.js` | `scripts/initializers/auth.js` + auth drop-in events | No duplicate auth state managers | `reuse-existing-block` |
| `cart-manager.js`, `cart-notification.js` | `scripts/initializers/cart.js` + `commerce-cart` blocks + event bus | Migrate only UX deltas | `adapt-existing-block` |
| `pricing-calculator.js`, BOM custom data logic | quote/requisition/purchase-order drop-ins | Preserve server-side truth from Commerce APIs | `adapt-existing-block` |
| `personalize-page.js`, persona scripts | `scripts/initializers/personalization.js` | Integrate via existing personalization initializer | `reuse-existing-block` |

## 4) Styling Token Mapping

| Source token family | Target token family | Action | Tag |
|---|---|---|---|
| `--color-brand-*` sapphire scale | existing drop-in `--color-brand-*` | Introduce as controlled brand override package (phase P2) | `adapt-existing-block` |
| `--color-accent-*` orange scale | add as optional custom tokens | Use only where B2B UX requires strong semantic distinction | `adapt-existing-block` |
| spacing/utilities (`--spacing-*`) | drop-in spacing tokens | Avoid utility-framework migration; map semantically in block CSS | `reuse-existing-block` |

## 5) Placeholders & Labels

| Source pattern | Target pattern | Action | Tag |
|---|---|---|---|
| static inline UI text in source scripts | placeholder JSON loading (`fetchPlaceholders`) | Externalize labels into placeholders by feature (`global`, `company`, `purchase-order`, `quote-management`) | `adapt-existing-block` |
| page-level hardcoded copy | content-authored copy in EDS documents | Move copy to authored content first | `content-only` |

## 6) Metadata / SEO Pattern Mapping

| Source pattern | Target pattern | Action | Tag |
|---|---|---|---|
| static HTML metadata | EDS metadata (`metadata.json`) + product metadata tooling | Use existing metadata pipeline and PDP metadata tooling | `reuse-existing-block` |
| file-based routes (`*.html`) | canonical folder routes | add route alias normalization + link rewrites; avoid serving legacy html routes long-term | `config-only` |

## 7) Locked Backlog (Phased)

### P0 (must complete first)
1. Foundation config + route alias compatibility.
2. PLP/PDP/cart/account route parity with existing ACCS blocks.
3. B2B core journeys: company profile/users + requisition + quote list/detail + PO list/detail.
4. Basic SEO sanity: canonical routing and metadata continuity.

### P1
1. Company roles/permissions, company structure, company credit.
2. Quote templates + B2B checkout and PO checkout-success flows.
3. Source visual parity for high-traffic templates.

### P2
1. Non-critical UX polish and branded design token package.
2. Optional new blocks only if parity gaps remain (`breadcrumbs` first candidate).
3. Expanded analytics validation and edge-case automation.

## 8) Immediate Changes Already Applied in Target

- Added legacy route alias normalization in `scripts/commerce.js`.
- Added legacy selector support in page-type detection for phased source content imports.
- Added explicit B2B flags in `default-site.json`:
  - `commerce-b2b-enabled: true`
  - `commerce-companies-enabled: true`
- Added P0 draft authored pages and fragment dependencies in `drafts/` for ACCS page skeleton testing:
  - `/`, `/products`, `/products/default`, `/cart`, `/customer/account`, `/customer/orders`, `/customer/requisition-lists`, `/customer/requisition-list-view`, `/customer/negotiable-quote`
  - `/nav.plain.html`, `/footer.plain.html`, `/customer/sidebar-fragment.plain.html`
- Added P0.1 draft authored route coverage for account and B2B subflows:
  - `/customer/login`, `/customer/create-account`, `/customer/forgotpassword`, `/customer/confirm-account`, `/customer/create-password`
  - `/customer/address`, `/customer/returns`, `/customer/order-details`, `/customer/return-details`, `/customer/create-return`
  - `/customer/negotiable-quote-template`
  - `/customer/purchase-orders`, `/customer/purchase-order-details`
  - `/customer/approval-rules`, `/customer/approval-rule`, `/customer/approval-rule-details`
  - `/customer/company-profile`, `/customer/company-users`, `/customer/company-roles-permissions`, `/customer/company-structure`, `/customer/company-credit`, `/customer/company-info`
  - guest flows: `/order-status`, `/order-details`, `/return-details`, `/create-return`
- Normalized account order route content for authoring parity:
  - `/customer/orders`
  - `/customer/purchase-orders`

## 9) Known Gaps Requiring Next Iterations

1. Source-specific authored content pages are not yet imported into target content source.
2. Placeholder JSON baseline files exist locally; feature-complete label sets still need migration authoring from source copy.
3. Full visual parity token package intentionally deferred to P2 to avoid regressions in checkout/account B2B flows.
