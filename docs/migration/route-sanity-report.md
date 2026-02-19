# Draft Route Sanity Report

Date: 2026-02-19

## Scope

- Validate migrated draft routes under `drafts/` still contain expected commerce drop-in wrapper blocks.
- Validate page shell structure (`<header>`, `<main>`, `<footer>`) for full page routes.

## Results

- Status: pass
- Full page routes: all include `<header></header>`, `<main>`, and `<footer></footer>`.
- Expected fragments without full-page shell:
  - `drafts/nav.plain.html`
  - `drafts/footer.plain.html`
  - `drafts/customer/sidebar-fragment.plain.html`

## Wrapper Coverage Snapshot

- Product/cart:
  - `/products` -> `.product-list-page`
  - `/products/default` -> `.product-details`
  - `/cart` -> `.commerce-cart`
- Guest order/returns:
  - `/order-status` -> `.commerce-search-order`, `.commerce-order-status`
  - `/order-details` -> `.commerce-order-header`, `.commerce-order-product-list`, `.commerce-order-cost-summary`
  - `/return-details` -> `.commerce-return-header`, `.commerce-order-returns`
  - `/create-return` -> `.commerce-create-return`
- Customer account/B2B:
  - `/customer/account` -> `.commerce-account-sidebar`, `.commerce-account-header`, `.commerce-account-nav`
  - `/customer/orders` -> `.commerce-order-header`, `.commerce-orders-list`
  - `/customer/order-details` -> `.commerce-order-header`, `.commerce-order-product-list`, `.commerce-order-returns`, `.commerce-order-cost-summary`
  - `/customer/returns` -> `.commerce-return-header`, `.commerce-returns-list`
  - `/customer/return-details` -> `.commerce-return-header`, `.commerce-order-returns`
  - `/customer/create-return` -> `.commerce-create-return`
  - `/customer/requisition-lists` -> `.commerce-b2b-requisition-list`
  - `/customer/requisition-list-view` -> `.commerce-b2b-requisition-list-view`
  - `/customer/negotiable-quote` -> `.commerce-b2b-negotiable-quote`
  - `/customer/negotiable-quote-template` -> `.commerce-b2b-negotiable-quote-template`
  - `/customer/purchase-orders` -> `.commerce-b2b-po-header`, `.commerce-b2b-po-company-purchase-orders`, `.commerce-b2b-po-customer-purchase-orders`, `.commerce-b2b-po-require-approval-purchase-orders`
  - `/customer/purchase-order-details` -> `.commerce-b2b-po-header`, `.commerce-b2b-po-status`, `.commerce-b2b-po-comments-list`, `.commerce-b2b-po-comment-form`, `.commerce-b2b-po-history-log`, `.commerce-b2b-po-approval-flow`
  - `/customer/approval-rules` -> `.commerce-b2b-po-approval-rules-list`
  - `/customer/approval-rule` -> `.commerce-b2b-po-approval-rule-form`
  - `/customer/approval-rule-details` -> `.commerce-b2b-po-approval-rule-details`
  - `/customer/company-profile` -> `.commerce-company-profile`
  - `/customer/company-users` -> `.commerce-company-users`
  - `/customer/company-roles-permissions` -> `.commerce-company-roles-permissions`
  - `/customer/company-structure` -> `.commerce-company-structure`
  - `/customer/company-credit` -> `.commerce-company-credit`
  - `/customer/company-info` -> `.commerce-customer-company`

## Notes

- This validates authored route structure and wrapper presence only.
- Runtime behavior, permissions, and API-driven state still require environment-backed functional validation.
