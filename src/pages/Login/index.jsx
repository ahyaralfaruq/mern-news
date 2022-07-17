import React from "react";
import { BgLogin } from "../../assets/";
import { Input, Gap, Link, Button } from "../../components";
import { useNavigate } from "react-router-dom";

const Login = () => {
   const navigate = useNavigate();

   return (
      <section className="login-register">
         <div className="left">
            <img src={BgLogin} alt="bg-login" className="bg-login" />
         </div>
         <div className="right">
            <div className="form-login-register">
               <p className="form-title">Login</p>
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
               <Gap height={50} />
               <Button title="Login" onClick={() => navigate("/")} />
               <Gap height={100} />
               <Link
                  title="Belum punya akun ? silahkan daftar"
                  onClick={() => navigate("/register")}
               />
            </div>
         </div>
      </section>
   );
};

export default Login;
