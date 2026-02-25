# DA Copy/Paste Pack

Use this as the fast execution sheet in `da.live`.

Format per row:
- `DA path` -> copy from `local file`

Before executing this sheet, generate DA-ready files:

```bash
npm run migration:da-content
```

## Batch 0: Fragments

- `/nav` -> `drafts/da/nav.plain.html`
- `/footer` -> `drafts/da/footer.plain.html`
- `/customer/sidebar-fragment` -> `drafts/da/customer/sidebar-fragment.plain.html`

## Batch 1: Global Storefront

- `/index` -> `drafts/da/index.html`
- `/products` -> `drafts/da/products.html`
- `/products/default` -> `drafts/da/products/default.html`
- `/cart` -> `drafts/da/cart.html`

## Batch 2: Guest Order/Return

- `/order-status` -> `drafts/da/order-status.html`
- `/order-details` -> `drafts/da/order-details.html`
- `/return-details` -> `drafts/da/return-details.html`
- `/create-return` -> `drafts/da/create-return.html`

## Batch 3: Customer Auth

- `/customer/login` -> `drafts/da/customer/login.html`
- `/customer/create-account` -> `drafts/da/customer/create-account.html`
- `/customer/forgotpassword` -> `drafts/da/customer/forgotpassword.html`
- `/customer/confirm-account` -> `drafts/da/customer/confirm-account.html`
- `/customer/create-password` -> `drafts/da/customer/create-password.html`

## Batch 4: Customer Account Core

- `/customer/account` -> `drafts/da/customer/account.html`
- `/customer/orders` -> `drafts/da/customer/orders.html`
- `/customer/order-details` -> `drafts/da/customer/order-details.html`
- `/customer/address` -> `drafts/da/customer/address.html`
- `/customer/returns` -> `drafts/da/customer/returns.html`
- `/customer/return-details` -> `drafts/da/customer/return-details.html`
- `/customer/create-return` -> `drafts/da/customer/create-return.html`

## Batch 5: B2B Requisition/Quote

- `/customer/requisition-lists` -> `drafts/da/customer/requisition-lists.html`
- `/customer/requisition-list-view` -> `drafts/da/customer/requisition-list-view.html`
- `/customer/negotiable-quote` -> `drafts/da/customer/negotiable-quote.html`
- `/customer/negotiable-quote-template` -> `drafts/da/customer/negotiable-quote-template.html`

## Batch 6: B2B Purchase Orders/Approvals

- `/customer/purchase-orders` -> `drafts/da/customer/purchase-orders.html`
- `/customer/purchase-order-details` -> `drafts/da/customer/purchase-order-details.html`
- `/customer/approval-rules` -> `drafts/da/customer/approval-rules.html`
- `/customer/approval-rule` -> `drafts/da/customer/approval-rule.html`
- `/customer/approval-rule-details` -> `drafts/da/customer/approval-rule-details.html`

## Batch 7: B2B Company Management

- `/customer/company-profile` -> `drafts/da/customer/company-profile.html`
- `/customer/company-users` -> `drafts/da/customer/company-users.html`
- `/customer/company-roles-permissions` -> `drafts/da/customer/company-roles-permissions.html`
- `/customer/company-structure` -> `drafts/da/customer/company-structure.html`
- `/customer/company-credit` -> `drafts/da/customer/company-credit.html`
- `/customer/company-info` -> `drafts/da/customer/company-info.html`

## Quick Local Copy Commands

If you want to dump a file quickly in terminal before copying:

```bash
cat drafts/da/products.html
cat drafts/da/customer/account.html
cat drafts/da/customer/purchase-orders.html
```
