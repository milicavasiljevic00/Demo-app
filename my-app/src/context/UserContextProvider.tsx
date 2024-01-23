import { useContext, useState, useEffect } from "react"
import { UserContent, UserContentState } from "./UserContent"
import { UserHttp } from "../api/http-services/users.http";
import { USER_LOGGED_KEY } from "../constants/Constants";
import { UserContext } from "./UserContext";
import { ProductWithQuantity } from "../models/entities/ProductWithQuantity";

const useUserContext = () => useContext(UserContext)

const UserContextProvider = ({ children }: any) => {

    const userHttp = new UserHttp();
    const [user, setUser] = useState<UserContent | null>(null);
    const [orderProducts, setOrderProducts] = useState<ProductWithQuantity[]>([]);


    const fetchData = async (): Promise<UserContent | null> => {
        try {
            const response = await userHttp.getUserMe();
            return response.data;
        }
        catch (error) {
            console.error("An error occurred:", error);
            return null;
        }

    }

    const fetchAndSet = () => {
        fetchData().then((userData) => {
            if (userData) {
                setUser(userData);
            }
            else {
                setUser(UserContentState);
            }
        }).catch((error) => {
            setUser(UserContentState);
            console.log(error);
        });

    }

    useEffect(() => {

        if (localStorage.getItem(USER_LOGGED_KEY)) {
            fetchAndSet();
        }
    }, [])

    function logIn(user: UserContent) {
        setUser(user);
    }

    function logOut() {
        setUser(UserContentState);
        localStorage.removeItem(USER_LOGGED_KEY);
    }

    function addProduct(product: ProductWithQuantity) {
        setOrderProducts([...orderProducts, product]);
    }

    function removeProduct(id: number) {
        const filteredProducts = orderProducts.filter((pr) => pr.product.id !== id);
        setOrderProducts(filteredProducts);
    }

    function increaseQuantity(id: number) {
        const product = orderProducts.find((p) => p.product.id === id);
        if (product) {
            product.quantity = product.quantity + 1;
        }
    }

    function decreaseQuantity(id: number) {
        const product = orderProducts.find((p) => p.product.id === id);
        if (product) {
            product.quantity = product.quantity - 1;
        }
    }

    return (
        <UserContext.Provider value={{ user, logIn, logOut, orderProducts, addProduct, removeProduct, increaseQuantity, decreaseQuantity }}>
            {children}
        </UserContext.Provider>
    )
}
export { useUserContext, UserContextProvider }