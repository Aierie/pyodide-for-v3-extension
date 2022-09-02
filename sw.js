// Requirements:
// No dynamic import (removed loadScripts)
// Manual import of pyodide.asm.js to replace the loadScripts call
// XMLHttpRequest polyfilled
// If CSP requirement (Chrome extension), no Function constructor
import "./pyodide.asm.js";
import { loadPyodide } from "./pyodide.mjs";
import { XMLHttpRequest } from "./xml-http-request.js";
self.XMLHttpRequest = XMLHttpRequest;

let pyodide;
let resolve;
let ready = new Promise((res) => {
  resolve = res;
});
async function start() {
  pyodide = await loadPyodide({});
  resolve();
  console.log('ready');
}

start();

self.addEventListener('message', async () => {
  await ready;
  console.log(
    'printing sys.version from python',
    pyodide.runPython(`
    import sys
    sys.version
  `)
  );
});