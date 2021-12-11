import React from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Button from "./../Button";

import { getImg } from "../../../utils/Helper";
import Styles from './Selectflag.module.scss';

class Selectflag extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className={Styles.panel}>
                <Dropdown options={['Real Brasileiro (R$)']} onChange={this._onSelect} value={'Real Brasileiro (R$)'} placeholder="Select an option" className={Styles.dropdown} controlClassName={Styles.control} menuClassName={Styles.menu} arrowClassName={Styles.arrow}/>
            </div>
        )
    }
}

export default Selectflag