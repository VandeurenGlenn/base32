import typescript from '@rollup/plugin-typescript';

export default [{
  input: ['./src/index.ts'],
  output: [{
    dir: './',
    format: 'es'
  }],
  external: [
    '@vandeurenglenn/base-x'
  ],
  plugins: [
    typescript({
      "compilerOptions": {
        "allowJs": true,
        "target": "es2022",
        "declaration": true,
        "declarationDir": './'
      },
      include: ['./src/**'],
      exclude: ['./node_modules']
    })
  ]
}]
