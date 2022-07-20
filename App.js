import { StyleSheet, Text, View } from 'react-native';

import { Container, Titulo, Nome, Botao, BotaoTexto } from './src/styles';
export default function App() {
  return (
    <Container>
      <Titulo>Ola!</Titulo>
      <Nome color="red">Everson</Nome>

      <Botao onPress={() => alert("oi")}>
        <BotaoTexto>Entrar</BotaoTexto>
      </Botao>
    </Container>
  );}

