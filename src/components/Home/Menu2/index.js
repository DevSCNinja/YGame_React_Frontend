import React from "react";
import $ from 'jquery'; 

import Button from "./../Button";

import { getImg } from "../../../utils/Helper";
import Styles from './Menu.scss';

class Menu2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
        const newLocal = '.menu2-item';
        $(document).on('mouseover', newLocal, function() {
            $(".menu2-item.active").removeClass('active');
            $(this).addClass('active');
        });
    }

    render() {
        return (
            <div className="second">
                <ul>
                    {this.props.items.map((item) => 
                        item.isParent ? <li className="menu2-item" key={item.text} onMouseOver={this.props.onMouseOver.bind(this, item.isParent)}><a>{item.text} {item.isParent ? <i></i> : ''}</a></li> : <li className="menu2-item" key={item.text} onMouseOver={this.props.onMouseOver.bind(this, item.isParent)}><a>{item.text} {item.isParent ? <i></i> : ''}</a></li>
                    )}
                </ul>
            </div>   
        )
    }
}

export default Menu2