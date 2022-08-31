/*
 * @Author: xiaoning.li@inossem.com
 * @Date: 2022-08-30 17:34:36
 * @LastEditors: xiaoning.li@inossem.com
 * @LastEditTime: 2022-08-31 10:18:50
 * @Description: 树形数据处理
 */
/**
 * @description 筛选树
 * @param tree
 * @param func
 */
export function treeFilter(tree: any, callback: any) {
    if (!Array.isArray(tree) || tree.length === 0) {
        return []
    }
    return tree
        .map(node => ({ ...node }))
        .filter(node => {
            node.children = node.children && treeFilter(node.children, callback)
            return callback(node) || (node.children && node.children.length)
        })
}

/**
 * @description 遍历树
 * @param tree
 * @param callback
 */
export function treeTraversal(tree: any, callback: any) {
    if (!Array.isArray(tree) || tree.length === 0) {
        return
    }
    // 维护一个队列, 队列的初始值为树的根节点组成的列表, 重复执行一下步骤直至数组为空
    let node
    const list = [...tree]
    while ((node = list.shift())) {
        callback(node)
        node.children && list.push(...node.children)
    }
}

/**
 * @description 获取树中的所有叶子结点
 * @param tree
 */
export function getAllLeaf(tree: any[]) {
    const result: any[] = []
    const getLeaf = (tree: any) => {
        tree.forEach((item: any) => {
            item.children ? getLeaf(item.children) : result.push(item)
        })
    }
    getLeaf(tree)
    return result
}
