import React, { useEffect, useState } from "react";
import { Slide, toast } from "react-toastify";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faMagnifyingGlass,
  faCartShopping,
  faChevronDown,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import {
  faEnvelope,
  faHeart,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faInstagram,
  faYoutube,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import Gravatar from "react-gravatar";
import {
  readToLocalStorage,
  writeToLocalStorage,
} from "../reducers/userReducer";
import axiosInstance from "../axios/axiosInstance";
import { loggedOut, loginData } from "../actions/userAction";
import { fetchCategories } from "../actions/globalAction";
import { removeFromCart, updateProductCount } from "../actions/cartAction";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  const history = useHistory();
  const { name, email, loggedIn } = useSelector((state) => state.userReducer);
  const { categories } = useSelector((state) => state.globalReducer);
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [showCategories, setShowCategories] = useState(null);
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const product = useSelector((state) => state.productReducer.products);
  const cart = useSelector((state) => state.cartReducer.cart);
  console.log("CART", cart);

  const handleToggleCartDropdown = () => {
    setShowCartDropdown(!showCartDropdown);
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.count * item.product.price,
      0
    );
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  useEffect(() => {
    const token = readToLocalStorage("token");
    if (token) {
      axiosInstance.defaults.headers.common["Authorization"] = token;

      axiosInstance
        .get("/verify")
        .then((response) => {
          dispatch(loginData(response.data));
          console.log("data güncellendi", response);
          const newToken = response.headers["new-token"];
          if (newToken) {
            writeToLocalStorage("token", newToken);
            axiosInstance.defaults.headers.common["Authorization"] = newToken;
            console.log("newToken", newToken);
          }
        })
        .catch((error) => {
          console.log("Authorization failed", error);
          localStorage.removeItem("token");
          delete axiosInstance.defaults.headers.common["Authorization"];
        });
    }
  }, []);

  const handleLogout = () => {
    toast.success("Successfully logged out of Bandage", {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
    dispatch(
      loggedOut({
        loggedIn: false,
        name: "",
        email: "",
      })
    );
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setShowCategories(null);
  };

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

  const navigateToShoppingCart = () => {
    history.push("/shopping-cart");
  };

  console.log("CART", cart);
  return (
    <div className="shop-header-1 w-full hidden sm:flex flex-col h-auto ">
      <div className="navbar-style flex w-full pb-2 flex-col items-start gap-3 ">
        <div className="navbar-dark w-full h-[3.625rem] py-2.5 px-1  flex justify-center items-center bg-[#252B42] text-custom-white ">
          <div className="navbar-collapse flex w-full h-12 justify-center items-center ">
            <div className="container flex w-full justify-between items-start shrink-0 ">
              <div className="row flex w-full justify-between items-start shrink-0 py-0 px-6 ">
                <div className="col-md-4 flex h-12 items-center gap-2.5">
                  <div className="flex items-center p-2.5 gap-2.5">
                    <FontAwesomeIcon
                      style={{ color: "#FFFFFF" }}
                      icon={faPhone}
                    />
                    <h6 className="text-custom-white font-montserrat font-bold text-sm tracking-[0.0125rem] ">
                      (225) 555-0118
                    </h6>
                  </div>
                  <div className="flex items-center p-2.5 gap-2.5">
                    <FontAwesomeIcon
                      style={{ color: "#FFFFFF" }}
                      icon={faEnvelope}
                    />
                    <h6 className="text-custom-white font-montserrat font-bold text-sm tracking-[0.0125rem] ">
                      michelle.rivera@example.com
                    </h6>
                  </div>
                </div>
                <div className="flex items-center gap-2.5 p-2.5">
                  <h6 className="text-custom-white font-montserrat font-bold pt-1 text-sm tracking-[0.0125rem] ">
                    Follow Us and get a chance to win 80% off
                  </h6>
                </div>
                <div className="flex items-center p-2.5 gap-2.5 h-12 ">
                  <h6 className="text-custom-white font-montserrat font-bold text-sm tracking-[0.0125rem] ">
                    Follow Us :
                  </h6>
                  <a href="">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ color: "#ffffff" }}
                    />
                  </a>
                  <a href="">
                    <FontAwesomeIcon
                      icon={faYoutube}
                      style={{ color: "#ffffff" }}
                    />
                  </a>
                  <a href="">
                    <FontAwesomeIcon
                      icon={faFacebook}
                      style={{ color: "#ffffff" }}
                    />
                  </a>
                  <a href="">
                    <FontAwesomeIcon
                      icon={faTwitter}
                      style={{ color: "#ffffff" }}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-light flex w-full justify-start items-start gap-20 h-16 pr-5 pl-10 ">
          <div className="navbar-brand h-16 items-center py-[0.8125rem] pr-20 ">
            <h3 className="font-montserrat font-bold text-2xl tracking-[0.00625rem] text-[#252B42] ">
              Bandage
            </h3>
          </div>
          <div className="navbar-collapse flex py-30 justify-center items-center gap-[29.4rem] py-0.5 px-0 h-[3.625rem] ">
            <nav className="flex items-start  gap-6">
              <li className="flex w-11 h-6 justify-center items-center">
                <a
                  href="/"
                  className="shrink-0 text-custom-gray font-bold font-montserrat tracking-[0.0125rem] text-base "
                >
                  Home
                </a>
              </li>
              <div className="flex gap-1 ">
                <a
                  href="/products"
                  className="block text-custom-gray font-bold font-montserrat tracking-[0.0125rem] text-base"
                >
                  Shop
                </a>
                <div className="relative">
                  <a
                    href="/products"
                    className="block text-custom-gray font-bold font-montserrat tracking-[0.0125rem] text-base"
                    onMouseEnter={toggleMenu}
                  >
                    <FontAwesomeIcon size="sm" icon={faChevronDown} />
                  </a>
                </div>
                <div
                  className={`absolute z-10 mt-8 bg-custom-white shadow-lg border-custom-gray border-2 rounded 
    ${showMenu ? "block" : "hidden"}`}
                  onClick={toggleMenu}
                >
                  <div className="flex">
                    <div className="space-y-2 flex flex-col">
                      <a
                        href=""
                        className={`block py-2 px-4 font-montserrat  text-base tracking-[0.0125rem] text-[#252B42] hover:bg-gray-100 rounded-md transition duration-300 ease-in-out 
        ${showCategories === "e" ? "bg-gray-100 font-semibold" : ""}`}
                        onMouseEnter={() => setShowCategories("e")}
                      >
                        Erkek
                      </a>
                      <a
                        href="#"
                        className={`block py-2 px-4 font-montserrat text-base tracking-[0.0125rem] text-[#252B42] hover:bg-gray-100 rounded-md transition duration-300 ease-in-out 
        ${showCategories === "k" ? "bg-gray-100 font-semibold" : ""}`}
                        onMouseEnter={() => setShowCategories("k")}
                      >
                        Kadın
                      </a>
                    </div>

                    {showCategories === "e" && (
                      <div className="space-y-1">
                        {categories.map((category) => {
                          if (category.gender === "e") {
                            return (
                              <a
                                key={category.id}
                                href={`/shop/${category.id}/${
                                  category.gender === "k" ? "Kadin" : "Erkek"
                                }/${category.title}`}
                                className="block font-montserrat text-sm tracking-[0.00625rem] px-4 py-2 text-[#252B42] hover:font-semibold hover:bg-gray-100 duration-300 ease-in-out"
                              >
                                {category.title}
                              </a>
                            );
                          }
                          return null;
                        })}
                      </div>
                    )}

                    {showCategories === "k" && (
                      <div className="space-y-1">
                        {categories.map((category) => {
                          if (category.gender === "k") {
                            return (
                              <a
                                key={category.id}
                                href={`/shop/${category.id}/${
                                  category.gender === "k" ? "Kadin" : "Erkek"
                                }/${category.title}`}
                                className="block px-4 py-2 font-montserrat text-sm tracking-[0.00625rem] text-[#252B42] hover:font-semibold hover:bg-gray-100 duration-300"
                              >
                                {category.title}
                              </a>
                            );
                          }
                          return null;
                        })}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <li className="flex w-11 h-6 justify-center items-center">
                <a
                  href="/about"
                  className="shrink-0 text-custom-gray font-bold font-montserrat tracking-[0.0125rem] text-base "
                >
                  About
                </a>
              </li>
              <li className="flex w-11 h-6 justify-center items-center">
                <a
                  href="/blog"
                  className="shrink-0 text-custom-gray font-bold font-montserrat tracking-[0.0125rem] text-base "
                >
                  Blog
                </a>
              </li>
              <li className="flex w-11 h-6 justify-center items-center">
                <a
                  href="/contact"
                  className="shrink-0 text-custom-gray font-bold font-montserrat tracking-[0.0125rem] text-base "
                >
                  Contact
                </a>
              </li>
              <li className="flex w-11 h-6 justify-center items-center">
                <a
                  href="/product-page"
                  className="shrink-0 text-custom-gray font-bold font-montserrat tracking-[0.0125rem] text-base "
                >
                  Pages
                </a>
              </li>
            </nav>
            <div className="flex items-center">
              <nav className="flex ">
                {loggedIn ? (
                  <div className="flex">
                    <Gravatar
                      email={email}
                      className="rounded-full h-8 w-8 mt-2"
                    />
                    <p className="text-turquoise p-4 items-center font-montserrat font-bold text-base tracking-[0.0125rem]">
                      {name}
                    </p>
                    <button
                      onClick={handleLogout}
                      className="text-turquoise p-2 items-center font-montserrat font-bold text-base tracking-[0.0125rem]"
                    >
                      Log Out
                    </button>
                  </div>
                ) : (
                  <div className="flex">
                    <a href="" className="p-4 pr-0">
                      <FontAwesomeIcon
                        icon={faUser}
                        size="lg"
                        style={{ color: "#23A6F0" }}
                      />
                    </a>
                    <a
                      className=" text-turquoise px-3 py-4 items-center font-montserrat font-bold text-base tracking-[0.0125rem] "
                      href="/login"
                    >
                      Login
                    </a>
                    <a
                      className=" text-turquoise px-2 py-4 items-center font-montserrat font-bold text-base tracking-[0.0125rem] "
                      href="/login"
                    >
                      /
                    </a>
                    <a
                      className=" text-turquoise px-3 py-4 items-center font-montserrat font-bold text-base tracking-[0.0125rem] "
                      href="/signup"
                    >
                      Register
                    </a>
                  </div>
                )}

                <a href="" className="p-4 flex items-center">
                  <FontAwesomeIcon
                    className="pr-3"
                    icon={faMagnifyingGlass}
                    size="lg"
                    style={{ color: "#23A6F0" }}
                  />
                </a>
                <a className="p-4 flex items-center">
                  <FontAwesomeIcon
                    size="lg"
                    className="pr-3 cursor-pointer"
                    onClick={handleToggleCartDropdown}
                    icon={faCartShopping}
                    style={{ color: "#23A6F0" }}
                  />
                  <p className="text-base font-normal font-montserrat text-turquoise">
                    {cart.length}
                  </p>
                  {showCartDropdown && (
                    <div className="cart-dropdown absolute bg-white shadow-lg border-2 border-gray-300 p-4 rounded right-[2rem] top-[8rem] z-50">
                      <h2 className="font-montserrat text-base font-semibold pb-4 ">
                        Sepetim ({cart.length} Ürün)
                      </h2>
                      {cart.map((item) => (
                        <div
                          key={item.product.id}
                          className="flex items-center mb-2 border-2 px-2"
                        >
                          <img
                            src={item.product.images[0].url}
                            alt={item.product.name}
                            className="w-[3rem] h-[6rem] object-cover rounded mr-4"
                          />
                          <div className="flex flex-col gap-2">
                            <p className="text-sm font-montserrat font-bold">
                              {item.product.name}
                            </p>
                            <div className="flex gap-14 items-center text-center">
                              <p className="text-xs font-montserrat text-gray-500">
                                Adet: {item.count}
                              </p>
                              <div className="flex items-center text-center gap-2">
                                <button
                                  className="border-2 rounded-md text-sm font-montserrat px-2 bg-turquoise hover:bg-[#52c0ff] text-custom-white "
                                  onClick={() =>
                                    handleDecreaseItemCount(item.product.id)
                                  }
                                  disabled={item.count <= 1}
                                >
                                  -
                                </button>
                                <p className="text-xs font-montserrat">
                                  {item.count}
                                </p>
                                <button
                                  className="border-2 rounded-md text-sm font-montserrat px-2 bg-turquoise hover:bg-[#52c0ff] text-custom-white "
                                  onClick={() =>
                                    handleIncreaseItemCount(item.product.id)
                                  }
                                >
                                  +
                                </button>
                                <FontAwesomeIcon
                                  onClick={() =>
                                    handleRemoveFromCart(item.product)
                                  }
                                  className="pl-2 cursor-pointer"
                                  icon={faTrash}
                                  style={{ color: "#23A6F0" }}
                                />
                              </div>
                            </div>
                            <p className="text-sm font-semibold tracking-[0.0125rem] font-montserrat text-turquoise">
                              {item.product.price * item.count} ₺
                            </p>
                          </div>
                        </div>
                      ))}
                      {cart.length > 0 && (
                        <div className="mt-4 border-t border-gray-400 pt-2">
                          <p className="text-base font-montserrat text-turquoise font-bold">
                            Toplam: {calculateTotal()} ₺
                          </p>
                        </div>
                      )}
                      <div className="flex gap-4 pt-2">
                        <button
                          onClick={navigateToShoppingCart}
                          className="font-montserrat text-sm tracking-[0.0125rem]  border-2 rounded-md px-4 py-2  "
                        >
                          Sepete Git
                        </button>
                        <button className="font-montserrat text-sm tracking-[0.0125rem] font-bold text-custom-white border-2 rounded-md px-4 py-2 bg-turquoise hover:bg-[#50bfff] duration-300 ">
                          Siparişi Tamamla
                        </button>
                      </div>
                    </div>
                  )}
                </a>
                <a href="" className="p-4 flex items-center">
                  <FontAwesomeIcon
                    size="lg"
                    className="pr-3"
                    icon={faHeart}
                    style={{ color: "#23A6F0" }}
                  />
                  <p className="text-base font-normal font-montserrat text-turquoise ">
                    1
                  </p>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
