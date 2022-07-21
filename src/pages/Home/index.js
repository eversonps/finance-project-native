import React, { useContext, useState } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../../contexts/auth";

import Header from "../../components/Header";
import { Background, Container, Saldo, Title, Nome, List} from "./styles"
import HistoricoList from "../../components/HistoricoList";

export default function Home(){
    const {user, signOut} = useContext(AuthContext)

    const [historico, setHistorico] = useState([
        {key: '1', tipo: 'receita', valor: 1200},
        {key: '2', tipo: 'despesa', valor: 200},
        {key: '3', tipo: 'despesa', valor: 40},
        {key: '4', tipo: 'receita', valor: 89.62},
    ])
    return (
        <Background>
            <Header />
            <Container>
                <Nome>Everson</Nome>
                <Saldo>R$ 100,99</Saldo>
            </Container>

            <Title>Ultimas movimentações</Title>

            <List 
            showsVerticalScrollIndicator={false}
            data={historico}
            keyExtractor={item => item.key}
            renderItem={({item}) => (<HistoricoList data={item} />)}
            />
        </Background>
    )
}