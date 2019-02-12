import "./Shell.css";
import React from "react";
export default class extends React.Component {
	render() {
		return <div styleName={ Math.random() > 0.5 ? "a" : "b" }>Example</div>
	}
}