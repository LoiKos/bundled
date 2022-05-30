# Dev server 

There is multiple options to make development easier using Webpack.

:information_source: | I highly recommend to add source maps **in development** as it helps to find location of errors. if you want to learn more about source-maps check [wepback docs](https://webpack.js.org/guides/development/#using-source-maps)
:---: | :---



## Overview : 
| Options        | Recommanded for           | 
| ------------- |-------------:| 
| `--watch`     | testing or prototyping | 
| `webpack-dev-server`     | most setup      |   
| `webpack-dev-middleware` | when you really need to customize server behaviour.      |    

## Details

### 1. Watch mode: 

Easiest option, simply using `—watch` options like :  `webpack —watch`.

Wepback will handle re-build for you anytime you make a change. Unfortunately you have to reload the browser windows manually in order to see the changes

**recommandations**: You can use this mode to quick testing / prototyping or when you need control over reloading. Avoid using this by default in development as reload manually can quickly become annoying.

### 2. Development server: 

To work with dev server, you have to install `webpack-dev-server` and add some config in `webpack.config.js`. 

using dev server allow you to make some update on your setup you can't handle with `--watch`.

> e.g: you can choose a `publicPath` that will change default path on server. By default your app is available under `/` but you can change it to whatever you like : `/webpack`


**recommandations**: I recommend to go with this option by default. This is easy to start with and allow a good range of configurations. Depending on your project complexity you can use the last options if dev server isn't enough or can't be configure in your way.

### 3. Your own server:

Wepack provide `webpack-dev-middleware`. This package is used internally in `webpack-dev-server` and can be use to build around a custom setup. 

`webpack-dev-middleware` should help you with most of the basics features you need.

You can build a little `express` server with it and quickly produce a server with same features as `webpack-dev-server`.

**recommandations**: I don't recommend using this options unless you really need to. This can be time consuming to maintain because you should maintain both your server and to your app across webpack updates. 


