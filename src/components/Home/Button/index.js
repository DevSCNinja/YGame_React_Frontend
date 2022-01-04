import React from "react";

import { getImg } from "../../../utils/Helper";
import Styles from './Button.module.scss';

class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <button className={Styles.buttonstyle} style={{ backgroundColor: this.props.background }} >
                {this.props.buttontext}
            </button>
        )
    }
}

export default Header