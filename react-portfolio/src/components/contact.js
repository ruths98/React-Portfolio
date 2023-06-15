import React, {useState} from 'react'

export default function Contact() {
//useState hook object is formState, callback function is setFormState
    const [formState, setFormState] = useState({});
//handleChange function, target(filled in section of form) is passed through. To set the form state we are passing in the previous values first, then adding the next input values to our new object.
    const handleChange = ({ target }) => {
        // same as const name = target.name, const value = target.value
      const { name, value } = target;
      setFormState((prev) => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        //send email
    }

    return (
<div>
    <h3>Contact Me</h3>
    <form onSubmit={handleSubmit}>
       <input 
       value={formState.fullName}
       onChange={handleChange}
       name={fullName}
       type="text"
        /> 
          <input 
       value={formState.email}
       onChange={handleChange}
       name={fullName}
       type="text"
        /> 
         <input 
       value={formState.message}
       onChange={handleChange}
       name={message}
       type="text"
        />
    </form>
</div>
)
}