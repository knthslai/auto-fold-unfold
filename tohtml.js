const e = require("../easy-markdown-it");

e.toHtmlFile(
  new URL("file:/home/levi/Code/auto-fold-unfold/README.md"),
  "/home/levi/Code/auto-fold-unfold/README.html",
  `*{font-size: 1rem;}
  body{margin-bottom: 20px;}
  h1{font-size: 1.75rem; border-bottom: 3px solid gray}
  h2{font-size: 1.5rem;}
  th,td{padding: 5px 10px;}
  td{border-top: 1px solid gray;}
  tr:nth-child(1) td{border-top: 2.5px solid gray;}
  ${require("fs")
    .readFileSync(
      "/home/levi/Code/easy-markdown-it/node_modules/markdown-it-highlight/dist/index.css"
    )
    .toString()
    .replace("background:#fafafa", "background:#01071d")}`,
  e.defaultPluginsArray
);
