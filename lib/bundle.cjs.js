'use strict';

/*
 * @Author: xiaoning.li
 * @Date: 2022-07-27 16:55:50
 * @LastEditors: xiaoning.li@inossem.com
 * @LastEditTime: 2022-08-30 18:20:21
 * @Description: 数据类型检查
 */
const isArray = (v) => Object.prototype.toString.call(v) === '[object Array]';
const isObject = (v) => Object.prototype.toString.call(v) === '[object Object]';
const isString = (v) => Object.prototype.toString.call(v) === '[object String]';
const isNumber = (v) => Object.prototype.toString.call(v) === '[object Number]';
const isBoolean = (v) => Object.prototype.toString.call(v) === '[object Boolean]';
const isFunction = (v) => Object.prototype.toString.call(v) === '[object Function]';
const isUndefined = (v) => Object.prototype.toString.call(v) === '[object Undefined]';
const isNull = (v) => Object.prototype.toString.call(v) === '[object Null]';

var typeCheck = /*#__PURE__*/Object.freeze({
    __proto__: null,
    isArray: isArray,
    isObject: isObject,
    isString: isString,
    isNumber: isNumber,
    isBoolean: isBoolean,
    isFunction: isFunction,
    isUndefined: isUndefined,
    isNull: isNull
});

/*
 * @Author: xiaoning.li
 * @Date: 2022-07-27 16:55:50
 * @LastEditors: xiaoning.li@inossem.com
 * @LastEditTime: 2022-08-30 18:20:24
 * @Description: 正则校验方法
 */
// 手机打码
const maskmobile = (mobile) => {
    if (!mobile)
        return;
    return mobile.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2');
};
// 身份证打码
const maskIdNumber = (id) => {
    return id.replace(/^(.{3})(.*)(.{4})$/, '$1********$3');
};
/**
 * 短横线命名法的字符串转换成使用骆驼命名规则的字符串
 * @param str
 */
const getCamelCase = (str) => {
    if (!str || typeof str !== 'string')
        return '';
    return str.replace(/-([a-z])/g, (all, i) => {
        return i.toUpperCase();
    });
};
/**
 * 将驼峰命名规则的字符串转换成使用短横线命名法的字符串
 * @param str
 */
const getKebabCase = (str) => {
    if (!str || typeof str !== 'string')
        return '';
    return str.replace(/[A-Z]/g, function (i) {
        return '-' + i.toLowerCase();
    });
};

var validate = /*#__PURE__*/Object.freeze({
    __proto__: null,
    maskmobile: maskmobile,
    maskIdNumber: maskIdNumber,
    getCamelCase: getCamelCase,
    getKebabCase: getKebabCase
});

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
function treeFilter(tree, callback) {
    if (!Array.isArray(tree) || tree.length === 0) {
        return [];
    }
    return tree
        .map(node => (Object.assign({}, node)))
        .filter(node => {
        node.children = node.children && treeFilter(node.children, callback);
        return callback(node) || (node.children && node.children.length);
    });
}
/**
 * @description 遍历树
 * @param tree
 * @param callback
 */
function treeTraversal(tree, callback) {
    if (!Array.isArray(tree) || tree.length === 0) {
        return;
    }
    // 维护一个队列, 队列的初始值为树的根节点组成的列表, 重复执行一下步骤直至数组为空
    let node;
    const list = [...tree];
    while ((node = list.shift())) {
        callback(node);
        node.children && list.push(...node.children);
    }
}
/**
 * @description 获取树中的所有叶子结点
 * @param tree
 */
function getAllLeaf(tree) {
    const result = [];
    const getLeaf = (tree) => {
        tree.forEach((item) => {
            item.children ? getLeaf(item.children) : result.push(item);
        });
    };
    getLeaf(tree);
    return result;
}

var treeData = /*#__PURE__*/Object.freeze({
    __proto__: null,
    treeFilter: treeFilter,
    treeTraversal: treeTraversal,
    getAllLeaf: getAllLeaf
});

/*
 * @Author: xiaoning.li
 * @Date: 2022-07-27 10:21:15
 * @LastEditors: xiaoning.li@inossem.com
 * @LastEditTime: 2022-08-30 18:06:13
 * @Description: ToolsJs入口文件
 */
const toolsJs = Object.assign(Object.assign(Object.assign({}, typeCheck), validate), treeData);

module.exports = toolsJs;
