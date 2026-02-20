# BuildRight Migration Implementation Backlog

## Completed in this batch

1. Added legacy path normalization and route aliases for source `*.html` pages in `scripts/commerce.js`.
2. Extended `detectPageType()` compatibility for legacy source block classes (`product-detail`, `product-grid`, `mini-cart`).
3. Enabled B2B/companies flags in `default-site.json`.
4. Produced source-target migration matrix in `drafts/tmp/source-target-migration-matrix.md`.
5. Added P0 draft page skeletons under `drafts/` mapped to ACCS blocks:
   - `/products`, `/products/default`, `/cart`, `/customer/account`, `/customer/orders`, `/customer/requisition-lists`, `/customer/requisition-list-view`, `/customer/negotiable-quote`
6. Added fragment dependencies for local draft preview:
   - `/nav.plain.html`, `/footer.plain.html`, `/customer/sidebar-fragment.plain.html`
7. Expanded P0.1 draft route coverage for core ACCS account/B2B/guest flows:
   - `/customer/login`, `/customer/create-account`, `/customer/forgotpassword`, `/customer/confirm-account`, `/customer/create-password`
   - `/customer/address`, `/customer/returns`, `/customer/order-details`, `/customer/return-details`, `/customer/create-return`
   - `/customer/negotiable-quote-template`
   - `/customer/purchase-orders`, `/customer/purchase-order-details`
   - `/customer/approval-rules`, `/customer/approval-rule`, `/customer/approval-rule-details`
   - `/customer/company-profile`, `/customer/company-users`, `/customer/company-roles-permissions`, `/customer/company-structure`, `/customer/company-credit`, `/customer/company-info`
   - guest parity routes: `/order-status`, `/order-details`, `/return-details`, `/create-return`
8. Updated Cypress PLP smoke test to EDS storefront routing:
   - `cypress/src/tests/b2c/verifyProductListPage.spec.js` now validates `/products` route and `product-list-page` block presence instead of source prototype nav selectors.
9. Added draft storefront entry route:
   - `/index` as `drafts/index.html` with ACCS-friendly hero + recommendations block and links into product/account/company/cart flows.
10. Normalized key draft pages for content parity and maintainability:
   - reformatted and enriched `/products`, `/customer/create-account`, `/customer/company-profile` with breadcrumbs and clearer source-mapped copy.
11. Removed empty duplicate draft folders that shadowed `.html` routes (`/create-return`, `/order-details`, `/order-status`, `/return-details`).
12. Completed source copy/IA parity cleanup for key account order routes:
   - `/customer/orders`
   - `/customer/purchase-orders`
   - Added breadcrumb context, explicit page headings, and B2B-focused introductory copy while preserving existing drop-in wrappers.
13. Completed source copy/IA parity cleanup for detail routes:
   - `/customer/order-details`
   - `/customer/purchase-order-details`
   - Added breadcrumb context, page headings, metadata descriptions, and explanatory content while preserving existing ACCS drop-in wrappers.
14. Completed source copy/IA parity cleanup for guest order/return routes:
   - `/order-status`
   - `/order-details`
   - `/return-details`
   - `/create-return`
   - Added breadcrumb context, page headings, metadata descriptions, and explanatory content while preserving existing ACCS drop-in wrappers.
15. Completed source copy/IA parity cleanup for quote/requisition detail routes:
   - `/customer/negotiable-quote`
   - `/customer/negotiable-quote-template`
   - `/customer/requisition-list-view`
   - Added breadcrumb context and clearer B2B flow copy while preserving existing ACCS drop-in wrappers.
16. Completed source copy/IA parity cleanup for account/company management routes:
   - `/customer/login`
   - `/customer/address`
   - `/customer/company-users`
   - `/customer/company-roles-permissions`
   - `/customer/company-structure`
   - `/customer/company-credit`
   - `/customer/company-info`
   - Converted minified drafts to maintainable EDS structure and added breadcrumb + metadata context while preserving drop-in wrappers.
17. Completed source copy/IA parity cleanup for auth, returns, and approval routes:
   - `/customer/forgotpassword`
   - `/customer/confirm-account`
   - `/customer/create-password`
   - `/customer/returns`
   - `/customer/return-details`
   - `/customer/create-return`
   - `/customer/approval-rules`
   - `/customer/approval-rule`
   - `/customer/approval-rule-details`
   - Converted minified drafts to maintainable EDS structure and added breadcrumb + metadata context while preserving drop-in wrappers.
18. Normalized remaining core commerce draft page context:
   - `/cart`
   - `/products/default`
   - Added breadcrumb context and aligned explanatory copy with ACCS storefront flows.
19. Started placeholder externalization hardening with consumed-key coverage:
   - expanded `placeholders/global.json` for commerce cart/mini-cart, product list/PDP, and order/PO/return header labels.
   - expanded `placeholders/checkout.json` with checkout summary/address keys used by checkout containers.
   - expanded `placeholders/quote-management.json` with negotiable quote request button labels/messages.
   - expanded `placeholders/cart.json` with `Cart.PriceSummary.checkout`.
20. Completed second placeholder baseline expansion for account/B2B flows:
   - expanded `placeholders/account.json`, `placeholders/auth.json`, `placeholders/company.json`, `placeholders/company-switcher.json`.
   - expanded `placeholders/order.json`, `placeholders/purchase-order.json`, `placeholders/requisition-list.json`.
   - expanded `placeholders/search.json`, `placeholders/payment-services.json`, `placeholders/pdp.json`, `placeholders/recommendations.json`, `placeholders/wishlist.json`.
   - validated all placeholder JSON files for syntax.
21. Completed draft route sanity sweep:
   - validated wrapper presence for migrated commerce and B2B routes.
   - validated page shell structure for full pages (`header/main/footer`).
   - generated report: `docs/migration/route-sanity-report.md`.
22. Prepared content-source migration execution checklist:
   - route-to-content path mapping for all finalized draft pages.
   - fragment dependency plan and staged publish order.
   - post-publish smoke checklist and sign-off criteria.
   - DA/`da.live` authoring and publish workflow details added.
   - document: `docs/migration/content-source-migration-checklist.md`.
23. Added DA operational publish runbook:
   - batch-by-batch execution checklist with route mappings and gate checks.
   - document: `docs/migration/da-publish-runbook.md`.
24. Added DA copy/paste pack for fast execution:
   - minimal route-to-source list by publish batch.
   - document: `docs/migration/da-copy-paste-pack.md`.

## Phase Status

- P0 (route/block coverage): complete for planned core storefront + B2B route surface.
- Current workstream: P1 (authoring parity and IA hardening across migrated draft pages).

## How to preview locally (EDS authoring drafts)

1. Start EDS proxy against local drafts:
   - `npx -y @adobe/aem-cli up --no-open --html-folder drafts`
2. Open routes under `http://localhost:3000` (examples):
   - `/products`, `/products/default`, `/cart`
   - `/customer/account`, `/customer/orders`, `/customer/address`, `/customer/returns`
   - `/customer/requisition-lists`, `/customer/requisition-list-view`
   - `/customer/negotiable-quote`, `/customer/negotiable-quote-template`
   - `/customer/purchase-orders`, `/customer/purchase-order-details`
   - `/customer/approval-rules`, `/customer/approval-rule`, `/customer/approval-rule-details`
   - `/customer/company-profile`, `/customer/company-users`, `/customer/company-roles-permissions`, `/customer/company-structure`, `/customer/company-credit`
   - `/order-status`, `/order-details`, `/return-details`, `/create-return`
   - `/` (storefront landing)

## Next batch (P1)

1. Source copy and IA parity pass:
   - map source headings/body copy to each migrated route
   - align breadcrumbs and section intros with source intent
2. Placeholder externalization:
   - align placeholder values to finalized source-approved copy and localization strategy
3. Content source migration prep:
   - execute `docs/migration/content-source-migration-checklist.md` in preview environment
4. B2B route validation pass:
   - verify permission-driven redirects and visibility across PO/quote/company screens (runtime with backend)

## Validation gates

1. Root code quality: `npm run lint`
2. Functional smoke:
   - PLP/PDP/cart
   - account/auth
   - B2B requisition/quote/PO/company pages render without runtime errors
3. Cypress in EDS context:
   - `baseUrl` must point to active EDS proxy or preview URL, not static file server
   - specs copied from the source prototype may require selector updates (`.nav-drop`, old menu labels) to align with ACCS drop-in DOM
