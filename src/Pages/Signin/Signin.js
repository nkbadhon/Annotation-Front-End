import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';




const Signin = () => {

    const { register, formState: { errors }, handleSubmit } = useForm()
    const handleSignin = data => {
        console.log(data);
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-4xl text-center mb-4'> SignIn</h2>
                <div className="divider"></div>
                <form onSubmit={handleSubmit(handleSignin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span>
                        </label>
                        <input {...register("email", { required: "Email address is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("pass", { required: "Password is required" })} className="input input-bordered w-full max-w-xs" />
                        {errors.pass && <p className='text-red-600' role="alert">{errors.pass?.message}</p>}
                    </div>
                    <input className='btn w-full' value="Sign In" type="submit" />
                </form>

                <p>New here? <Link className='text-cyan-600' to="/signup">Get your annoator.</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'> Continue with Google.</button>
            </div>
        </div>
    );
};

export default Signin;