# Troubleshooting GitHub Pages Deployment

## Problem: 404 Error for main.tsx or React App Not Loading

If you're seeing a 404 error for `/src/main.tsx` or the React application is not loading on GitHub Pages, this means GitHub Pages is serving files from the wrong location.

### Root Cause

The repository contains two `index.html` files:
1. **Root `index.html`** - Development file that references source files (`/src/main.tsx`)
2. **`build/index.html`** - Production file with bundled JavaScript assets

When GitHub Pages is misconfigured, it serves the development `index.html` which tries to load source files that don't exist in the deployment.

### Solution

#### Step 1: Verify Your Deployment

Run the deployment command to ensure the `gh-pages` branch is up to date:

```bash
npm install
npm run deploy
```

This will:
- Build the application
- Create/update the `gh-pages` branch with built files
- Push the `gh-pages` branch to GitHub

#### Step 2: Configure GitHub Pages Settings

1. Go to your repository on GitHub
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**:
   - Select **"Deploy from a branch"**
   - Select branch: **`gh-pages`** (NOT main or master)
   - Select folder: **`/ (root)`**
5. Click **Save**
6. Wait 1-3 minutes for GitHub Pages to rebuild

#### Step 3: Verify the Configuration

After a few minutes, your site should be live at:
```
https://yiern.github.io/DewPage-2/
```

### Common Issues

#### Issue: "gh-pages branch doesn't exist"

**Solution:** Run `npm run deploy` to create the branch.

#### Issue: "Site still shows 404 after configuration"

**Solutions:**
1. Clear your browser cache (Ctrl+Shift+Delete)
2. Wait a few more minutes (GitHub Pages can take up to 10 minutes to update)
3. Try accessing in an incognito/private window
4. Check the Actions tab for deployment status

#### Issue: "Assets not loading (404 for CSS/JS files)"

**Solution:** 
1. Verify the `base` setting in `vite.config.ts` matches your repository name
2. Should be: `base: '/DewPage-2/'`
3. Rebuild and redeploy: `npm run deploy`

### Verification Checklist

- [ ] `npm run deploy` completed successfully
- [ ] GitHub Pages settings configured to use `gh-pages` branch
- [ ] Waited at least 3 minutes after configuration change
- [ ] Cleared browser cache
- [ ] Site URL is correct: `https://yiern.github.io/DewPage-2/`

### Still Having Issues?

Check the following:
1. Repository Settings → Pages → Check for any error messages
2. Repository Actions tab → Look for failed deployments
3. Browser Console (F12) → Check for specific error messages
4. Verify `package.json` has correct `homepage` field: `"homepage": "https://yiern.github.io/DewPage-2"`

### Architecture Notes

**Development:**
- `index.html` loads `/src/main.tsx` directly
- Vite dev server handles TypeScript compilation
- Works with `npm run dev`

**Production:**
- `build/index.html` loads bundled `/DewPage-2/assets/index-[hash].js`
- All assets are pre-compiled and optimized
- Served from `gh-pages` branch by GitHub Pages

The key is ensuring GitHub Pages serves from the `gh-pages` branch (production build), not the main branch (development files).
