import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isValidIBAN } from "ibantools";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const [roles, setRoles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedRoleID, setSelectedRoleID] = useState("3");
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    axiosInstance
      .get("/roles")
      .then((response) => {
        setRoles(response.data);
        console.log(response.data, "Get req başarılı");
      })
      .catch((error) => {
        console.log("Get req başarısız", error);
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
    console.log("Form Data", formData);

    axiosInstance
      .post("/signup", formData)
      .then((response) => {
        console.log("Submit Succeeded:", response);
        toast.success(`${response.data.message}`, {
          position: "top-right",
          autoClose: 3500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setTimeout(() => {
          history.push("/");
        }, 2000);
      })
      .catch((error) => {
        console.log("Error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
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
              className=" p-2 border w-full rounded-md focus:outline-none focus:border-turquoise"
            />
          </div>
          {errors.name && errors.name.type === "required" && (
            <span className="text-red-500 ">Name is required</span>
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
              type="email"
              placeholder="Email"
              {...register("email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              className="w-full p-2 border rounded-md focus:outline-none focus:border-turquoise"
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
              className="w-full p-2 border rounded-md focus:outline-none focus:border-turquoise"
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
              className="w-full p-2 border rounded-md focus:outline-none focus:border-turquoise"
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
                    className="text-turquoise"
                  />
                </a>
                <input
                  className="w-full py-4 px-2 border rounded-md focus:outline-none focus:border-turquoise"
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
                    className="text-turquoise"
                  />
                </a>
                <input
                  type="tel"
                  placeholder="Store Phone"
                  {...register("storePhone", {
                    required: true,
                    pattern: /^[0-9]{10}$/, // Türk telefon numarası formatı
                  })}
                  className="w-full px-2 py-4 border rounded-md focus:outline-none focus:border-turquoise"
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
                    className="text-turquoise"
                  />
                </a>
                <input
                  type="text"
                  placeholder="Store Tax ID (TXXXXVXXXXXX)"
                  {...register("tax_no", {
                    required: true,
                    pattern: /^T\d{4}V\d{6}$/, // Store Tax ID pattern
                  })}
                  className="w-full px-2 py-4 border rounded-md focus:outline-none focus:border-turquoise"
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
                    className="text-turquoise"
                  />
                </a>
                <input
                  type="text"
                  placeholder="Store Bank Account (IBAN Address)"
                  {...register("bank_account", {
                    required: true,
                    validate: {
                      validIBAN: (value) =>
                        isValidIBAN(value) || "Invalid IBAN address",
                    },
                  })}
                  className="px-2 py-4 border rounded-md w-full focus:outline-none focus:border-turquoise"
                />
              </div>
              {errors.bank_account &&
                errors.bank_account.type === "required" && (
                  <span className="text-red-500">
                    Store Bank Account is required
                  </span>
                )}
              {errors.bank_account &&
                errors.bank_account.type === "validIBAN" && (
                  <span className="text-red-500">
                    {errors.bank_account.message}
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
              defaultChecked={selectedRoleID === "3"}
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
            className="flex items-center justify-center border-2 rounded-md px-8 py-4 bg-turquoise "
            disabled={loading}
          >
            {loading ? (
              <div role="status">
                <svg
                  aria-hidden="true"
                  className="inline w-6 h-6 text-custom-white  animate-spin fill-turquoise"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <p className="font-montserrat font-bold text-base tracking-[0.0125rem] text-custom-white">
                Register
              </p>
            )}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default SignUpPage;
