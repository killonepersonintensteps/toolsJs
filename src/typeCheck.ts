/*
 * @Author: xiaoning.li@inossem.com
 * @Date: 2022-07-27 16:55:50
 * @LastEditors: xiaoning.li@inossem.com
 * @LastEditTime: 2022-08-29 17:48:58
 * @Description: 数据类型检查
 */

export const isArray = (v: any) => Object.prototype.toString.call(v) === '[object Array]'

export const isObject = (v: any) => Object.prototype.toString.call(v) === '[object Object]'

export const isString = (v: any) => Object.prototype.toString.call(v) === '[object String]'

export const isNumber = (v: any) => Object.prototype.toString.call(v) === '[object Number]'

export const isBoolean = (v: any) => Object.prototype.toString.call(v) === '[object Boolean]'

export const isFunction = (v: any) => Object.prototype.toString.call(v) === '[object Function]'

export const isUndefined = (v: any) => Object.prototype.toString.call(v) === '[object Undefined]'

export const isNull = (v: any) => Object.prototype.toString.call(v) === '[object Null]'
