# Personal site

## 项目各种文件结构

- sass文件：

```
sass/
│  
├── components/                 // html组件                
│   ├── _nav.scss               // 导航条    
│   ├──
│   ...
├── pages                       // 页面
│   ├── _home.scss              // angular要用到的首页html片段
│   ...
├── utils                       // 辅助工具
│   ├── _variables              // 所有定义的变量
│   ...
│
`app.scss                      // 这个文件中引入所有sass文件片段
```

- Angular文件

	1. `index.html`和`app.js`是项目的入口文件，整个项目只有一个css文件：`app.css`，是由sass文件编译生成的
	2. 项目分成多个模块，如HOME模块、TECHNOLOGY模块等，每个模块都存放在对应的文件夹内，每个文件夹都包含了html片段和该模块的js文件

## 命名规范

- sass命名规范：

  1. 所有sacc组件都以下划线（`_`）开头
  

- Angular命名规范：

  1. 主模块的命名首字母小写，采用驼峰标识。如：`mainModule`
  2. 其他子模块的命名方式为：`mainModule.ChildModule`
  3. controller的命名：首字母大写。如`MainController`
