import React, { useState } from "react";
import Tip from "./tip";
import "./App.css";

//  Render Props是React组件之间使用一个值为函数的 prop 共享代码的简单技术
//  renderProps 假设子组件是一个函数，并把当前组件内部的state和逻辑传入该函数中。
//  需要渲染的无状态组件，则可以通过这个函数的参数得到它想要的属性。
//  renderProps因为组件内部是一个匿名函数，这就导致即便传入的属性没有任何变化，
//  内部的子组件还是会整个渲染一遍。
//  解决方法就是将该匿名函数再次包装，不过每次都这样做终究还是比较麻烦的。
export default function App() {
    // 返回另一个组件
    return (<>
        <RenderProopsComponent render={
            xy => (<Tip {...xy} />)
        } />
    </>)
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

function RenderProopsComponent(props) {
    const [xy, setXy] = useState({})
    const setPos = (e) => {
        setXy({
            x: e.pageX,
            y: e.pageY
        })
    }
    return (
        <div className="App">
            {
                props.render(xy)
            }
            <div className="tile is-ancestor">
                <div className="tile is-vertical is-8">
                    <div className="tile">
                        <div className="tile is-parent is-vertical">
                            <article
                                onClick={setPos}
                                className="tile is-child notification is-primary"
                            >
                                <p className="title">Vertical...</p>
                                <p className="subtitle">Top tile</p>
                            </article>
                            <article
                                onClick={setPos}
                                className="tile is-child notification is-warning"
                            >
                                <p className="title">...tiles</p>
                                <p className="subtitle">Bottom tile</p>
                            </article>
                        </div>
                        <div className="tile is-parent">
                            <article
                                onClick={setPos}
                                className="tile is-child notification is-info"
                            >
                                <p className="title">Middle tile</p>
                                <p className="subtitle">With an image</p>
                                <figure className="image is-4by3">
                                    <img src="https://bulma.io/images/placeholders/640x480.png" />
                                </figure>
                            </article>
                        </div>
                    </div>
                    <div className="tile is-parent">
                        <article
                            onClick={setPos}
                            className="tile is-child notification is-danger"
                        >
                            <p className="title">Wide tile</p>
                            <p className="subtitle">Aligned with the right tile</p>
                            <div className="content"></div>
                        </article>
                    </div>
                </div>
                <div className="tile is-parent">
                    <article
                        onClick={setPos}
                        className="tile is-child notification is-success"
                    >
                        <div className="content">
                            <p className="title">Tall tile</p>
                            <p className="subtitle">With even more content</p>
                            <div className="content"></div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}
