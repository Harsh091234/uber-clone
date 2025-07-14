import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
 
  const navigate = useNavigate();

  const handleContinue = (e) => {
    e.preventDefault();
    navigate("/login")
  }
  return (
    <div>
      <div className="w-full h-screen flex flex-col  
      lg:flex-row">
        <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] w-full h-[81%] px-5 py-7
        lg:h-full lg:w-[45%]"
        >
          <img
            src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoid2VhcmVcL2ZpbGVcLzhGbTh4cU5SZGZUVjUxYVh3bnEyLnN2ZyJ9:weare:F1cOF9Bps96cMy7r9Y2d7affBYsDeiDoIHfqZrbcxAw?width=1200&height=417"
            alt=""
            className="w-23 
            md:w-25 
            lg:w-30"
          />
        </div>
        <div className="px-6 py-3 gap-2 flex flex-col
        md:justify-center md:gap-3
        lg:w-[55%] lg:items-center">
          <h1 className="font-bold text-center  text-[1.6rem]
          md:text-start md:text-[2.3rem]
          lg:text-[3rem] ">Get Started with Uber</h1>
          <button className="bg-black text-white pointer px-3 py-2 text-md rounded-md w-full
          md:w-1/2 md:text-2xl md:py-2.5
          lg:text-2xl lg:py-3" onClick={handleContinue}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
