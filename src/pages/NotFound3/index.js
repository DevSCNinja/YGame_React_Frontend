import React from "react";

import { Header } from "../../components/NotFound/Header";
import { Footer } from "../../components/NotFound/Footer";
import { LeftContent } from "./LeftContent";
import { RightImg } from "./RightImg";
import Styles from '../NotFound.module.scss';

class NotFound extends React.Component {
    render() {
        return (
            <div className={Styles.notfound}>
                <Header />
                <div className={Styles.container}>
                    <div className={Styles.maincontent}>
                        <LeftContent />
                        <RightImg />
                    </div>
                </div>
                <div className={Styles.clearfix }></div>
                <Footer />
            </div>
        )
    }
}

export default NotFound;