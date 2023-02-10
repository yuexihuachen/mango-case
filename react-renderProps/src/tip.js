import React from "react";
import "./tip.css";

// Tip本身是无状态和逻辑的组件（纯展示组件）
export default function Tip(props) {
    const { x, y } = props
    return (
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
    );
}
