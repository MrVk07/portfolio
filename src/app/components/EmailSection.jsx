"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import MailIcon from "../../../public/mail.svg"
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className=" my-12 md:my-12 py-24 gap-4 text-xl flex justify-center">
      <div className="z-10  flex flex-col text-center justify-center">
        <h5 className="text-white text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
          Let&apos;s Connect
        </h5>
        <div className="text-[#ADB7BE] mx-auto text-center smb-4 max-w-md  mb-4">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </div>
        <div className="socials flex flex-row gap-2 justify-center">
          <Link href="https://github.com/MrVk07">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/vineet-karwa">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="mailto:vineetkarwa123@gmail.com">
            <Image src={MailIcon} alt="Mail Icon" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
