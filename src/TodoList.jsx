import React, { Fragment } from 'react'

const TodoList = ({items,handleDelete,handleUpdate}) => {
  return (
    <section className='todo ml-10'>
        <h2>Courses</h2>
        <table>

            <thead>
                <tr>
                    <th>ID</th>
                    <th>Course</th>
                    <th>Trainer</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {items.length>0 && items.map (items => {
                    return <Fragment key = {items.id}>
                        <tr>
                            <td>{items.id}</td>
                            <td>{items.course}</td>
                            <td>{items.trainer}</td>
                            <td>
                                {/* Move buttons to the Actions column */}
                                <button className='action-button delete-button' onClick={() => handleDelete(items.id)}>Delete</button>
                                <button className='action-button update-button' onClick={() => handleUpdate(items.id)}>Update</button>
                            </td>
                        </tr>

                        {/* <td>
                            <button id='button' onClick={()=>handleDelete(items.id)}>Delete</button>
                            <button id='button'>Update</button>
                        </td> */}
                    </Fragment>
                })}
            </tbody>
        </table>
    </section>

  )
}

export default TodoList