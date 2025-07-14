import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [captainData, setCaptainData] = useState({});

  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();

    
    setCaptainData({
      fullname: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    console.log(newCaptainData);
    setFirstName("");
    setLastName("");
    setEmail("");

    setPassword("");
  };

  return (
    <div>
      <div className="h-screen w-full  px-5 py-7 ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s
        "
          alt=""
          className="w-23
          md:w-25
          lg:w-31"
        />
        <form
          onSubmit={submitHandler}
          className="flex flex-col mt-17 
        md:mt-19
        lg:mt-21"
        >
          <label
            htmlFor=""
            className=" font-semibold text-md
          md:text-[1.3rem]
          lg:text-[1.5rem]"
          >
            Name
          </label>

          <input
            type="text"
            name="firstname"
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="first name"
            className="outline-0 bg-gray-200 border-1 rounded-md mt-1 border-gray-300 px-2.5 py-1.5 text-sm  focus:border-blue-500 
            md:w-[70%] md:py-2 md:text-[1.3rem] md:mt-1.5
            lg:text-[1.5rem] lg:py-3 lg:mt-2 lg:w-1/2"
          />
          <input
            type="text"
            name="lastname"
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="last name"
            className="outline-0 bg-gray-200 border-1 rounded-md mt-1.5 border-gray-300 px-2.5 py-1.5 text-sm  focus:border-blue-500 
            md:w-[70%] md:py-2 md:text-[1.3rem] md:mt-1.5
            lg:text-[1.5rem] lg:py-3 lg:mt-2 lg:w-1/2"
          />
          <label
            htmlFor="email"
            className=" font-semibold text-md mt-3
          md:text-[1.3rem]
          lg:text-[1.5rem]"
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email@example.com"
            className="outline-0 bg-gray-200 border-1 rounded-md mt-1 border-gray-300 px-2.5 py-1.5 text-sm  focus:border-blue-500 
            md:w-[70%] md:py-2 md:text-[1.3rem] md:mt-1.5
            lg:text-[1.5rem] lg:py-3 lg:mt-2 lg:w-1/2"
          />

          <label
            htmlFor="password"
            className="font-semibold text-md mt-3
          md:text-[1.3rem]
          lg:text-[1.5rem]"
          >
            Password
          </label>
          <input
            type="text"
            required
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            className="outline-0 bg-gray-200 border-1 rounded-md mt-1 border-gray-300 px-2.5 py-1.5 text-sm
            focus:border-blue-500
             md:w-[70%] md:py-2 md:text-[1.3rem] md:mt-1.5
              lg:text-[1.5rem] lg:py-3 lg:mt-2  lg:w-1/2"
          />
          <button
            type="submit"
            className="bg-black text-white pointer mt-6  px-3 py-1.5 text-md rounded-md w-full font-semibold 
           md:w-[70%] md:text-[1.3rem] md:py-2.5 md:mt-7.5
          lg:py-3.5 lg:font-bold lg:mt-9 lg:w-1/2"
          >
            Register as Captain
          </button>

          <h1
            className="font-semibold text-sm mt-3 text-center
          md:text-xl md:mt-4 md:text-start
          lg:text-2xl lg:mt-5.5 "
          >
            Already have a account?
            <Link to="/captain-login" className="ml-3 text-blue-400 pointer">
              Login here
            </Link>
          </h1>
        </form>

        <div className="mt-37">
          <p className="text-[10px]    bottom-0 leading-tight">
            This site is protected by reCAPTCHA and the{" "}
            <span className="underline">Google Privacy Policy</span> and{" "}
            <span className="underline">Terms of Service apply</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CaptainSignup;
