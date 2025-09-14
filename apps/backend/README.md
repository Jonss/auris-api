```
npm install
npm run dev
```

```
npm run deploy
```

# Local servidor
```
pnpm wrangler d1 execute saas_template --local --file=./drizzle/migrations/XXXX_my_migration.sql
```
# No servidor
```
pnpm wrangler d1 execute saas_template --remote --file=./migrations/0000_first_karnak.sql
```
