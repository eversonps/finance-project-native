import React, { useContext } from "react";
import { View, Text, Button } from "react-native";
import { AuthContext } from "../../contexts/auth";
import { useNavigation } from "@react-navigation/native";

import { Container, Nome, NewLink, NewText, Logout, LogoutText } from "./styles";

import Header from "../../components/Header";

export default function Profile(){
    const {signOut, user} = useContext(AuthContext)
    const navigation = useNavigation(AuthContext)
    
    return (
        <Container>
            <Header />
            <Nome>{user && user.nome}</Nome>
            <NewLink onPress={() => navigation.navigate("Registrar")}>
                <NewText>Registrar gastos</NewText>
            </NewLink>

            <Logout onPress={() => signOut()}>
                <LogoutText>Sair</LogoutText>
            </Logout>
        </Container>
    )
}