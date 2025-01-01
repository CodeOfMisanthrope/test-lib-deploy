import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
import del from "rollup-plugin-delete";

import pkg from "./package.json" with { type: "json" };

const config = {
    input: "src/index.js",
    output: [
        {
            file: pkg.exports.require,
            name: pkg.name,
            format: "cjs",
            sourcemap: true,
        },
        {
            file: pkg.exports.import,
            name: pkg.name,
            format: "esm",
            sourcemap: true,
        }
    ],
    plugins: [
        del({ targets: "dist/*" }),
        commonjs(),
        terser(),
    ],
};

export default config;
