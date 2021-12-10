import React from "react";

import { Logo } from "../../../components/Login/Logo";
import { Footer } from "../../../components/Login/Footer";
import { Button } from "../../../components/Login/Button";
import styles from '../Login.module.scss';

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import styled from "styled-components";

export default function Page4() {
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,
        confirmPass: '',
        confirmShowPass: false,
    });
    
    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleClickConfirmShowPassword = () => {
        setValues({
            ...values,
            confirmShowPass: !values.confirmShowPass,
        });
    };

    const handleMouseDownPassword = (event) => {
         event.preventDefault();
    };

    const LoginStyle = styled.div`
        .css-r47a1p-MuiFormControl-root {
            margin: 0;
            width: 100%;
            background-color: #0D3840;
            border-radius: 5px;
        }

        .css-1gctnaj-MuiInputBase-input-MuiFilledInput-input  {
            margin-top: 0;
            padding: 0;
        }

        .css-i4bv87-MuiSvgIcon-root {
           path {
                color: #111 !important;
           }
        }
    }`;

    return (
        <LoginStyle>
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
        </LoginStyle>
    )

}

