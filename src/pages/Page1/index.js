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

import { getImg } from "../../utils/Helper";

import "react-alice-carousel/lib/alice-carousel.css";
import Styles from './Page1.module.scss';

class Page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={Styles.home}>
                <div className={Styles.container}>
                    <Header />
                    <Categorymenu />
                    <Subpage4 />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Page1;