import "./App.css";
import { Container, Typography } from "@material-ui/core";
import FormularioCadastro from "./components/formularioCadastro/FormularioCadastro";
import "@fontsource/roboto";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <FormularioCadastro
        onCadastrar={(dados) => cadastrar(dados)}
        validarCpf={validarCpf}
      />
    </Container>
  );
}

function cadastrar(dados) {
  console.log(dados);
}

function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return { invalid: true, msg: "CPF Inválido" };
  } else {
    return { invalid: false, msg: "" };
  }
}

export default App;
