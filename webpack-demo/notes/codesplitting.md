
# Code Splitting 

[Webpack docs](https://webpack.js.org/guides/code-splitting/)

There are 3 approaches to code splitting available:

- Entry Points: Manually split code using entry configuration.

    In this method, you need to list all entries under the entry list in webpack.config

    ```js
    entry: {
        index: './src/index.js',
        another: './src/another-module.js',
    },
    ```

   > As mentioned there are some pitfalls to this approach:
   > - If there are any duplicated modules between entry chunks they will be included in both bundles.
   > - It isn't as flexible and can't be used to dynamically split code with the core application logic.

   e.g: 
    ```js
    > webpack-demo@1.0.0 build
    > webpack

    asset index.bundle.js 554 KiB [emitted] (name: index)
    asset another.bundle.js 554 KiB [emitted] (name: another)
    runtime modules 2.5 KiB 12 modules
    cacheable modules 532 KiB
    ./src/index.js 361 bytes [built] [code generated]
    ./src/another-module.js 84 bytes [built] [code generated]
    ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]
    webpack 5.72.0 compiled successfully in 322 ms
    ```

- Prevent Duplication: Use Entry dependencies or SplitChunksPlugin to dedupe and split chunks.

You can add some kind of dependencies for entry : 

```js
 index: {
      import: './src/index.js',
      dependOn: 'shared',
    },
    another: {
      import: './src/another-module.js',
      dependOn: 'shared',
    },
    shared: 'lodash',
```

and we also probably want : 
```js
 optimization: {
    runtimeChunk: 'single',
  },
```


e.g
```js
> webpack-demo@1.0.0 build
> webpack

asset shared.bundle.js 550 KiB [emitted] (name: shared)
asset runtime.bundle.js 7.61 KiB [emitted] (name: runtime)
asset index.bundle.js 1.94 KiB [emitted] (name: index)
asset another.bundle.js 1.71 KiB [emitted] (name: another)
Entrypoint index 1.94 KiB = index.bundle.js
Entrypoint another 1.71 KiB = another.bundle.js
Entrypoint shared 558 KiB = runtime.bundle.js 7.61 KiB shared.bundle.js 550 KiB
runtime modules 3.65 KiB 8 modules
cacheable modules 532 KiB
  ./node_modules/lodash/lodash.js 531 KiB [built] [code generated]
  ./src/another-module.js 84 bytes [built] [code generated]
  ./src/index.js 361 bytes [built] [code generated]
webpack 5.72.0 compiled successfully in 304 ms
```

**Although using multiple entry points per page is allowed in webpack, it should be avoided when possible in favor of an entry point with multiple imports**

[SplitChunksPlugin](https://webpack.js.org/plugins/split-chunks-plugin/) make all the previous work for us.

> mini-css-extract-plugin: Useful for splitting CSS out from the main application.


- Dynamic Imports: Split code via inline function calls within modules.

just import using async function module. They are code-splitted automatically.


