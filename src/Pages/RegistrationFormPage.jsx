import React from 'react';

const RegistrationFormPage = () => {


    return (

        <>
            <form className='flex flex-col gap-4'>


                <img className='h-24 w-24 self-center cursor-pointer rounded-full object-cover' src='' alt="profile-image"
                />


                <input id='userName' className='bg-slate-100 rounded-lg p-3 self-center w-72 sm:w-96' type="text" placeholder='Username'

                />

                <input id='email' className='bg-slate-100 rounded-lg p-3 self-center  w-72 sm:w-96' type="email" placeholder='Email'

                />

                <input id='password' className='bg-slate-100 rounded-lg p-3 self-center w-72 sm:w-96' type="password" placeholder='Password'

                />

                <button className='self-center w-72 sm:w-96  bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-85 '>
                    Update

                </button>
            </form>


        </>
    );
};

export default RegistrationFormPage;