import React, {useState } from "react";

import { Button } from "../../components/Login/Button";
import { Logo } from "../../components/Login/Logo";
import { Footer } from "../../components/Login/Footer";
import styles from '../Login/Login.module.scss';
import { WithOthers } from "../../components/Login/WithOthers";
import { animations } from 'react-animation'
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import styled from 'styled-components';
import Modal from '@mui/material/Modal';

const RegisterStyle = styled.div`
    .MuiFormControl-root {
        margin: 0;
        width: 100%;
        background-color: #0D3840;
        border-radius: 5px;
    }

    .MuiInputBase-input-MuiFilledInput-input  {
        margin-top: 0;
        padding: 0;
    }

    .MuiSvgIcon-root {
    path {
            color: #111 !important;
    }
    }
}`;


export default function Register() {
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
        inputStatus: false,
        confirmPass: '',
        confirmShowPass: false,
    });


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
         event.preventDefault();
    };

    const handleClick = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
            inputStatus: true
        });
    }

    const handleClickConfirmShowPassword = () => {
        setValues({
            ...values,
            confirmShowPass: !values.confirmShowPass,
        });
    };

    const animationStyle = {
        animation: animations.bounceIn
    }

    // const style = {
    //     position: 'absolute',
    //     top: '50%',
    //     left: '50%',
    //     transform: 'translate(-50%, -50%)',
    //     width: 400,
    //     bgcolor: 'background.paper',
    //     border: '2px solid #000',
    //     boxShadow: 24,
    //     p: 4,
    // };

    return (
        <RegisterStyle>
            <div className={styles.loginwrap}>
                <Logo />
                <div className={styles.logincontent} style={animationStyle}>
                    <div className={styles.loginformwrap} style={values.inputStatus ? { width: "586px"} : {}}>
                        <form name="login_form" id="login_form" method="POST" action="">
                            <dl>
                                <dt>
                                    Crie uma conta
                                </dt>
                                <dd>
                                    <span>Já tem uma conta?</span>
                                    <span><a href="javascript:;"onClick={handleClick}>Entre Aqui</a></span>
                                </dd>
                            </dl>
                            {!values.inputStatus && <WithOthers />}
                            {values.inputStatus && <div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div className={styles.form_group}>
                                            <label for="email">Primeiro Nome</label>
                                            <input type="text" className={styles.input}/>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div className={styles.form_group}>
                                            <label for="email">Segundo Nome</label>
                                            <input type="text" className={styles.input} />
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.form_group}>
                                    <label for="email">Email</label>
                                    <input type="text" className={styles.input} />
                                </div>
                                <div className={styles.form_group}>
                                    <label for="pass">Senha</label>
                                    <div className={styles.input_wrap}>
                                    <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                                    <FilledInput
                                        id="filled-adornment-password"
                                        type={values.confirm ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                    />
                                    </FormControl>
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
                                    <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
                                    <FilledInput
                                        id="filled-adornment-password1"
                                        type={values.confirmShowPass ? 'text' : 'password'}
                                        value={values.confirmPass}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickConfirmShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                            {values.confirmShowPass ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                    />
                                    </FormControl>
                                    </div>
                                    <div className={styles.remember}>
                                        <input type="checkbox" />
                                        <span className={styles.first_title}>Eu concorco com os </span>
                                        <span><a onClick={handleOpen} style={{marginTop: "2px"}}>Termos e Condições</a></span>
                                    </div>
                                </div>
                                <Button />    
                            </div>}
                        </form>
                    </div> 
                </div>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <div className={styles.modal}>
                        <div className={styles.modal_outer}>
                            <button className={styles.modal_close} onClick={handleClose}>
                                {/* <FontAwesomeIcon icon={["far", "coffee"]} /> 
                                */}
                                {/* <img className={styles.logo} src={getImg('login/close.png')} alt="logo" /> */}
                                <i className="fa fa-times"></i>
                            </button>
                            <div className={styles.modal_title}>
                                <div className={styles.modal_title}>
                                    Termos e Condições
                                </div>
                            </div>
                            <div className={styles.modal_content}>
                                <p>Mussum Ipsum, cacilds vidis litro abertis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Sapien in monti palavris qui num significa nadis i pareci latim. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Per aumento de cachacis, eu reclamis.</p>
                                <p>Mé faiz elementum girarzis, nisi eros vermeio. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Leite de capivaris, leite de mula manquis sem cabeça. Quem num gosta di mim que vai caçá sua turmis!</p>
                                <p>Interagi no mé, cursus quis, vehicula ac nisi. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Quem num gosta di mé, boa gentis num é.</p>
                                <p>Suco de cevadiss deixa as pessoas mais interessantis. A ordem dos tratores não altera o pão duris. Detraxit consequat et quo num tendi nada. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.</p>
                                <p> Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Casamentiss faiz malandris se pirulitá. Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. </p>          
                            </div>
                            <Button text="Aceitar e continuar" onClick={handleClose}/>
                        </div>
                    </div>
                </Modal>
                <Footer />       
            </div>
        </RegisterStyle>
    )
}
