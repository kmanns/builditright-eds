# Content Source Migration Checklist

Date: 2026-02-19

## Purpose

Move finalized local draft pages in `drafts/` into your EDS content source in a controlled order, preserving route contracts and fragment dependencies.

## Assumptions

- Content source paths mirror storefront route paths (recommended).
- `nav` and `footer` are maintained as plain fragments.
- Authoring system can publish pages and fragments independently.
- ACCS endpoint/config wiring in codebase is already complete.
- Authoring/publishing is done in DA (`da.live`).

## DA/da.live Workflow

Use this execution model for every route in this checklist:

1. Generate DA-ready files: `npm run migration:da-content`.
2. In DA Site Admin, create the target document path (for example `/customer/orders`).
3. Copy content from the matching local `drafts/da/*.html` file into the DA document body.
4. Save and preview the DA document.
5. Verify route rendering on preview URL before publishing.
6. Publish document from DA.

Important:

- DA documents should be named by route (for example `/nav`), not with a `.plain` suffix.
- Runtime fetches fragment routes as `.plain.html` automatically.

For fragments:

1. Create fragment documents at:
   - `/nav`
   - `/footer`
   - `/customer/sidebar-fragment`
2. Paste content from local DA-ready fragment source files:
   - `drafts/da/nav.plain.html`
   - `drafts/da/footer.plain.html`
   - `drafts/da/customer/sidebar-fragment.plain.html`
3. Publish fragments first before dependent pages.
4. Runtime resolves these as `.plain.html` automatically (for example `/nav` -> `/nav.plain.html`).

## Route Mapping Plan

Use the following source-to-content-path mapping:

| Local Draft File | Storefront Route | Target Content Path |
|---|---|---|
| `drafts/index.html` | `/` | `/index` |
| `drafts/products.html` | `/products` | `/products` |
| `drafts/products/default.html` | `/products/default` | `/products/default` |
| `drafts/cart.html` | `/cart` | `/cart` |
| `drafts/order-status.html` | `/order-status` | `/order-status` |
| `drafts/order-details.html` | `/order-details` | `/order-details` |
| `drafts/return-details.html` | `/return-details` | `/return-details` |
| `drafts/create-return.html` | `/create-return` | `/create-return` |
| `drafts/customer/login.html` | `/customer/login` | `/customer/login` |
| `drafts/customer/create-account.html` | `/customer/create-account` | `/customer/create-account` |
| `drafts/customer/forgotpassword.html` | `/customer/forgotpassword` | `/customer/forgotpassword` |
| `drafts/customer/confirm-account.html` | `/customer/confirm-account` | `/customer/confirm-account` |
| `drafts/customer/create-password.html` | `/customer/create-password` | `/customer/create-password` |
| `drafts/customer/account.html` | `/customer/account` | `/customer/account` |
| `drafts/customer/orders.html` | `/customer/orders` | `/customer/orders` |
| `drafts/customer/order-details.html` | `/customer/order-details` | `/customer/order-details` |
| `drafts/customer/address.html` | `/customer/address` | `/customer/address` |
| `drafts/customer/returns.html` | `/customer/returns` | `/customer/returns` |
| `drafts/customer/return-details.html` | `/customer/return-details` | `/customer/return-details` |
| `drafts/customer/create-return.html` | `/customer/create-return` | `/customer/create-return` |
| `drafts/customer/requisition-lists.html` | `/customer/requisition-lists` | `/customer/requisition-lists` |
| `drafts/customer/requisition-list-view.html` | `/customer/requisition-list-view` | `/customer/requisition-list-view` |
| `drafts/customer/negotiable-quote.html` | `/customer/negotiable-quote` | `/customer/negotiable-quote` |
| `drafts/customer/negotiable-quote-template.html` | `/customer/negotiable-quote-template` | `/customer/negotiable-quote-template` |
| `drafts/customer/purchase-orders.html` | `/customer/purchase-orders` | `/customer/purchase-orders` |
| `drafts/customer/purchase-order-details.html` | `/customer/purchase-order-details` | `/customer/purchase-order-details` |
| `drafts/customer/approval-rules.html` | `/customer/approval-rules` | `/customer/approval-rules` |
| `drafts/customer/approval-rule.html` | `/customer/approval-rule` | `/customer/approval-rule` |
| `drafts/customer/approval-rule-details.html` | `/customer/approval-rule-details` | `/customer/approval-rule-details` |
| `drafts/customer/company-profile.html` | `/customer/company-profile` | `/customer/company-profile` |
| `drafts/customer/company-users.html` | `/customer/company-users` | `/customer/company-users` |
| `drafts/customer/company-roles-permissions.html` | `/customer/company-roles-permissions` | `/customer/company-roles-permissions` |
| `drafts/customer/company-structure.html` | `/customer/company-structure` | `/customer/company-structure` |
| `drafts/customer/company-credit.html` | `/customer/company-credit` | `/customer/company-credit` |
| `drafts/customer/company-info.html` | `/customer/company-info` | `/customer/company-info` |

## Fragment Dependencies

Publish these first:

1. `drafts/da/nav.plain.html` -> `/nav`
2. `drafts/da/footer.plain.html` -> `/footer`
3. `drafts/da/customer/sidebar-fragment.plain.html` -> `/customer/sidebar-fragment`

## Publish Sequence

Recommended rollout order:

1. Fragments
2. Global storefront routes:
   - `/`
   - `/products`
   - `/products/default`
   - `/cart`
3. Guest order/return routes:
   - `/order-status`
   - `/order-details`
   - `/return-details`
   - `/create-return`
4. Customer auth routes:
   - `/customer/login`
   - `/customer/create-account`
   - `/customer/forgotpassword`
   - `/customer/confirm-account`
   - `/customer/create-password`
5. Customer account core:
   - `/customer/account`
   - `/customer/orders`
   - `/customer/order-details`
   - `/customer/address`
   - `/customer/returns`
   - `/customer/return-details`
   - `/customer/create-return`
6. B2B requisition/quote:
   - `/customer/requisition-lists`
   - `/customer/requisition-list-view`
   - `/customer/negotiable-quote`
   - `/customer/negotiable-quote-template`
7. B2B purchase-order/approval:
   - `/customer/purchase-orders`
   - `/customer/purchase-order-details`
   - `/customer/approval-rules`
   - `/customer/approval-rule`
   - `/customer/approval-rule-details`
8. B2B company management:
   - `/customer/company-profile`
   - `/customer/company-users`
   - `/customer/company-roles-permissions`
   - `/customer/company-structure`
   - `/customer/company-credit`
   - `/customer/company-info`

## Post-Publish Smoke Checklist

For each published route:

1. Route resolves and renders with header/footer.
2. Expected primary wrapper block is present.
3. No missing-label errors in console (placeholders).
4. Basic interaction sanity:
   - PLP loads products.
   - PDP renders product detail wrapper.
   - Cart loads with summary.
   - Account and B2B routes render without immediate auth/runtime errors.

DA-specific checks:

1. DA preview URL resolves and reflects latest edits before publish.
2. Published URL reflects the same content as preview after cache propagation.
3. Fragment updates (`nav/footer/sidebar`) are visible on dependent routes.

## Sign-off Criteria

1. All routes in the mapping table are published.
2. Fragment dependencies are published and referenced correctly.
3. Smoke checklist passes on preview.
4. Rollout is promoted to live in the same sequence or via batched release windows.

## DA Rollback Approach

If a route regression is detected after publish:

1. Reopen the DA document.
2. Restore prior content revision in DA history.
3. Republish only the affected route (and fragment if applicable).
4. Re-run smoke checks for that route family.
