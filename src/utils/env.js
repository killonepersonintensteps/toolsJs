import chalk from 'chalk'

import os from 'os'

const interfaces = os.networkInterfaces()

// 获取本机IP
export function getIPAddress() {
    let IPAddress = ''
    for (const devName in interfaces) {
        const iface = interfaces[devName]
        for (let i = 0; i < iface.length; i++) {
            const alias = iface[i]
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                IPAddress = alias.address
            }
        }
    }
    return IPAddress
}

// 启动本地服务时的处理函数
export function onListeningServerRunning(server) {
    const address = server.address()
    const ipHost = getIPAddress()
    const host = address.address === '::' ? 'localhost' : address.address
    const protocol = this.https ? 'https' : 'http'
    console.log(`
    - Local: ${chalk.greenBright(`${protocol}://${host}:${address.port}/`)}
    - NetWork: ${chalk.greenBright(`${protocol}://${ipHost}:${address.port}/`)}
    `)
}
