import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateProductCount } from "../actions/cartAction";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Slide, toast } from "react-toastify";

const ShoppingCartPage = () => {
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

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.count * item.product.price,
      0
    );
  };
  return (
    <div>
      <Header />
      <div className="flex flex-col min-h-screen bg-[#ccccc] py-10">
        <div className="flex flex-col flex-grow px-4  md:px-8 lg:px-16 xl:px-52 gap-6">
          {cart.map((item) => (
            <div
              key={item.product.id}
              className="flex items-center py-4 border-2 bg-white px-2 gap-4"
            >
              <img
                src={item.product.images[0].url}
                alt={item.product.name}
                className="w-[6rem] h-[10rem] object-cover rounded mr-4"
              />

              <div className="flex flex-col items-start justify-start gap-4 w-6/12">
                <div className="flex text-center items-center justify-start gap-2">
                  <p className="text-sm font-montserrat font-bold">
                    {item.product.name}
                  </p>
                  <p className="font-montserrat text-xs px-2 py-1 bg-green-600 rounded-md text-custom-white font-bold">
                    {item.product.rating}{" "}
                  </p>
                </div>
                <p className="font-montserrat text-sm text-custom-gray tracking-[0.0125rem] ">
                  {item.product.description}
                </p>
                <p className="font-montserrat text-custom-gray text-xs font-semibold">
                  {" "}
                  Adet: {item.count}{" "}
                </p>
              </div>

              <div className="flex items-center justify-end text-center gap-20">
                <div className="flex items-center justify-center">
                  <button
                    className="border-2 rounded text-sm font-montserrat px-2 py-1 bg-[#23A6F0] hover:bg-[#52c0ff] text-custom-white "
                    onClick={() => handleDecreaseItemCount(item.product.id)}
                    disabled={item.count <= 1}
                  >
                    -
                  </button>
                  <p className="text-xs font-montserrat border-2 px-2 py-1 ">
                    {item.count}
                  </p>
                  <button
                    className="border-2 rounded text-sm font-montserrat px-2 bg-[#23A6F0] py-1 hover:bg-[#52c0ff] text-custom-white "
                    onClick={() => handleIncreaseItemCount(item.product.id)}
                  >
                    +
                  </button>
                </div>
                <p className="text-base font-bold tracking-[0.0125rem] font-montserrat text-[#23A6F0] ml-4">
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
              <p className="text-lg font-montserrat text-[#23A6F0] font-bold">
                Toplam: {calculateTotal()} ₺
              </p>
            </div>
          )}
        </div>

        <Footer />
      </div>
    </div>
  );
};
export default ShoppingCartPage;
