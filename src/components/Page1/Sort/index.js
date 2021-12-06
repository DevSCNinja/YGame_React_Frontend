import React from "react";
import Dropdown from 'react-dropdown';
import './style.css';
import Button from "../Button";

import { getImg } from "../../../utils/Helper";
import Styles from './Sort.module.scss';

class Sort extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div className={Styles.sortable_list}>
                <span>Ordernar por:</span>
                    <div className={Styles.panel}>
                    <Dropdown options={['Data de Compra']} onChange={this._onSelect} value={'Data de Compra'} placeholder="Select an option" className={Styles.dropdown} controlClassName={Styles.control} menuClassName={Styles.menu} arrowClassName={Styles.arrow}/>
                </div>
            </div>   
        )
    }
}

export default Sort