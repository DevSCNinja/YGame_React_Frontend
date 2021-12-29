import React, { useState } from "react";

import { Logo } from "../../components/Login/Logo";
import { Footer } from "../../components/Login/Footer";
import { WithOthers } from "../../components/Login/WithOthers";

import { getImg } from "../../utils/Helper";
import { animations } from 'react-animation';
import { Button } from "../../components/Login/Button";

import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import styled from 'styled-components';
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';

const LoginStyle = styled.div`
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

export default function Login() {
	const [values, setValues] = useState({
		password: '',
		showPassword: false,
		inputStatus: false
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

	const animationStyle = {
		animation: animations.bounceIn
	}
	const wWidth = window.innerWidth;
	const wHeight = window.innerHeight;

	return (
		<LoginStyle>
			<div className={styles.loginwrap} style={{ height: wHeight + 'px' }}>
				<Logo />
				<div className={styles.logincontent} style={{ top: (wHeight - 335) / 2 + 'px', left: (wWidth - 414) / 2 + 'px' }}>
					<div className={styles.loginformwrap} style={{ animation: animations.bounceIn }}>
						<form name="login_form" id="login_form" method="POST" action="">
							<dl>
								<dt>
									Acesse sua conta
								</dt>
								<dd>
									<span>Não tem uma conta?</span>
									<span>
										{!values.inputStatus && <a onClick={handleClick}>h-se Aqui</a>}
										{values.inputStatus && <Link to="/register">Cadastre-se Aqui</Link>}
									</span>
								</dd>
							</dl>
							{!values.inputStatus && <WithOthers />}
							{
								values.inputStatus &&
								<div>
									<div className={styles.form_group}>
										<label for="email">Email</label>
										<input type="text" className={styles.input} id="email" />
									</div>
									<div className={styles.form_group}>
										<label for="pass">Senha</label>
										<Link to="/register"><span style={{ fontWeight: "bold" }}>Esqueceu a senha?</span></Link>
										<div className={styles.input_wrap}>
											<FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
												<FilledInput
													id="filled-adornment-password"
													type={values.showPassword ? 'text' : 'password'}
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
									</div>
									<Button />
								</div>
							}
						</form>
					</div>
				</div>
				<Footer />
			</div>
		</LoginStyle>
	)
}
