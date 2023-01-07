import React, { useState } from 'react';
import { useForm } from 'react-hook-form';




const Signin = () => {

    const { register, handleSubmit } = useForm()
    const [data, setData] = useState("")


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div>
                <h2 className='text-4xl'> SignIn</h2>

                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span>
                        </label>
                        <input {...register("email")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span>
                        </label>
                        <input {...register("pass")} className="input input-bordered w-full max-w-xs" />
                    </div>


                    <p>{data}</p>
                    <input type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Signin;