import React, { useState } from 'react';

const FormVal = () => {
    const [formValues, setFormValues] = useState({
        minlength: "",
        maxlength: "",
        rangelength: "",
        minvalue: "",
        maxvalue: "",
        rangevalue: ""
    });

    const [valueErrors, setValueErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        let valueValidationErrors = {};

        // Minlength
        if (!formValues.minlength) {
            valueValidationErrors.minlength = "This value is Required";
        } else if (formValues.minlength.length < 6) {
            valueValidationErrors.minlength = 'Enter min 6 characters';
        }

        // Maxlength
        if (!formValues.maxlength) {
            valueValidationErrors.maxlength = "This value is Required";
        } else if (formValues.maxlength.length > 6) {
            valueValidationErrors.maxlength = 'Enter max 6 characters';
        }

        // Rangelength
        if (!formValues.rangelength) {
            valueValidationErrors.rangelength = "This value is Required";
        } else if (formValues.rangelength.length < 5 || formValues.rangelength.length > 10) {
            valueValidationErrors.rangelength = 'This range is invalid, it should be between 5-10';
        }

        // Minvalue
        if (!formValues.minvalue) {
            valueValidationErrors.minvalue = "This value is Required";
        } else if (parseInt(formValues.minvalue) < 6) {
            valueValidationErrors.minvalue = 'Min value should be 6';
        }

        // Maxvalue
        if (!formValues.maxvalue) {
            valueValidationErrors.maxvalue = "This value is Required";
        } else if (parseInt(formValues.maxvalue) > 6) {
            valueValidationErrors.maxvalue = 'Max value should be 6';
        }

        // Rangevalue
        if (!formValues.rangevalue) {
            valueValidationErrors.rangevalue = "This value is Required";
        } else if (parseInt(formValues.rangevalue) < 6 || parseInt(formValues.rangevalue) > 10) {
            valueValidationErrors.rangevalue = 'Value should be between 6-10';
        }

        setValueErrors(valueValidationErrors);
    };

    return (
        <>
                <div className="flex justify-center items-center">

            {/* <form className='w-6/12 bg-white py-5 px-9 border rounded-2xl'> */}
            <form className="w-full max-w-md bg-white rounded-lg shadow-md px-8 pt-6 pb-8 mb-4">

                {/* <h1 className='text-lg font-bold text-red-800 border-b-[1px]'>Form Validation</h1> */}
                <h1 className="text-2xl font-bold text-red-800 mb-6">Form Validation</h1>


                {/* Minlength */}
                <div className="mb-4">

                <section className='form-group p-[1.5] my-3'>
                    <label htmlFor="minlength">Min Length</label>
                    <input 
                        type="text" 
                        name='minlength'    
                        id='minlength'
                        placeholder='Min 6 Characters'
                        className='bg-gray-50 border w-full rounded p-1'
                        value={formValues.minlength}
                        onChange={handleChange}
                    />
                    {valueErrors.minlength && <section className='form-error text-red-600 text-xs'>{valueErrors.minlength}</section>}
                </section>

                {/* Maxlength */}
                <section className='form-group p-[1.5] my-3'>
                    <label htmlFor="maxlength">Max Length</label>
                    <input 
                        type="text" 
                        name='maxlength'    
                        id='maxlength'
                        placeholder='Max 6 Characters'
                        className='bg-gray-50 border w-full rounded p-1'
                        value={formValues.maxlength}
                        onChange={handleChange}
                    />
                    {valueErrors.maxlength && <section className='form-error text-red-600 text-xs'>{valueErrors.maxlength}</section>}
                </section>

                {/* Rangelength */}
                <section className='form-group p-[1.5] my-3'>
                    <label htmlFor="rangelength">Range Length</label>
                    <input 
                        type="text" 
                        name='rangelength'    
                        id='rangelength'
                        placeholder='Text should be between 5-10'
                        className='bg-gray-50 border w-full rounded p-1'
                        value={formValues.rangelength}
                        onChange={handleChange}
                    />
                    {valueErrors.rangelength && <section className='form-error text-red-600 text-xs'>{valueErrors.rangelength}</section>}
                </section>

                {/* MinValue */}
                <section className='form-group p-[1.5] my-3'>
                    <label htmlFor="minvalue">Min Value</label>
                    <input 
                        type="number" 
                        name='minvalue'    
                        id='minvalue'
                        placeholder='Min value should be 6'
                        className='bg-gray-50 border w-full rounded p-1'
                        value={formValues.minvalue}
                        onChange={handleChange}
                    />
                    {valueErrors.minvalue && <section className='form-error text-red-600 text-xs'>{valueErrors.minvalue}</section>}
                </section>

                {/* MaxValue */}
                <section className='form-group p-[1.5] my-3'>
                    <label htmlFor="maxvalue">Max Value</label>
                    <input 
                        type="number" 
                        name='maxvalue'    
                        id='maxvalue'
                        placeholder='Max value should be 6'
                        className='bg-gray-50 border w-full rounded p-1'
                        value={formValues.maxvalue}
                        onChange={handleChange}
                    />
                    {valueErrors.maxvalue && <section className='form-error text-red-600 text-xs'>{valueErrors.maxvalue}</section>}
                </section>

                {/* Range Value */}
                <section className='form-group p-[1.5] my-3'>
                    <label htmlFor="rangevalue">Range Value</label>
                    <input 
                        type="number" 
                        name='rangevalue'    
                        id='rangevalue'
                        placeholder='Value should be betweem 6-10'
                        className='bg-gray-50 border w-full rounded p-1'
                        value={formValues.rangevalue}
                        onChange={handleChange}
                    />
                    {valueErrors.rangevalue && <section className='form-error text-red-600 text-xs'>{valueErrors.rangevalue}</section>}
                </section>
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
    );
};

export default FormVal;
