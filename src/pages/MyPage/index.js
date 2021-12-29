import React from "react";

import Header from "../../components/Home/Header";
import Footer from "../../components/Home/Footer";
import Categorymenu from "../../components/MyPage/Categorymenu";
import Keys from "../../components/MyPage/Keys";
import Wishlist from "../../components/MyPage/Wishlist";
import Request from "../../components/MyPage/Request";
import Data from "../../components/MyPage/Data";
import Avatarmodal from "../../components/MyPage/Avatarmodal";
import "react-alice-carousel/lib/alice-carousel.css";
import Styles from './MyPage.module.scss';
import Cart from "../../components/Home/Cart";

class MyPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            activeLink: 0,
            showCart: false
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
    }

    componentDidMount() {
        const path = window.location.pathname;
        if (path == '/mypage/wishlist')
            this.setState({ activeLink: 1 });
        else if (path == '/mypage/request')
            this.setState({ activeLink: 2 });
        else if (path == '/mypage/data')
            this.setState({ activeLink: 3 });
        document.addEventListener("mousedown", this.handleClickOutside);
    }

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    handleClick = (pageno) => {
        this.setState({ activeLink: pageno });
    }

    handleShowCart = () => {
        this.setState({ showCart: !this.state.showCart });
    }

    handleHideCart = () => {
        this.setState({ showCart: false });
    }

    // componentDidMount() {
    // }

    render() {
        return (
            <div className={Styles.home}>
                <Cart isOpen={this.state.showCart} handleShowCart={this.handleShowCart} handleHideCart={this.handleHideCart} />
                <div className={Styles.container}>
                    <Header handleShowCart={this.handleShowCart} />
                    <Categorymenu handleShow={this.showModal} activeLink={this.state.activeLink} handleClick={this.handleClick} />
                    {this.state.activeLink == 0 && <Keys />}
                    {this.state.activeLink == 1 && <Wishlist />}
                    {this.state.activeLink == 2 && <Request />}
                    {this.state.activeLink == 3 && <Data />}

                    <Avatarmodal show={this.state.show} handleClose={this.hideModal} />
                </div>
                <Footer />
            </div>
        )
    }
}

export default MyPage;