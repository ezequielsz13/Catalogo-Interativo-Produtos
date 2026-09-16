import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    
    logo: {
        width: 130,
        height: 50,
    },
    container: {
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    productCard: {
        width: '45%',
        marginBottom: 10,
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#777777'
    },    
    contentImage: {
        marginTop: 20,
        height: 200,
        width: 200,
        justifyContent: 'center',
        borderRadius: 30
    },
    imageClothing: {
        height: 200,
        width: 200
    },
    contentItem: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
        marginBottom: 10
    },
    contentTextTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        marginLeft: 20,
        marginBottom: 10
    },
    contentTextPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
        marginLeft: 20
    },
    contentTextDiscount: {
        fontSize: 16,
        fontWeight: 500,
        textDecorationLine: 'line-through',
        color: '#666666',
        marginLeft: 20
    },
    contentTextDescription: {
        fontSize: 16,
        fontWeight: 500,
        color: '#777777',
        marginLeft: 20
    },
    buttonView: {
        height: 40,
        width: 40,
        borderRadius: 40,
        backgroundColor: '#229900',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5
    },
    botaoSair: {
        width: '90%',
        height: 40,
        borderRadius: 3,
        backgroundColor: '#AA0000',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 20
    },
    contentBotaoSair: {
        color: '#FFFFFF',
        fontSize: 20
    }
})