/**
 * @Author  xiaoning.li@inossem.com
 * @Date 2022-07-27 13:51:14
 * @LastEditor xiaoning.li@inossem.com
 * @LastEditTime 2022-07-29 11:49:09
 * @Description rollup 配置 配置文件是一个 ES 模块
 */

import serve from 'rollup-plugin-serve'

import { babel } from '@rollup/plugin-babel'

import { onListeningServerRunning } from './src/utils/env.js'

import chalk from 'chalk'

export default {
    input: 'src/main.js', // 入口文件

    output: {
        file: 'dist/bundle.js', // 指定打包输出文件路径(区别于 webpak的 path)

        name: 'toolsJs', // 打包为 umd 格式, 必须指定 name 字段

        format: 'umd', // "amd", "cjs", "system", "es", "iife" or "umd"

        sourcemap: true, // 开启sourcemap
    },

    plugins: [
        babel({
            // 建议显式配置此选项（即使使用其默认值），以便对如何将这些 babel 助手插入代码做出明智的决定
            babelHelpers: 'bundled',

            // Babel 应该转换的文件扩展名数组 如果你想用这个插件转译 TypeScript 文件，必须在这个选项中包含.ts和。.tsx
            extensions: ['.js', '.jsx', '.es6', '.es', '.mjs'],

            exclude: ['node_modules'],
        }),
        serve({
            open: true,
            verbose: true,
            openPage: './index.html',
            port: 3002,
            onListening: onListeningServerRunning
//             onListening: function (server) {
//                 const address = server.address()
//                 console.log(address, getIPAddress())
//                 const ipHost = getIPAddress()
//                 const host = address.address === '::' ? 'localhost' : address.address
//                 const protocol = this.https ? 'https' : 'http'
//                 console.log(`
// - Local: ${chalk.red(`${protocol}://${host}:${address.port}/`)}
// - NetWork: ${chalk.green(`${protocol}://${ipHost}:${address.port}/`)}
//             `)
//             },
        }),
    ],

    watch: {
        include: 'src/**',
        exclude: 'node_modules/**',
        clearScreen: false,
    },
}
