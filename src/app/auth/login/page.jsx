'use client'
import { useState } from "react";
import { Phone, Mail, Send, Lock } from 'lucide-react';
// import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "@/firebaseConfig";
import Link from 'next/link';

const Login = () => {
  const [method, setMethod] = useState("mobile");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmResult, setConfirmResult] = useState(null);

  const sendOtp = async () => {
    // if (!window.recaptchaVerifier) {
    //   window.recaptchaVerifier = new RecaptchaVerifier("recaptcha", { size: "invisible" }, auth);
    // }
    // const phoneNumber = `+91${mobile}`;
    try {
      //   const confirmation = await signInWithPhoneNumber(auth, phoneNumber, window.recaptchaVerifier);
      //   setConfirmResult(confirmation);
      alert("OTP sent!");
    } catch (error) {
      console.error(error);
    }
  };

  const verifyOtp = async () => {
    try {
      await confirmResult.confirm(otp);
      alert("Login successful!");
    } catch (error) {
      console.error(error);
    }
  };

  return (

    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="p-8 mt-20 w-1/3 mx-auto bg-gray-50 rounded-xl shadow-lg space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-gray-500 mt-2">Please sign in to continue</p>
        </div>

        <div className="relative">
          <select
            onChange={(e) => setMethod(e.target.value)}
            className="w-full p-3 border text-gray-400 border-gray-200 rounded-lg bg-gray-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 appearance-none cursor-pointer"
          >
            <option value="mobile">Login via Mobile</option>
            <option value="email">Login via Email</option>
          </select>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        {method === "mobile" ? (
          <div className="space-y-4">
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Enter Mobile Number"
                className="w-full pl-10 pr-4 py-3 border text-gray-600 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                onChange={(e) => setMobile(e.target.value)}
              />
            </div>

            <button
              onClick={sendOtp}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send OTP
            </button>

            <div id="recaptcha" className="flex justify-center"></div>

            {confirmResult && (
              <div className="space-y-4 animate-fadeIn">
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>

                <button
                  onClick={verifyOtp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Lock size={20} />
                  Verify OTP
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-full pl-10 pr-4 py-3 border text-gray-900 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <button
              onClick={sendOtp}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              Send OTP
            </button>

            <div id="recaptcha" className="flex justify-center"></div>

            {confirmResult && (
              <div className="space-y-4 animate-fadeIn">
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>

                <button
                  onClick={verifyOtp}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Lock size={20} />
                  Verify OTP
                </button>
              </div>
            )}
          </div>
        )}

        <div
          className="w-full text-gray-700"
        >
          <Link href="/auth/register" className="hover:underline"> <u>Dont't Have Account? </u></Link>
        </div>
      </div >
    </div >
  );
};

export default Login;
