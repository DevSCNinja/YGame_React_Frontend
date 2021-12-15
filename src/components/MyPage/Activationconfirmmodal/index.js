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

import { getImg } from '../../../utils/Helper.js';
 

import confirmStyle from './Activationconfirmmodal.module.scss';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiBackdrop-root': {
    backgroundColor: 'rgba(0, 0, 0, 0.85)'
  },

  '& .MuiPaper-root': {
    background: "transparent",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25);",
    maxWidth: '780px',
    borderRadius : "20px",
    color: "#000"
  },

  '& .MuiDialogContent-root': {

  },
}));

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

export default function Activationconfirmmodal(props) {
  return (
    <div>
      <BootstrapDialog
        onClose={props.activationModalClose}
        aria-labelledby="customized-dialog-title"
        open={props.confirmOpen}
      >
        <DialogContent dividers>
        <div  className={confirmStyle.confirm_modal_wrap}>
          <dl>
            <dt>
              Você tem certeza de que quer revelar seu código?
            </dt>
            <dd>
              Não, pensarei mais sobre
            </dd>
          </dl>
          <div className={confirmStyle.btn_group}>
          <button className={confirmStyle.submit} onClick={props.doPurchaseClose}>Sim, abrir meu código</button>
            <button className={confirmStyle.cancel} onClick={props.handleClose} >Não, pensarei mais sobre</button>
          </div>
          <div className={confirmStyle.footer_part}>
            Para saber mais sobre trocas e reembolso, acesse
            nossa central de <a href="#">política de privacidade.</a>
          </div>
        </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}