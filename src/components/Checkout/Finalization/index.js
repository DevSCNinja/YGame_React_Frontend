import React, { Component } from "react";
// import { useState } from 'react';
import Styles from './Finalization.module.scss';
import styled from 'styled-components';
import Dropdown from 'react-dropdown';

import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

import { getImg } from "../../../utils/Helper";

class Finalization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count1: 1,
      count2: 1,
      count3: 1
    };
  }

  increament1 = () => {
    this.setState({
      count1: Number(this.state.count1) + 1
    })
  }
  increament2 = () => {
    this.setState({
      count2: Number(this.state.count2) + 1
    })
  }
  increament3 = () => {
    this.setState({
      count3: Number(this.state.count3) + 1
    })
  }

  handleChange1 = (count) => {
    this.setState({
      count1: count
    })
  }

  handleChange2 = (count) => {
    this.setState({
      count2: count
    })
  }

  handleChange3 = (count) => {
    this.setState({
      count3: count
    })
  }

  decrease1 = () => {
    this.setState({
      count1: this.state.count1 - 1
    })
  }
  decrease2 = () => {
    this.setState({
      count2: this.state.count2 - 1
    })
  }
  decrease3 = () => {
    this.setState({
      count3: this.state.count3 - 1
    })
  }

  remove1 = () => {
    this.setState({
      count1: 0
    })
  }
  remove2 = () => {
    this.setState({
      count2: 0
    })
  }
  remove3 = () => {
    this.setState({
      count3: 0
    })
  }
  render() {
    // const [open, setOpen] = useState(false);
    const options = [];

    const CatalogStyle = styled.div`
        .filter_list{
            display: flex;
            justify-content: space-between;
            width: 100%;

            .filter_item {
                margin: 10px 0;
                .Dropdown-root {
                    width: 238px;
                    border-radius: 25px;
    
                    .Dropdown-control {
                        display:flex;
                        padding: 9px 28px;
                        background: transparent;
                        border: none;
                        border-radius: 25px;
                        width : 572px;
            
                        .Dropdown-arrow-wrapper {
                            margin-left: 6px;
                            align-self: center;
            
                            i {
                                font-size: 25px;
                            }
                        }
                    }

                    .Dropdown-menu {
                        border-radius: 4px;
                    }
        
                    .Dropdown-placeholder  {
                        width: 100%;
                        font-size: 22px;
                    }
                }
            }
        }
         }`;

    return (
      < CatalogStyle>
        <div className={Styles.mydata_page_wrap}>
          <div className={Styles.config_group}>
            <div className={Styles.config_top}>
              <p className={Styles.config_top_title}>Agradecemos seu pedido!</p>
              <p className={Styles.config_top_content}>Você também pode conferir seus códigos pelo email ou na aba
                <p></p><span style={{ fontSize: '22px', fontWeight: 'bold' }}>MINHAS CHAVES</span> em Minha Conta</p>
            </div>
            <div className={Styles.config_data}>
              <div className={Styles.config_data1}>
                <p>Nº Pedido</p>
                <p style={{ marginLeft: '64px' }}>Forma de Pagamento</p>
                <p style={{ marginLeft: '101px' }}>Data</p>
              </div>
              <div className={Styles.config_data2}>
                <p>01543</p>
                <p style={{ marginLeft: '82px' }}>Pix</p>
                <p style={{ marginLeft: '302px' }}>13/12/2021</p>
              </div>
            </div>
            <div className={Styles.config_header} style={{ display: 'flex', marginTop: '82px' }} >
              <p style={{ marginLeft: '31px' }}>PRODUTO</p>
              <p style={{ marginLeft: '418px' }}>QTD.</p>
              <p style={{ marginLeft: '47px' }}>VALOR</p>
              <p style={{ marginLeft: '117px' }}>CÓDIGO</p>
            </div>
            <div className={Styles.config_panel}>
              <div className={Styles.config_panel_left}>
                <div className={Styles.left_panel_content}>
                  <p><img src={getImg('checkout/Rectangle 41.png')} /></p>
                  <p className={Styles.left_panel_content_p1}>Minecraft - Código Digital</p>
                  <p className={Styles.left_panel_content_number}>1</p>
                  <p className={Styles.left_panel_content_p2}>R$ 99,99</p>
                  <button className={Styles.left_panel_content_button}>Ver código</button>
                </div>
                <div className={Styles.left_panel_content}>
                  <img src={getImg('checkout/Rectangle 42.png')} />
                  <p className={Styles.left_panel_content_p1}>Spotify Premiun -Assinatura 3meses</p>
                  <p className={Styles.left_panel_content_number}>1</p>
                  <p className={Styles.left_panel_content_p2}>R$ 50,00</p>
                  <button className={Styles.left_panel_content_button}>Ver código</button>
                </div>
                <div className={Styles.left_panel_content} style={{ border: 'none' }}>
                  <img src={getImg('checkout/Rectangle 43.png')} />
                  <p className={Styles.left_panel_content_p1}>800 Robux - Roblox</p>
                  <p className={Styles.left_panel_content_number}>1</p>
                  <p className={Styles.left_panel_content_p2}>R$ 80,00</p>
                  <button className={Styles.left_panel_content_button}>Ver código</button>
                </div>
              </div>
            </div>
            <div className={Styles.config_bottom}>
              <button className={Styles.config_bottom_button}>Voltar a página inicial</button>
            </div>
          </div>
        </div>
      </CatalogStyle>
    );
  }
};

export default Finalization;