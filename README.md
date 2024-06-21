# bjs-vite-bug

## To reproduce

```cmd
cd bjs-vite-bug
npm i
npm run dev
```

Open browser

## Summary

Edge: ![alt text](image.png)
Safari: ![alt text](image-1.png)
Chrome: ![alt text](image-2.png)

Seems like somehow `index.html` content appears in shader code and breaks it.

## Solution

https://forum.babylonjs.com/t/fluentmaterial-fails-to-compile-via-vite/51518

