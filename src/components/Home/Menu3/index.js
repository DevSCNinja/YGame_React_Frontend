import React from "react";
import $ from 'jquery'; 

class Menu3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentDidMount() {
        const newLocal = '.menu3-item';
        $(document).on('mouseover', newLocal, function() {
            $(".menu3-item.thirdactive").removeClass('thirdactive');
            $(this).addClass('thirdactive');
        });
    }

    render() {

        return (
            <div className="third">
                <ul>
                    {this.props.items.map((item) => 
                        item.isActive ? <li className="menu3-item" key={item.text}><a>{item.text} {item.isParent ? <i></i> : ''}</a></li> : <li className="menu3-item" key={item.text}><a>{item.text} {item.isParent ? <i></i> : ''}</a></li>
                    )}
                </ul>
            </div>   
        )
    }
}

export default Menu3