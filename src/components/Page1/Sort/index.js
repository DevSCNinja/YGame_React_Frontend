import React from "react";
import Dropdown from 'react-dropdown';
import './style.css';
import Button from "../Button";
import styled from 'styled-components'

import { getImg } from "../../../utils/Helper";
import Styles from './Sort.module.scss';

class Sort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const SortStyles = styled.div`       
            .Dropdown-control {
                display: flex;

                .Dropdown-arrow-wrapper {
                    margin-left: 6px;
                    align-self: center;

                    i {
                        font-size: 35px;
                    }
                }
            }
        }`

        return (
            <SortStyles>
                <div className={Styles.sortable_list}>
                    <span>Ordernar por:</span>
                        <div className={Styles.panel}>
                        <Dropdown arrowClosed={<i className="fa fa-angle-down" />}arrowOpen={<i className="fa fa-angle-up" />} options={this.props.options} onChange={this._onSelect} value={'Data de Compra'} placeholder={this.props.options[0]} className={Styles.dropdown} controlClassName={Styles.control} menuClassName={Styles.menu} arrowClassName={Styles.arrow}/>
                    </div>
                </div> 
            </SortStyles>  
        )
    }
}

export default Sort