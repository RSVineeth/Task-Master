// import React, { useState } from 'react'
// import Form from './components/Form'
// import TodoList from './TodoList';
// import "./style.css"
// import {v4 as uuidv4} from "uuid";

// const App = () => {

//   let [updateItem, setUpdateItem] = useState(null);


//   let [state,setState] = useState({
//     course:'',
//     trainer:'',
//     id: uuidv4(),
//     items: [],
//   })

//   let handleChange = (e) => {
//     let {name,value} = e.target;
//     setState({...state, [name]:value})
//   }


//   // let handleChange = (e) => {
//   //   let { name, value } = e.target;
//   //   setState({ ...state, [name]: value });
//   // };


//   let handleSubmit = (e) => {

//     e.preventDefault();

//       try {
//         if (updateItem) {
//           // If updateItem is set, update the existing item
//           const updatedItems = state.items.map((item) =>
//             item.id === updateItem.id ? { ...item, course: state.course, trainer: state.trainer } : item
//           );
    
//           setState({
//             items: updatedItems,
//             id: uuidv4(),
//             course: "",
//             trainer: "",
//           });
    
//           setUpdateItem(null); // Reset updateItem after updating
//         } 
//         else {
//           // If updateItem is not set, add a new item
//           const newItem = {
//             id: state.id,
//             course: state.course,
//             trainer: state.trainer,
//           };
    
//           const finalItems = [...state.items, newItem];
    
//           setState({
//             items: finalItems,
//             id: uuidv4(),
//             course: "",
//             trainer: "",
//           });
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
    
//     // try {
//     //   let newItem = {
//     //     id: state.id,
//     //     course: state.course,
//     //     trainer: state.trainer
//     //   }
//     //   console.log(state);

//     //   let finalItem = [...state.items,newItem];

//     //   setState({
//     //     items: finalItem,
//     //     id: uuidv4(),
//     //     course: "",
//     //     trainer: ""
//     //   })
//     // }

//   //   catch (error) {
//   //     console.log(error);
//   //   }

//   // }

//   let handleDelete = (id) => {
//     let filteredItem = state.items.filter (items => items.id !== id)
//     setState({...state,items:filteredItem})
//   }

//   let handleUpdate = (id) => {
//     // Find the item to update based on the id
//     const itemToUpdate = state.items.find((item) => item.id === id);
  
//     // Set the values in the form for updating
//     setState({
//       ...state,
//       course: itemToUpdate.course,
//       trainer: itemToUpdate.trainer,
//     });
  
//     // Set the item to be updated in the state
//     setUpdateItem(itemToUpdate);
//   };



// // let handleUpdate = (id) => {
// //   let restItems = state.items.filter(item=>item.id!==id)
// //   let selectedItem = state.items.find(item=>item.id==id)
// //     setState({
// //       ...state,
// //       items:restItems,
// //       course: itemToUpdate.course,
// //       trainer: itemToUpdate.trainer,
// //     });
// // }


//  // let handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   try {
//   //       let newItem = {
//   //           id: state.id,
//   //           course: state.course,
//   //           trainer: state.trainer,
//   //       };

//   //       let finalItem = [...state.items, newItem];

//   //       setState({
//   //           items: finalItem,
//   //           id: uuidv4(),
//   //           course: "", // Fix: Change from courses to course
//   //           trainer: "", // Fix: No change needed, already correct
//   //       });
//   //   } catch (error) {
//   //       console.log(error);
//   //   }
//   // };


//   return (
//     <>
//       <article>
//         <header>
//           <h1>ToDo List</h1>
//         </header>

//         <main>
//           <Form
//             course={state.course}
//             trainer={state.trainer}
//             handleChange={handleChange}
//             handleSubmit={handleSubmit}/>
//           <TodoList items={state.items} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
//         </main>
//       </article>
//     </>
//   )
// }

// export default App


// //! Form Validation
// import React from 'react'
// import FormValidation from './FormValidation'
// import './global.css'
// import FormVal from './FormVal'
// const App = () => {
//   return (
//     <>
//         <FormValidation/>
//         <FormVal/>
//     </>
//   )
// }

// export default App

import React, { useState } from 'react'
import Form from './components/Form'
import TodoList from './TodoList';
import "./style.css"
import FormValidation from './FormValidation'
import './global.css'
import FormVal from './FormVal'
import {v4 as uuidv4} from "uuid";
import bgImg from '../src/bg5.png';
import bgimg from '../src/bg3.jpg'



const App = () => {

  let [updateItem, setUpdateItem] = useState(null);


  let [state,setState] = useState({
    course:'',
    trainer:'',
    id: uuidv4(),
    items: [],
  })

  let handleChange = (e) => {
    let {name,value} = e.target;
    setState({...state, [name]:value})
  }

  let handleSubmit = (e) => {

    e.preventDefault();

      try {
        if (updateItem) {
          // If updateItem is set, update the existing item
          const updatedItems = state.items.map((item) =>
            item.id === updateItem.id ? { ...item, course: state.course, trainer: state.trainer } : item
          );
    
          setState({
            items: updatedItems,
            id: uuidv4(),
            course: "",
            trainer: "",
          });
    
          setUpdateItem(null); // Reset updateItem after updating
        } 
        else {
          // If updateItem is not set, add a new item
          const newItem = {
            id: state.id,
            course: state.course,
            trainer: state.trainer,
          };
    
          const finalItems = [...state.items, newItem];
    
          setState({
            items: finalItems,
            id: uuidv4(),
            course: "",
            trainer: "",
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

    let handleDelete = (id) => {
      let filteredItem = state.items.filter (items => items.id !== id)
      setState({...state,items:filteredItem})
    }
  
    let handleUpdate = (id) => {
      // Find the item to update based on the id
      const itemToUpdate = state.items.find((item) => item.id === id);
    
      // Set the values in the form for updating
      setState({
        ...state,
        course: itemToUpdate.course,
        trainer: itemToUpdate.trainer,
      });
    
      // Set the item to be updated in the state
      setUpdateItem(itemToUpdate);
    };

    return (
      <>
        <article style={{ backgroundImage: `url(${bgImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <header>
            <h1>ToDo List</h1>
          </header>
  
          <main style={{ backgroundImage: `url(${bgimg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundClip:'border-box', padding:'20px' }}>
            <Form
              course={state.course}
              trainer={state.trainer}
              handleChange={handleChange}
              handleSubmit={handleSubmit}/>
            <TodoList items={state.items} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
          </main>
        <FormValidation/>
        <FormVal/>
        </article>

      </>
    )
  }
  
  export default App

