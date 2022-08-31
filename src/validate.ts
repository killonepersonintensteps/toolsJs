/*
 * @Author: xiaoning.li
 * @Date: 2022-07-27 16:55:50
 * @LastEditors: xiaoning.li@inossem.com
 * @LastEditTime: 2022-08-30 18:20:24
 * @Description: 正则校验方法
 */

// 手机打码
export const maskmobile = (mobile: string) => {
	if (!mobile) return
	return mobile.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}

// 身份证打码
export const maskIdNumber = (id: string) => {
	return id.replace(/^(.{3})(.*)(.{4})$/, '$1********$3')
}

/**
 * 短横线命名法的字符串转换成使用骆驼命名规则的字符串
 * @param str
 */
export const getCamelCase = (str: string) => {
	if (!str || typeof str !== 'string') return ''
	return str.replace(/-([a-z])/g, (all, i) => {
		return i.toUpperCase()
	})
}

/**
 * 将驼峰命名规则的字符串转换成使用短横线命名法的字符串
 * @param str
 */
export const getKebabCase = (str: string) => {
	if (!str || typeof str !== 'string') return ''
	return str.replace(/[A-Z]/g, function (i) {
		return '-' + i.toLowerCase()
	})
}
