import React from 'react';
import delivery1 from '../../assets/delivery1.jpg';
import chefs from '../../assets/chefs.jpg';
import quality from '../../assets/quality.jpg';
import chef2 from '../../assets/chef2.jpg';
import chef1 from '../../assets/chef1.jpg';
import chef3 from '../../assets/chef3.jpg';
import { FiMapPin, FiPhone, FiMail } from 'react-icons/fi';

const AboutContent = () => {
  const team = [
    { name: "Marco Jansen", title: "Executive Chef", desc: "3 Michelin stars | Italian cuisine specialist", img: chef1 },
    { name: "Antoine Mathis", title: "Pastry Chef", desc: "World Baking Champion | French desserts expert", img: chef2 },
    { name: "Oliver Henry", title: "Sushi Chef", desc: "5th generation sushi chef | Traditional techniques", img: chef3 },
  ];

  const features = [
    { icon: <FiMapPin size={28} className="text-black" />, title: "Our Headquarter - Colombo" },
    { icon: <FiPhone size={28} className="text-black" />, title: "Contact Number - 0112918808" },
    { icon: <FiMail size={28} className="text-black" />, title: "Email Address - etzone@gmail.com" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section style={{ backgroundColor: '#5C4747' }} className="w-full py-24">
        <p className="text-center text-3xl font-semibold drop-shadow-md text-yellow-200 font-serif px-6 md:text-2xl">
          Delivering memorable meals, made <br />with passion.
        </p>
      </section>

      {/* Feature Cards */}
      <section style={{ backgroundColor: '#5C4747' }} className="py-16 flex flex-wrap justify-center gap-8 text-white">
        <Card img={delivery1} title="Instant Delivery" />
        <Card img={chefs} title="Master Chefs" />
        <Card img={quality} title="Premium Quality" />
      </section>

      {/* Meet Our Team */}
      <section className="bg-gradient-to-b from-[#5C4747] to-[#D4B7B7] py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-10 text-yellow-100 font-serif">Meet Our Team</h2>
        <div className="flex justify-center gap-8 flex-wrap px-6">
          {team.map((chef, idx) => (
            <div key={idx} className="bg-gradient-to-b from-[#341E1E] to-[#9A5858] rounded-2xl border-2 border-[#CE6730] p-4 w-72 sm:w-80 md:w-96 shadow-lg">
              <img
                src={chef.img}
                className="w-full h-62 sm:h-62 md:h-64 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold">{chef.name}</h3>
              <p className="italic text-sm text-white">{chef.title}</p>
              <p className="mt-2 text-sm">{chef.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact / Features */}
      <section className="bg-[#D4B7B7] py-16 text-left">
        <div className="space-y-6 max-w-4xl mx-auto">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-[#D4B7B7] bg-opacity-10 p-6 rounded shadow-[inset_4px_4px_15px_rgba(0,0,0,0.4)] text-xl flex items-center gap-4">
              {feature.icon}
              <h3 className="font-semibold text-xl">{feature.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

// Card Component
const Card = ({ img, title }) => (
  <div className="bg-gradient-to-b from-[#341E1E] to-[#9A5858] p-4 rounded-2xl shadow-lg w-64 sm:w-72 md:w-80 text-center border-2 border-[#CE6730]">
    <img src={img} className="w-full h-48 sm:h-56 md:h-64 object-cover rounded mb-4" />
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-yellow-400 mt-2">★★★★★</p>
  </div>
);

export default AboutContent;
