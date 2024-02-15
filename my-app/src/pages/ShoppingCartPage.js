import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateProductCount } from "../actions/cartAction";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Slide, toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const ShoppingCartPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);

  const handleDecreaseItemCount = (productId) => {
    dispatch(updateProductCount(productId, -1));
  };

  const handleIncreaseItemCount = (productId) => {
    dispatch(updateProductCount(productId, 1));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(removeFromCart(product));
    toast.error("Ürün sepetten çıkarıldı", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };
  const directToOrderPage = () => {
    history.push("/order-page");
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.count * item.product.price,
      0
    );
  };
  const subTotal = calculateTotal();
  const shippingCost = 29.99;
  const totalAmount = subTotal >= 150 ? subTotal : subTotal + shippingCost;

  return (
    <div>
      <div>
        <Header />

        <div className="flex py-10 items-start justify-between gap-10 px-20">
          <div className="flex flex-col bg-[#ccccc] justify-between w-full">
            <div className="flex flex-col justify-between flex-grow gap-6">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex items-center py-4 border-2 shadow-xl bg-white px-2 gap-4"
                >
                  <img
                    src={item.product.images[0].url}
                    alt={item.product.name}
                    className="w-[6rem] h-[10rem] object-cover rounded mr-4"
                  />

                  <div className="flex flex-col items-start justify-start gap-8 w-6/12">
                    <div className="flex text-center items-center justify-start gap-2">
                      <p className="text-sm font-montserrat font-bold">
                        {item.product.name}
                      </p>
                      <p className="font-montserrat text-xs px-2 py-1 bg-green-600 rounded-md text-custom-white font-bold">
                        {item.product.rating}
                      </p>
                    </div>

                    <p className="font-montserrat text-sm text-custom-gray tracking-[0.0125rem]">
                      {item.product.description}
                    </p>

                    <p className="font-montserrat text-custom-gray text-xs font-semibold">
                      Adet: {item.count}
                    </p>
                  </div>

                  <div className="flex items-center justify-end text-center gap-20">
                    <div className="flex items-center justify-center">
                      <button
                        className="border-2 rounded text-sm font-montserrat px-2 py-1 bg-turquoise hover:bg-[#52c0ff] text-custom-white "
                        onClick={() => handleDecreaseItemCount(item.product.id)}
                        disabled={item.count <= 1}
                      >
                        -
                      </button>
                      <p className="text-xs font-montserrat border-2 px-2 py-1">
                        {item.count}
                      </p>

                      <button
                        className="border-2 rounded text-sm font-montserrat px-2 bg-turquoise py-1 hover:bg-[#52c0ff] text-custom-white "
                        onClick={() => handleIncreaseItemCount(item.product.id)}
                      >
                        +
                      </button>
                    </div>

                    <p className="text-base font-bold tracking-[0.0125rem] font-montserrat text-turquoise ml-4">
                      {item.product.price * item.count} ₺
                    </p>

                    <FontAwesomeIcon
                      onClick={() => handleRemoveFromCart(item.product)}
                      className="cursor-pointer ml-4"
                      icon={faTrash}
                      style={{ color: "#23A6F0" }}
                    />
                  </div>
                </div>
              ))}

              {cart.length > 0 && (
                <div className="flex items-center justify-end mt-4 border-t border-gray-400 pt-2">
                  <p className="text-lg font-montserrat text-turquoise font-bold">
                    Toplam: {calculateTotal()} ₺
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="flex justify-start items-center flex-col gap-4">
            <button className="flex justify-center items-center font-montserrat font-semibold text-lg border-2 bg-turquoise rounded-md px-20 py-4 tracking-[0.0125rem] text-custom-white">
              <p className="font-montserrat gap-4">Sepeti Onayla </p>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="pl-4 "
                size="lg"
                style={{ color: "white" }}
              />
            </button>

            <div className="flex flex-col border-2 shadow-xl justify-start items-start py-4 px-8 gap-6">
              <h1 className="font-montserrat text-2xl tracking-[0.0125rem] font-semibold">
                Sipariş Özeti
              </h1>
              <div className="flex flex-col gap-6">
                <div className="flex justify-between">
                  <p className="font-montserrat text-base tracking-[0.0125rem]">
                    Ürünün Toplamı
                  </p>
                  <p className="font-montserrat font-semibold text-base tracking-[0.0125rem]">
                    {subTotal} ₺
                  </p>
                </div>

                <div className="flex justify-between">
                  <p className="font-montserrat text-base tracking-[0.0125rem]">
                    Kargo Toplam
                  </p>
                  <p className="font-montserrat font-semibold text-base tracking-[0.0125rem]">
                    {shippingCost} ₺
                  </p>
                </div>

                {subTotal >= 150 && (
                  <div className="flex items-center justify-between">
                    <p className="font-montserrat text-base w-8/12 tracking-[0.0125rem]">
                      150 ₺ ve Üzeri Kargo Bedava(Satıcı Karşılar)
                    </p>
                    <p className="font-montserrat font-semibold text-base text-turquoise tracking-[0.0125rem]">
                      -{shippingCost} ₺
                    </p>
                  </div>
                )}

                <div className="flex justify-between border-t-2 pt-4">
                  <p className="font-montserrat text-lg tracking-[0.0125rem]">
                    Toplam:
                  </p>
                  <p className="font-montserrat font-bold text-lg text-turquoise tracking-[0.0125rem] ">
                    {totalAmount} ₺
                  </p>
                </div>
              </div>
            </div>

            <div className="flex text-center items-center ">
              <button className="flex bg-custom-white items-center gap-4 border-2 rounded-md px-20 py-4 font-montserrat tracking-[0.0125rem] font-semibold text-lg ">
                <p className="font-montserrat text-turquoise text-3xl ">+</p>
                <p className="font-montserrat text-sm font-semibold">
                  İNDİRİM KODU GİR
                </p>
              </button>
            </div>

            <button
              onClick={directToOrderPage}
              className="flex items-center font-montserrat font-semibold text-lg border-2 bg-turquoise rounded-md px-20 py-4 tracking-[0.0125rem] text-custom-white"
            >
              <p className="font-montserrat gap-4">Sepeti Onayla</p>
              <FontAwesomeIcon
                icon={faArrowRight}
                className="pl-4 "
                size="lg"
                style={{ color: "white" }}
              />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default ShoppingCartPage;
