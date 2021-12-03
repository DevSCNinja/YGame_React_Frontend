import React from "react";

import { Logo } from "../../../components/Login/Logo";
import { Footer } from "../../../components/Login/Footer";
import { Button } from "../../../components/Login/Button";
import styles from '../Login.module.scss';
import { getImg } from "../../../utils/Helper";

class Page2 extends React.Component {
    render() {
        return (
            <div className={styles.loginwrap}>
                <Logo />
                <div className={styles.logincontent}>
                    <div className={styles.loginformwrap}>
                        <form name="login_form" id="login_form" method="POST" action="">
                            <dl>
                                <dt>
                                     Acesse sua conta
                                </dt>
                                <dd>
                                    <span>Não tem uma conta?</span>
                                    <span>Cadastre-se Aqui</span>
                                </dd>
                            </dl>

                            <div className={styles.form_group}>
                                <label for="email">Email</label>
                                <input type="text" id="email" value="" />
                            </div>
                            <div className={styles.form_group}>
                                <label for="pass">Senha</label>
                                <span>Esqueceu a senha?</span>
                                <div className={styles.input_wrap}>
                                  <input type="text" id="pass" value="" />
                                  <span></span>
                                </div>
                            </div>
                            <Button />
                        </form>
                    </div> 
                </div>
                <Footer />       
            </div>
        )
    }
}

export default Page2;