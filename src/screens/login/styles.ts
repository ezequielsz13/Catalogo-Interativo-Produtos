import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    screen: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0080FF'
    },
    container: {
        alignItems: 'center'
    },
    textTitle:{
        fontSize: 30,
        color: '#fff'
    },
    textInstruction: {
        margin: 20,
        color: '#fff'
    },
    containerLogin: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#777777',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 40,
        paddingBottom: 40,
        backgroundColor: '#fff'
    },
    campoDigitar:{
        height: 42,
        width: 300,      
        borderWidth: 1,
        borderColor: '#999999',
        marginBottom: 20
    },
    botaoEntrar: {
        width: '100%',
        height: 40,
        borderRadius: 3,
        backgroundColor: '#0080FF',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentBotaoEntrar: {
        color: '#FFFFFF',
        fontSize: 20,
    }
})