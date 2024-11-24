import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OTP = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const tempAccessToken = sessionStorage.getItem('temp_access_token'); // Retrieve temp_access_token from sessionStorage
    const userId = sessionStorage.getItem('user_id'); // Retrieve user_id from sessionStorage

    if (!tempAccessToken || !userId) {
      alert('Session expired. Please log in again.');
      navigate('/login'); // Redirect to login page if data is missing
      return;
    }

    try {
      const response = await fetch('http://dashboard.eshtyle.com:8080/api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ otp, temp_access_token: tempAccessToken, user_id: userId }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('OTP verification successful:', data);

        // Save the final access token or authenticated session data
        sessionStorage.setItem('user_id', data.id);

        // Redirect to the home page or dashboard
        navigate('/');
      } else {
        const errorData = await response.json();
        console.error('OTP verification failed:', errorData.error);
        alert(errorData.error || 'OTP verification failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during OTP verification:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Enter OTP
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Please check your email for the OTP.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
                OTP
              </label>
              <input
                id="otp"
                type="number"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                required
                className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter OTP"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Verify OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default OTP;
