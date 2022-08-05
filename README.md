### TODO List
- 添加 typescript

- 添加 chalk 优化控制台输出

- 添加动态打包脚本

- 添加 Eslint 支持

### 常用JS工具函数合集

### 开发
```
npm run dev
```
### 打包
```bash
npm run build
```


### 用法

- 浏览器环境
```html
<!-- 会在 window 上挂载 toolsJs -->
<script src="./dist/bundle.js"></script>

<script>
    console.log(toolsJs.typeCheck.isString([])) // false
    
    console.log(toolsJs)
</script>
```

```js
// 模块化方案
import toolsJs from 'toolsJs'

console.log(toolsJs.typeCheck.isString([])) // false
```

- Node 环境中

```js
const toolsJs = require(toolsJs)

console.log(toolsJs.typeCheck.isString([])) // false
```