// Copies the hand-authored stylesheet into dist/. It's plain CSS with a bare
// `@import "@executar/design-tokens/theme.css"` — resolved by whichever
// bundler the consuming app uses (Vite/Astro resolve bare specifiers in CSS
// @import out of the box), so no actual bundling/transform is needed here.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
mkdirSync(join(root, "dist"), { recursive: true });
copyFileSync(join(root, "src", "styles.css"), join(root, "dist", "styles.css"));
console.log("Copied styles.css -> dist/styles.css");
