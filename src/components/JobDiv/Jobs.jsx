import React from "react";
import { BiTimeFive } from "react-icons/bi";
import google from "../../images/google.png";
import microsoft from "../../images/microsoft.png";
import ibm from "../../images/ibm.png";
import oracle from "../../images/oracle.png";
import ford from "../../images/ford.png";
import americanexpress from "../../images/americanexpress.png";
import paypal from "../../images/paypal.png";
import adobe from "../../images/adobe.png";

const Data = [
  {
    id: 1,
    image: google,
    title: "Frontend Developer",
    time: "Now",
    location: "Dellhi, India",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora vel sunt, dolores itaque modi excepturi molestiae. Aperiam veniam eos exercitationem nobis minima, deleniti dignissimos? Eius dolorum eveniet hic obcaecati iste?",
    company: "Loki Linus co.",
  },
  {
    id: 2,
    image: microsoft,
    title: "UI/UX Developer",
    time: "2 days",
    location: "Mumbai, India",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora vel sunt, dolores itaque modi excepturi molestiae. Aperiam veniam eos exercitationem nobis minima, deleniti dignissimos? Eius dolorum eveniet hic obcaecati iste?",
    company: "Rakesh co.",
  },
  {
    id: 3,
    image: ibm,
    title: "Full stack Developer",
    time: "1 days",
    location: "Hyderabad, India",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora vel sunt, dolores itaque modi excepturi molestiae. Aperiam veniam eos exercitationem nobis minima, deleniti dignissimos? Eius dolorum eveniet hic obcaecati iste?",
    company: "Nishchay S K",
  },
  {
    id: 4,
    image: oracle,
    title: "Cloud Developer",
    time: "7 days",
    location: "Bangalore, India",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora vel sunt, dolores itaque modi excepturi molestiae. Aperiam veniam eos exercitationem nobis minima, deleniti dignissimos? Eius dolorum eveniet hic obcaecati iste?",
    company: "Himanshu co.",
  },
  {
    id: 5,
    image: ford,
    title: "Senior Manager",
    time: "5 Hours",
    location: "Noida, India",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora vel sunt, dolores itaque modi excepturi molestiae. Aperiam veniam eos exercitationem nobis minima, deleniti dignissimos? Eius dolorum eveniet hic obcaecati iste?",
    company: "Amisha Garg.",
  },
  {
    id: 6,
    image: americanexpress,
    title: "Business Analyst",
    time: "10 days",
    location: "Pune, India",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora vel sunt, dolores itaque modi excepturi molestiae. Aperiam veniam eos exercitationem nobis minima, deleniti dignissimos? Eius dolorum eveniet hic obcaecati iste?",
    company: "Mehak kalra",
  },
  {
    id: 7,
    image: paypal,
    title: "Software Developer",
    time: "2 days",
    location: "Chennai, India",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora vel sunt, dolores itaque modi excepturi molestiae. Aperiam veniam eos exercitationem nobis minima, deleniti dignissimos? Eius dolorum eveniet hic obcaecati iste?",
    company: "Namrata sexena",
  },
  {
    id: 8,
    image: adobe,
    title: "Data Scientist",
    time: "2 days",
    location: "Bangalore, India",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora vel sunt, dolores itaque modi excepturi molestiae. Aperiam veniam eos exercitationem nobis minima, deleniti dignissimos? Eius dolorum eveniet hic obcaecati iste?",
    company: "Neeraj Kumar co.",
  },
];

const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
        {Data.map(
          ({ id, image, title, time, location, description, company }) => {
            return (
              <div
                key={id}
                className="group group/item singleJob w-[auto] p-[30px] bg-[#4b4a4a] rounded-[10px] hover:text-[#7b9beb] shadow-lg shadow-greyIsh-400/700 hover:shadow-lg"
              >
                <span className="flex justify-between items-center gap-4">
                  <h1 className="text-[20px] font-semibold group-hover:text-[#b2c5f5]">
                    {title}
                  </h1>
                  <span className="flex items-center text-[#ccc] gap-1">
                    <BiTimeFive />
                    {time}
                  </span>
                </span>
                <h6 className="text-[#ccc]">{location}</h6>

                <p className="text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-[#2a68ff]">
                  {description}
                </p>
                <div className="comapny flex items-center gap-2">
                  <img src={image} alt="Company google" className="w-[2%]" />
                  <span className="py-[1rem] vlock group-hover:text-[#2a68ff]">
                    {company}
                  </span>
                </div>
                <button className="border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-[#ccc] group-hover/items:text-black group-hover:text-[#2a68ff]">
                  Apply Now
                </button>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default Jobs;
