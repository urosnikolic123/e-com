import { useState, useEffect } from "react";
// import { texts } from "./textData";
import X from "../public/X.svg";
import Logo from "../public/Logo.svg";
import Account from "../public/Account.svg";
import Cart from "../public/Cart.svg";
import Lupa from "../public/Lupa.svg";
import speaker from "../public/images/speakerheader.png";
import camera1 from "../public/images/camera1.png";
import headphones from "../public/images/headphones.png";
import homespeaker from "../public/images/homespeaker.png";
import smarthome from "../public/images/smarthome.png";
import tv from "../public/images/tv.png";

function App() {
  const [TopMessage, setTopMessage] = useState(true);

  function closeTopMessage() {
    setTopMessage(false);
  }

  return (
    <>
      {TopMessage && (
        <message className="place-items-center grid text-center bg-primary h-6">
          <div className="flex items-center justify-center ">
            <p className="text-secondary-300 font-body font-light text-sm animate-custom-pulse box b1">
              YEAR-END BLOWOUT | 30% Off Everything. Shop now!
            </p>
            <p className="text-secondary-300 font-body font-light text-sm animate-custom-pulse box b2">
              SUMMER CLEARANCE | Up to 50% Off Top Picks. Shop now!
            </p>
            <p className="text-secondary-300 font-body font-light text-sm animate-custom-pulse box b3 ">
              FALL FEST | Save 25% on Seasonal Favorites. Shop now!
            </p>
            <img
              src={X}
              alt="Icon"
              className="w-6 h-6 mr-2  absolute top-0 right-0 "
              onClick={closeTopMessage}
            />
          </div>
        </message>
      )}
      <header className="flex justify-between items-center  px-32 py-2 border-b-2 border-gray-400">
        <div className="flex items-center">
          <img src={Logo} alt="Icon" className="w-16  h-16 " />
          <h2 className="font-bebas text-3xl hover:cursor-pointer ">
            SHOPDIGITAL
          </h2>
        </div>
        <div className="flex items-center justify-center w-full">
          <input
            type="text"
            placeholder="Search"
            className="w-1/2 h-10 text-xl border-2 border-gray-400 font-body rounded-l  pl-2 bg-secondary-300 border-r-0  focus:border-2 focus:border-r-0 focus:outline-gray-500"
          />
          <img
            src={Lupa}
            alt="Icon"
            className="w-10 h-10 border-2 border-gray-400 rounded-r p-1"
          />
        </div>

        <div className="flex items-center">
          <img src={Account} alt="Icon" className="w-8  h-8  mr-3" />
          <h2 className="font-montserrat font-medium text-lg hover:text-secondary-100 hover:cursor-pointer">
            Account
          </h2>
          <h1 className="ml-2 text-2xl mb-1 text-gray-300 "> |</h1>
          <img src={Cart} alt="Icon" className="w-8  h-8 mx-3 " />
          <h2 className="font-montserrat font-medium text-lg hover:text-secondary-100 hover:cursor-pointer">
            Cart
          </h2>
        </div>
      </header>
      <secondheader className="flex px-48 py-2 border-b-2 border-gray-400 justify-between font-medium whitespace-nowrap ">
        <h2>Car audio & video</h2>
        <h2>Home audio</h2>
        <h2>TVs & video</h2>
        <h2>Headphones & wireless</h2>
        <h2>Smart home</h2>
        <h2>Cameras & drones</h2>
        <h2>Health</h2>
        <h2>Specials</h2>
      </secondheader>
      {/* <div className="w-max h-96"></div> */}
      <div>
        <div className="relative">
          <img
            src="./public/images/Group 83.png"
            alt=""
            className="w-full h-header"
          />
          <div className="absolute top-1/4 text-blue-100 left-36">
            <h3 className="font-roboto font-bold">20% OFF</h3>
            <h1 className="text-secondary-100 text-8xl font-bebas">
              TECH ESSENTIALS{" "}
            </h1>
            <h3 className="font-roboto font-light">
              + 30% off the 1st order when you subscribe.
            </h3>
            <button className="mt-8 px-10 py-1 rounded-sm bg-secondary-100 font-bebas text-xl tracking-wide border-secondary-100 border-2 transition duration-200 hover:bg-secondary-300 hover:text-primary hover:border-secondary-100 hover:border-2  ">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center my-12">
          <h1 className="text-5xl font-bebas">
            ELEVATE YOUR SHOPPING EXPERIENCE WITH SHOPDIGITAL
          </h1>
        </div>
      </div>
      <div className="bg-gray-200 flex justify-between mx-36 text-center font-montserrat font-semibold p-4">
        <div class="flex flex-col items-center justify-center">
          <img src={speaker} alt="speaker" className="w-40 h-40" />
          <div>Car supplies</div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img src={homespeaker} alt="" className="w-26 h-40" />
          <div>Home audio</div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img src={tv} alt="" className="w-56 h-40" />
          <div>TVs & video</div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img src={headphones} alt="" className="w-40 h-40" />
          <div>Headphones</div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img src={camera1} alt="" className="w-44 h-40" />
          <div>Cameras & drones</div>
        </div>
        <div class="flex flex-col items-center justify-center">
          <img src={smarthome} alt="" className="w-26 h-40" />
          <div>Smart home</div>
        </div>
      </div>
      <div className="h-96"></div>
    </>
  );
}

export default App;
