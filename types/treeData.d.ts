/*
 * @Author: xiaoning.li@inossem.com
 * @Date: 2022-08-31 15:56:41
 * @LastEditors: xiaoning.li@inossem.com
 * @LastEditTime: 2022-08-31 15:59:01
 * @Description: t
 */
export interface TreeDataUtils {
    /** 筛选树 */
    treeFilter: (tree: any, callback: any) => any[]

    /** 遍历树 */
    treeTraversal: (tree: any, callback: any) => void

    /** 获取树中的所有叶子节点 */
    getAllLeaf: (tree: any) => any[]
}
