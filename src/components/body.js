import React from 'react';
import './bodyStyle.css';


const Body = () => {
    
  return (
   <>
     <div className="box" >
     <div className="background-content">
            <h1>Provide an Exceptional <br/> Patient Experience </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessit<br/>atibus reiciendis eos saepe vitae quibusdam corrupti ip<br/> ipsa asperiores reprehenderit </p>
          
            <a class="btn btn-primary btn-lg"  href="#" style={{cursor:'pointer'}} role="button">Link</a>
           
        </div>
     </div>

     <div className="about">
        <div className="main-about">
            <div className="inner-about">
                <div className="about-content">
                    <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, consequuntur <br/> harum beatae inventore voluptatem numquam voluptatibus fuga, <br/>cupiditate cumque porro perferendis is quos ad!</p>
                <a href="#">Read more</a>
                </div>
                
            </div>
            <div className="inner-about">
                <div class="inner-about-image">
                    
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Body
