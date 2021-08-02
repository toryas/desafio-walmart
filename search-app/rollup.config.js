import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import replace from 'rollup-plugin-replace';

const packageJson = require("./package.json");

export default {
    input: "src/index.tsx",
    output: [
        {
            file: packageJson.main,
            format: "iife",
            sourcemap: true
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        replace({
            'process.env.REACT_APP_OFFER_HOST': process.env.REACT_APP_OFFER_HOST,
            'process.env.REACT_APP_OFFER_PORT': process.env.REACT_APP_OFFER_PORT,
        }),
        commonjs(),
        typescript({ useTsconfigDeclarationDir: true }),
        postcss()
    ]
};