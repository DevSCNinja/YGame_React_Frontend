import React from "react";
import AliceCarousel from 'react-alice-carousel';

import Header from "../../components/Home/Header";
import Footer from "../../components/Home/Footer";

import Cardtitle from "../../components/Home/Cardtitle";
import Card from "../../components/Home/Card";
import Product from "../../components/Home/Product";
import Categorymenu from "../../components/Page1/Categorymenu";
import Subpage1 from "../../components/Page1/Subpage1";
import Subpage2 from "../../components/Page1/Subpage2";
import Subpage3 from "../../components/Page1/Subpage3";
import Subpage4 from "../../components/Page1/Subpage4";

import Avatarmodal from "../../components/Page1/Avatarmodal";

import { getImg } from "../../utils/Helper";

import "react-alice-carousel/lib/alice-carousel.css";
import Styles from './Page1.module.scss';

class Page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            activeLink: 0
        };

        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);
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

    render() {
        return (
            <div className={Styles.home}>
                <div className={Styles.container}>
                    <Header />
                    <Categorymenu handleShow={this.showModal} activeLink={this.state.activeLink} handleClick={this.handleClick}/>
                    { this.state.activeLink == 0 &&  <Subpage1 /> }
                    { this.state.activeLink == 1 &&  <Subpage2 /> }
                    { this.state.activeLink == 2 &&  <Subpage3 /> }
                    { this.state.activeLink == 3 &&  <Subpage4 /> }

                    <Avatarmodal show={this.state.show} handleClose={this.hideModal}/>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Page1;