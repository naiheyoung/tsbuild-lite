import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import dts from 'rollup-plugin-dts'
import json from '@rollup/plugin-json'
import clean from 'rollup-plugin-delete'
import esbuild from 'rollup-plugin-esbuild'
import pkg from './package.json' assert { type: 'json' }

const input = 'src/index.ts'

export default [
  {
    input,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: pkg.module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      clean({ targets: 'dist/*' }),
      nodeResolve(),
      commonjs(),
      json(),
      esbuild({ target: 'esnext' })
    ]
  },
  {
    input,
    output: [
      {
        file: pkg.types
      }
    ],
    plugins: [dts()]
  }
]
