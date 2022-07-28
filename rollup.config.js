const os = require('os')

const interfaces = os.networkInterfaces()

import serve from 'rollup-plugin-serve'

import { babel } from '@rollup/plugin-babel'

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
            // TODO: 使用 chalk 优化控制台输出
            // onListening: function (server) {
            //     console.log(getIPAddress())
            //     // console.log(`
            //     //     CPU: ${chalk.red('90%')}
            //     //     RAM: ${chalk.green('40%')}
            //     //     DISK: ${chalk.yellow('70%')}
            //     // `)
            //     const address = server.address()
            //     const host = address.address === '::' ? 'localhost' : address.address
            //     // by using a bound function, we can access options as `this`
            //     const protocol = this.https ? 'https' : 'http'
            //     console.log(`Server listening at ${protocol}://${host}:${address.port}/`)
            // },
        }),
    ],
}
