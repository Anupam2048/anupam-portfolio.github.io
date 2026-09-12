# Anupam Yadav — Portfolio v3

This version fixes the missing `@vitejs/plugin-react` dependency from v2.

## Fresh install — recommended

From this folder:

```powershell
npm install
npm run dev
```

## Production build

```powershell
npm run build
npm run preview
```

## If you already installed v2

Delete the old dependency state first:

```powershell
Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json -ErrorAction SilentlyContinue
npm install
npm run dev
```

The portfolio includes the two supplied Excel workbooks under `public/workbooks/`.
