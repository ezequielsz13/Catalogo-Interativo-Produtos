import { RootState } from "@/src/store"
import { Image, ScrollView, Text, View } from "react-native"
import { useSelector } from "react-redux"
import { styles } from "./styles"

export const DetailsProduct = () => {
    const detailsProduct = useSelector((state: RootState) => state.detailsProduct.details)
    console.log('detailsProduct', detailsProduct)

    return (
        <ScrollView 
            contentContainerStyle={styles.container}>
            <View style={styles.contentImage}>
                <Image
                    style={styles.imageProduct}
                    source={{uri: detailsProduct?.images[0]}}
                />
            </View>
            <View style={styles.contentDescription}>
                <View style={styles.contentRowList}>
                    <Text style={styles.contentTextTitle}>{detailsProduct?.title}</Text>
                </View>
                <View style={styles.contentRowList}>
                    <Text style={styles.contentTextPrice}>R${detailsProduct?.price}</Text>
                </View>
                <View style={styles.contentRowList}>
                    <Text style={styles.contentTextDiscount}>{detailsProduct?.discountPercentage}% OFF</Text>
                </View>
                <View style={styles.contentRowList}>
                    <Text style={styles.contentTextDescription}>{detailsProduct?.description}</Text>
                </View>
            </View>
        </ScrollView>
    )
}