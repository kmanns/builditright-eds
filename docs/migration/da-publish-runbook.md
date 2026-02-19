# DA Publish Runbook

Date: 2026-02-19

Use this runbook during DA (`da.live`) execution. Mark each item as complete when done.

## Batch 0: Fragments

- [ ] `/nav.plain` created from `drafts/nav.plain.html`
- [ ] `/footer.plain` created from `drafts/footer.plain.html`
- [ ] `/customer/sidebar-fragment.plain` created from `drafts/customer/sidebar-fragment.plain.html`
- [ ] preview validated for all 3 fragments
- [ ] fragments published

## Batch 1: Global Storefront

- [ ] `/index` from `drafts/index.html`
- [ ] `/products` from `drafts/products.html`
- [ ] `/products/default` from `drafts/products/default.html`
- [ ] `/cart` from `drafts/cart.html`
- [ ] preview validated for batch
- [ ] batch published

## Batch 2: Guest Order/Return

- [ ] `/order-status` from `drafts/order-status.html`
- [ ] `/order-details` from `drafts/order-details.html`
- [ ] `/return-details` from `drafts/return-details.html`
- [ ] `/create-return` from `drafts/create-return.html`
- [ ] preview validated for batch
- [ ] batch published

## Batch 3: Customer Auth

- [ ] `/customer/login` from `drafts/customer/login.html`
- [ ] `/customer/create-account` from `drafts/customer/create-account.html`
- [ ] `/customer/forgotpassword` from `drafts/customer/forgotpassword.html`
- [ ] `/customer/confirm-account` from `drafts/customer/confirm-account.html`
- [ ] `/customer/create-password` from `drafts/customer/create-password.html`
- [ ] preview validated for batch
- [ ] batch published

## Batch 4: Customer Account Core

- [ ] `/customer/account` from `drafts/customer/account.html`
- [ ] `/customer/orders` from `drafts/customer/orders.html`
- [ ] `/customer/order-details` from `drafts/customer/order-details.html`
- [ ] `/customer/address` from `drafts/customer/address.html`
- [ ] `/customer/returns` from `drafts/customer/returns.html`
- [ ] `/customer/return-details` from `drafts/customer/return-details.html`
- [ ] `/customer/create-return` from `drafts/customer/create-return.html`
- [ ] preview validated for batch
- [ ] batch published

## Batch 5: B2B Requisition/Quote

- [ ] `/customer/requisition-lists` from `drafts/customer/requisition-lists.html`
- [ ] `/customer/requisition-list-view` from `drafts/customer/requisition-list-view.html`
- [ ] `/customer/negotiable-quote` from `drafts/customer/negotiable-quote.html`
- [ ] `/customer/negotiable-quote-template` from `drafts/customer/negotiable-quote-template.html`
- [ ] preview validated for batch
- [ ] batch published

## Batch 6: B2B Purchase Orders/Approvals

- [ ] `/customer/purchase-orders` from `drafts/customer/purchase-orders.html`
- [ ] `/customer/purchase-order-details` from `drafts/customer/purchase-order-details.html`
- [ ] `/customer/approval-rules` from `drafts/customer/approval-rules.html`
- [ ] `/customer/approval-rule` from `drafts/customer/approval-rule.html`
- [ ] `/customer/approval-rule-details` from `drafts/customer/approval-rule-details.html`
- [ ] preview validated for batch
- [ ] batch published

## Batch 7: B2B Company Management

- [ ] `/customer/company-profile` from `drafts/customer/company-profile.html`
- [ ] `/customer/company-users` from `drafts/customer/company-users.html`
- [ ] `/customer/company-roles-permissions` from `drafts/customer/company-roles-permissions.html`
- [ ] `/customer/company-structure` from `drafts/customer/company-structure.html`
- [ ] `/customer/company-credit` from `drafts/customer/company-credit.html`
- [ ] `/customer/company-info` from `drafts/customer/company-info.html`
- [ ] preview validated for batch
- [ ] batch published

## Gate Checks per Batch

- [ ] no missing placeholders in console
- [ ] no immediate JS runtime errors
- [ ] expected main wrapper block renders
- [ ] header/footer render correctly

## Rollback

For any failed route:

- [ ] restore prior DA revision
- [ ] republish affected route
- [ ] rerun batch gate checks
