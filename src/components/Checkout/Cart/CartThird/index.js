import React from "react";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { getImg } from "../../../../utils/Helper";
import Styles from './CartThird.module.scss';
import styled from 'styled-components';

const CatalogStyle = styled.div`
	.MuiAccordionSummary-content {
			margin: 20px 0;
		}

		svg {
			font-size:45px;
		}
		.MuiAccordionSummary-content.Mui-expanded {
			margin-bottom:0px;
		}
		.MuiTypography-root {
				font-family: Poppins;
				font-size: 18px;
				font-style: normal;
				font-weight: 500;
				line-height: 27px;
				letter-spacing: 0em;
				text-align: left;

		}
		
		.MuiAccordion-root {
			background-color :transparent;
			// padding:0px;
			.MuiAccordionSummary-root {
				padding :0px; 
				.css-ahj2mt-MuiTypography-root {
					font-family: Poppins;
					font-size: 32px;
					font-style: normal;
					font-weight: 600;
					line-height: 48px;
					letter-spacing: 0em;
					text-align: left;
				}
			}
			.MuiAccordionDetails-root {
						padding :0 0 20px 0px;
			}
		}

	}`;

class CartThird extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
    };

  }


  render() {
    return (
      < CatalogStyle>
        <div className={Styles.config_panel_left} style={{ marginTop: '-69px', paddingRight: '20px', width: '658px' }}>
          <Accordion className={Styles.my_accordion}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Esta compra é um presente?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nós da YiYi Games te ajudamos a entregar o presente da melhor
                forma possível. Basta apenas inserir o Email do presenteado abaixo
                e ele receberá no email o código com uma mensagem especial
                escrita por você!
                <input className={Styles.accordion_input} placeholder="Insira aqui o email do presenteado"></input>
                <textarea className={Styles.accordion_textarea} placeholder="Insira aqui sua mensagem"></textarea>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </CatalogStyle>
    )
  }
}

export default CartThird