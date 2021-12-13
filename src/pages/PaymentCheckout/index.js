import React from "react";

import HeaderLogged from "../../components/Home/HeaderLogged";
import Footer from "../../components/Home/Footer";
import { getImg } from "../../utils/Helper";
import Styles from './PaymentCheckout.module.scss';
import styled from "styled-components";
// import Sort from "../../components/MyPage/Sort";
// import Dropdown from 'react-dropdown';

export default function PaymentCheckout(props) {
  const options = [];

    const PC_Style = styled.div`
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
                        background: #0D3840;
                        border-radius: 25px;
        
        
            
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
    <PC_Style>
        <div className={Styles.payment_checkout_page}>
        <div className={Styles.container}>
            <HeaderLogged />
            <div className={Styles.payment_checkout_container}>
            <div className={Styles.payment_checkout_wrap}>
                <div className={Styles.title}>CHECKOUT</div>
                <div clasName={Styles.step_list}>
                    <div className={Styles.step_item}>      
                        <div className={Styles.arrow}></div>
                        <div className={Styles.icon_wrap}>
                            <img src={getImg('payment_checkout/user_active.png')} alt=""/>
                        </div>
                        
                    </div>
                </div>   
            </div>
            </div>
        </div>
        <Footer />
        </div>
    </PC_Style>
  )
}
