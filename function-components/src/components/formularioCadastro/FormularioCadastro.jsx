import React from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  let nome = "";

  return (
    <form
      onSubmit={(event) => {
        console.log(nome);
        event.preventDefault();
      }}
    >
      <TextField
        id="nome"
        label="Nome:"
        variant="outlined"
        fullWidth={true}
        margin="normal"
        onChange={(event) => {
          nome = event.target.value;
        }}
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

      <Button color="primary" variant="contained" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
