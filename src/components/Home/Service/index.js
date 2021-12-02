import React from "react";

import { getImg } from "../../../utils/Helper";
import Styles from './Service.module.scss';

class Service extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className={Styles.serviceitem}>
                <img src={getImg(this.props.serviceimage)} alt=""/>
                <div className={Styles.descript}>
                </div>
            </div>
        )
    }
}

export default Service