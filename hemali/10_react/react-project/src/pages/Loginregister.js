import { object } from "prop-types";
import React, {useRef, useState } from "react";
import axios from "axios";
// success thaye gaya pachi massge print karvi tena mate tostcontainer lidthu se
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useNavigate } from "react-router-dom";

const Loginregister = () => {
  const navigate = useNavigate()
 
    // register 
  const [regisdata,setregidata]=useState({name:'',email:'',password:'',isadmin:false})
// aa useState error set karsu karye to k submit karvi tayre sak karsu 
  const [regError,setregError]=useState({})

    // login 
    const[loginData,setloginData]=useState({email:'',password:''})
     const [loginError,setloginError]=useState({})
    const loginchange=(e)=>{
      const{name,value}=e.target
      setloginData({...loginData,[name]:value})
    }

    const loginsubmit=async(e)=>{
       e.preventDefault()
       var re = /\S+@\S+\.\S+/;
       let validatelogin={}
 console.log(loginData);
       if(loginData.password ==""){
           validatelogin.password='pelse enter valid password '
       }
       if(loginData.email == '' || re.test(loginData.email)== false){
        validatelogin.email='please enter valid email'
       }

       setloginError(validatelogin)

       if(Object.keys(validatelogin).length==0){
          // console.log('login');
          // axios.get(`http://localhost:8000/user?email=${loginData.email}`).then((result) => {
      //   console.log(result.data[0]);
      // })
        try{
          
        let logindata=await axios.get(`http://localhost:8000/user?email=${loginData.email}`)
        console.log(logindata.data[0]);

         if(logindata.data[0].password == loginData.password){
            //  local stroge ma store kari ne logout per gaya 
             localStorage.setItem('user',logindata.data[0].name);
             localStorage.setItem('admin',logindata.data[0].isadmin);

             if(logindata.data[0].isadmin){
              navigate('/admin')
             }else{
              navigate('/')
             }
            }else{
              setloginError({password:'please enter valid password'})
              }
            }catch(error){
              setloginError({email:'please enter valid emali'})
            }

       }
    }

    // register 
  const regichange =(e)=>{
    //  check bocx ni value leva mate 
    if(e.target.name=='isadmin'){
      setregidata({...regisdata,[e.target.name]:e.target.checked})
    }else{
      // baija badha input field leva  mate 
      const{name,value}=e.target
      setregidata({...regisdata,[name]:value})
    }
 
  }
  //  resiter uper cilck kari ne submit karsu tayre submit thaye tena mate
  const registersubmit = (e) => {
    e.preventDefault()
    console.log(regisdata);
    // validation
    var re=/^\S+@\S+\.\S+$/
    let validateregister={}
    if(regisdata.name ==''){
      validateregister.name='please enter name'
    }
    if(regisdata.email =='' ||re.test(regisdata.email)==false){
      validateregister.email='please enter valid Email'
    }
    if(regisdata.password ==''){
      validateregister.passwrod='please enter password'
    }
    setregError(validateregister)
    // alert('hiii')
    if(Object.keys(validateregister).length==0)
    axios.post('http://localhost:8000/user',regisdata).then((res)=>{

    toast.success('🦄 Register successful!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
    // Navigate('/login')
    window.location.href='/login'
    })
  };

 
  
  return (
    <>
    <ToastContainer/>
{ <main style={{ paddingTop: 90 }}>
        <div className="mb-4 pb-4" />
        <section className="login-register container">
          <h2 className="d-none">Login &amp; Register</h2>
          <ul className="nav nav-tabs mb-5" id="login_register" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link nav-link_underscore active"
                id="login-tab"
                data-bs-toggle="tab"
                href="#tab-item-login"
                role="tab"
                aria-controls="tab-item-login"
                aria-selected="false"
              >
                Login
              </a>
            </li>
            <li className="nav-item" role="presentation">
              <a
                className="nav-link nav-link_underscore "
                id="register-tab"
                data-bs-toggle="tab"
                href="#tab-item-register"
                role="tab"
                aria-controls="tab-item-register"
                aria-selected="true"
              >
                Register
              </a>
            </li>
          </ul>
          <div className="tab-content pt-2" id="login_register_tab_content">
            <div
              className="tab-pane active show"
              id="tab-item-login"
              role="tabpanel"
              aria-labelledby="login-tab"
            >
              <div className="login-form">
                <form
                 onSubmit={loginsubmit}
                  name="login-form"
                  className="needs-validation"
                  noValidate=""
                >
                  <div className="form-floating mb-3">
                    <input
                      name="email"
                      type="email"
                      onChange={loginchange}
                      className="form-control form-control_gray"
                      id="customerNameEmailInput1"
                      placeholder="Email address *"
                      required=""
                    />
                    <label htmlFor="customerNameEmailInput1">
                      Email address *
                    </label>
                    {loginError.email &&(<span style={{color:'red'}}>{loginError.email}</span>)}
                  </div>
                  <div className="pb-3" />
                  <div className="form-floating mb-3">
                    <input
                      name="password"
                      type="password"
                      onChange={loginchange}
                      className="form-control form-control_gray"
                      id="customerPasswodInput"
                      placeholder="Password *"
                      required=""
                    />
                    <label htmlFor="customerPasswodInput">Password *</label>
                    {loginError.password &&(<span style={{color:'red'}}>{loginError.password}</span>)}

                  </div>
                  <div className="d-flex align-items-center mb-3 pb-2">
                    <div className="form-check mb-0">
                      <input
                        name="remember"
                        className="form-check-input form-check-input_fill"
                        type="checkbox"
                        defaultValue=""
                        id="flexCheckDefault1"
                      />
                      <label
                        className="form-check-label text-secondary"
                        htmlFor="flexCheckDefault1"
                      >
                        Remember me
                      </label>
                    </div>
                    <a href="reset_password.html" className="btn-text ms-auto">
                      Lost password?
                    </a>
                  </div>
                  <input
                    className="btn btn-primary w-100 text-uppercase"
                    type="submit" value={'Login'}
                  />
                  
                  <div className="customer-option mt-4 text-center">
                    <span className="text-secondary">No account yet?</span>
                    <a
                      href="#register-tab"
                      className="btn-text js-show-register"
                    >
                      Create Account
                    </a>
                  </div>
                </form>
              </div>
            </div>

            {/* register */}
            <div
              className="tab-pane fade  show"
              id="tab-item-register"
              role="tabpanel"
              aria-labelledby="register-tab"
            >
              <div className="register-form">
                <form
                  onSubmit={registersubmit}
                  name="register-form"
                  className="needs-validation"
                  noValidate=""
                >
                  <div className="form-floating mb-3">
                    <input
                      name="name"
                      type="text"
                      onChange={regichange}
                      className="form-control form-control_gray"
                      id="customerNameRegisterInput"
                      placeholder="Username"
                      required=""
                    />
                    <label htmlFor="customerNameRegisterInput">Username</label>
                    {regError.name && (<span style={{ color: 'red' }}>{regError.name}</span>)}

                  </div>
                  <div className="pb-3" />
                  <div className="form-floating mb-3">
                    <input
                      name="email"
                      type="text"
                      onChange={regichange}
                      className="form-control form-control_gray"
                      id="customerEmailRegisterInput"
                      placeholder="Email address *"
                      required=""
                    />
                    <label htmlFor="customerEmailRegisterInput">
                      Email address *
                    </label>
                    {regError.email && (<span style={{ color: 'red' }}>{regError.email}</span>)}
                  </div>
                  <div className="pb-3" />
                  <div className="form-floating mb-3">
                    <input
                      name="password"
                      type="password"
                      onChange={regichange}
                      className="form-control form-control_gray"
                      id="customerPasswodRegisterInput"
                      placeholder="Password *"
                      required=""
                    />
                    <label htmlFor="customerPasswodRegisterInput">
                      Password *
                    </label>
                    {regError.passwrod && (<span style={{ color: 'red' }}>{regError.passwrod}</span>)}
                  </div>
                  <div className="form-floating mb-3">
                    <input type="checkbox" name="isadmin" id="" onChange={regichange}></input>
                    <label htmlFor="customerPasswodRegisterInput">
                      is Admin *
                    </label>
                  </div>
                  <div className="d-flex align-items-center mb-3 pb-2">
                    <p className="m-0">
                      Your personal data will be used to support your experience
                      throughout this website, to manage access to your account,
                      and for other purposes described in our privacy policy.
                    </p>
                  </div>
                  <input
                    className="btn btn-primary w-100 text-uppercase"
                    type="submit" value={'Register'}
                 / >
                 
                </form>
              </div>
            </div>
          </div>
        </section>
      </main> }

      <div class="mb-5 pb-xl-5"></div>


    </>
  );
};

export default Loginregister;
