/*
 * @Author: xiaoning.li@inossem.com
 * @Date: 2022-08-05 18:43:20
 * @LastEditors: xiaoning.li@inossem.com
 * @LastEditTime: 2022-08-31 14:30:56
 * @Description: rollup 配置 配置文件是一个 ES 模块
 */

// 导出defineConfig方法可以让编辑器（VSCode）智能提示所有的rollup的配置项
import { defineConfig } from 'rollup'

import serve from 'rollup-plugin-serve'

import { babel } from '@rollup/plugin-babel'

import { onListeningServerRunning } from './src/utils/env.js'

import typescript from '@rollup/plugin-typescript'
export default defineConfig({
    input: 'src/main.ts', // 入口文件

    output: [
        {
            file: `lib/bundle.cjs.js`,
            format: 'cjs',
            exports: 'auto',
        },
        {
            file: `lib/bundle.es.js`,
            format: 'es',
            exports: 'auto',
        },
        {
            file: `lib/bundle.umd.js`,
            format: 'umd',
            name: 'toolsJs', // 打包为 umd 格式, 必须指定 name 字段 可以在script标签引入后window下会挂载该属性的变量来使用你的类库方法
            exports: 'auto',
        },
    ],
    plugins: [
        babel({
            // 建议显式配置此选项（即使使用其默认值），以便对如何将这些 babel 助手插入代码做出明智的决定
            babelHelpers: 'bundled',

            // Babel 应该转换的文件扩展名数组 如果你想用这个插件转译 TypeScript 文件，必须在这个选项中包含.ts和。.tsx
            extensions: ['.js', '.jsx', '.es6', '.es', '.mjs'],

            exclude: ['node_modules'],
        }),
        typescript(),
        serve({
            open: true,
            verbose: true,
            openPage: './index.html',
            port: 3002,
            onListening: onListeningServerRunning,
        }),
    ],

    watch: {
        include: 'src/**',
        exclude: 'node_modules/**',
        clearScreen: false,
    },
})
