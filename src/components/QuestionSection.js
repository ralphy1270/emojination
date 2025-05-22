"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";

//localhost key: 6LepdkIrAAAAANtZ8Qf5iH5G661TiDXGg58OJnNB

//site key: 6Ldfl0QrAAAAAEQY_uE0xufSLFKZUUejdEYdRXSq

export default function QuestionSection({ image }) {
  const [loading, setLoading] = useState(false);
  const [capVal, setCapVal] = useState(null);
  const recaptchaRef = useRef();

  const firstName = useRef();
  const lastName = useRef();
  const birthDate = useRef();
  const contactNumber = useRef();
  const address = useRef();
  const email = useRef();
  const answer = useRef();
  const checkBox1 = useRef();
  const checkBox2 = useRef();

  const resetForm = () => {
    firstName.current.value = "";
    lastName.current.value = "";
    birthDate.current.value = "";
    contactNumber.current.value = "";
    address.current.value = "";
    email.current.value = "";
    answer.current.value = "";
    checkBox1.current.checked = false;
    checkBox2.current.checked = false;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const firstName = e.target.firstname.value.trim();
    const lastName = e.target.lastname.value.trim();
    const birthDate = e.target.birthdate.value.trim();
    const address = e.target.address.value.trim();
    const contactNumber = e.target.contactnumber.value.trim();
    const email = e.target.email.value.trim();
    const answer = e.target.answer.value.trim();
    const agree1 = e.target.checkbox1.checked;
    const agree2 = e.target.checkbox2.checked;

    // Basic validation
    if (
      !firstName ||
      !lastName ||
      !birthDate ||
      !address ||
      !contactNumber ||
      !email ||
      !answer
    ) {
      alert("Please fill out all fields.");
      setLoading(false);
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      setLoading(false);
      return;
    }

    // Birthdate format validation (MM/DD/YYYY)
    const birthDateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
    if (!birthDateRegex.test(birthDate)) {
      alert("Please enter birth date in MM/DD/YYYY format.");
      setLoading(false);
      return;
    }

    // Checkbox validation
    if (!agree1 || !agree2) {
      alert("You must agree to all the terms before submitting.");
      setLoading(false);
      return;
    }

    // Checkbox validation
    if (!capVal) {
      alert("Please verify you are not a robot.");
      setLoading(false);
      return;
    }

    // Proceed to submit
    const url =
      "https://script.google.com/macros/s/AKfycbxXX91nDTqtwl7LBycLOgSyxmrEYeUTk6HWiDuEAp-IsZigly7hThG6SlBcG1HVbwPZ0Q/exec";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "X-Origin": window.location.origin, // manually send origin
        },
        body: `First_Name=${encodeURIComponent(
          firstName
        )}&Last_Name=${encodeURIComponent(
          lastName
        )}&Birth_Date=${encodeURIComponent(
          birthDate
        )}&Address=${encodeURIComponent(
          address
        )}&Contact_Number=${encodeURIComponent(
          contactNumber
        )}&Email_Address=${encodeURIComponent(
          email
        )}&Answer=${encodeURIComponent(answer)}`,
      });

      const data = await response.text();
      recaptchaRef.current.reset();
      setCapVal(null);
      alert(data);

      e.target.reset(); // Reset the form if submission is successful
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("Something went wrong while submitting the form.");
    }
    setLoading(false);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-center space-x-10 pointer-events-none select-none">
        <Image
          className="w-[765px] border border-black pointer-events-none select-none rounded-3xl"
          src={image}
          alt=""
          priority
        />
      </div>
      <div className="m-0 px-75 py-12">
        <form
          className="flex flex-col items-center justify-center font-poppins"
          onSubmit={submitHandler}
        >
          <input
            className="text-xl text-gray-500 outline hover:outline-2 outline-gray-500 px-10 py-3 w-full rounded-lg"
            id="answer"
            type="text"
            name="answer"
            placeholder="Answer here..."
            autoComplete="off"
            ref={answer}
            required
          />
          <div className="flex items-center justify-center">
            <span className="font-comic text-[32px] uppercase mt-14">
              Complete the form to enter
            </span>
          </div>
          <div className="w-full grid grid-cols-2 gap-5 mt-11">
            <div className="flex flex-col space-y-3">
              <label
                htmlFor="firstname"
                className="text-xl font-semibold text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                ref={firstName}
                placeholder="Answer here..."
                className="text-base text-gray-500 outline hover:outline-2 outline-gray-500 px-5 py-3 w-full rounded-lg"
                autoComplete="off"
                required
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label
                htmlFor="lastname"
                className="text-xl font-semibold text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Answer here..."
                className="text-base text-gray-500 outline hover:outline-2 outline-gray-500 px-5 py-3 w-full rounded-lg"
                autoComplete="off"
                ref={lastName}
                required
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label
                htmlFor="birthdate"
                className="text-xl font-semibold text-gray-700"
              >
                Birth Date
              </label>
              <input
                type="text"
                id="birthdate"
                name="birthdate"
                placeholder="MM/DD/YYYY"
                className="text-base text-gray-500 outline hover:outline-2 outline-gray-500 px-5 py-3 w-full rounded-lg"
                autoComplete="off"
                ref={birthDate}
                required
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label
                htmlFor="address"
                className="text-xl font-semibold text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Answer here..."
                className="text-base text-gray-500 outline hover:outline-2 outline-gray-500 px-5 py-3 w-full rounded-lg"
                autoComplete="off"
                ref={address}
                required
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label
                htmlFor="contactnumber"
                className="text-xl font-semibold text-gray-700"
              >
                Contact Number
              </label>
              <input
                type="text"
                id="contactnumber"
                name="contactnumber"
                placeholder="+63"
                className="text-base text-gray-500 outline hover:outline-2 outline-gray-500 px-5 py-3 w-full rounded-lg"
                autoComplete="off"
                ref={contactNumber}
                required
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label
                htmlFor="email"
                className="text-xl font-semibold text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Answer here..."
                className="text-base text-gray-500 outline hover:outline-2 outline-gray-500 px-5 py-3 w-full rounded-lg"
                autoComplete="off"
                ref={email}
                required
              />
            </div>
          </div>
          <div className="flex flex-col space-y-7 items-start justify-start w-full mt-11">
            <div className="flex items-center space-x-3">
              <input
                id="agree1"
                type="checkbox"
                name="checkbox1"
                className="min-w-6 min-h-6 accent-[#4363F8] cursor-pointer rounded-md"
                ref={checkBox1}
              />
              <label
                htmlFor="agree1"
                className="text-base font-medium text-gray-700"
              >
                I certify that I am 18 years old.
              </label>
            </div>
            <div className="flex items-center space-x-3">
              <input
                id="agree2"
                type="checkbox"
                name="checkbox2"
                className="min-w-6 min-h-6 accent-[#4363F8] cursor-pointer rounded-md"
                ref={checkBox2}
              />
              <label
                htmlFor="agree2"
                className="text-base font-medium text-gray-700"
              >
                I agree to Cignal TV Inc. Terms of Use and have read and
                understood the Cignal TV Inc{`'`}s{" "}
                <span className="text-[#4363F8] cursor-pointer">
                  Privacy Policy
                </span>
              </label>
            </div>
          </div>
          <div className="mt-10">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LfdqEQrAAAAAFW6l_DtNswgLeP5Q9cwiX2-qh3i"
              onChange={(val) => setCapVal(val)}
            />
          </div>
          <button
            className={`mt-10 px-22 py-5 text-xl rounded-lg font-semibold text-white 
               bg-[#4363F8] hover:bg-[#002DFF] 
               shadow-[0_4px_5px_-3px_#0009]
               border-b-[3pt] border-[#083acd] uppercase ${
                 loading ? "cursor-not-allowed opacity-60" : "cursor-pointer"
               }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit My Entry"}
          </button>
        </form>
      </div>
    </>
  );
}
