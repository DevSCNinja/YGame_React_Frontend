import React from "react";

import Header from "../../components/Home/Header";
import Footer from "../../components/Home/Footer";
import Checkstep from "../../components/Checkout/Checkstep";
import Checkcart from "../../components/Checkout/Cart";
import Login from "../../components/Checkout/Payment";
import Payment from "../../components/Checkout/Payment";
import Finalization from "../../components/Checkout/Finalization";
import "react-alice-carousel/lib/alice-carousel.css";
import Styles from './Checkout.module.scss';
import Cart from "../../components/Home/Cart";

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: 0,
            stateModal: false,
            showCart: false
        };

    }

    handleShowCart = () => {
        this.setState({ showCart: !this.state.showCart });
    }

    handleHideCart = () => {
        this.setState({ showCart: false });
    }

    componentDidMount() {
        const path = window.location.pathname;
        if (path == '/checkout/login')
            this.setState({ activeLink: 1 });
        else if (path == '/checkout/payment')
            this.setState({ activeLink: 2 });
        else if (path == '/checkout/finalization')
            this.setState({ activeLink: 3 });
    }

    handleClick = (pageno) => {
        if (pageno == 1) {
            this.setState({ activeLink: pageno, stateModal: true });
        } else {
            this.setState({ activeLink: pageno });
        }
    }

    submitClick = (pageno) => {
        pageno++;
        this.setState({ activeLink: pageno, stateModal: true });
    }

    closeModal = (pageno) => {
        pageno--;
        this.setState({ activeLink: pageno, stateModal: false });
    }

    render() {
        return (
            <div className={Styles.home}>
                <Cart isOpen={this.state.showCart} handleShowCart={this.handleShowCart} handleHideCart={this.handleHideCart} />
                <div className={Styles.container}>
                    <Header handleShowCart={this.handleShowCart} />
                    {/* <Header /> */}
                    <Checkstep activeLink={this.state.activeLink} handleClick={this.handleClick} />
                    {this.state.activeLink == 0 && <Checkcart pagenum={0} stateModal={this.state.stateModal} closeModal={this.closeModal} submitClick={this.submitClick} />}
                    {this.state.activeLink == 1 && <Checkcart pagenum={1} stateModal={this.state.stateModal} closeModal={this.closeModal} submitClick={this.submitClick} />}
                    {this.state.activeLink == 2 && <Payment pagenum={2} submitClick={this.submitClick} />}
                    {this.state.activeLink == 3 && <Finalization />}
                </div>
                <Footer />
            </div>
        )
    }
}

export default Checkout;