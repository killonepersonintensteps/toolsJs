'use strict'

/*
 * @Author: xiaoning.li@inossem.com
 * @Date: 2022-07-27 16:55:50
 * @LastEditors: xiaoning.li@inossem.com
 * @LastEditTime: 2022-07-28 14:55:15
 * @Description: 数据类型检查
 */

const isArray = (v) => Object.prototype.toString.call(v) === '[object Array]'

const isObject = (v) => Object.prototype.toString.call(v) === '[object Object]'

const isString = (v) => Object.prototype.toString.call(v) === '[object String]'

const isNumber = (v) => Object.prototype.toString.call(v) === '[object Number]'

const isBoolean = (v) => Object.prototype.toString.call(v) === '[object Boolean]'

const isNull = (v) => Object.prototype.toString.call(v) === '[object Null]'

const isUndefined = (v) => Object.prototype.toString.call(v) === '[object Undefined]'

const isFunction = (v) => Object.prototype.toString.call(v) === '[object Function]'

var typeCheck = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    isArray: isArray,
    isObject: isObject,
    isString: isString,
    isNumber: isNumber,
    isBoolean: isBoolean,
    isNull: isNull,
    isUndefined: isUndefined,
    isFunction: isFunction,
})

/*
 * @Author: xiaoning.li@inossem.com
 * @Date: 2022-07-27 16:55:50
 * @LastEditors: xiaoning.li@inossem.com
 * @LastEditTime: 2022-07-28 14:43:41
 * @Description: 正则校验方法
 */
// 手机打码
const maskmobile = (mobile) => {
    if (!mobile) return
    return mobile.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}

// 身份证打码
const maskIdNumber = (id) => {
    return id.replace(/^(.{3})(.*)(.{4})$/, '$1********$3')
}

var validate = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    maskmobile: maskmobile,
    maskIdNumber: maskIdNumber,
})

/*
 * @Author: xiaoning.li@inossem.com
 * @Date: 2022-07-27 10:21:15
 * @LastEditors: xiaoning.li@inossem.com
 * @LastEditTime: 2022-07-28 14:46:49
 * @Description: ToolsJs入口文件
 */

var main = {
    typeCheck,
    validate,
}

module.exports = main
