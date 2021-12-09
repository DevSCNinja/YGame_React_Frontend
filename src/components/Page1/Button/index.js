import React from "react";

import { getImg } from "../../../utils/Helper";
import Styles from './Button.module.scss';

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <button className={Styles.buttonstyle} style={{backgroundColor: this.props.background}} onClick={this.props.onClick}>
                {this.props.buttontext}
            </button>
        )
    }
}

export default Button