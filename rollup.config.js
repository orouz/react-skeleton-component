import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"
import postcss from "rollup-plugin-postcss"
import pkg from "./package.json"
import typescript from "typescript"
import typescriptPlugin from "rollup-plugin-typescript2"
export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs"
    },
    {
      file: pkg.module,
      format: "es"
    }
  ],
  external: ["react", "react-dom", "prop-types"],
  plugins: [
    postcss({}),
    commonjs({}),
    resolve(),
    typescriptPlugin({
      typescript,
      verbosity: 3,
      tsconfig: "tsconfig.json"
    })
  ]
}
