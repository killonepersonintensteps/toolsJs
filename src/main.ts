/*
 * @Author: xiaoning.li
 * @Date: 2022-07-27 10:21:15
 * @LastEditors: xiaoning.li@inossem.com
 * @LastEditTime: 2022-08-30 18:06:13
 * @Description: ToolsJs入口文件
 */
import * as typeCheck from './typeCheck'
import * as validate from './validate'
import * as treeData from './trreData'
const toolsJs = {
  ...typeCheck,
  ...validate,
  ...treeData,
}
export default toolsJs
