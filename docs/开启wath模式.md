### 1. 在 rollup.config.js 中开启 watch 选项

`参考地址：https://rollupjs.org/guide/en/#watch-options`
```js
    watch: {
        include: 'src/**',
        exclude: 'node_modules/**',
        clearScreen: false,
    }

```