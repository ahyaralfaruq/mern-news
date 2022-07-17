import React from "react";
import { BgRegister } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Register = () => {
   const navigate = useNavigate();

   return (
      <section className="login-register">
         <div className="left">
            <img src={BgRegister} alt="bg-register" className="bg-register" />
         </div>
         <div className="right">
            <div className="form-login-register">
               <p className="form-title">Register</p>
               <Input
                  label="Your fullname"
                  type="text"
                  autoComplete="false"
                  minLength="3"
                  required
               />
               <Gap height={20} />
               <Input
                  label="Your email"
                  type="email"
                  autoComplete="true"
                  required
               />
               <Gap height={20} />
               <Input
                  label="Your password"
                  type="password"
                  autoComplete="false"
                  minLength="8"
                  required
               />
               <Gap height={20} />
               <Input
                  label="Re-type your password"
                  type="password"
                  autoComplete="false"
                  minLength="8"
                  required
               />
               <Gap height={50} />
               <Button title="register" onClick={() => navigate("/login")} />
               <Gap height={100} />
               <Link title="Back to Login" onClick={() => navigate("/login")} />
            </div>
         </div>
      </section>
   );
};

export default Register;
