import { Validate } from './validate'
import { TreeDataUtils } from './treeData'
import { TypeCheck } from './typeCheck'
export interface ToolsJs extends Validate, TreeDataUtils, TypeCheck {
    /** 手机打码 */
    maskmobile: (mobile: string) => string
    /** 身份证打码 */
    maskIdNumber: (idNum: string) => string
}

declare const toolsJs: ToolsJs

export default toolsJs
