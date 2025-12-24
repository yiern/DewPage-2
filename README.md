
  # DewPage

  This is a code bundle for DewPage. The original project is available at https://www.figma.com/design/TmLy1Pi5INR1fuMSn12Ldh/DewPage.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

  ## Deploying to GitHub Pages

  Run `npm run deploy` to build and deploy the application to GitHub Pages.

  The app is configured to work at `https://yiern.github.io/DewPage-2/` with proper routing support.

  **Important:** Make sure GitHub Pages is configured to serve from the `gh-pages` branch:
  1. Go to repository Settings > Pages
  2. Set Source to "Deploy from a branch"
  3. Select the `gh-pages` branch
  4. Click Save

  After running `npm run deploy`, the `gh-pages` branch will be automatically created/updated with the built files.

  **Troubleshooting:** If you see 404 errors or the app doesn't load, see [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) for detailed instructions.
  