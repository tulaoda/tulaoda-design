## @mlamp/title-with-editor
本组件实现了可编辑的标题功能，适用于标题可编辑的场景。编辑时自动选中文字，编辑值为空自动恢复之前的值。

## Installation

```
$ npm set registry http://npm.po.mlamp.cn
$ npm i @mlamp/title-with-editor
```

## publish

```
首次发布
$ npm run release -- --first-release

发布预发布版本
$ npm run release -- --prerelease alpha

释放一个版本
$ npm run release

强制发布一个版本,如1.0.0
$ npm run release --release-as 1.0.0
```

## Usage
```jsx
import { TitleWithEditor } from '@mlamp/title-with-editor'

render() {
    const { title } = this.state
    return (
        <TitleWithEditor
            value={title}
            onChange={this.onTitleChange}
         />
    )
}
```

## API
|  参数  |  说明  |  类型  |  默认值  |  
|  ----  | ----  |  ----  | ----  |
|  value | 显示内容 | string | -
|  onChange  | 回调函数，内容改变后执行 | 第一个参数为修改后的内容 | -

## Keywords
react, xx

## Demo
http://fe.mlamp.cn:3004
