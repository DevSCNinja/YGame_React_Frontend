import React from "react";

import { Logo } from "../../../components/Login/Logo";
import { Footer } from "../../../components/Login/Footer";
import styles from '../Login.module.scss';
import { getImg } from "../../../utils/Helper";

class Page3 extends React.Component {
    render() {
        return (
            <div className={styles.loginwrap}>
                <Logo />
                <div className={styles.logincontent}>
                    <div className={styles.loginformwrap}>
                        <form name="login_form" id="login_form" method="POST" action="">
                            <dl>
                                <dt>
                                    Crie uma conta
                                </dt>
                                <dd>
                                    <span>Já tem uma conta?</span>
                                    <span>Entre Aqui</span>
                                </dd>
                            </dl>

                            <ul>
                                <li>
                                    <a href="#" className={styles.button}>
                                        <img src={getImg('login/Google-Original.png')} alt="" />
                                        <span>Continuar com Google</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className={styles.button}>
                                        <img src={getImg('login/Facebook - Original.png')} alt="" />
                                        <span>Continuar com Facebook</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" className={styles.button}>
                                        <img src={getImg('login/envelope-regular 1.png')} alt="" />
                                        <span>Continuar com Email</span>
                                    </a>
                                </li>
                            </ul>
                        </form>
                    </div> 
                </div>
                <Footer />       
            </div>
        )
    }
}

export default Page3;