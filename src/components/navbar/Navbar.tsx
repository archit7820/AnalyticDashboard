import "./navbar.scss"


const Navbar = () => {
  return (
  
      <div className="navbar">
        <div className="logo">
            <img src ="logo.svg" alt = " " />
            <span>Adminpage</span>
            </div> 
            < div  className="icons">
            <img src="/search.svg"  alt =" " className="icon" />
            <img src="/app.svg"  alt =" " className="icon" />
            <img src="/expand.svg"  alt =" " className="icon" />
            <div className="notification">
            <img src ="/notifications.svg" alt = " " /> 
             
                <span>1</span>
            </div>

            <div className="user">
                <img 
                src = "https://yt3.ggpht.com/1vA5jCtNvcowckZgLqYCYYqbKbwvGCr1A90f0nD22MMzmL-A484e2D7F-of0FX4aQwM7CIAy=s88-c-k-c0x00ffffff-no-rj"
                alt = "" /> 
                <span> Archit</span>
            </div>
            <img src="/settings.svg"  alt =" " className="icons" />
      </div>
</div>
  )
}

export default Navbar
