import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
        fontSize: 16,
        fontWeight: 'bold',
        color: '#003355'
    },
    contentTextDescription: {
        fontSize: 16,
        fontWeight: 500,
        color: '#003355',
        marginLeft: 20
    }
})