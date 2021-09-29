import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");

  return (
    <form
      onSubmit={(event) => {
        console.log(nome, sobrenome, cpf);
        event.preventDefault();
      }}
    >
      <TextField
        id="nome"
        label="Nome:"
        value={nome}
        variant="outlined"
        fullWidth={true}
        margin="normal"
        onChange={(event) => {
          setNome(event.target.value);
        }}
      />
      <TextField
        id="sobrenome"
        label="Sobrenome:"
        value={sobrenome}
        variant="outlined"
        fullWidth={true}
        margin="normal"
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
      />
      <TextField
        id="cpf"
        label="CPF:"
        value={cpf}
        variant="outlined"
        fullWidth={true}
        margin="normal"
        onChange={(event) => {
          setCpf(event.target.value);
        }}
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
