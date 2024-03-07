import { useEffect, useState } from "react";
import axiosInstance from "../axios/axiosInstance";
import Header from "../components/Header";
import Footer from "../components/Footer";

const OrderCompletionPage = () => {
  const [responseData, setResponseData] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("loading : ", loading);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("/order");
        console.log("Response Data:", response.data);
        setResponseData(response.data);
      } catch (error) {
        console.error("Request gönderirken hata oluştu:", error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  const formatOrderDate = (dateString) => {
    const date = new Date(dateString);
    return date.toString();
  };

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="flex justify-center items-center my-20 px-20">
        <div className="flex flex-wrap justify-center text-center px-16 gap-8 items-center">
          <div className="flex flex-col items-center text-center justify-center pt-10 gap-28">
            <h1 className="font-montserrat font-bold text-5xl text-turquoise tracking-[0.0625rem] ">
              YOUR ORDER HAS BEEN RECEIVED!
            </h1>
            <div>
              <h1 className="font-montserrat font-bold text-3xl tracking-[0.0625rem] text-turquoise">
                Order Details
              </h1>
            </div>
          </div>
          {loading ? (
            <p className="font-montserrat font-bold">Loading...</p>
          ) : (
            responseData.length > 0 &&
            responseData.map((data) => {
              return (
                <div className="flex flex-wrap">
                  <div className="flex border-2 rounded-lg px-8 py-16 my-4 shadow-xl hover:scale-110 duration-300 ">
                    <ul className="flex flex-col font-montserrat text-[#252B42] font-bold gap-4 ">
                      <div className="flex gap-2 ">
                        <li>Order ID: </li>
                        <p className="text-turquoise">{data.id}</p>
                      </div>
                      <div className="flex gap-2">
                        <li>Order Date: </li>
                        <p className="text-turquoise">
                          {formatOrderDate(data.order_date)}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <li>Card Holder Name: </li>
                        <p className="text-turquoise">{data.card_name}</p>
                      </div>
                      <div className="flex gap-2">
                        <li>Card Number: </li>
                        <p className="text-turquoise">{data.card_no}</p>
                      </div>
                      <div className="flex gap-2">
                        <li>Card Expiry Date:</li>
                        <p className="text-turquoise">
                          {data.card_expire_month} / {data.card_expire_year}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <li>Price: </li>
                        <p className="text-turquoise">${data.price}</p>
                      </div>
                    </ul>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};
export default OrderCompletionPage;
