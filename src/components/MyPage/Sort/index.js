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

            .Dropdown-root {
                position: relative;
              }
              
              .Dropdown-control {
                position: relative;
                overflow: hidden;
                background-color: transparent;
                border: none;
                border-radius: 2px;
                box-sizing: border-box;
                color: #333;
                cursor: default;
                outline: none;
                padding: 8px 30px 8px 10px;
                transition: all 200ms ease;
              }
              
              .Dropdown-control:hover {
                box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
              }
              
              .Dropdown-arrow {
                border-color: #999 transparent transparent;
                border-style: solid;
                border-width: 5px 5px 0;
                content: ' ';
                display: block;
                height: 0;
                margin-top: -ceil(2.5);
                position: absolute;
                right: 10px;
                top: 14px;
                width: 0
              }
              
              .is-open .Dropdown-arrow {
                border-color: transparent transparent #999;
                border-width: 0 5px 5px;
              }
              
              .Dropdown-menu {
                background-color: white;
                border: 1px solid #ccc;
                box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
                box-sizing: border-box;
                margin-top: -1px;
                max-height: 200px;
                overflow-y: auto;
                position: absolute;
                top: 100%;
                width: 100%;
                z-index: 1000;
                -webkit-overflow-scrolling: touch;
              }
              
              .Dropdown-menu .Dropdown-group > .Dropdown-title{
                padding: 8px 10px;
                color: rgba(51, 51, 51, 1);
                font-weight: bold;
                text-transform: capitalize;
              }
              
              .Dropdown-option {
                box-sizing: border-box;
                color: rgba(51, 51, 51, 0.8);
                cursor: pointer;
                display: block;
                padding: 8px 10px;
              }
              
              .Dropdown-option:last-child {
                border-bottom-right-radius: 2px;
                 border-bottom-left-radius: 2px;
              }
              
              .Dropdown-option:hover {
                background-color: #f2f9fc;
                color: #333;
              }
            
              .Dropdown-placeholder {
                font-family: Poppins;
                font-size: 24px;
                font-style: normal;
                font-weight: 500;
                line-height: 36px;
                letter-spacing: 0em;
                text-align: left;
              }
              
              .Dropdown-option.is-selected {
                background-color: #f2f9fc;
                color: #333;
              }
              
              .Dropdown-noresults {
                box-sizing: border-box;
                color: #ccc;
                cursor: default;
                display: block;
                padding: 8px 10px;
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