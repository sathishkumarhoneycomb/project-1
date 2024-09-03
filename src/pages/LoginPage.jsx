import { Link } from "react-router-dom";
import Footer from "../components/general-components/Footer";

import { useState, useEffect  } from "react";




function LoginPage() {


//     const [validEmail, setValidEmail] = useState(false);
//     const [pwdValid, setPwdValid] = useState(false);

//     const [emailFocus, setEmailFocus] = useState(false);
//     const [pwdFocus, setPwdFocus] = useState(false);


//     const [errMsg, setErrMsg] = useState('');

//     const emailRef = useRef();

//     const [formData, setFormData] = useState({
//         email: '',
//         password: ''
//       });
    
      
    
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//       };


//   useEffect( () => {
//     const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
//     const result =  regex.test(formData.email);
//     setValidEmail(result);
//   },[formData.email])

//   useEffect( () => {

//       const result = formData.password.length > 3
//       setValidPwd(result);

//   }, [formData.password])


//   useEffect( () => {
//       setErrMsg('');
//   }, [formData.email, formData.password])


    




    return (
        <>


            <section className="loginPageMain mb-5">
                <div className="container"> 


                <div className="row justify-content-center"> 
                <div className="col-lg-5 col-md-8"> 
       
                <h1 className="green_color text-center mb-2 pilot-text" > Pilot Login </h1>
                {/* <hr className=" hr "/>  */}
            

                <div className="card shadow ">
                    <div className="card-header rounded-0 py-3 blue-gradient text-center text-white">
                        <h3> Sign in </h3>
                    </div>

                    <div className="card-body py-5 px-5">
                    <form>
                        <div class="form-floating mb-3">
                        <input type="email" class="form-control " id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                        <div class="invalid-feedback">
                        Please choose a username.
                        </div>
                        </div>
                    <div class="form-floating mb-4">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                    </div>                     
                    <div class="mb-5 form-check d-flex  justify-content-between">
                        
                        <label class="form-check-label" for="exampleCheck1"> <input type="checkbox" class="form-check-input scale-5" id="exampleCheck1" />Remember me </label>
                        <Link to="forgot-password" className="text-decoration-none text-dark hover-red ">Forgot Password ?</Link>
                    </div>

                     
                        <button type="submit " className="btn btn-lg blue-gradient text-white fw-semibold w-100 rounded-5 mb-4"> Sign in </button>
                </form>



                <p className="text-center fw-medium fs-5_5 "> Not a member ? <Link to="member-signup" className="text-decoration-none">Become a Member </Link></p>


                    </div>






                </div>
                
 
                </div> 
                </div>

                </div>

            </section>
            <Footer /> 
     
        </>
    )
}


export default LoginPage;