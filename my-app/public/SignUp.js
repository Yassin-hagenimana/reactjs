import React from "react";
export default function SIgnUp(){

const[formData,setFormData]=React.useState(
    {
        email:"",
        password:"",
        confirmPassword:"",
        joinedNewsLetter:false
    }
)

 
function handleChange(event){
    const{name,value,type,checked}=event.target
setFormData(prevFormData=>({
...prevFormData,[name] : type === "checkbox" ? checked:value
}))}


function handleSubmit(event){
 event.preventDefault()
 if(formData.password === formData.confirmPassword){
 console.log("Signed up successfully")
}else{
    console.log("Passwords doesn't match")
}

if(formData.joinedNewsLetter){
    console.log("thank you for signing up to our newsletter")
}
}


    return(
        <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>

        <input type="email"
         placeholder="Email address" 
         name="email" 
         className="form--input" 
         onChange={handleChange}
         value={formData.email}
         
         />

         <input type="password"
         placeholder="Your password" 
         name="password" 
         className="form--input"
         onChange={handleChange}
         value={formData.password}
         />

         <input type="password"
         placeholder="Confirm password" 
         name="confirmPassword" 
         className="form--input"
         onChange={handleChange}
         value={formData.confirmPassword}
         
         />

         <div className="form--marketing">
         <input
         name="joinedNewsLetter"
         onChange={handleChange}
         checked={formData.joinedNewsLetter}
         type="checkbox"/>
         <label htmlFor="okayToEmail">I want to join the newsletter</label>
         </div>
         <button className="form--submit">Sign up</button>
        </form>

        </div>
    )
}


// html{
//     font-size: calc(60% + 0.8vmin);
// }



// * {
//     font-size: 1rem;
//     box-sizing: border-box;
// }

// .form-container{
//     max-width: 100%;
//     margin: 0 auto;
// }

// h1 {
//     font-size: 2.2rem;
// }

// h2 {
//     font-size: 1.6rem;
// }

// h3 {
//     font-size: 1.3rem;
// }


// .form--input{
//     display: block;
//     width: 50%;
//     margin-left: 10%;
//     margin-top: 2%;
//     height: 40px;
    
// }


// button{
//     margin-top: 2%;
//     margin-left: 30%;
//     background-color: rgb(77, 77, 202);
//     color: white;
//     border: none;
//     height: 40px;
//     width: 120px;
//     font-size: 20px;
//     border-radius: 10px;
// }