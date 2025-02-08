'use client'
import { useState } from "react";
// import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "@/firebaseConfig";
import { User, Mail, Phone, Send, Lock, UserPlus } from 'lucide-react';

const Register = () => {
  const [form, setForm] = useState({ name: "", mobile: "", email: "" });
  const [otp, setOtp] = useState("");
  const [confirmResult, setConfirmResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const sendOtp = async () => {
    setLoading(true);
    try {
      alert("OTP sent!");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    setLoading(true);
    try {
      await confirmResult.confirm(otp);
      alert("Phone verified!");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full">
              <UserPlus className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Create Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Join us to access our services
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white py-8 px-6 shadow rounded-lg">
          <div className="space-y-4">
            {/* Name Input */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="pl-10 w-full py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                onChange={handleInput}
              />
            </div>

            {/* Email Input */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="pl-10 w-full py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                onChange={handleInput}
              />
            </div>

            {/* Mobile Input */}
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                name="mobile"
                placeholder="Mobile Number"
                className="pl-10 w-full py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                onChange={handleInput}
              />
            </div>

            {/* Send OTP Button */}
            <button
              onClick={sendOtp}
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Send size={20} />
              {loading ? 'Sending...' : 'Send OTP'}
            </button>

            {/* Recaptcha Container */}
            <div id="recaptcha" className="flex justify-center"></div>

            {/* OTP Verification Section */}
            {confirmResult && (
              <div className="space-y-4 animate-fadeIn">
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Enter OTP"
                    className="pl-10 w-full py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                    onChange={(e) => setOtp(e.target.value)}
                  />
                </div>

                <button
                  onClick={verifyOtp}
                  disabled={loading}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Lock size={20} />
                  {loading ? 'Verifying...' : 'Verify OTP'}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>By registering, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Register;