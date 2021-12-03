import React from "react";

import { Logo } from "../../../components/Login/Logo";
import { Footer } from "../../../components/Login/Footer";
import { Button } from "../../../components/Login/Button";
import styles from '../Login.module.scss';

class Page4 extends React.Component {
    render() {
        return (
            <div className={styles.login_page4}>
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
                                <div class="row">
                                    <div class="col-md-6">
                                        <div className={styles.form_group}>
                                            <label for="email">Primeiro Nome</label>
                                            <input type="text" id="email" />
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div className={styles.form_group}>
                                            <label for="email">Segundo Nome</label>
                                            <input type="text" id="email" />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.form_group}>
                                    <label for="email">Email</label>
                                    <input type="text" id="email" />
                                </div>
                                <div className={styles.form_group}>
                                    <label for="pass">Senha</label>
                                    <div className={styles.input_wrap}>
                                        <input type="password" id="pass" />
                                        <span></span>
                                    </div>
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                    <p>Use 8 ou mais caracteres com uma mistura de letras, números e símbolos.</p>
                                </div>
                                <div className={styles.form_group}>
                                    <label for="pass">Confirmar Senha</label>
                                    <div className={styles.input_wrap}>
                                        <input type="password" id="pass_confirm" />
                                        <span></span>
                                    </div>
                                    <div className={styles.remember}>
                                        <div></div>
                                        <span className={styles.first_title}>Eu concorco com os </span>
                                        <span className={styles.second_title}>Termos e Condições</span>
                                    </div>
                                </div>
                                <Button />
                            </form>
                        </div> 
                    </div>
                    <Footer />       
                </div>
            </div>
        )
    }
}

export default Page4;