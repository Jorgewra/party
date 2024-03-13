
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
type CardProps = {
    statusSelect: boolean
    clickSelect: () => void

}
const CardItem = ({ ...props }: CardProps) => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const DialogConfirm = () => {
        return (
            <Dialog
                open={open}
                onClose={handleClose}               
            >
                <DialogContent>
                    <DialogContentText style={{textAlign:"center"}}>
                       Huauaua. Vou amar receber este presente! <br/>
                       *Agora só informar o codigo do convite..                      
                    </DialogContentText>
                    <TextField
                        autoFocus
                        required
                        margin="dense"                       
                        label="Código do convite"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                    
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancelar</Button>
                    <Button type="submit">Confirmar</Button>
                </DialogActions>
            </Dialog>
        )
    }

    return (
        <Box sx={{ flexGrow: 1 }} style={{backgroundColor: "#fd0"}}>
            <Grid container spacing={2} >
                <Grid item sm={4}>
                    <img src='note.jpeg' style={{ width: "180px", margin:'auto'}} />
                </Grid>
                <Grid item >
                    <div>
                        <h1 style={{ textAlign: "left" }}>Taça de Água Diamante Amber Metalizada</h1>
                        <div style={{ float: "right" }}>
                            {
                                props.statusSelect ? (<img src='check.png' style={{ width: "50px" }} />) : (
                                    <></>
                                )
                            }

                        </div>
                    </div>

                    <p style={{ textAlign: "left" }}> Taças de vidro para beber água.</p>
                    <br />
                    <br />
                    <p style={{ textAlign: "left" }}>
                        <a href=''>www.magalu.com.br</a> <br />
                        www.amaricanas.com
                    </p>
                    <div style={{ float: "right" }}>
                        <Button variant="contained" disabled={props.statusSelect} onClick={()=>handleClickOpen()}>Selecionar</Button>
                    </div>

                </Grid>
            </Grid>
            <DialogConfirm />
        </Box>
    )
}
export default CardItem;