"use client";

import React, { useState } from "react";
import ContactImage from "../assets/Contact4.png";
import Image from "next/image";
import Github from "../assets/Contact/github.svg";
import LinkedIn from "../assets/Contact/linkedin.svg";
import Instagram from "../assets/Contact/instagram.svg";
import LinkTree from "../assets/Contact/linktree.svg";
import Link from "next/link";
import axios from "axios";
import { API_URL } from "@/Config/config";
import { IoIosSend } from "react-icons/io";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [alertName, setAlertName] = useState("");
  const [alertEmail, setAlertEmail] = useState("");
  const [alertMessage, setAlertMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleContact = async () => {
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/contact`, {
        name: name,
        email: email,
        description: message,
      });

      const { msg } = response.data;
      setSuccess(msg);

      if (msg) {
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let hasError = false;

    if (!name) {
      setAlertName("Name is required");
      hasError = true;
    } else {
      setAlertName("");
    }

    if (!email) {
      setAlertEmail("Email is required");
      hasError = true;
    } else {
      setAlertEmail("");
    }

    if (!message) {
      setAlertMessage("Message is required");
      hasError = true;
    } else {
      setAlertMessage("");
    }

    if (!hasError) {
      handleContact();
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (e.target.value) {
      setAlertName("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value) {
      setAlertEmail("");
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    if (e.target.value) {
      setAlertMessage("");
    }
  };

  return (
    <main className="w-full flex justify-center bg-DARK " id="Contact">
      <div className="container flex lg:flex-row flex-col items-center py-16">
        <div
          data-aos="fade-up"
          className="flex flex-col w-full h-full items-center lg:items-start"
        >
          <h1 className="font-bold text-white text-5xl">
            <a className="text-RED01">Contact</a> Me
          </h1>
          <div className="text-white mt-4 w-[80%] text-lg">
            <p className="text-center lg:text-start">
              Interested in my portfolio? You can contact me through the social media
              below or send a message to my email.
            </p>
          </div>
          <div className="flex flex-col mt-6">
            <Link
              href="https://www.linkedin.com/in/arwin-marinta/"
              className="flex flex-row items-center gap-4 py-2"
            >
              <Image src={LinkedIn} alt="LinkedIn" width={30} height={30} />
              <label className="text-white font-bold text-lg hover:underline">
                Arwin Marinta
              </label>
            </Link>
            <Link
              href="https://github.com/ArwinMarinta"
              className="flex flex-row gap-4 py-2"
            >
              <Image src={Github} alt="GitHub" width={30} height={30} />
              <label className="text-white font-bold text-lg  hover:underline">
                Arwin Marinta
              </label>
            </Link>
            <div className="flex flex-row gap-4 py-2">
              <Image src={Instagram} alt="Instagram" width={30} height={30} />
              <label className="text-white font-bold text-lg  hover:underline">
                @wynnn_1
              </label>
            </div>
            <Link
              href="https://link-tree.arwinmarinta.com"
              className="flex flex-row gap-4 py-2"
            >
              <Image src={LinkTree} alt="LinkTree" width={30} height={30} />
              <label className="text-white font-bold text-lg  hover:underline">
                LinkTree
              </label>
            </Link>
          </div>
        </div>
        <div
          data-aos="flip-left"
          className="w-full flex flex-col  h-full bg-DARK03 rounded-md p-6 mt-10 lg:mt-0 "
        >
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="text-white">Name</label>
              <input
                type="text"
                className="border-2 mt-1 py-2 rounded-md px-2 outline outline-2 outline-DARK01 focus:right-2 ring-RED01"
                placeholder="Name.."
                value={name}
                onChange={handleNameChange}
              />
              <span className="text-RED01">{alertName}</span>
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-white">Email</label>
              <input
                type="email"
                className="border-2 mt-1 py-2 rounded-md px-2  outline outline-2 outline-DARK01 "
                placeholder="Email.."
                value={email}
                onChange={handleEmailChange}
              />
              <span className="text-RED01">{alertEmail}</span>
            </div>
            <div className="flex flex-col mt-4">
              <label className="text-white">Message</label>
              <textarea
                placeholder="Message..."
                className="rounded-md mt-1 px-2 py-2 outline outline-2 outline-DARK01 "
                value={message}
                onChange={handleMessageChange}
              ></textarea>
              <span className="text-RED01">{alertMessage}</span>
            </div>
            <div className="mt-10 flex justify-center w-full ">
              <button
                type="submit"
                className="bg-RED01 text-white font-semibold sm:px-16 w-full  py-2 rounded-md right-2 fok "
              >
                {loading ? (
                  <a className="flex flex-row items-center gap-2">
                    <IoIosSend />
                    {"send..."}
                  </a>
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
