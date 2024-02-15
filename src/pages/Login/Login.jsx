import React, { useEffect } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';
const Login = () => {

    useEffect(() =>{
        loadCaptchaEnginge(5);
    }, [])



    const hanleLogin = event =>{
        event.preventDefault();
        const form= event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
    }
    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center md:w-1/2 lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={hanleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control">
          <label className="label">
          <LoadCanvasTemplate />
          </label>
          <input type="text" name='captcha' placeholder="type the captcha above" className="input input-bordered" required />
            <button className='btn btn-outline btn-xs'>Validate</button>
        </div>
        <div className="form-control mt-6">
          <input className='btn btn-primary' type='submit' value='Login' />
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;