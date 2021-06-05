# Webpack main configuration example

## Features

- `.js` files process by `babel` - JavaScript compiler
- configured `webpack-dev-server`
- `HtmlWebpackPlugin` simplifies creation of HTML files to serve your webpack bundles
- `.svg`,`.png`, `.jpg` files processed by `file-loader`
- `.css` files processed by `style-loader` and `css-loader`, has css modules support
- to use css as module, it should be named as `*.module.css`, f.e.:

```js
import css from './header.module.css';

<header style='${css.header}'></header>;
```

- you can also import your `.html` file (processed by `html-loader`):

```js
import './components/**/**.js';
import html from './components/**/**.html';
```

## Installation

Clone project to your folder and then install dependencies:

```bash
npm install
```

How to run WebPack dev server:

```bash
npm start
```

How to build project:

```bash
npm run build
```
