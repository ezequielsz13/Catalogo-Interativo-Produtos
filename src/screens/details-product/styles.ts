import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    contentImage: {
        marginTop: 20,
        height: 300,
        width: 300,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageProduct: {
        height: 300,
        width: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentDescription: {
        width: '90%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        marginTop: 24,
        borderRadius: 20
    },
    contentRowList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        width: '100%',
        paddingTop: 12,
        paddingLeft: 12,
        paddingBottom: 16,
        paddingRight: 12
    },
    contentTextTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
        marginLeft: 20
    },
    contentTextPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#AA0000',
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
    }
})
