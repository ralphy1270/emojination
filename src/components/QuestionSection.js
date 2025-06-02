"use client";
import React, { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "@/src/components/Modal";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";

export default function QuestionSection({ image }) {
  const [loading, setLoading] = useState(false);

  // Error
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [birthDateError, setBirthDateError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [answerError, setAnswerError] = useState(false);
  const [mobileNumberError, setMobileNumberError] = useState(false);
  const [ageChecked, setAgeChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [humanError, setHumanError] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
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

    setFirstNameError(false);
    setLastNameError(false);
    setBirthDateError(false);
    setAddressError(false);
    setEmailError(false);
    setMobileNumberError(false);
    setAnswerError(false);
    setAgeChecked(false);
    setTermsChecked(false);
    setHumanError(false);
  };

  const setModal = (open) => {
    setModalOpen(open);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Clear all previous errors
    setFirstNameError(false);
    setLastNameError(false);
    setBirthDateError(false);
    setAddressError(false);
    setEmailError(false);
    setMobileNumberError(false);
    setAnswerError(false);
    setAgeChecked(false);
    setTermsChecked(false);
    setHumanError(false);

    const firstNameVal = e.target.firstname.value.trim();
    const lastNameVal = e.target.lastname.value.trim();
    const birthDateVal = e.target.birthdate.value.trim();
    const addressVal = e.target.address.value.trim();
    const contactNumberVal = e.target.contactnumber.value.trim();
    const emailVal = e.target.email.value.trim();
    const answerVal = e.target.answer.value.trim();
    const agree1 = e.target.checkbox1.checked;
    const agree2 = e.target.checkbox2.checked;

    let hasError = false;

    // Field validation
    if (!firstNameVal) {
      setFirstNameError("First name is required.");
      hasError = true;
    }
    if (!lastNameVal) {
      setLastNameError("Last name is required.");
      hasError = true;
    }
    if (!birthDateVal) {
      setBirthDateError("Birth date is required.");
      hasError = true;
    } else {
      const birthDateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/;
      if (!birthDateRegex.test(birthDateVal)) {
        setBirthDateError("Please enter birth date in MM/DD/YYYY format.");
        hasError = true;
      }
    }
    if (!addressVal) {
      setAddressError("Address is required.");
      hasError = true;
    }
    if (!contactNumberVal) {
      setMobileNumberError("Mobile number is required.");
      hasError = true;
    }
    if (!emailVal) {
      setEmailError("Email is required.");
      hasError = true;
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailVal)) {
        setEmailError("Please enter a valid email address.");
        hasError = true;
      }
    }
    if (!answerVal) {
      setAnswerError("Your answer is required.");
      hasError = true;
    }
    if (!agree1) {
      setAgeChecked("You must confirm that you are at least 18 years old.");
      hasError = true;
    }
    if (!agree2) {
      setTermsChecked("You must agree to the terms before submitting.");
      hasError = true;
    }
    if (!capVal) {
      setHumanError("Please verify you are not a robot.");
      hasError = true;
    }

    if (hasError) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstNameVal,
          lastName: lastNameVal,
          birthDate: birthDateVal,
          contactNumber: contactNumberVal,
          address: addressVal,
          email: emailVal,
          answer: answerVal,
        }),
      });

      if (!response.ok) throw new Error("Failed to submit");

      recaptchaRef.current.reset();
      setCapVal(null);
      resetForm();
      setModal(true);
      e.target.reset(); // optional since resetForm clears refs
    } catch (error) {
      console.error("Form submission failed:", error);
      alert("Something went wrong while submitting the form.");
    }

    setLoading(false);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-center space-x-10 pointer-events-none select-none xl:mt-0 xl:mx-0 mx-5">
        <Image
          className="w-lg xl:w-[765px] border border-black pointer-events-none select-none rounded-3xl"
          src={image}
          alt=""
          priority
        />
      </div>
      <div className="m-0 px-5 xl:px-72 py-8 xl:py-6">
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
          />
          {answerError && (
            <div className="text-red-500 text-[14px] font-poppins font-medium w-full mt-2">
              {answerError}
            </div>
          )}
          <div className="flex items-center justify-center">
            <span className="font-bangers text-[40px] xl:text-[52px] uppercase mt-7 xl:mt-8">
              Complete the form to enter
            </span>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 mt-4 xl:mt-4">
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
              />
              {firstNameError && (
                <div className="text-red-500 text-[14px] font-poppins font-medium">
                  {firstNameError}
                </div>
              )}
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
              />
              {lastNameError && (
                <div className="text-red-500 text-[14px] font-poppins font-medium">
                  {lastNameError}
                </div>
              )}
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
              />
              {birthDateError && (
                <div className="text-red-500 text-[14px] font-poppins font-medium">
                  {birthDateError}
                </div>
              )}
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
              />
              {addressError && (
                <div className="text-red-500 text-[14px] font-poppins font-medium">
                  {addressError}
                </div>
              )}
            </div>
            <div className="flex flex-col space-y-3">
              <label
                htmlFor="contactnumber"
                className="text-xl font-semibold text-gray-700"
              >
                Mobile Number
              </label>
              <input
                type="text"
                id="contactnumber"
                name="contactnumber"
                placeholder="+63"
                className="text-base text-gray-500 outline hover:outline-2 outline-gray-500 px-5 py-3 w-full rounded-lg"
                autoComplete="off"
                ref={contactNumber}
              />
              {mobileNumberError && (
                <div className="text-red-500 text-[14px] font-poppins font-medium">
                  {mobileNumberError}
                </div>
              )}
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
              />
              {emailError && (
                <div className="text-red-500 text-[14px] font-poppins font-medium">
                  {emailError}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col space-y-5 xl:space-y-3 items-start justify-start w-full mt-11">
            <div className="flex flex-col items-start space-y-1">
              <div className="flex items-start space-x-3">
                <input
                  id="agree1"
                  type="checkbox"
                  name="checkbox1"
                  className="min-w-6 min-h-6 accent-[#4363F8] cursor-pointer rounded-md"
                  ref={checkBox1}
                />
                <label
                  htmlFor="agree1"
                  className="text-base font-semibold text-gray-700"
                >
                  I certify that I am 18 years old.
                </label>
              </div>
              {ageChecked && (
                <div className="text-red-500 text-[14px] font-poppins font-medium">
                  {ageChecked}
                </div>
              )}
            </div>
            <div className="flex flex-col items-start space-y-1">
              <div className="flex items-start space-x-3">
                <input
                  id="agree2"
                  type="checkbox"
                  name="checkbox2"
                  className="min-w-6 min-h-6 accent-[#4363F8] cursor-pointer rounded-md"
                  ref={checkBox2}
                />
                <label
                  htmlFor="agree2"
                  className="text-base font-semibold text-gray-700"
                >
                  I agree to Cignal TV Inc. Terms of Use and have read and
                  understood the Cignal TV Inc{`'`}s{" "}
                  <span className="text-[#5775FF] hover:text-[#4363F8] active:bg-[#2748E1] cursor-pointer">
                    Privacy Policy
                  </span>
                </label>
              </div>
              {termsChecked && (
                <div className="text-red-500 text-[14px] font-poppins font-medium">
                  {termsChecked}
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LepdkIrAAAAANtZ8Qf5iH5G661TiDXGg58OJnNB"
              onChange={(val) => setCapVal(val)}
            />
            {humanError && (
              <div className="text-red-500 text-[14px] font-poppins font-medium mt-2">
                {humanError}
              </div>
            )}
          </div>
          <button
            className={`mt-5 xl:mt-10 w-sm py-5 text-xl rounded-lg font-semibold text-white
               shadow-[0_6px_12px_-3px_#0009]
               border-b-[3pt] border-[#083acd]/40 uppercase active:outline-2 active:outline-black active:outline-offset-2 ${
                 loading
                   ? "cursor-not-allowed bg-[#747474] hover:bg-[#747474]"
                   : "cursor-pointer bg-[#4363F8]/80 hover:bg-[#002DFF]/80"
               }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit My Entry"}
          </button>
        </form>
      </div>
      <AnimatePresence>
        {modalOpen && <Modal setModal={setModal} />}
      </AnimatePresence>
    </>
  );
}
