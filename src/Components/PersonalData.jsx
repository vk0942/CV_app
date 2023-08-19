import { useState } from "react"
import profileImg from '../assets/profile.png'
export default function PersonalData(){

    function checkIfEmail(str) {
        // Regular expression to check if string is email
        const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
      
        return regexExp.test(str);
    }
    const [profileimage , setprofileimage] = useState(null);
    const [firstname,setfirstname] = useState(null);
    const [lastname,setlastname] = useState(null);
    const [linkedin, setlinkedin] = useState(null);
    const [address , setaddress] = useState(null);
    const [email , setemail] = useState(null);
    const [phone , setphone] = useState(null);
    const [description , setdescription] = useState(null);
    

    return(
        <div className="PersonalData">
          <div className="LEFT">
          <h1>Fill your info</h1>
          
          <div className="personal_info">
            <div className="fullname">
                <input
                 type="text"
                 value = {firstname}
                 onChange = {(event) => setfirstname(event.target.value)}
                 placeholder="First name"
                />  
                <input
                 type="text"
                 value = {lastname}
                 onChange = {(event) => setlastname(event.target.value)}

                 placeholder="Last name"
                />
            </div>   
            <div className="address">
                <input
                 type="text"
                 value = {linkedin}
                 onChange={(event) => setlinkedin(event.target.value)}
                 placeholder="Country"
                />  
                <input
                 type = "text"
                 value = {address}
                 onChange={(event) => setaddress(event.target.value)}
                 placeholder="home Address"
                />
            </div>  
            <div className="Contact">
                <input
                type="email"
                value = {email}
                onChange={(event) => setemail(event.target.value)}
                placeholder="example@gmail.com"
                />  
                <input
                type = "number"
                value = {phone}
                maxLength={10}
                onChange={(event) => setphone(event.target.value)}
                placeholder="phone no "
                />
            </div>  
            <div>
                <h3>Profile Description</h3>
                <textarea
                  type = "text"
                  value = {description}
                  placeholder="Profile Description"
                  onChange={(event) => setdescription(event.target.value)}
                 />
            </div>
            <div>
                Upload image
                <input
                 type = "file"
                 name = 'profile_imgae'
                 onChange={(event) => {
                    console.log(event.target.files[0]);
                    setprofileimage(event.target.files[0]);
                  }}
                 />
            </div>
          </div>
          </div>
          <div className="RIGHT">
           <div className="wrapper">
            <div className="contact">
                <div className="email">
                   Email :- 
                   {
                    email ? (checkIfEmail(email)||email===null)? email: <p style = {{color: "red"}}>Enter valid Email</p> : <span>vanshkathnawal0942@gmail.com</span>
                   }
                </div>
                <div className="phone_no">phone_no :-{phone? phone: 9829498641}</div>
            </div>
            <div className="addressR">
                <div className="home_address">Address :- {address? address: "FH 786 scheme no 78 Bilaspur Dombiwali India"}</div>
                <div className="linkedin">
                    {linkedin?  <a href = {linkedin}>{linkedin}</a>:  <a href = "https://www.linkedin.com/in/vanshkathnawal/">https://www.linkedin.com/in/vanshkathnawal/</a>}
                   
                </div>
            </div>
            <hr/>
            </div>
            <div className="fullname">
                 <div style = {{display: "flex"}}>
                 {
                 firstname ? firstname + " " : <h1 style ={{marginRight:8 + "px"}}>Vansh</h1>
                 }
                 {
                  lastname ? lastname + " " : <h1> kathnawal</h1>
                 }
                 </div>
                 
                  
                 <div className="circle">
                    <img
                        alt="not found"
                        width={"250px"}
                        src=  {profileimage ? URL.createObjectURL(profileimage) : profileImg}

                    />
                </div>
                 

            </div>
           
        
          
            <div className="profiledescription">
                <span>Profile Description</span>
                <div style = {{wordWrap:"break-word"}} className = "description">{description}</div>    
            </div>

            

          </div>
        </div>
    )
}