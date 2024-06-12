import React, { useState } from 'react'

const FormValidation = () => {
    let [formData,setFormData] = useState({
        requiredfield:"",
        email:"",
        password:"",
        confirmpass:"",
        url:"",
        digits:"",
        number:"",
        alphanum:"",
        textarea:""
    });

    let {
        requiredfield,
        email,
        password,
        confirmpass,
        url,
        digits,
        number,
        alphanum,
        textarea
    } = formData;

    let handleChange = (e) => {
        let {name, value} = e.target;
        setFormData({...formData, [name]:value})
    }

    let [errors,setErrors] = useState({})

    let handleSubmit = (e) => {
        e.preventDefault();
    

        let ValidationErrors = {}

        // requiredfield
        if (requiredfield === "") {
            ValidationErrors.requiredfield = 'This value is Required'
        }

        // email
        if (email === "") {
            ValidationErrors.email = 'This value is Required'
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            ValidationErrors.email = 'This should be a valid email'
        }

        // password
        if (password === "") {
            ValidationErrors.password = 'This value is Required'
        }
        // confirmpass
        if (confirmpass === "") {
            ValidationErrors.confirmpass = 'This value is Required'
        }
        else if (confirmpass != password) {
            ValidationErrors.confirmpass = 'The password must be the same'
        }

        // url
        const regexURL = /^((?:https?:\/\/)?[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+)$/ 
        if (url === "") {
            ValidationErrors.url = 'This value is Required'
        }
        else if (!regexURL.test(url)) {
            ValidationErrors.url = 'This should be a valid url'
        }

        //digits
        const regexDigits=/^[0-9]+$/
        if (digits === "") {
            ValidationErrors.digits = 'This value is Required'
        }
        else if (!regexDigits.test(digits)) {
            ValidationErrors.digits = 'This should be a digit'
        }

        // number
        const regexNumber=/^-?\d+(?:\.\d+)?$/
        if (number === "") {
            ValidationErrors.number = 'This value is Required'
        }
        else if (!regexNumber.test(number)) {
            ValidationErrors.number = 'This should be a number'
        }

        // alphanum
        const regexAlpha=/^[a-zA-Z0-9\s]+$/
        if (alphanum === "") {
            ValidationErrors.alphanum = 'This value is Required'
        }
        else if (regexAlpha.test(alphanum)) {
            ValidationErrors.alphanum = 'This should be a alphanum'
        }

        // textarea
        if (textarea === "") {
            ValidationErrors.textarea = 'This value is Required'
        }

        setErrors(ValidationErrors)

    }
    // console.log(errors);

  return (
    <>
        <div className="flex justify-center items-center mt-4">

        {/* <form className='w-6/12 bg-white py-5 px-9 border rounded-2xl'> */}
        <form className="w-full max-w-md bg-white rounded-lg shadow-md px-8 pt-6 pb-8 mb-4">

            {/* <h1 className='text-lg font-bold text-red-800 border-b-[1px]'>Form Validation</h1> */}
            <h1 className="text-2xl font-bold text-red-800 mb-6">Form Validation</h1>


            {/* Required */}
            <div className='form-group mb-4'>
                {/* <label htmlFor="">Required</label> */}
                <label htmlFor="requiredfield" className="block mb-2 font-bold text-gray-700">Required</label>

                <div className='inp'>
                    <input 
                        type="text"
                        name='requiredfield'
                        placeholder='Required field'
                        className='bg-gray-50 border w-full rounded p-1'
                        value={requiredfield}
                        onChange={handleChange}
                    /> 
                    <section className='form-error text-red-600 text-xs'>
                        {errors.requiredfield && <span>{errors.requiredfield}</span>}
                    </section> 
                </div>
            </div>

            {/* Email */}
            <div className='form-group'>
                <label htmlFor="">Email</label>
                <div className='inp'>
                    <input 
                        type="text"
                        name='email'
                        placeholder='email'
                        className='bg-gray-50 border w-full rounded p-1'
                        value={email}
                        onChange={handleChange}
                    />  
                    <section className='form-error text-red-600 text-xs'>
                        {errors.email && <span>{errors.email}</span>}
                    </section>
                </div> 
            </div> 

            {/* Password */}
            <div className='form-group'>
                <label htmlFor="">Equal to</label>
                <div className='inp'>
                    <input 
                        type="text"
                        name='password'
                        placeholder='password'
                        className='bg-gray-50 border w-full rounded p-1'
                        value={password}
                        onChange={handleChange}
                    />  
                    <section className='form-error text-red-600 text-xs'>
                        {errors.password && <span>{errors.password}</span>}
                    </section>
                </div>
                <div className='inp'>
                    <input 
                        type="text"
                        name='confirmpass'
                        placeholder='Retype password'
                        className='bg-gray-50 border w-full rounded p-1'
                        value={confirmpass}
                        onChange={handleChange}
                    /> 
                    <section className='form-error text-red-600 text-xs'>
                        {errors.confirmpass && <span>{errors.confirmpass}</span>}
                    </section> 
                </div>
            </div> 

            {/* URL */}
            <div className='form-group'>
                <label htmlFor="">URL</label>
                <div className='inp'>
                    <input 
                        type="text"
                        name='URL'
                        placeholder='URL'
                        className='bg-gray-50 border w-full rounded p-1'
                        value={url}
                        onChange={handleChange}
                    />
                    <section className='form-error text-red-600 text-xs'>
                        {errors.url && <span>{errors.url}</span>}
                    </section> 
                </div>
            </div>

            {/* Digits */}
            <div className='form-group'>
                <label htmlFor="">Digits</label>
                <div className='inp'>
                    <input 
                        type="text"
                        name='digits'
                        placeholder='digits'
                        className='bg-gray-50 border w-full rounded p-1'
                        value={digits}
                        onChange={handleChange}
                    />
                    <section className='form-error text-red-600 text-xs'>
                        {errors.digits && <span>{errors.digits}</span>}
                    </section>  
                </div> 
            </div> 

            {/* Number */}
            <div className='form-group'>
                <label htmlFor="">Numbers</label>
                <div className='inp'>
                    <input 
                        type="text"
                        name='number'
                        placeholder='number'
                        className='bg-gray-50 border w-full rounded p-1'
                        value={number}
                        onChange={handleChange}
                    />
                    <section className='form-error text-red-600 text-xs'>
                        {errors.number && <span>{errors.number}</span>}
                    </section>  
                </div> 
            </div> 

            {/* AlphaNumeric */}
            <div className='form-group'>
                <label htmlFor="">Alphanumeric</label>
                <div className='inp'>
                    <input 
                        type="text"
                        name='alphanum'
                        placeholder='Enter Alphanumeric only'
                        className='bg-gray-50 border w-full rounded p-1'
                        value={alphanum}
                        onChange={handleChange}
                    />
                    <section className='form-error text-red-600 text-xs'>
                        {errors.alphanum && <span>{errors.alphanum}</span>}
                    </section>  
                </div>
            </div> 

            {/* TextBox */}
            <div className='form-group'>
                <label htmlFor="">TextArea</label>
                <div className='inp'>
                    <textarea 
                        name="textarea" 
                        cols="" 
                        rows="10" 
                        placeholder='Text Area'
                        className='bg-gray-50 border w-full rounded p-1'
                        value={textarea}
                        onChange={handleChange}
                    />
                    <section className='form-error text-red-600 text-xs'>
                        {errors.textarea && <span>{errors.textarea}</span>}
                    </section>
                </div> 
            </div> 

            {/* Button */}
            <div className='form-group'>
                {/* <div className='buttonContainer'>
                    <button className='bg-red-800 rounded-md px-4 py-1 text-white' onClick={handleSubmit}>Submit</button>
                    <button className='bg-red-800 rounded-md px-4 py-1 ms-3 text-white'>Cancel</button>
                </div>  */}
                <div className="flex items-center justify-between mt-8">
                    <button className="bg-red-800 text-white py-2 px-4 rounded-md focus:outline-none focus:shadow-outline hover:bg-red-700 hover:text-white" onClick={handleSubmit}>Submit</button>
                    <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline hover:bg-gray-400 hover:text-gray-800">Cancel</button>
                </div>

            </div> 
        </form>
    </div>

    </>
  )
}

export default FormValidation