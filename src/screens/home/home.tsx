import { setDetailsProduct } from '@/src/store/slices/details-product-slice';
import axios from "axios";
import { router } from 'expo-router';
import { useEffect, useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { styles } from "./styles";

export const Home = () => {
    const [product, setProduct] = useState([])
    const [like, setLike] = useState([])
    const dispatch = useDispatch()

    const getAPI = async() => {
        return await axios.get('https://dummyjson.com/products/category/mens-shirts').then((resp) => {
            setProduct(resp.data.products)
        })
    }

    const handlePressHeart = () => {
        setLike((prevState) => [...prevState, product[0]])
    }

    useEffect(() => {
        getAPI()
    }, [])

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {product.map((item) => (
                <View key={item.id} style={styles.productCard}>
                    <View>
                        <TouchableOpacity 
                            onPress={() => {
                                dispatch(setDetailsProduct(item));
                                router.navigate("/(stacks)/details-product");
                            }}
                            style={styles.contentImage}>
                            <Image
                                source={{uri: item.thumbnail}}
                                style={styles.imageClothing}
                            />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.contentTextTitle}>{item.title}</Text>
                    <Text style={styles.contentTextDescription}>{item.description}</Text>
                    <View style={styles.contentItem}>
                        <Text style={styles.contentTextPrice}>R${item.price}</Text>
                        <Text style={styles.contentTextDiscount}>{item.discountPercentage}% OFF</Text>
                    </View>
                </View>
            ))}
            <TouchableOpacity 
                onPress={() => {
                    router.navigate("/(stacks)/login");
                }}
                style={styles.botaoSair}>
                <Text style={styles.contentBotaoSair}>Sair da conta</Text>
            </TouchableOpacity>
        </ScrollView>
        
    )
}