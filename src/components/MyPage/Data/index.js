import React from "react";
import Styles from './Data.module.scss';
import styled from 'styled-components'

import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

import { getImg } from "../../../utils/Helper";
import Button1 from '../Button1';

const MydataPageStyle = styled.div`
    .MuiInputBase-root {
        background: #01191E;
        border-radius: 10px;
    
    }

    .MuiInputBase-root  input{
        padding: 0;
        color: #fff;
    }

    .MuiInputBase-root  {
        svg {
            path {
                font-size: 20px !important;
                color: #0D3840;
            }
        }
    }

    .MuiIconButton-root {
        font-size: 2rem;
    }

    .MuiInput-underline:before {
        border: none;
        border-radius: 10px;
    }

    .row {
        margin-bottom: 20px;
    }
    
}`

const Data = () => {
    const [values, setValues] = React.useState({
      password: "",
      password_confirm: "",
      showPassword: false,
      confirmPass: '',
      confirmShowPass: false,
    });
    
    const handleClickShowPassword = () => {
      setValues({ ...values, showPassword: !values.showPassword });
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
    
    
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
    
    return (
      <MydataPageStyle>
        <div className={Styles.mydata_page_wrap}>
            <div className={Styles.config_group}>
                <dl>
                    <dt>Configuração de Acesso</dt>
                    <dd>Alterar detalhes de acesso da sua conta</dd>
                </dl>
                <div className={Styles.config_panel}>
                    <form name="access_form" id="access_form" method="POST" action="">
                        <div className="row" style={{padding: "0 10px"}}>
                            <div className={Styles.form_group} style={{ width: "582px"}} >
                                <div className={Styles.label_group}>
                                    <label>Email</label>
                                    <label>Verificar Email</label>
                                </div>
                                <input type="text" name="email" id="email" />
                            </div>
                            <button type="button" className={Styles.btn1} style={{background: "#34A853" }}>Verificado</button>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className={Styles.form_group} >
                                    <div className={Styles.label_group}>
                                        <label>Senha</label>
                                    </div>
                                    <Input type={values.showPassword ? "text" : "password"}
                                        onChange={handleChange("password")}
                                        value={values.password}
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                    />
                                    <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                    </ul>
                                    <p>Use 8 ou mais caracteres com uma mistura de letras, números e símbolos.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={Styles.form_group}>
                                    <div className={Styles.label_group}>
                                        <label>Confirmação de Senha</label>
                                    </div>
                                    <Input type={values.confirmShowPass ? "text" : "password"}
                                        onChange={handleChange("confirmPass")}
                                        value={values.confirmPass}
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
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className={Styles.form_group}>
                                    <button type="button"> 
                                        <img src={getImg('login/Google-Original.png')} alt="" />Vincular com Google    
                                    </button>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={Styles.form_group}>
                                    <button type="button"> 
                                        <img src={getImg('login/Facebook - Original.png')} alt="" />Desvincular com Facebook    
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className={Styles.check_part}>
                            <input type="checkbox" />
                            <p>Quero receber emails com promoções e notícias</p>
                        </div>
                        <div style={{textAlign: "center"}}>
                            <button className={Styles.btn2}>Salvar Alterações</button>
                        </div>
                    </form>
                </div>    
            </div>
            <div className={Styles.config_group}>
                <dl>
                    <dt>Configuração de Perfil</dt>
                    <dd>Alterar detalhes de Informações da sua conta</dd>
                </dl>
                <div className={Styles.config_panel}>
                    <form name="access_form" id="access_form" method="POST" action="">
                        <div className="row">
                            <div className="col-md-6">
                                <div className={Styles.form_group} >
                                    <div className={Styles.label_group}>
                                        <label>Nome</label>
                                    </div>
                                    <input type="text" name="name" id="name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className={Styles.form_group} >
                                    <div className={Styles.label_group}>
                                        <label>Sobrenome</label>
                                    </div>
                                    <input type="text" name="gender" id="gender" />
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{padding: "0 10px"}}>
                            <div className={Styles.form_group} style={{ width: "582px"}} >
                                <div className={Styles.label_group}>
                                    <label>Celular</label>
                                    <label>Verificar Celular</label>
                                </div>
                                <input type="text" name="phone_number" id="phone_number" />
                            </div>
                            <button type="button" className={Styles.btn1} style={{background: "#DB2B2F" }}>Não Verificado</button>
                        </div>
                        <div className="row" style={{padding: "0 10px"}}>
                            <div className={Styles.form_group} >
                                <div className={Styles.label_group}>
                                    <label>Nascimento</label>
                                </div>
                                <input type="text" name="birth" id="birth" />
                            </div>
                        </div>
                        <div style={{textAlign: "center"}}>
                            <button className={Styles.btn2}>Salvar Alterações</button>
                        </div>
                    </form>
                </div>    
            </div>    
        </div>
      </MydataPageStyle>
    );
  };
    
  export default Data;