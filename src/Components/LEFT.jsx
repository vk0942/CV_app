export default function LEFT(){
    return(
        <div className="LEFT">
          <h1>Fill your info</h1>
          <div className="personal_info">
            <div className="fullname">
                <input
                 type="text"
                 placeholder="First name"
                />  
                <input
                 type="text"
                 placeholder="Last name"
                />
            </div>   
            <div className="address">
                <input
                 type="text"
                 placeholder="City"
                />  
                <input
                 type = "text"
                 placeholder="home Address"
                />
            </div>  
            <div className="Contact">
                <input
                type="email"
                placeholder="example@gmail.com"
                />  
                <input
                type = "number"
                placeholder="phone no "
                />
            </div>  
          </div>
          <div className="education"></div>
          <div className="experience"></div>
        </div>
    )
}