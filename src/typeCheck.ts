/*
 * @Author: xiaoning.li
 * @Date: 2022-07-27 16:55:50
 * @LastEditors: xiaoning.li
 * @LastEditTime: 2022-08-30 10:37:51
 * @Description: 数据类型检查
 */

export const isArray = (v: unknown) => Object.prototype.toString.call(v) === '[object Array]'

export const isObject = (v: unknown) => Object.prototype.toString.call(v) === '[object Object]'

export const isString = (v: unknown) => Object.prototype.toString.call(v) === '[object String]'

export const isNumber = (v: unknown) => Object.prototype.toString.call(v) === '[object Number]'

export const isBoolean = (v: unknown) => Object.prototype.toString.call(v) === '[object Boolean]'

export const isFunction = (v: unknown) => Object.prototype.toString.call(v) === '[object Function]'

export const isUndefined = (v: unknown) =>
    Object.prototype.toString.call(v) === '[object Undefined]'

export const isNull = (v: unknown) => Object.prototype.toString.call(v) === '[object Null]'
