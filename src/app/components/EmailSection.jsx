"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import EmailIcon from "../../../public/email-icon.png";
import MetaIcon from "../../../public/meta-icon.png";
import Itchicon from "../../../public/itch-io-icon.svg";
import InstaIcon from "../../../public/insta-icon.png";

import Link from "next/link";
import Image from "next/image";
import '../css/HeroSection.css';

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
    id="contact"
    className="relative z-0 flex justify-center items-center py-24 bg-transparent"
  >
    {/* Radial glow effect (original left-side one) */}
    <div className="absolute bg-color-transition circle-size bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg top-3/4 -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
  
    {/* Optional center radial glow */}
    <div className="absolute bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
  
    {/* Main content */}
    <div className="z-10 text-center max-w-2xl w-full px-6">
      <h5 className="text-3xl font-bold text-white mb-4">Let&apos;s Connect</h5>
      <p className="font-abc text-[#ADB7BE] mb-8">
        I&apos;m currently looking for new opportunities—my inbox is always open. Whether you have a question or just want to say hi, I&apos;ll do my best to get back to you!
      </p>
  
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center">
        <Link href="https://www.linkedin.com/in/kdpham2001" target="_blank">
          <div className="flex flex-col items-center bg-[#121212] hover:bg-[#374151] transition p-4 rounded-xl border border-gray-600 hover:scale-105">
            <Image src={LinkedinIcon} alt="Linkedin Icon" width={40} height={40} />
            <span className="text-sm mt-2 text-white">LinkedIn</span>
          </div>
        </Link>
  
        <Link href="https://www.facebook.com/kdpham2001/" target="_blank">
          <div className="flex flex-col items-center bg-[#121212] hover:bg-[#374151] transition p-4 rounded-xl border border-gray-600 hover:scale-105">
            <Image src={MetaIcon} alt="Meta Icon" width={40} height={40} />
            <span className="text-sm mt-2 text-white">Facebook</span>
          </div>
        </Link>
  
        <Link href="mailto:kdpham2001@gmail.com" target="_blank">
          <div className="flex flex-col items-center bg-[#121212] hover:bg-[#374151] transition p-4 rounded-xl border border-gray-600 hover:scale-105">
            <Image src={EmailIcon} alt="Email Icon" width={40} height={40} />
            <span className="text-sm mt-2 text-white">Email</span>
          </div>
        </Link>
  
        <Link href="https://kd2301.itch.io/" target="_blank">
          <div className="flex flex-col items-center bg-[#121212] hover:bg-[#374151] transition p-4 rounded-xl border border-gray-600 hover:scale-105">
            <Image src={Itchicon} alt="Itch.io Icon" width={40} height={40} />
            <span className="text-sm mt-2 text-white">Itch.io</span>
          </div>
        </Link>
      </div>
    </div>
  </section>
  

  );
};

export default EmailSection;



