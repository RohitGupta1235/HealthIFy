import React from 'react'
import "./servicesStyle.css";
const Services = () => {
 
 
 
    return (
    
    <>
    
    <div className="our-services">
        <div className="service-content">
            <div className="left-service-content">
                <h1>Our special services</h1>
                <p><br/>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis animi similique<br/> perspiciatis, impedit blanditiis itaque consequuntur laboriosam ipsa asperiores?</p>
            </div>

            <div className="right-service-content">
                <div className="right-btn">
                    <a href="#">See all services</a>
                </div>
            </div>
        </div>

        <div className="main-services">
            <div className="inner-services-content">
                <div className="service-icon">
                    <i className="fas fa-notes-medical"/>
                </div>
                <h2>Health Care</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing impedit nam quaera <br/>t vitae incidunt <br/>aspernatur, conseq</p>

            </div>

            <div className="inner-services-content">
                <div className="service-icon">
                    <i className="fas fa-hospital-user"/>
                </div>
                <h2>Health Care</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum corporis impedit nam quaerat vitae incidunt aspernatur, conseq</p>
                
            </div>

            <div className="inner-services-content">
                <div className="service-icon">
                    <i className="fas fa-user-md"></i>
                </div>
                <h2>Health Care</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum corporis impedit nam quaerat vitae incidunt aspernatur, conseq</p>
                
            </div>
        </div>
    </div>


    <div class="gallery">
        <h1>Gallery</h1>
        <div class="main-gallery">
            <div className="inner-gallery">
                  <div id="img1" className="imageGallery">

                  </div>
            </div>

            <div className="inner-gallery">
            <div id="img2" className="imageGallery">
                    
                    </div>
            </div>

            <div className="inner-gallery">
            <div  id="img3" className="imageGallery">
                    
                    </div>
            </div>

            <div className="inner-gallery">
            <div id="img4" className="imageGallery">
                    
                  </div>
            </div>

            <div className="inner-gallery">
            <div id="img5" className="imageGallery">
                    
                    </div>
            </div>

            <div className="inner-gallery">
            <div id="img6" className="imageGallery">
                    
                    </div>
                
            </div>
        </div>
    </div>
    
    </>
  );
};

export default Services;
