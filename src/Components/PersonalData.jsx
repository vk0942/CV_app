import { useState } from "react"

export default function PersonalData(){

    function checkIfEmail(str) {
        // Regular expression to check if string is email
        const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
      
        return regexExp.test(str);
    }
    const [firstname,setfirstname] = useState("");
    const [lastname,setlastname] = useState("");
    const [country , setcountry] = useState("");
    const [address , setaddress] = useState("");
    const [email , setemail] = useState("");
    const [phone , setphone] = useState("");
    const [description , setdescription] = useState("");
    

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
                 value = {country}
                 onChange={(event) => setcountry(event.target.value)}
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
          </div>
          </div>
          <div className="RIGHT">
            <div className="contact">
                <div className="email">
                   {
                    (checkIfEmail(email)||email==="")? email: <p style = {{color: "red"}}>Enter valid Email</p>
                   }
                </div>
                <div className="phone_no">{phone}</div>
            </div>
            <div>
            <div className="fullname">
                 {firstname + " "}  {" " + lastname}
            </div>
            <img/>
            </div>
            <div className="address">
                <div className="home_address">{address}</div>
                <div className="country">{country}</div>
            </div>

            <div>
                <h3>Profile</h3>
                <p>{description}</p>
            </div>
          </div>
        </div>
    )
}