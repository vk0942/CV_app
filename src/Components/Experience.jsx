import { useState } from "react"

export default function Education(){

    const [company,setcompany] = useState("");
    const [city,setcity] = useState("");
    const [position,setposition] = useState("");
    const [to,setto] = useState("");
    const [from,setfrom] = useState("");

    return(
        <div className="Experience">
          <div className="LEFT">
          <h1>Experience</h1>
          <div className="experience">
            <div className="schoolname">
                <input
                 type="text"
                 value = {company}
                 onChange = {(event) => setcompany(event.target.value)}
                 placeholder="School/College"
                />  

            </div>   
            <div className="city">
                <input
                 type="text"
                 value = {city}
                 onChange ={(event) => setcity(event.target.value)}
                 placeholder="City/Country"
                />  
             </div>
             <div className="degree">
                <input
                  type="text"
                  value = {position}
                  placeholder="Degree"
                  onChange={(event) => setposition(event.target.value)}
                />
             </div>  
            <div className="duration">
                <label>Start date</label>
                <input
                type="date"
                value = {from}
                placeholder="dd/mm/yyyy"
                onChange={(event) => setfrom(event.target.value)}

                />  
                <label>End date</label>
                <input
                type = "date"
                placeholder="ddmmyy"
                value = {to}
                onChange={(event) => setto(event.target.value)}
                />
            </div>  
          </div>
          </div>
          <div className="RIGHT">
          <div style = {{width:90+'%' , border:1 + 'px solid black', marginLeft: 37 +'px'}}></div>
            <br></br>
            <h1>Experience</h1>
            <div className="company">
                 {company}
            </div>
            <div className="city">
                 {city}
            </div>
            <div className="position">
                {position}
            </div>
            <div className="duration">
                <div>From {from}</div>
                <div>To {to}</div>
               
            </div>
          </div>
        </div>
    )
}