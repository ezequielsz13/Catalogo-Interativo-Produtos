import { Text, View } from "react-native";
import { styles } from "./styles";

interface IProps {
    description: string
}

export const RowList = ({description}: IProps) => {
    return (
        <View style={styles.contentRowList}>
            <Text style={styles.contentTextDescription}>{description}</Text>
        </View>
    )
}