import React from 'react';

import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
// import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from "@material-ui/core/Input";
import Dropdown from 'react-dropdown';

import { getImg } from '../../../utils/Helper.js';

import Styles from './Loginmodal.module.scss';
import styled1 from "styled-components";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.85)'
  },

  '& .MuiPaper-root': {
    position: "relative",
    marginLeft: '10px',
    background: "transparent",
    // background: "linear-gradient(180deg, rgba(1, 25, 30, 0) 0%, #01191E 50.79%)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
    maxWidth: '1012px',
    // height: "401px",
    borderRadius: "20px",
    color: "#000"
  },

  '& .MuiDialogContent-root': {
    padding: "20px",
    // background: "linear-gradient(180deg, rgba(1, 25, 30, 0) 0%, #01191E 50.79%)"
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const CatalogStyle = styled1.div`
  .Dropdown-root {
    border-radius: 25px;
    height: 46px;

    .Dropdown-control {
      display:flex;
      padding: 6px 9px;
      background: transparent;
      border: none;
      background: #0D3840;
      border-radius: 10px;
      max-height: 46px;
      text-align: left;



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
      text-align: left
    }

    .Dropdown-placeholder  {
      width: 100%;
      font-size: 22px;
    }
  }
}`;

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Loginmodal(props) {
  const options = [];

  return (
    <div>
      <BootstrapDialog
        onClose={() => props.closeModal(props.pagenum)}
        aria-labelledby="customized-dialog-title"
        open={props.actModalOpen}
      >
        <DialogContent dividers className={Styles.login_modal_wrap}>
          <div className={Styles.login_overlay}>
            <button className={Styles.button_close} onClick={() => props.closeModal(props.pagenum)}>
              <img src={getImg('mypage/close.png')} alt="" />
            </button>

            <div className={Styles.login_header}>
              Para continuar, por favor nos informe os<br />
              dados para faturamento.
            </div>
            <div className={Styles.login_body}>
              <div className={Styles.row}>
                <div className={Styles.col_md_6}>
                  <div className={Styles.form_group} >
                    <div className={Styles.label_group}>
                      <label>Nome</label>
                    </div>
                    <input type="text" name="name" id="name" />
                  </div>
                </div>
                <div className={Styles.col_md_6}>
                  <div className={Styles.form_group} >
                    <div className={Styles.label_group}>
                      <label>Email</label>
                    </div>
                    <input type="text" name="email" id="email" />
                  </div>
                </div>
              </div>
              <div className={Styles.row}>
                <div className={Styles.col_md_6}>
                  <div className={Styles.form_group} >
                    <div className={Styles.label_group}>
                      <label>CPF</label>
                    </div>
                    <input type="text" name="cpf" id="cpf" />
                  </div>
                </div>
                <div className={Styles.col_md_6}>
                  <div className={Styles.form_group} >
                    <div className={Styles.label_group}>
                      <label>Número de Telefone</label>
                    </div>
                    <input type="text" name="telephone" id="telephone" />
                  </div>
                </div>
              </div>
              <CatalogStyle>
                <div className={Styles.row}>
                  <div className={Styles.col_md_3}>
                    <div className={Styles.form_group} >
                      <div className={Styles.label_group}>
                        <label>Nascimento</label>
                      </div>
                      <Dropdown arrowClosed={<i className="fa fa-angle-down" />} arrowOpen={<i className="fa fa-angle-up" />} options={options} onChange={props._onSelect} value={'Dia'} placeholder={options[0]} className={Styles.dropdown} controlClassName={Styles.control} menuClassName={Styles.menu} arrowClassName={Styles.arrow} />
                    </div>
                  </div>
                  <div className={Styles.col_md_3}>
                    <div className={Styles.form_group} >
                      <div className={Styles.label_group}>
                        <label>&nbsp;</label>
                      </div>
                      <Dropdown arrowClosed={<i className="fa fa-angle-down" />} arrowOpen={<i className="fa fa-angle-up" />} options={options} onChange={props._onSelect} value={'Mês'} placeholder={options[0]} className={Styles.dropdown} controlClassName={Styles.control} menuClassName={Styles.menu} arrowClassName={Styles.arrow} />
                    </div>
                  </div>
                  <div className={Styles.col_md_3}>
                    <div className={Styles.form_group} >
                      <div className={Styles.label_group}>
                        <label>&nbsp;</label>
                      </div>
                      <Dropdown arrowClosed={<i className="fa fa-angle-down" />} arrowOpen={<i className="fa fa-angle-up" />} options={options} onChange={props._onSelect} value={'Ano'} placeholder={options[0]} className={Styles.dropdown} controlClassName={Styles.control} menuClassName={Styles.menu} arrowClassName={Styles.arrow} />
                    </div>
                  </div>
                  <div className={Styles.col_md_3}>
                  </div>
                </div>
              </CatalogStyle>
              <div>
                <button onClick={() => props.submitClick(props.pagenum)} className={Styles.submit_btn}>Continuar</button>
              </div>
            </div>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}