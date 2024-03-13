import * as React from 'react';
import styles from "./confirmFormCard.module.css";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, FormControl, FormControlLabel, FormLabel, List, ListItem, Radio, RadioGroup, TextField } from '@mui/material';
import CardItem from './cardItem';

const ConfirmFormCard = () => {
   
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item sm={4} xs={12}>
                    <div className={styles.card}>
                        <h1>Você vem?</h1>

                        <FormControl>
                           <RadioGroup
                                row
                                aria-labelledby="demo-row-radio-buttons-group-label"
                                name="row-radio-buttons-group"
                            >
                                <FormControlLabel style={{ backgroundColor: "#0000",fontSize: 20,  fontWeight: "bold", margin: "5px" }} value="YES" control={<Radio />} label="Sim. Confirmadíssima! " />
                                <FormControlLabel style={{ backgroundColor: "#0000",fontSize: 20, fontWeight: "bold", margin: "5px" }} value="NO" control={<Radio />} label="Infelizmente, não posso ir! " />

                            </RadioGroup>
                        </FormControl><br/>

                        <TextField
                            style={{ backgroundColor: "#fff", fontSize: 20, fontWeight: "bold", margin: "5px" }}
                            label="Código do convite"
                            fullWidth
                        />
                        <TextField
                            style={{ backgroundColor: "#fff", fontSize: 20, fontWeight: "bold", margin: "5px" }}
                            label="Nome completo"
                            fullWidth
                        />
                        <TextField
                            style={{ backgroundColor: "#fff", fontSize: 20, fontWeight: "bold", margin: "5px" }}
                            label="CPF"
                            fullWidth
                        />
                        <TextField
                            style={{ backgroundColor: "#fff", fontSize: 20, fontWeight: "bold", margin: "5px" }}
                            label="Telefone"
                            fullWidth
                        />
                        

                        <Button variant="contained">Enviar</Button>
                    </div>

                </Grid>
                <Grid item sm={8} xs={12}>
                    <div className={styles.card}>
                        <h1>Lista de Desejos</h1>
                        <List sx={{ width: '100%' }}>
                            
                            <ListItem style={{backgroundColor: '#fff',marginBottom:10}}>
                                <CardItem statusSelect={false} clickSelect={()=>{}} />
                            </ListItem>
                        </List>
                        
                    </div>
                </Grid>

            </Grid>
        </Box>
    )
}
export default ConfirmFormCard