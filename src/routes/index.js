import React, {useContext} from "react";

import { AuthContext } from "../contexts/auth";

import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

import { View, ActivityIndicator } from "react-native";

export default function Routes(){
    const { signed, loading } = useContext(AuthContext)

    if(loading){
        return (
            <View styles={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                <ActivityIndicator size="large" color="#131313"/>
            </View>
        )
    }

    return (
        signed ? <AppRoutes /> : <AuthRoutes />
    )
}