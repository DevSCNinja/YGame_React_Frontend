import React from "react";

import { getImg } from "../../../utils/Helper";
import Styles from './Button1.module.scss';

class Button1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <button className={Styles.btn_style} style={{backgroundColor: this.props.background, width: this.props.width + 'px'}} >
                {this.props.buttontext}
            </button>
        )
    }
}

export default Button1