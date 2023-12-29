import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axiosInstance from "../axios/axiosInstance";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { loginData } from "../actions/userAction";
import { writeToLocalStorage } from "../reducers/userReducer";

const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [login, setLogin] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const formSubmit = (data) => {
    axiosInstance
      .post("/login", data)
      .then((res) => {
        toast.success("Successfully logged in!");
        writeToLocalStorage("token", res.data.token);
        setLogin(true);
        console.log("Giriş başarılı", res.data);
        dispatch(
          loginData({
            name: res.data.name,
            email: res.data.email,
            role: res.data.role_id,
            loggedIn: true,
            password: res.data.password,
          })
        );
        setLogin(true);
        history.push("/");
      })
      .catch((error) => {
        setLogin(false);
        console.log("Logged in failure", error);
        toast.error("Login failed, check your login information.");
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
                pattern: {
                  value: /^\S+@\S+$/i,
                },
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
              })}
              className="w-full p-2 border rounded-md focus:outline-none focus:border-[#23A6F0]"
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center border-2 rounded-md px-8 py-4 bg-[#23A6F0] "
          >
            <p className="font-montserrat font-bold text-base tracking-[0.0125rem] text-custom-white">
              Login
            </p>
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default LoginPage;
