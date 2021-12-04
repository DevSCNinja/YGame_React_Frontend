import React from "react";
import { ListGroup } from "react-bootstrap";
import { connect } from 'react-redux';


import { Button } from '../Button';
import styles from '../Login.module.scss';

class Loginmodal extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const showHideClassName = this.props.show ? styles.display_block : styles.display_none;

        return (
            <div className={showHideClassName}>
                <div className={styles.modal}>
                    <div className={styles.modal_outer}>
                        <button className={styles.modal_close} onClick={this.props.handleClose}>
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
                        <Button />
                    </div>
                </div>
            </div>
        )
    }
}



export default Loginmodal
