import React, { useEffect, useState } from 'react'
import './Home.scss';
import { OrderHttp } from '../../api/http-services/orders.http';
import { Order } from '../../models/entities/Order';

const Home = () => {

    const orders = [
        { id: 0, date: 6 / 1 / 2024, total: 1, orderProducts: [{ name: "Product1", price: "1600", orderQuantity: 6, user: { firstName: "Milica", lastName: "Vasiljevic", username: "milicavasiljevic", userContactInfo: { email: "milicav@gmail.com", contactPhone: "+38167579876" } } }] }
    ] //zavrsi ovde hardcode order?

    /*const [orders, setOrders] = useState<Order[]>([]);

    const orderHttp = new OrderHttp();

    const fetchPopularOrders = async () => {
        try {
            const response = await orderHttp.getPopularOrders();
            setOrders(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchPopularOrders();
    }, [])*/

    return (
        <div className='home'>
            <img className="home-img" src="../../assets/home1-img.jpg"></img>
            <div className="welcome-div">
                <p>Welcome</p>
            </div>
            <div>
                <div className="popular-container">
                    <div className="popular-orders-container">
                        <h1 className="home-caption">Most popular</h1>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home;
