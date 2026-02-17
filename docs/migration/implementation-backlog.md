# BuildRight Migration Implementation Backlog

## Completed in this batch

1. Added legacy path normalization and route aliases for source `*.html` pages in `scripts/commerce.js`.
2. Extended `detectPageType()` compatibility for legacy source block classes (`product-detail`, `product-grid`, `mini-cart`).
3. Enabled B2B/companies flags in `default-site.json`.
4. Produced source-target migration matrix in `drafts/tmp/source-target-migration-matrix.md`.

## Next batch (P0 implementation)

1. Build target authored pages for:
   - `/products`
   - `/products/default`
   - `/cart`
   - `/customer/account`
   - `/customer/orders`
   - `/customer/requisition-lists`
   - `/customer/requisition-list-view`
   - `/customer/negotiable-quote`
2. Migrate source content copy and IA into ACCS page structures using existing commerce blocks.
3. Add placeholder sheets for migrated labels:
   - `placeholders/global.json`
   - `placeholders/company.json`
   - `placeholders/quote-management.json`
   - `placeholders/purchase-order.json`
4. Validate required B2B routes and redirects for account navigation flows.

## Validation gates for next batch

1. `npm run lint`
2. B2C smoke checks: PDP/PLP/cart/checkout
3. B2B checks: company + requisition + quote + purchase-order critical paths
