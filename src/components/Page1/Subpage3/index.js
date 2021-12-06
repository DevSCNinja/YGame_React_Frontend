import React from "react";
import Styles from './Subpage3.module.scss';
import styled from 'styled-components'

import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";

class Subpage3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    formatOurData = (columnRequest, columnDate, columnProduct, columnValue, columnPayment, columnStatus) => {
        return { columnRequest, columnDate, columnProduct, columnValue,  columnPayment, columnStatus};     
    }

    render() {
        const TableStyles = styled.div`
            .MuiPaper-root {
                margin-bottom: 66px;
                background: transparent;
            }

            table { 
                border-collapse: collapse;

                th {
                    background: #0D3840;
                    border-bottom: 0;
                    color: white;
                    
                    font-family: Poppins;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 700;
                    line-height: 24px;
                    letter-spacing: 0em;
                }

                td {
                    padding: 10px;
                    background: #01191E;
                    border-bottom: 1px solid #0D3840;
                    color: white;
                    font-family: Poppins;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 24px;
                    letter-spacing: 0em;
                    text-align: center;

                    span.status1 {
                        color: #34A853;
                    }

                    span.status2 {
                        color: #4285F4;
                    }

                    span.status3 {
                        color: #DB2B2F;
                    }

                    span.status4 {
                        color: #F08428;
                    }

                }

                thead {
                    th:first-child{
                        border-radius: 10px 0 0 0;
                    }
                    
                    th:last-child {
                        border-radius: 0 10px 0 0;
                    }
                }
                
                tbody {
                    padding: 10px;

                    tr {
                        :last-child {
                            td {
                                 border-bottom: 0;
                                
                                 :first-child{
                                    border-radius: 0 0 0 10px;
                                }
                                
                                :last-child {
                                    border-radius: 0 0 10px 0;
                                }
                            }
                        }
                    }
                }
        }`

        const SampleData = [
            this.formatOurData("01543", "01/12/2021", "800 Robux - Roblox", "R$ 42,75", "Cartão de Crédito", "Já resgatado"),
            this.formatOurData("01538", "30/11/2021", "Xbox Game Pass - 1 mês", "R$ 42,75", "PIX" , "Pronto para resgate"),
            this.formatOurData("01529", "22/11/2021", "3130 VP - Valorant Points", "R$ 100,00", "Boleto Express", "Cancelado"),
            this.formatOurData("01501", "07/11/2021", "Netflix R$ 50 - Gift Card Digital", "R$ 50,00", "Ame App", "Aguardando Pagamento"),
        ];

        return (
            <div className={Styles.request_page_wrap}>
                <div className={Styles.table_container}>
                <div style={{ display: "block", padding: 0 }}>
                    <TableStyles>    
                        <TableContainer component={Paper}>
                            <Table
                            // style={{
                            //     width: 600,
                            // }}
                            size="small"
                            >
                            <TableHead style={{background: "#0D3840"}}>
                                <TableRow>
                                    <TableCell align="center" style={{color: "#ffffff"}}>PEDIDO</TableCell>
                                    <TableCell align="center">DATA</TableCell>
                                    <TableCell align="center">PRODUTO</TableCell>
                                    <TableCell align="center">VALOR</TableCell>
                                    <TableCell align="center">PAGAMENTO</TableCell>
                                    <TableCell align="center">STATUS</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {SampleData.map((row, idx) => (
                                  
                                <TableRow key={row.columnRequest}>
                                    <TableCell align="center">
                                    {row.columnRequest}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.columnDate}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.columnProduct}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.columnValue}
                                    </TableCell>
                                    <TableCell align="center">
                                        {row.columnPayment}
                                    </TableCell>
                                    <TableCell align="center">
                                        <span class={"status" + (idx + 1)}>{row.columnStatus}</span>
                                    </TableCell>
                                </TableRow>
                                ))}
                            </TableBody>
                            </Table>
                        </TableContainer>
                       </TableStyles> 
                    </div>
                    {/* <table>
                        <thead>
                            <tr>
                               
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                
                            </tr>
                            <tr>
                                
                            </tr>
                            <tr>
                                <td>01529</td>     
                                <td>22/11/2021</td>
                                <td>3130 VP - Valorant Points</td>
                                <td>R$ 100,00</td>
                                <td>Boleto Express</td>
                                <td>
                                    <span className={Styles.rq_status3}>Cancelado</span>
                                </td>
                            </tr>
                            <tr>
                                <td>01501</td>     
                                <td>11/07/2021</td>
                                <td>Netflix R$ 50 - Gift Card Digital</td>
                                <td>R$ 50,00</td>
                                <td>Ame App</td>
                                <td>
                                    <span className={Styles.rq_status4}>Aguardando Pagamento</span>
                                </td>
                            </tr>
                        </tbody>
                    </table> */}
                </div>
            </div>
        )
    }
}

export default Subpage3