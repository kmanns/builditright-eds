# DA Publish Runbook

Date: 2026-02-19

Use this runbook during DA (`da.live`) execution. Mark each item as complete when done.

First generate DA-ready content from local drafts:

```bash
npm run migration:da-content
```

## Batch 0: Fragments

- [ ] `/nav` created from `drafts/da/nav.plain.html`
- [ ] `/footer` created from `drafts/da/footer.plain.html`
- [ ] `/customer/sidebar-fragment` created from `drafts/da/customer/sidebar-fragment.plain.html`
- [ ] preview validated for all 3 fragments
- [ ] fragments published

## Batch 1: Global Storefront

- [ ] `/index` from `drafts/da/index.html`
- [ ] `/products` from `drafts/da/products.html`
- [ ] `/products/default` from `drafts/da/products/default.html`
- [ ] `/cart` from `drafts/da/cart.html`
- [ ] preview validated for batch
- [ ] batch published

## Batch 2: Guest Order/Return

- [ ] `/order-status` from `drafts/da/order-status.html`
- [ ] `/order-details` from `drafts/da/order-details.html`
- [ ] `/return-details` from `drafts/da/return-details.html`
- [ ] `/create-return` from `drafts/da/create-return.html`
- [ ] preview validated for batch
- [ ] batch published

## Batch 3: Customer Auth

- [ ] `/customer/login` from `drafts/da/customer/login.html`
- [ ] `/customer/create-account` from `drafts/da/customer/create-account.html`
- [ ] `/customer/forgotpassword` from `drafts/da/customer/forgotpassword.html`
- [ ] `/customer/confirm-account` from `drafts/da/customer/confirm-account.html`
- [ ] `/customer/create-password` from `drafts/da/customer/create-password.html`
- [ ] preview validated for batch
- [ ] batch published

## Batch 4: Customer Account Core

- [ ] `/customer/account` from `drafts/da/customer/account.html`
- [ ] `/customer/orders` from `drafts/da/customer/orders.html`
- [ ] `/customer/order-details` from `drafts/da/customer/order-details.html`
- [ ] `/customer/address` from `drafts/da/customer/address.html`
- [ ] `/customer/returns` from `drafts/da/customer/returns.html`
- [ ] `/customer/return-details` from `drafts/da/customer/return-details.html`
- [ ] `/customer/create-return` from `drafts/da/customer/create-return.html`
- [ ] preview validated for batch
- [ ] batch published

## Batch 5: B2B Requisition/Quote

- [ ] `/customer/requisition-lists` from `drafts/da/customer/requisition-lists.html`
- [ ] `/customer/requisition-list-view` from `drafts/da/customer/requisition-list-view.html`
- [ ] `/customer/negotiable-quote` from `drafts/da/customer/negotiable-quote.html`
- [ ] `/customer/negotiable-quote-template` from `drafts/da/customer/negotiable-quote-template.html`
- [ ] preview validated for batch
- [ ] batch published

## Batch 6: B2B Purchase Orders/Approvals

- [ ] `/customer/purchase-orders` from `drafts/da/customer/purchase-orders.html`
- [ ] `/customer/purchase-order-details` from `drafts/da/customer/purchase-order-details.html`
- [ ] `/customer/approval-rules` from `drafts/da/customer/approval-rules.html`
- [ ] `/customer/approval-rule` from `drafts/da/customer/approval-rule.html`
- [ ] `/customer/approval-rule-details` from `drafts/da/customer/approval-rule-details.html`
- [ ] preview validated for batch
- [ ] batch published

## Batch 7: B2B Company Management

- [ ] `/customer/company-profile` from `drafts/da/customer/company-profile.html`
- [ ] `/customer/company-users` from `drafts/da/customer/company-users.html`
- [ ] `/customer/company-roles-permissions` from `drafts/da/customer/company-roles-permissions.html`
- [ ] `/customer/company-structure` from `drafts/da/customer/company-structure.html`
- [ ] `/customer/company-credit` from `drafts/da/customer/company-credit.html`
- [ ] `/customer/company-info` from `drafts/da/customer/company-info.html`
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
