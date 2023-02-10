import React, { useState } from "react";
import Tip from "./tip";
import "./App.css";

// 高阶组件是参数为组件，返回值为新组件的函数。
// 当前函数接受一个组件
// 高阶组件还支持链式调用
// 1. error信息显示在新创建的组件而不是原本的无状态组件，解决办法是创建displayName
// 2. 属性被固定写死了，无法复用
const higherOrderComponent = (WarppedComponent) => {
    // 返回另一个组件
    class OtherComp extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        render() {
            return <WarppedComponent {...this.props} />;
        }
    };

    OtherComp.displayName =`wrap-${WarppedComponent.displayName}`
    return OtherComp
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

export default function App() {
    const [xy, setXy] = useState({})
    const setPos = (e) => {
        setXy({
            x: e.pageX,
            y: e.pageY
        })
    }
    // 组合成一个有状态的组件（容器组件）
    // 高阶组件内部的state成为了无状态组件的Props，带动内部的无状态组件进行刷新
    // 实现了分离了UI和逻辑
    const WarpTip = higherOrderComponent(Tip)
    return (
        <div className="App">
             <WarpTip {...xy} />
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
