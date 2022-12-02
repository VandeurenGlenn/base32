import typescript from '@rollup/plugin-typescript';

export default [{
  input: ['./src/base32.ts'],
  output: [{
    dir: './dist',
    format: 'es'
  }],
  plugins: [
    typescript()
  ]
}]
