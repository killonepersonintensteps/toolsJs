/*
 * @Author: xiaoning.li@inossem.com
 * @Date: 2022-08-31 16:01:51
 * @LastEditors: xiaoning.li@inossem.com
 * @LastEditTime: 2022-08-31 16:03:08
 * @Description:
 */
export interface TypeCheck {
    isArray: (v: unknown) => boolean

    isObject: (v: unknown) => boolean

    isString: (v: unknown) => boolean

    isNumber: (v: unknown) => boolean

    isBoolean: (v: unknown) => boolean

    isFunction: (v: unknown) => boolean

    isUndefined: (v: unknown) => boolean
    
    isNull: (v: unknown) => boolean
}
