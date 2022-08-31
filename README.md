

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
import toolsJs from '@killonepits/tools'

console.log(toolsJs.typeCheck.isString([])) // false
```

- Node 环境中

```js
const toolsJs = require('@killonepits/tools')

console.log(toolsJs.typeCheck.isString([])) // false
```