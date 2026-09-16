import { router } from "expo-router"
import { useState } from "react"
import { ActivityIndicator, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"


export const Login = () => {
    const [loading, setLoading] = useState(false)

    const loadingLogin = () => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            router.navigate("/(stacks)/home")
        }, 3000);
    }
    
    return (
        <ScrollView contentContainerStyle={styles.screen}>
            <View style={styles.container}>
                <Text style={styles.textTitle}>Bem-vindo de volta!</Text>
                <Text style={styles.textInstruction}>Insira seus dados para entrar na sua conta.</Text>
            </View>
            <View style={styles.containerLogin}>
                <Text>Login</Text>
                <TextInput style={styles.campoDigitar}/>

                <Text>Senha</Text>
                <TextInput 
                    style={styles.campoDigitar}
                    secureTextEntry
                />

                <TouchableOpacity 
                    onPress={loadingLogin}
                    style={styles.botaoEntrar}>
                    {loading ? (
                        <ActivityIndicator size={24} color="#fff" />
                    ) : (
                        <Text style={styles.contentBotaoEntrar}>Entrar</Text>
                    )}
                </TouchableOpacity>
            </View>
            
        </ScrollView>
    )
}