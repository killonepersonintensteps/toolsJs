export interface Validate {
    /** 手机打码 */
    maskmobile: (mobile: string) => string

    /** 身份证打码 */
    maskIdNumber: (idNum: string) => string

    /** 短横线命名法的字符串转换成使用骆驼命名规则的字符串 */
    getCamelCase: (str: string) => string

    /** 将驼峰命名规则的字符串转换成使用短横线命名法的字符串 */
    getKebabCase: (str: string) => string
}
