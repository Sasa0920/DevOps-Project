import { FaYoutube, FaPhone, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#D4B7B7] to-black text-center text-yellow-200  font-serif py-40 px-6">
      <p className="mb-20 text-lg font-semibold drop-shadow-md md:text-2xl [text-shadow:_2px_2px_0_black,_0px_0px_0_black]">
        Where gourmet flavors meet the comfort of home <br />
        freshly crafted, swiftly delivered.
      </p>

      <div className="flex justify-center space-x-8 mb-6 text-2xl text-white">
        <FaYoutube className="hover:text-red-600 cursor-pointer" />
        <FaPhone className="hover:text-green-600 cursor-pointer" />
        <FaInstagram className="hover:text-pink-600 cursor-pointer" />
        <FaFacebook className="hover:text-blue-600 cursor-pointer" />
      </div>

      <hr className="flex justify-center ml-30 border-yellow-300 w-300 mb-4 " />

      <small className="text-white text-sm">
        Hot Deals, Top Picks, Chef's Specials, Most Ordered <br />
        &copy; 2025 EatZone. All rights reserved.
      </small>
    </footer>
  );
};
export default Footer;