# Cannot find module 'random string' - bug with Parcel and Firebase when using shared bundles

This is a minimum reproduction of a bug I encountered trying to initialize a firebase app on multiple HTML file entrypoints.

The shared firebase initialization code seems to be bundled together, and both pages end up importing the auth
module twice, which I believe causes the 'cannot find module' error.

To reproduce:
- Install dependencies with `npm install`
- Run `npm run reproduce` to build the HTML files and run a dev server, serving an html page on `localhost:3000`
- Inspect either page1 or page2, opening the development console to see the module not found error (and occassionally refreshing with shift+f5 if the error doesn't immediately show up, sometimes it randomly works)
- Swich `package.json` to `package-that-works.json`, effectively disabling bundling
- Re-run `npm run reproduce` and see that the error has resolved