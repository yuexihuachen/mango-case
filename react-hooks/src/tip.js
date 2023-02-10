import React from "react";
import "./tip.css";

// Tip本身是无状态和逻辑的组件（纯展示组件）
export default function Tip(props) {
    const { x, y, setPos } = props
    return (
        <div className="App">
            <div className="Tip">
            <div className="tip__pos" style={{ transform: `translate(${x - 175}px,${y - 136}px)` }}>
                <div className="tip__pos--arrow">
                    <div className="tip__pos--content">
                        <div className="title">当前坐标</div>
                        <div className="content">
                            <span>x: {x}</span>
                            <span>y: {y}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
