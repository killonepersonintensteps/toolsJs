/*
 * @Author: xiaoning.li@inossem.com
 * @Date: 2022-07-27 14:12:04
 * @LastEditors: xiaoning.li@inossem.com
 * @LastEditTime: 2022-07-27 14:15:50
 * @Description: rollup 插件开发，参考文档 https://www.rollupjs.com/guide/plugin-development
 */
export default function myExample() {
  return {
    name: 'my-example', // this name will show up in warnings and errors
    resolveId(source) {
      if (source === 'virtual-module') {
        return source // this signals that rollup should not ask other plugins or check the file system to find this id
      }
      return null // other ids should be handled as usually
    },
    load(id) {
      if (id === 'virtual-module') {
        return 'export default "This is virtual!"' // the source code for "virtual-module"
      }
      return null // other ids should be handled as usually
    },
  }
}
