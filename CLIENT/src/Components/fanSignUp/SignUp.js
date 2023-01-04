import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBTabsItem,
} from "mdb-react-ui-kit";
import { useState } from "react";
import "./fanSignUp.css";
import InputBox from "./input";
import axios from "axios";
import { FaSearch, IconName } from "react-icons/fa";
function FanSignUp() {
  const [formValues, SetFormValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
  });
  const [justifyActive, setJustifyActive] = useState("tab1");
  const [errorMessage, setErrorMessage] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    SetFormValues({ ...formValues, [name]: value });
  };

  console.log(formValues, "data");

  const handleSubmit = (e) => {
    console.log("working ");
    e.preventDefault();
    try {
      if (!formValues.username) {
        setErrorMessage("username is required");
      } else if (!formValues.firstname) {
        setErrorMessage("firstame is required");
      } else if (!formValues.lastname) {
        setErrorMessage("lastname is required");
      } else if (!formValues.email) {
        setErrorMessage("Email is required");
      } else if (
        !formValues.email.match(
          /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
        )
      ) {
        setErrorMessage("Enter a valid email");
      } else if (!formValues.password) {
        setErrorMessage("Password is required");
      } else if (formValues.password.length < 4) {
        setErrorMessage("Password must be atleast 6 characters");
      } else if (formValues.password.length > 20) {
        setErrorMessage("Password must be less than 20 characters");
      } else {
        console.log("hello");

        axios
          .post("http://localhost:5000/fanSignup", { ...formValues })
          .then((response) => {
            console.log(response);
          });
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleJustifyClick = (value) => {
    SetFormValues(null)
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  const handleSubmitalent = (e) => {
    console.log("working ");
    e.preventDefault();
    try {
      if (!formValues.username) {
        setErrorMessage("username is required");
      } else if (!formValues.firstname) {
        setErrorMessage("firstame is required");
      } else if (!formValues.lastname) {
        setErrorMessage("lastname is required");
      } else if (!formValues.email) {
        setErrorMessage("Email is required");
      } else if (
        !formValues.email.match(
          /^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/
        )
      ) {
        setErrorMessage("Enter a valid email");
      } else if (!formValues.password) {
        setErrorMessage("Password is required");
      } else if (formValues.password.length < 4) {
        setErrorMessage("Password must be atleast 6 characters");
      } else if (formValues.password.length > 20) {
        setErrorMessage("Password must be less than 20 characters");
      } else {
        console.log("hello");

        axios
          .post("http://localhost:5000/talentSignup", { ...formValues })
          .then((response) => {
            console.log(response);
          });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <MDBContainer fluid>
        {/* <AiOutlineSearch/> */}
        <div className="box">
          <div className="tes">
            <h6 className="p-2">Signup</h6>
            <h6 className="p-2">Login</h6>
          </div>
          <h2 className="title">Fanconvo</h2>
          <h6 className="s-title ">
            A marketplace for conversations,mentorships, and performances.{" "}
          </h6>
          <div className="s-box">
            <h4 className="search p-2">Search New Talent</h4>
            <FaSearch style={{ color: "green" }} className="hy" />
            <input type="text" id="ip2" />
          </div>
        </div>

        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-dark text-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "400px" }}
            >
              <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
                <div>
                  {justifyActive == "tab1" ? (
                    <MDBBtn
                      rounded
                      color="success mb-3"
                      active={justifyActive === "tab1"}
                      onClick={() => handleJustifyClick("tab1")}
                    >
                      fAN SINGUP{" "}
                    </MDBBtn>
                  ) : (
                    <MDBBtn
                      rounded
                      color="dark mb-3"
                      active={justifyActive === "tab1"}
                      onClick={() => handleJustifyClick("tab1")}
                    >
                      fAN SINGUP{" "}
                    </MDBBtn>
                  )}

                  {justifyActive == "tab2" ? (
                    <MDBBtn
                      rounded
                      color="success mb-3"
                      onClick={() => handleJustifyClick("tab2")}
                      active={justifyActive === "tab2"}
                    >
                      TALENT SIGNUP
                    </MDBBtn>
                  ) : (
                    <MDBBtn
                      rounded
                      color="dark mb-3"
                      onClick={() => handleJustifyClick("tab2")}
                      active={justifyActive === "tab2"}
                    >
                      TALENT SIGNUP
                    </MDBBtn>
                  )}
                </div>

                {justifyActive === "tab1" ? (
                  <>
                    <h6 className="fs-6 mb-4">Create Your Fan Account</h6>
                    <InputBox
                      title={"First Name."}
                      name="firstname"
                      value={formValues?.firstname}
                      action={handleChange}
                    />
                    <InputBox
                      title={"Last Name"}
                      name="lastname"
                      value={formValues?.lastname}
                      action={handleChange}
                    />
                    <InputBox
                      title={"Username"}
                      name="username"
                      value={formValues?.username}
                      action={handleChange}
                    />
                    <InputBox
                      title={"Email"}
                      name="email"
                      value={formValues?.email}
                      action={handleChange}
                    />
                    <InputBox
                      title={"Password"}
                      name="password"
                      value={formValues?.password}
                      action={handleChange}
                    />
                  </>
                ) : (
                  <>
                    <h6 className="fs-6 mb-4">Create Your Talent Account</h6>
                    <InputBox
                      title={"First Name."}
                      name="firstname"
                      value={formValues?.firstname}
                      action={handleChange}
                    />
                    <InputBox
                      title={"Last Name"}
                      name="lastname"
                      value={formValues?.lastname}
                      action={handleChange}
                    />
                    <InputBox
                      title={"Username"}
                      name="username"
                      value={formValues?.username}
                      action={handleChange}
                    />
                    <InputBox
                      title={"Email"}
                      name="email"
                      value={formValues?.email}
                      action={handleChange}
                    />
                    <InputBox
                      title={"Password"}
                      name="password"
                      value={formValues?.password}
                      action={handleChange}
                    />
                  </>
                )}

                <div className="d-flex check">
                  <MDBCheckbox name="inlineCheck" id="inlineCheckbox1" />
                  <h6 className="agree">
                    I agree to the{" "}
                    <span className="terms">Terms & Conditions. </span>{" "}
                  </h6>
                </div>
                {}

                {justifyActive === "tab1" ? (
                  <MDBBtn
                    rounded
                    className="mx-2 px-5"
                    color="success"
                    size="lg"
                    onClick={handleSubmit}
                  >
                    Login
                  </MDBBtn>
                ) : (
                  <MDBBtn
                    rounded
                    className="mx-2 px-5"
                    color="success"
                    size="lg"
                    onClick={handleSubmitalent}
                  >
                    Login
                  </MDBBtn>
                )}

                {errorMessage && (
                  <div
                    className="p-2 m-4"
                    style={{ backgroundColor: "red" }}
                    role="alert"
                  >
                    {" "}
                    {errorMessage}
                  </div>
                )}

                <div className="m-2">
                  <p className="mb-0 fs-6">
                    Already have an account?{" "}
                    <a href="#!" class="text-white-50 fw-b fs-6">
                      Log in
                    </a>
                  </p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <div className="des">
          <h6>Terms of Use</h6>
          <h6 className="des">© 2021 Foncovo</h6>
          <h6>Contact Us </h6>
        </div>

        <h2 className="title2">Fanconvo</h2>
      </MDBContainer>
    </>
  );
}

export default FanSignUp;
