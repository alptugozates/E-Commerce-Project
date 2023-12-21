import React from "react";
import { useForm } from "react-hook-form";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faKey, faUser } from "@fortawesome/free-solid-svg-icons";
const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="flex flex-col items-center justify-center ">
      <Header />
      <div className="flex flex-col items-center justify-center w-full p-20 bg-gray-100 shadow-md gap-20 rounded-md ">
        <h1 className="font-montserrat font-bold text-[#252B42] text-4xl tracking-[0.0625] ">
          Bandage
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-3/12 gap-4"
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
              {...register("Name", { required: true, min: 3 })}
              className=" p-2 border w-full rounded-md focus:outline-none focus:border-[#23A6F0]"
            />
          </div>
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
              {...register("Email", {
                required: true,
                pattern: /^\S+@\S+$/i,
              })}
              className="w-full p-2 border rounded-md focus:outline-none focus:border-[#23A6F0]"
            />
          </div>
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
              {...register("Password", {
                required: true,
                min: 8,
                pattern:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).{8,}$/,
              })}
              className="w-full p-2 border rounded-md focus:outline-none focus:border-[#23A6F0]"
            />
          </div>
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
              placeholder="Confirm Password"
              {...register("Confirm Password", {
                required: true,
                min: 8,
                pattern:
                  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"':;?/>.<,]).{8,}$/,
              })}
              className="w-full p-2 border rounded-md focus:outline-none focus:border-[#23A6F0]"
            />
          </div>
          <div className="flex justify-center items-center gap-4 py-6">
            <input
              {...register("Role", { required: true })}
              type="radio"
              value="Customer"
            />
            <p className="font-montserrat font-bold text-sm text-[#252B42] tracking-[0.0125rem] ">
              Customer
            </p>
            <input
              {...register("Role", { required: true })}
              type="radio"
              value=" Store"
            />
            <p className="font-montserrat font-bold text-sm text-[#252B42] tracking-[0.0125rem] ">
              Store
            </p>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center border-2 rounded-md px-8 py-4 bg-[#23A6F0] "
          >
            {" "}
            <p className="font-montserrat font-bold text-base tracking-[0.0125rem] text-custom-white ">
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
