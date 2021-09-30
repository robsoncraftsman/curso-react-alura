import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({ onCadastrar, validarCpf }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(false);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({
    cpf: { invalid: false, msg: "" },
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const dadosCadastro = { nome, sobrenome, cpf, promocoes, novidades };
        onCadastrar(dadosCadastro);
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
        error={erros.cpf.invalid}
        helperText={erros.cpf.msg}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={(event) => {
          setErros({ cpf: validarCpf(cpf) });
        }}
      />

      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            name="promocoes"
            checked={promocoes}
            color="primary"
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            name="novidades"
            checked={novidades}
            color="primary"
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
          />
        }
      />

      <Button color="primary" variant="contained" type="submit">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
