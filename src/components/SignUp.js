import React, { useState } from 'react';
import './SignUpStyles.css'; // Make sure to include your SignUpStyles.css
import { Link } from 'react-router-dom';
import img1 from '../assets/31.jpg';

function SignUp() {
  const predefinedPhoneNumber = '8571809347';
  const predefinedPassword = '8571809347S@g';

  const [formData, setFormData] = useState({
    fullName: '',
    emailOrPhone: '',
    password: '',
    confirmPassword: '',
  });

  const validateForm = () => {
    const { password, confirmPassword, emailOrPhone } = formData;

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match. Please re-enter.");
      return false;
    }

    if (emailOrPhone !== predefinedPhoneNumber || password !== predefinedPassword) {
      alert("Invalid phone number or password. Please check and try again.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      // Handle form submission or API call here
      console.log('Form submitted successfully with data:', formData);

      // Clear the form data after submission
      setFormData({
        fullName: '',
        emailOrPhone: '',
        password: '',
        confirmPassword: '',
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='back'>
      <img src={img1} alt="Background" /> {/* Fix the image source */}
      <div className="center">
        <h1>To Create A New Account</h1>
        <form onSubmit={handleSubmit}>
          <div className="txt">
            <label>FULL NAME</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              placeholder="Your Full Name"
            />
          </div>
          <div className="txt">
            <label>Email or Phone No*</label>
            <input
              type="text"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              required
              placeholder="Email Id or Phone No."
            />
          </div>
          <div className="txt">
            <label>Create Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Create Password"
              id="txtPassword"
            />
          </div>
          <div className="txt">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm Password"
              id="txtConfirmPassword"
            />
          </div>
          <input type="submit" className="sign price-btn" value="Submit" /> {/* Add the 'price-btn' class */}
        </form>
        <Link className="back-h" to="/">Back to Home</Link>
      </div>
    </div>
  );
}

export default SignUp;
