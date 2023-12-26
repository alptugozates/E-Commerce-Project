import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isValidIBAN } from "ibantools";
import {
  faEnvelope,
  faIdCard,
  faKey,
  faMoneyCheck,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import axiosInstance from "../axios/axiosInstance";
import {
  useHistory,
  useLocation,
} from "react-router-dom/cjs/react-router-dom.min";

import { toast } from "react-toastify";
const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
    watch,
  } = useForm();

  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRoleID, setSelectedRoleID] = useState("3");
  const history = useHistory();

  useEffect(() => {
    axiosInstance
      .get("/roles")
      .then((response) => {
        setRoles(response.data);
        console.log(response.data, "get isteği başarılı");
      })
      .catch((error) => {
        console.log("get isteği başarısız", error);
      });
  }, []);

  const formSubmit = (data) => {
    console.log("Seçilen Rol ID:", selectedRoleID);
    let formData;
    if (selectedRoleID === "2") {
      formData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: data.role_id,
        store: {
          name: data.storeName,
          phone: data.storePhone,
          tax_no: data.tax_no,
          bank_account: data.bank_account,
        },
      };
    } else {
      formData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: data.role_id,
      };
    }

    setLoading(true);
    console.log("Form data", formData);

    setTimeout(() => {
      axiosInstance
        .post("/signup", formData)
        .then((response) => {
          console.log("submit succeeded:", response);
          toast.success(`${response.data.message}`);
          history.goBack();
        })
        .catch((error) => {
          console.log("Error:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <Header />
      <div className="flex flex-col items-center justify-center w-full p-20 bg-gray-100 shadow-md gap-20 rounded-md ">
        <h1 className="font-montserrat font-bold text-[#252B42] text-4xl tracking-[0.0625] ">
          Bandage
        </h1>

        <form
          onSubmit={handleSubmit(formSubmit)}
          className="flex flex-col max-w-3/12 gap-4"
        >
          <div className="flex gap-4">
            <a href="" className="p-4 pr-0">
              <FontAwesomeIcon
                icon={faUser}
                size="lg"
                style={{ color: "#23A6F0" }}
              />
            </a>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true, min: 3 })}
              className=" p-2 border w-full rounded-md focus:outline-none focus:border-[#23A6F0]"
            />
          </div>
          {errors.name && errors.name.type === "required" && (
            <span className="text-red-500 font-montserrat ">
              Name is required
            </span>
          )}
          {errors.name && errors.name.type === "min" && (
            <span className="text-red-500">
              Name should be at least 3 characters
            </span>
          )}
          <div className="flex gap-4">
            <a href="" className="p-4 pr-0">
              <FontAwesomeIcon
                icon={faEnvelope}
                size="lg"
                style={{ color: "#23A6F0" }}
              />
            </a>

            <input
              type="text"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              className="w-full p-2 border rounded-md focus:outline-none focus:border-[#23A6F0]"
            />
          </div>
          {errors.email && errors.email.type === "required" && (
            <span className="text-red-500">Email is required</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span className="text-red-500">Enter a valid email address</span>
          )}
          <div className="flex gap-4">
            <a href="" className="p-4 pr-0">
              <FontAwesomeIcon
                icon={faKey}
                size="lg"
                style={{ color: "#23A6F0" }}
              />
            </a>
            <input
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
                min: 8,
                pattern:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).{8,}$/,
              })}
              className="w-full p-2 border rounded-md focus:outline-none focus:border-[#23A6F0]"
            />
          </div>
          {errors.password && errors.password.type === "required" && (
            <span className="text-red-500">Password is required</span>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <span className="text-red-500">
              Password should be at least 8 characters
            </span>
          )}
          {errors.password && errors.password.type === "pattern" && (
            <span className="text-red-500">
              Password should contain numbers, lowercase, uppercase, and special
              characters
            </span>
          )}

          <div className="flex gap-4">
            <a href="" className="p-4 pr-0">
              <FontAwesomeIcon
                icon={faKey}
                size="lg"
                style={{ color: "#23A6F0" }}
              />
            </a>
            <input
              className="w-full p-2 border rounded-md focus:outline-none focus:border-[#23A6F0]"
              type="password"
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                validate: (value) => value === getValues("password"),
              })}
            />
          </div>
          {errors.confirmPassword &&
            errors.confirmPassword.type === "validate" && (
              <span className="text-red-500">Passwords do not match</span>
            )}
          {selectedRoleID === "2" && (
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <a href="#" className="p-4 pr-0">
                  <FontAwesomeIcon
                    icon={faUser}
                    size="lg"
                    className="text-[#23A6F0]"
                  />
                </a>
                <input
                  className="w-full py-4 px-2 border rounded-md focus:outline-none focus:border-[#23A6F0]"
                  type="text"
                  placeholder="Store Name"
                  {...register("storeName", { required: true, minLength: 3 })}
                />
              </div>
              {errors.storeName && errors.storeName.type === "required" && (
                <span className="text-red-500">Store Name is required</span>
              )}
              {errors.storeName && errors.storeName.type === "minLength" && (
                <span className="text-red-500">
                  Store Name should be at least 3 characters
                </span>
              )}

              <div className="flex items-center gap-4">
                <a href="#" className="p-4 pr-0">
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="lg"
                    className="text-[#23A6F0]"
                  />
                </a>
                <input
                  type="tel"
                  placeholder="Store Phone"
                  {...register("storePhone", {
                    required: true,
                    pattern: /^[0-9]{10}$/, // Türk telefon numarası formatı
                  })}
                  className="w-full px-2 py-4 border rounded-md focus:outline-none focus:border-[#23A6F0]"
                />
              </div>
              {errors.storePhone && errors.storePhone.type === "required" && (
                <span className="text-red-500">Store Phone is required</span>
              )}
              {errors.storePhone && errors.storePhone.type === "pattern" && (
                <span className="text-red-500">
                  Enter a valid Turkish phone number
                </span>
              )}
              <div className="flex items-center gap-4">
                <a href="#" className="p-4 pr-0">
                  <FontAwesomeIcon
                    icon={faIdCard}
                    size="lg"
                    className="text-[#23A6F0]"
                  />
                </a>
                <input
                  type="text"
                  placeholder="Store Tax ID (TXXXXVXXXXXX)"
                  {...register("tax_no", {
                    required: true,
                    pattern: /^T\d{4}V\d{6}$/, // Store Tax ID pattern
                  })}
                  className="w-full px-2 py-4 border rounded-md focus:outline-none focus:border-[#23A6F0]"
                />
              </div>
              {errors.tax_no && errors.tax_no.type === "required" && (
                <span className="text-red-500">Store Tax ID is required</span>
              )}
              {errors.tax_no && errors.tax_no.type === "pattern" && (
                <span className="text-red-500">
                  Enter a valid Store Tax ID (TXXXXVXXXXXX)
                </span>
              )}
              <div className="flex items-center gap-4">
                <a href="#" className="p-4 pr-0">
                  <FontAwesomeIcon
                    icon={faMoneyCheck}
                    size="lg"
                    className="text-[#23A6F0]"
                  />
                </a>
                <input
                  type="text"
                  placeholder="Store Bank Account (IBAN Address)"
                  {...register("bank_account", {
                    required: true,
                    validate: {
                      isValidIBAN: (value) =>
                        isValidIBAN(value) || "Invalid IBAN address",
                    },
                  })}
                  className="px-2 py-4 border rounded-md w-full focus:outline-none focus:border-[#23A6F0]"
                />
              </div>
              {errors.bank_account &&
                errors.bank_account.type === "required" && (
                  <span className="text-red-500">
                    Store Bank Account is required
                  </span>
                )}
            </div>
          )}
          <div className="flex justify-center items-center gap-4 py-6">
            <input
              {...register("role_id", { required: true })}
              type="radio"
              value="customer"
              id="3"
              onChange={() => setSelectedRoleID("3")}
            />
            <p className="font-montserrat font-bold text-sm text-[#252B42] tracking-[0.0125rem] ">
              Customer
            </p>
            <input
              {...register("role_id", { required: true })}
              type="radio"
              value="2"
              id="2"
              onChange={() => setSelectedRoleID("2")}
            />
            <p className="font-montserrat font-bold text-sm text-[#252B42] tracking-[0.0125rem] ">
              Store
            </p>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center border-2 rounded-md px-8 py-4 bg-[#23A6F0] "
            disabled={loading}
          >
            <p className="font-montserrat font-bold text-base tracking-[0.0125rem] text-custom-white">
              Register
            </p>
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default SignUpPage;
