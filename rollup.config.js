import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: ["./src/index.ts"],
    output: [
      {
        dir: "./",
        format: "es",
      },
    ],
    external: ["@vandeurenglenn/base-x"],
    plugins: [typescript()],
  },
];
