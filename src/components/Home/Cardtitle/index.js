import React from "react";

import Button from "./../Button";
import Styles from './Cardtitle.module.scss';

class Cardtitle extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className={Styles.cardtitle}>
                <p>{this.props.title}</p>
                <Button buttontext="Ver Mais" background="#F15A24"/>
            </div>
        )
    }
}

export default Cardtitle