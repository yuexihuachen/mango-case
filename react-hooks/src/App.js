import React, { useState } from "react";
import Tip from "./tip";
import "./App.css";

// Hooks 并不能完全替代 Render Props 和高阶组件
// 在高阶组件或者Render Props只渲染一个子组件时，Hook提供了一种更简单的方式。
// 高阶组件和Render Props本质上都是将复用逻辑提升到父组件中。
// Hooks将复用逻辑提取到组件顶层，而不是强行提升到父组件中,避免HOC和Render Props带来的「嵌套地狱」
export default function App() {
    const [xy, setPos] = Tips()
    return <Tip {...xy} setPos={setPos} />
};

/**
 * Hooks：
    . 替代Class的大部分用例，除了getSnapshotBeforeUpdate和componentDidCatch还不支持。
    . 提取复用逻辑。除了有明确父子关系的，其他场景都可以使用 Hooks。

    Render Props：
    . 在组件渲染上拥有更高的自由度，可以根据父组件提供的数据进行动态渲染。适合有明确父子关系的场景。
    
    高阶组件：
    . 适合用来做注入，并且生成一个新的可复用组件。适合用来写插件。
 * 
 */

function Tips() {
    const [xy, setXy] = useState({})
    const setPos = (e) => {
        setXy({
            x: e.pageX,
            y: e.pageY
        })
    }
    return [
        xy,
        setPos
    ]
}
