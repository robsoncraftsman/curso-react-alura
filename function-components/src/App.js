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
      <FormularioCadastro />
    </Container>
  );
}

export default App;
