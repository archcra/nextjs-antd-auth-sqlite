# nextjs-antd-example
To sample how to integrated  antd with nextjs, intend to make a simple next.js concise start boilerplate


# Steps to construct such a project

1. Following the instruction on https://nextjs.org/learn/basics/create-nextjs-app/setup 
   to create a project with next.js, such as:
    ```
    PROJECT_NAME=nextjs-antd-a
    npx create-next-app $PROJECT_NAME
   ```
2. install dependences
    ```
    cd $PROJECT_NAME
    npm install --save antd
    npm install --save @zeit/next-css @zeit/next-less @zeit/next-sass babel-plugin-import less
    npm install --save-dev webpack webpack-cli html-webpack-plugin webpack-dev-server webpack-dev-middleware
    npm i webpack@webpack-4
    ```
3. run the project
```
   npm run dev
```

Now when you use browser to visit: http://localhost:3000/, you will have a 'Welcome to Next.js!' page.

Then, we will check our antd features.

4. setup for antd

add a file named 'antd.less' under '$PROJECT_NAME/styles' folder, one line is OK, content such as:
```
@import "~antd/dist/antd.less";
```

in _app.js file, add a line to use the style file:
```
import "../styles/antd.less";
```
If you are not sure how to add the line, or where to find the _app.js file, just check the source code in this example project.

add '$PROJECT_NAME/next.config.js' file to resolve less file, content as:
```
const withSass = require("@zeit/next-sass");
const withLess = require("@zeit/next-less");
const withCSS = require("@zeit/next-css");

const isProd = process.env.NODE_ENV === "production";

// fix: prevents error when .less files are required by node
if (typeof require !== "undefined") {
  require.extensions[".less"] = (file) => {};
}

module.exports = withCSS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
  ...withLess(
    withSass({
      lessLoaderOptions: {
        javascriptEnabled: true,
      },
    })
  ),
});
```

and create a folder named 'auth' under '$PROJECT_NAME/pages' folder, 
and a file named login2.js, content as:
```
import {  Button } from 'antd';

export default function TestAntd({}){
  return (
  <Button type="primary">I am a Primary Button!</Button>
  )
}
```

then run 'npm run dev', and visit: http://localhost:3000/auth/login2

now you have antd!

# ref 
https://nextjs.org/learn/basics/create-nextjs-app/setup

https://dev.to/burhanuday/using-ant-design-with-nextjs-custom-variables-for-ant-design-57m5

https://blog.csdn.net/weixin_37562241/article/details/104328256


