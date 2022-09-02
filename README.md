# pyodide-for-v3-extension
Example of modifications required to make pyodide usable within a Chrome extension with manifest v3. Code is built js of `pyodide`, copied and then modified.

Start:

```
npm i
npm run serve
```

When you click on the `Ping` button in the browser, you should see a message printed in service worker logs. Because this service worker is a module-type service worker, it will not work on Firefox. It should work in Chrome and Safari.
