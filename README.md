<!-- 中英文切换 -->
<div align="right">

English | [中文](./README.zh-CN.md)

</div>
<!-- 中英文切换 end -->
<!-- 封面区域 -->
<div align="center">

# react-3d-menu

React's 3D menu component, which is easy to use and has a cool effect.

`React 3D 菜单组件，使用简单效果炫酷。`

![NPM Version](https://img.shields.io/npm/v/react-3d-menu?style=flat-square&logo=npm)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/react-3d-menu?style=flat-square)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/shalldie/react-3d-menu/ci.yml?style=flat-square&logo=github)
![GitHub License](https://img.shields.io/github/license/shalldie/react-3d-menu?style=flat-square)

<img src="https://github.com/shalldie/react-3d-menu/assets/9987486/48d8a770-973c-4c64-a2b8-6f58216b9ac3" width="230"/>

</div>

## Live Demo

[Live demo on Github Pages](https://shalldie.github.io/demos/react-3d-menu/)

## Installation

```
npm install react-3d-menu
```

## Usage

You can custom the menu item, [see more demos](https://github.com/shalldie/react-3d-menu/blob/master/src/demos/demos.tsx) .

```tsx
import { React3DMenu } from 'react-3d-menu';

const menuItems: React.ReactNode[] = [
    'item1 string',
    'item2 string',
    <SomeComponent />,
    <SomeComponent2 />
    // ...
];

export const MyComponent: React.FC = () => {
    return (
        <React3DMenu items={menuItems} className="my-menu">
            <div className="my-menu-head">React 3D Menu</div>
        </React3DMenu>
    );
};
```

## Props

| name     |        type         | description                            |
| :------- | :-----------------: | :------------------------------------- |
| items    | `React.ReactNode[]` | Menu items to render                   |
| children |  `React.ReactNode`  | Element to activate 3d menu when hover |

## LICENSE

MIT
