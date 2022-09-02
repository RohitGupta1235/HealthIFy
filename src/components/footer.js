import React from 'react';
import "./footerStyle.css";

export default function Footer() {
  return (
    <>


<footer className="site-footer">
      <div className="col1">
        <p className="copyright-text">
          
          Copyright &copy; 2022 All Rights Reserved by &nbsp;&nbsp;
          <a href="#">Helthify</a>.
        </p>
      </div>

      <div className="col2">
        <ul className="social-icons">
          <li>
            <a className="facebook" href="#"><i className="fa fa-facebook"></i></a>
          </li>
          <li>
            <a className="twitter" href="#"><i className="fa fa-twitter"></i></a>
          </li>
          <li>
            <a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a>
          </li>
          <li>
            <a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a>
          </li>
        </ul>
      </div>
    </footer>
    </>
      );
}
