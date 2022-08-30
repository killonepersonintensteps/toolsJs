/*
 * @Author: xiaoning.li
 * @Date: 2022-07-27 16:55:50
 * @LastEditors: xiaoning.li
 * @LastEditTime: 2022-08-30 10:36:49
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
