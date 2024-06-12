import React from 'react'


const Form = ({course,trainer,handleChange,handleSubmit}) => {
  return (
    <>
        <form onSubmit={handleSubmit}>

            <div className='form-group'>
                <label>Course</label>
                <input 
                    type="text" 
                    placeholder="Enter Course"
                    name="course" 
                    value={course}
                    onChange={handleChange}
                />
            </div>

            <div className='form-group'>
                <label>Trainer</label>
                <input 
                    type="text" 
                    placeholder="Enter trainer name"
                    name="trainer" 
                    value={trainer}
                    onChange={handleChange}
                />
            </div>

            <div className='form-group'>
                <button id='button'>Submit</button>
            </div>
        </form>
    </>
  )
}

export default Form


// import React from 'react';

// const Form = ({}) => {
//   return (
//     <form onSubmit={handleSubmit}>
//       <div className='form-group'>
//         <label>Course</label>
//         <input
//           type='text'
//           placeholder='Enter Course'
//           name='course'
//           value={course}  // Fix: Use course instead of courses
//           onChange={handleChange}
//         />
//       </div>

//       <div className='form-group'>
//         <label>Trainer</label>
//         <input
//           type='text'
//           placeholder='Enter trainer name'
//           name='trainer'
//           value={trainer}
//           onChange={handleChange}
//         />
//       </div>

//       <div className='form-group'>
//         <button id='button'>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default Form;
