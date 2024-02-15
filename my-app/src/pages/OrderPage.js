import { useDispatch, useSelector } from "react-redux";
import {
  // addUserAddress,
  getUserAddress,
  updateUserAddress,
} from "../actions/addressAction";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPencil,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import axiosInstance from "../axios/axiosInstance";

const cities = ["Istanbul", "Ankara", "Izmir", "Bursa", "Antalya"];
const districts = {
  Istanbul: ["Kadikoy", "Besiktas", "Sisli"],
  Ankara: ["Cankaya", "Kecioren", "Yenimahalle"],
  Izmir: ["Konak", "Bornova", "Buca"],
  Bursa: ["Osmangazi", "Nilufer", "Yildirim"],
  Antalya: ["Muratpasa", "Konyaalti", "Kepez"],
};

const OrderPage = () => {
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
    },
  });
  const selectedCity = watch("city");
  const selectedDistrict = watch("district");

  const handleCityChange = (e) => {
    setValue("city", e.target.value);
    setValue("district", "");
  };
  const [showAddressSection, setShowAddressSection] = useState(true);
  const [showPaymentSection, setShowPaymentSection] = useState(false);
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  // const userAddress = useSelector((state) => state.addressReducer.address);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [addresses, setAddresses] = useState();
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardShowUpdateForm, setCardShowUpdateForm] = useState(false);

  console.log("ADDRESSES", addresses);

  const handleAddAddressClick = () => {
    setShowAddAddressForm(true);
  };

  const handleAddAddressSubmit = (data) => {
    const addressData = {
      title: data.addressTitle,
      name: data.name,
      surname: data.surname,
      phone: data.phone,
      city: data.city,
      district: data.district,
      neighborhood: data.neighborhood,
      address: data.addressDetails,
    };
    axiosInstance.post("/user/address", addressData).then((res) => {
      console.log("Giden data: ", res.data);
      getAddress();
    });
    setShowAddAddressForm(false);
    dispatch(getUserAddress());
  };

  const getAddress = () => {
    axiosInstance.get("/user/address").then((res) => {
      console.log("Gelen data: ", res.data);
      setAddresses(res.data);
    });
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

  useEffect(() => {
    getAddress();
  }, []);

  const handleUpdateAddressClick = (addressId) => {
    if (selectedAddress !== null) {
      setShowUpdateForm(true);
    }
  };

  const handleUpdateAddressSubmit = (updatedData) => {
    if (!selectedAddress) {
      setShowUpdateForm(false);
      console.error("No address selected for update.");
      return;
    }

    const updatedAddressData = {
      id: selectedAddress,
      title: updatedData.addressTitle,
      name: updatedData.name,
      surname: updatedData.surname,
      phone: updatedData.phone,
      city: updatedData.city,
      district: updatedData.district,
      neighborhood: updatedData.neighborhood,
      address: updatedData.addressDetails,
    };

    axiosInstance
      .put(`/user/address/`, updatedAddressData)
      .then((res) => {
        console.log("Address updated successfully:", res.data);

        const updatedAddresses = addresses.map((address) =>
          address.id === selectedAddress ? res.data : address
        );
        setAddresses(updatedAddresses);
        setShowUpdateForm(false);
        setSelectedAddress(null);
        getAddress();
      })
      .catch((error) => {
        console.error("Error updating address:", error);
      });
  };
  const getSelectedAddressDetails = () => {
    if (!selectedAddress || !addresses) {
      return null;
    }

    const detailedAddress = addresses.find(
      (address) => address.id === selectedAddress
    );

    return detailedAddress;
  };

  const detailedSelectedAddress = getSelectedAddressDetails();

  const handlePaymentButtonClick = () => {
    setShowAddressSection(false);
    setShowPaymentSection(true);
  };
  const handleAddressButtonClick = () => {
    setShowAddressSection(true);
    setShowPaymentSection(false);
  };

  const [savedCards, setSavedCards] = useState([]);
  const [showAddCardForm, setShowAddCardForm] = useState(false);

  useEffect(() => {
    getSavedCards();
  }, []);

  const getSavedCards = () => {
    axiosInstance
      .get("/user/card")
      .then((res) => {
        setSavedCards(res.data);
      })
      .catch((error) => {
        console.error("Error fetching saved cards:", error);
      });
  };
  console.log("SAVED CARDS: ", savedCards);

  const handleAddCardSubmit = (data) => {
    const cardData = {
      card_no: data.cardNumber,
      expire_month: data.expireMonth,
      expire_year: data.expireYear,
      name_on_card: data.nameOnCard,
    };

    axiosInstance
      .post("/user/card", cardData)
      .then(() => {
        getSavedCards(cardData);
        setShowAddCardForm(false);
        reset();
      })
      .catch((error) => {
        console.error("Error adding new card:", error);
      });
    getSavedCards();
  };

  console.log("SELECTED CARD ID: ", selectedCard);
  const handleUpdateCardSubmit = (data) => {
    const updatedCardData = {
      id: selectedCard,
      card_no: data.cardNumber,
      expire_month: data.expireMonth,
      expire_year: data.expireYear,
      name_on_card: data.nameOnCard,
    };

    axiosInstance
      .put("/user/card", updatedCardData)
      .then((res) => {
        const updatedCardData = savedCards.map((card) =>
          card.id === selectedCard ? res.data : card
        );
        setSavedCards(updatedCardData);
        getSavedCards();
        setCardShowUpdateForm(false);
        reset();
      })
      .catch((error) => {
        console.error("Error updating card:", error);
      });
  };

  const divClasses = `flex flex-col items-start gap-4  bg-slate-50 rounded-md shadow-lg justify-center border-2 px-4 w-4/12 h-[12rem] cursor-pointer ${
    showAddressSection
      ? "border-b-[1.75rem] border-turquoise duration-500 "
      : "duration-500"
  }`;

  return (
    <div className="flex flex-col w-full">
      <Header />

      <div className="flex flex-col w-full">
        <div className="flex text-start pt-20 px-20 w-full h-[20rem]">
          <div
            onClick={handleAddressButtonClick}
            className={`flex flex-col items-start gap-4  bg-slate-50 rounded-md shadow-lg justify-center border-2 px-4 w-4/12 h-[12rem] cursor-pointer ${
              showAddressSection
                ? "border-b-[1.75rem] border-turquoise duration-500 "
                : "duration-500"
            }`}
          >
            <h1
              className={`font-montserrat font-bold text-xl text-[#252B42] tracking-[0.0625rem] ${
                showAddressSection
                  ? "text-turquoise duration-500"
                  : "duration-500"
              }`}
            >
              Adres Bilgileri
            </h1>
            {detailedSelectedAddress && (
              <div className="font-montserrat text-sm font-semibold tracking-[0.0125rem] gap-4 text-black ">
                <p>{detailedSelectedAddress.name}</p>
                <p>
                  {" "}
                  {detailedSelectedAddress.district} /{" "}
                  {detailedSelectedAddress.city}
                </p>
                <p></p>
                <p>{detailedSelectedAddress.neighborhood}</p>
              </div>
            )}
          </div>
          <div
            onClick={handlePaymentButtonClick}
            className={`flex flex-col items-start gap-4  bg-slate-50 rounded-md shadow-lg justify-center border-2 px-2 py-20 w-4/12 h-[12rem] cursor-pointer  ${
              showPaymentSection
                ? "border-b-[1.75rem] border-turquoise duration-500 "
                : "duration-500"
            }`}
          >
            <h1
              className={`font-montserrat font-bold text-xl text-[#252B42] tracking-[0.0625rem] ${
                showPaymentSection
                  ? "text-turquoise duration-500"
                  : "duration-500"
              }`}
            >
              Ödeme Seçenekleri
            </h1>
            <p className="font-montserrat text-sm font-semibold text-black tracking-[0.0125rem]">
              Banka/Kredi Kartı veya Alışveriş Kredisi ile ödemenizi güvenle
              yapabilirsiniz.
            </p>
          </div>
        </div>
        <div>
          {showPaymentSection && (
            <div className="flex justify-between px-20 gap-8 py-20">
              <div className="flex flex-wrap border-4 border-turquoise rounded-md flex-col w-9/12 ">
                <button
                  className="bg-blue-500 font-montserrat font-bold hover:bg-blue-400 duration-300 text-white py-2 px-4 focus:outline-none"
                  onClick={() => setShowAddCardForm(true)}
                >
                  Add New Card
                </button>
                {showAddCardForm && (
                  <form
                    onSubmit={handleSubmit(handleAddCardSubmit)}
                    className="card-form px-8 py-8 "
                  >
                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="cardNumber"
                    >
                      Card Number:
                    </label>
                    <input
                      type="text"
                      id="cardNumber"
                      {...register("cardNumber", {
                        required: "Card number is required",
                      })}
                      className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    />

                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="expireMonth"
                    >
                      Expiration Month:
                    </label>
                    <input
                      type="number"
                      id="expireMonth"
                      {...register("expireMonth", {
                        required: "Expiration month is required",
                      })}
                      className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    />

                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="expireYear"
                    >
                      Expiration Year:
                    </label>
                    <input
                      type="number"
                      id="expireYear"
                      {...register("expireYear", {
                        required: "Expiration year is required",
                      })}
                      className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    />

                    <label
                      className="block text-gray-700 text-sm font-bold mb-2"
                      htmlFor="nameOnCard"
                    >
                      Name on Card:
                    </label>
                    <input
                      type="text"
                      id="nameOnCard"
                      {...register("nameOnCard", {
                        required: "Name on card is required",
                      })}
                      className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    />

                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-400 duration-300 text-white py-2 px-4 rounded focus:outline-none mt-4"
                    >
                      Submit
                    </button>
                  </form>
                )}
                <div className="my-8 px-8">
                  <h2 className="font-montserrat text-2xl font-bold mb-4">
                    Saved Cards
                  </h2>
                  <ul className="space-y-4">
                    {savedCards.map((card) => (
                      <li
                        key={card.id}
                        className="bg-gray-100 p-8 rounded-md shadow-lg flex items-center justify-between"
                      >
                        <div className="flex flex-col gap-2">
                          <p className="text-lg font-montserrat font-semibold">
                            Card Number: {card.card_no}
                          </p>
                          <p className="font-montserrat text-sm">
                            Expiry Date: {card.expire_month}/{card.expire_year}
                          </p>
                          <p className="font-montserrat text-sm">
                            Name: {card.name_on_card}
                          </p>
                        </div>
                        <div className="flex gap-4">
                          <button
                            className="flex gap-2 items-center justify-center bg-blue-500 duration-300 hover:bg-blue-400 text-white font-montserrat py-2 px-4 rounded focus:outline-none"
                            onClick={() => setCardShowUpdateForm(true)}
                          >
                            <FontAwesomeIcon
                              icon={faPencil}
                              style={{ color: "white" }}
                              size="xs"
                            />
                            <p className="font-semibold">Update </p>
                          </button>

                          <input
                            type="radio"
                            id={`card-${card.id}`}
                            name="card"
                            value={card.id}
                            onChange={() => setSelectedCard(card.id)}
                          />
                        </div>
                      </li>
                    ))}
                    {cardShowUpdateForm && (
                      <form
                        onSubmit={handleSubmit(handleUpdateCardSubmit)}
                        className="card-form "
                      >
                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="cardNumber"
                        >
                          Card Number:
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          {...register("cardNumber", {
                            required: "Card number is required",
                          })}
                          className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        />

                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="expireMonth"
                        >
                          Expiration Month:
                        </label>
                        <input
                          type="number"
                          id="expireMonth"
                          {...register("expireMonth", {
                            required: "Expiration month is required",
                          })}
                          className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        />

                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="expireYear"
                        >
                          Expiration Year:
                        </label>
                        <input
                          type="number"
                          id="expireYear"
                          {...register("expireYear", {
                            required: "Expiration year is required",
                          })}
                          className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        />

                        <label
                          className="block text-gray-700 text-sm font-bold mb-2"
                          htmlFor="nameOnCard"
                        >
                          Name on Card:
                        </label>
                        <input
                          type="text"
                          id="nameOnCard"
                          {...register("nameOnCard", {
                            required: "Name on card is required",
                          })}
                          className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        />

                        <button
                          type="submit"
                          className="bg-blue-500 hover:bg-blue-400 duration-300 text-white py-2 px-4 rounded focus:outline-none mt-4"
                        >
                          Submit
                        </button>
                      </form>
                    )}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex justify-start items-center flex-col gap-4">
                  <button className="flex justify-center items-center font-montserrat font-semibold text-lg border-2 bg-turquoise rounded-md px-20 py-4 tracking-[0.0125rem] text-custom-white">
                    <p className="font-montserrat gap-4">Kaydet ve Devam Et </p>
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
                  <button className="flex items-center font-montserrat font-semibold text-lg border-2 bg-turquoise rounded-md px-20 py-4 tracking-[0.0125rem] text-custom-white">
                    <p className="font-montserrat gap-4">Kaydet ve Devam Et</p>
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
          )}
        </div>
        {showAddressSection && (
          <div className="flex justify-between px-20 gap-8 py-20">
            <div className="flex flex-wrap border-4 border-turquoise rounded-md flex-col w-9/12 ">
              <h1 className="font-montserrat px-[6rem] py-10 font-bold text-black text-xl ">
                Teslimat Adresi
              </h1>
              <div className="pl-[6rem]">
                <button
                  className="w-[30rem] h-[10rem] hover:bg-[#77c8f7] duration-300  border-2 bg-turquoise rounded-md text-center gap-2 font-montserrat flex items-center justify-center flex-col font-semibold tracking-[0.0125rem] text-lg "
                  onClick={handleAddAddressClick}
                >
                  <FontAwesomeIcon
                    icon={faPlus}
                    size="lg"
                    style={{ color: "white" }}
                  />
                  <p className="text-custom-white font-montserrat text-xl font-semibold tracking-[0.0625rem] ">
                    Adres Ekle
                  </p>
                </button>
              </div>
              {showAddAddressForm && (
                <form
                  onSubmit={handleSubmit(handleAddAddressSubmit)}
                  className="max-w-md mx-auto absolute ml-[30rem] border-black bg-white p-8 rounded shadow-xl"
                  style={{ zIndex: 5000 }}
                >
                  <div className="mb-4">
                    <label
                      htmlFor="addressTitle"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Address Title:
                    </label>
                    <input
                      type="text"
                      id="addressTitle"
                      name="addressTitle"
                      {...register("addressTitle", {
                        required: "Address title is required",
                      })}
                      className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    />
                    {errors.addressTitle && (
                      <p className="text-red-500 text-xs italic">
                        {errors.addressTitle.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Name & Surname:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs italic">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <input
                      placeholder="Phone"
                      type="tel"
                      id="phone"
                      name="phone"
                      {...register("phone", { required: "Phone is required" })}
                      className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs italic">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="city"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      City:
                    </label>
                    <select
                      id="city"
                      name="city"
                      onChange={handleCityChange}
                      {...register("city", { required: "City is required" })}
                      value={selectedCity}
                      className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    >
                      <option value="" disabled>
                        Select City
                      </option>
                      {cities.map((city) => (
                        <option key={city} value={city}>
                          {city}
                        </option>
                      ))}
                    </select>
                    {errors.city && (
                      <p className="text-red-500 text-xs italic">
                        {errors.city.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="district"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      District:
                    </label>
                    <select
                      id="district"
                      name="district"
                      value={selectedDistrict}
                      {...register("district", {
                        required: "District is required",
                      })}
                      className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    >
                      <option value="" disabled>
                        Select District
                      </option>
                      {districts[selectedCity]?.map((district) => (
                        <option key={district} value={district}>
                          {district}
                        </option>
                      ))}
                    </select>
                    {errors.district && (
                      <p className="text-red-500 text-xs italic">
                        {errors.district.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="neighborhood"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Neighborhood:
                    </label>
                    <input
                      type="text"
                      id="neighborhood"
                      name="neighborhood"
                      {...register("neighborhood", {
                        required: "Neighborhood is required",
                      })}
                      className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    />
                    {errors.neighborhood && (
                      <p className="text-red-500 text-xs italic">
                        {errors.neighborhood.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <label
                      htmlFor="addressDetails"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      AddressDetails:
                    </label>
                    <textarea
                      id="addressDetails"
                      name="addressDetails"
                      rows="4"
                      {...register("addressDetails", {
                        required: "Address is required",
                      })}
                      className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    ></textarea>
                    {errors.address && (
                      <p className="text-red-500 text-xs italic">
                        {errors.addressDetails.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-400 duration-300 text-white py-2 px-4 rounded focus:outline-none"
                  >
                    Submit
                  </button>
                </form>
              )}
              <div className=" flex flex-wrap justify-center gap-4 ">
                {Array.isArray(addresses) &&
                  addresses.map((address) => (
                    <div
                      className="flex gap-4 items-start border-2 flex-col border-turquoise shadow-lg rounded-md px-4 py-10 my-10 w-[40%] flex-wrap "
                      key={address.id}
                    >
                      <input
                        type="radio"
                        id={`address-${address.id}`}
                        name="address"
                        value={address.id}
                        onChange={() => setSelectedAddress(address.id)}
                      />
                      <button
                        className="flex items-center justify-center px-8 py-4 border-2 bg-turquoise rounded-md font-montserrat text-custom-white tracking-[0.0125rem] text-sm font-semibold duration-300 hover:bg-[#77c8f7]  "
                        onClick={() => handleUpdateAddressClick(address.id)}
                      >
                        Update Address
                      </button>
                      <div className="flex gap-2 text-center items-center justify-center">
                        <p className="font-montserrat font-bold text-sm text-[#252B42] tracking-[0.0125rem]">
                          Address Title:
                        </p>
                        <p className="font-montserrat text-sm text-[#252B42] tracking-[0.0125rem]">
                          {address.title}
                        </p>
                      </div>
                      <div className="flex gap-2 text-center items-center justify-center">
                        <p className="font-montserrat font-bold  text-sm text-[#252B42] tracking-[0.0125rem]">
                          Name Surname:
                        </p>
                        <p className="font-montserrat text-sm text-[#252B42] tracking-[0.0125rem]">
                          {address.name} {address.surname}
                        </p>
                      </div>
                      <div className="flex gap-2 text-center items-center justify-center">
                        <p className="font-montserrat font-bold  text-sm text-[#252B42] tracking-[0.0125rem]">
                          Phone:
                        </p>
                        <p className="font-montserrat text-sm text-[#252B42] tracking-[0.0125rem]">
                          {address.phone}
                        </p>
                      </div>
                      <div className="flex gap-2 text-center items-center justify-center">
                        <p className="font-montserrat font-bold  text-sm text-[#252B42] tracking-[0.0125rem]">
                          City:
                        </p>
                        <p className="font-montserrat text-sm text-[#252B42] tracking-[0.0125rem]">
                          {address.city}
                        </p>
                      </div>
                      <div className="flex gap-2 text-center items-center justify-center">
                        <p className="font-montserrat font-bold  text-sm text-[#252B42] tracking-[0.0125rem]">
                          District:
                        </p>
                        <p className="font-montserrat text-sm text-[#252B42] tracking-[0.0125rem]">
                          {address.district}
                        </p>
                      </div>
                      <div className="flex gap-2 text-center items-center justify-center">
                        <p className="font-montserrat font-bold  text-sm text-[#252B42] tracking-[0.0125rem]">
                          Neighborhood:
                        </p>
                        <p className="font-montserrat text-sm text-[#252B42] tracking-[0.0125rem]">
                          {address.neighborhood}
                        </p>
                      </div>
                      <div className="flex gap-2 text-center items-center justify-center">
                        <p className="font-montserrat font-bold  text-sm text-[#252B42] tracking-[0.0125rem]">
                          Address Details:
                        </p>
                        <p className="font-montserrat text-sm text-[#252B42] tracking-[0.0125rem]">
                          {address.address}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
            <div>
              <div className="flex flex-col">
                <div className="flex justify-start items-center flex-col gap-4">
                  <button className="flex justify-center items-center font-montserrat font-semibold text-lg border-2 bg-turquoise rounded-md px-20 py-4 tracking-[0.0125rem] text-custom-white">
                    <p className="font-montserrat gap-4">Kaydet ve Devam Et </p>
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
                  <button className="flex items-center font-montserrat font-semibold text-lg border-2 bg-turquoise rounded-md px-20 py-4 tracking-[0.0125rem] text-custom-white">
                    <p className="font-montserrat gap-4">Kaydet ve Devam Et</p>
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
          </div>
        )}
      </div>
      {showUpdateForm && (
        <form
          onSubmit={handleSubmit(handleUpdateAddressSubmit)}
          className="max-w-md mx-auto ml-[30rem]border-2 bg-white p-8 rounded shadow-2xl"
        >
          <div className="mb-4">
            <label
              htmlFor="addressTitle"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Address Title:
            </label>
            <input
              type="text"
              id="addressTitle"
              name="addressTitle"
              {...register("addressTitle", {
                required: "Address title is required",
              })}
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
            {errors.addressTitle && (
              <p className="text-red-500 text-xs italic">
                {errors.addressTitle.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name & Surname:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <input
              placeholder="Phone"
              type="tel"
              id="phone"
              name="phone"
              {...register("phone", { required: "Phone is required" })}
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
            {errors.phone && (
              <p className="text-red-500 text-xs italic">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="city"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              City:
            </label>
            <select
              id="city"
              name="city"
              onChange={handleCityChange}
              {...register("city", { required: "City is required" })}
              value={selectedCity}
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            >
              <option value="" disabled>
                Select City
              </option>
              {cities.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
            {errors.city && (
              <p className="text-red-500 text-xs italic">
                {errors.city.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="district"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              District:
            </label>
            <select
              id="district"
              name="district"
              value={selectedDistrict}
              {...register("district", {
                required: "District is required",
              })}
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            >
              <option value="" disabled>
                Select District
              </option>
              {districts[selectedCity]?.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>
            {errors.district && (
              <p className="text-red-500 text-xs italic">
                {errors.district.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="neighborhood"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Neighborhood:
            </label>
            <input
              type="text"
              id="neighborhood"
              name="neighborhood"
              {...register("neighborhood", {
                required: "Neighborhood is required",
              })}
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            />
            {errors.neighborhood && (
              <p className="text-red-500 text-xs italic">
                {errors.neighborhood.message}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="addressDetails"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              AddressDetails:
            </label>
            <textarea
              id="addressDetails"
              name="addressDetails"
              rows="4"
              {...register("addressDetails", {
                required: "Address is required",
              })}
              className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
            ></textarea>
            {errors.address && (
              <p className="text-red-500 text-xs italic">
                {errors.addressDetails.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-400 duration-300 text-white py-2 px-4 rounded focus:outline-none"
          >
            Submit
          </button>
        </form>
      )}

      <Footer />
    </div>
  );
};

export default OrderPage;
