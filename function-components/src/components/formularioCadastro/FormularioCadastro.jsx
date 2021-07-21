import React from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  return (
    <form>
      <TextField
        id="nome"
        label="Nome:"
        variant="outlined"
        fullWidth={true}
        margin="normal"
      />
      <TextField
        id="sobrenome"
        label="Sobrenome:"
        variant="outlined"
        fullWidth={true}
        margin="normal"
      />
      <TextField
        id="cpf"
        label="CPF:"
        variant="outlined"
        fullWidth={true}
        margin="normal"
      />

      <FormControlLabel
        label="Promoções"
        control={<Switch name="promocoes" color="primary" defaultChecked />}
      />

      <FormControlLabel
        label="Novidades"
        control={<Switch name="novidades" color="primary" defaultChecked />}
      />

      <Button color="primary" variant="contained">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
