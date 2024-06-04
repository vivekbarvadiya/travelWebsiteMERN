import React, { useEffect, useState } from "react";
import "./Profile.css";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const Profile = () => {
  const [name, setName] = useState("");
  const [DOB, setDOB] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const data = {
    name: name,
    DOB: DOB,
    phone: phone,
    age: age,
  };

  const authData = {
    email: email,
    password: password,
    confirmPassword: confirmPassword,
  };

  console.log(data);
  console.log(authData);

  const handleSaveInfo = (e) => {
    e.preventDefault();
    toast("Personal Information saved/updated!");
  };

  const handleClickAuth = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      toast.info("Please fill all the fields");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Password and Confirm Password are not same");
      return;
    }
    toast("Security information saved!");
  };

  return (
    <div className="profilePage" id="profilePage" style={{marginTop:"70px"}}>
      <div className="left" id="left">
        <div className="profileImage" id="profileImage">
          <img
            src="https://th.bing.com/th/id/OIP.a1IvKI8gnVSd3VACnpSVQQHaHf?w=1000&h=1011&rs=1&pid=ImgDetMain"
            alt="Profile"
            height="150px"
            width="150px"
            id="profileImg"
          />
          <p id="birthDate">
            Birth Date : <span>18/09/2004</span>
          </p>
          <p>Male</p>
        </div>
      </div>

      <div className="form" id="form">
        <div className="content" id="content">
          <div className="personalInfo" id="personalInfo">
            <div className="sectionTitle" id="personalInfoTitle">
              Personal Information
            </div>
            <br />
            <br />
            <div className="label" id="nameLabel">
              Name:
            </div>
            <input
              type="text"
              className="inputField"
              id="nameInput"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="label" id="phoneLabel">
              Phone:
            </div>
            <input
              type="number"
              placeholder="Enter Phone Number"
              className="inputField"
              id="phoneInput"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className="label" id="ageLabel">
              Age:
            </div>
            <input
              type="number"
              id="ageInput"
              className="inputField"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <div
              className="saveButton"
              id="savePersonalButton"
              onClick={handleSaveInfo}
            >
              Save Personal Info
            </div>

            <br />
            <br />

            <Link to="/" className="linkReturn">
              <p className="return">home page →</p>
            </Link>
          </div>
          <div className="divider" id="divider" />
          <div className="securityInfo" id="securityInfo">
            <div className="sectionTitle" id="securityInfoTitle">
              Security
            </div>
            <br />
            <div className="label" id="emailLabel">
              Email Address:
            </div>
            <input
              type="email"
              className="inputField"
              id="emailInput"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="label" id="passwordLabel">
              Password:
            </div>
            <input
              type="password"
              className="inputField"
              id="passwordInput"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="label" id="confirmPasswordLabel">
              Confirm Password:
            </div>
            <input
              type="password"
              className="inputField"
              id="confirmPasswordInput"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div
              className="saveButton"
              id="saveSecurityButton"
              onClick={handleClickAuth}
            >
              Save Security Info
            </div>
          </div>
          <ToastContainer position="top-center" autoClose={3000} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
