import { useDispatch, useSelector } from "react-redux";
import {
  addUserAddress,
  getUserAddress,
  updateUserAddress,
} from "../actions/addressAction";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";

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
  const cart = useSelector((state) => state.cartReducer.cart);

  const dispatch = useDispatch();
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  const userAddress = useSelector((state) => state.addressReducer.address);
  const [addresses, setAddresses] = useState(userAddress);
  console.log("ADDRESSES", addresses);

  const handleAddAddressClick = () => {
    setShowAddAddressForm(true);
  };

  const handleAddAddressSubmit = (addressData) => {
    dispatch(addUserAddress(addressData));
    setShowAddAddressForm(false);
    dispatch(getUserAddress());
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
    dispatch(getUserAddress());
  }, []);

  const handleUpdateAddressSubmit = (addressId, updatedData) => {
    dispatch(updateUserAddress(addressId, updatedData));

    dispatch(getUserAddress());
  };

  return (
    <div>
      <Header />
      <div className="flex justify-between px-28 py-20">
        <div className="flex flex-col">
          <button
            className="w-[30rem] h-[10rem] border-2 font-montserrat font-semibold tracking-[0.0125rem] text-lg "
            onClick={handleAddAddressClick}
          >
            Adres Ekle
          </button>
          {showAddAddressForm && (
            <form
              onSubmit={handleSubmit(handleAddAddressSubmit)}
              className="max-w-md mx-auto bg-white p-8 rounded shadow-md"
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
                className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none"
              >
                Submit
              </button>
            </form>
          )}
        </div>
        {Array.isArray(addresses) &&
          addresses.map((address) => (
            <div key={address.id}>
              <p>{address.title}</p>
              <p>
                {address.name} {address.surname}
              </p>
              <p>{address.phone}</p>
              <p>{address.city}</p>
              <p>{address.district}</p>
              <p>{address.neighborhood}</p>
              <p>{address.addressDetails}</p>
            </div>
          ))}
        <div>
          <div className="flex justify-start items-center flex-col gap-4">
            <button className="flex justify-center items-center font-montserrat font-semibold text-lg border-2 bg-[#23A6F0] rounded-md px-20 py-4 tracking-[0.0125rem] text-custom-white">
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
                    <p className="font-montserrat font-semibold text-base text-[#23A6F0] tracking-[0.0125rem]">
                      -{shippingCost} ₺
                    </p>
                  </div>
                )}

                <div className="flex justify-between border-t-2 pt-4">
                  <p className="font-montserrat text-lg tracking-[0.0125rem]">
                    Toplam:
                  </p>
                  <p className="font-montserrat font-bold text-lg text-[#23A6F0] tracking-[0.0125rem] ">
                    {totalAmount} ₺
                  </p>
                </div>
              </div>
            </div>

            <div className="flex text-center items-center ">
              <button className="flex bg-custom-white items-center gap-4 border-2 rounded-md px-20 py-4 font-montserrat tracking-[0.0125rem] font-semibold text-lg ">
                <p className="font-montserrat text-[#23A6F0] text-3xl ">+</p>
                <p className="font-montserrat text-sm font-semibold">
                  İNDİRİM KODU GİR
                </p>
              </button>
            </div>

            <button className="flex items-center font-montserrat font-semibold text-lg border-2 bg-[#23A6F0] rounded-md px-20 py-4 tracking-[0.0125rem] text-custom-white">
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

export default OrderPage;
