import React from 'react';
import "./footer.css"

function Footer () {
    return (

    <footer className="page-footer font-small blue">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <hr className="clearfix w-100 d-md-none pb-0"/>
            <div className="col-lg">
                    <i className="fas fa-cog fa-spin"></i><br/><br/>
                    {/* <i className="bi bi-envelope"></i><br/><br/> */}
                <div className="list-unstyled mb-3">
                    <i> Please feel free to contact me</i><br></br>
                    <i> if you have any question! </i>
                </div>
                <button type="button">Contact Me</button><br/><br/>
             
     
            </div>
        </div>

        <p>Designed & Created by Guram Kutaladze</p>
        <div className="footer-copyright text-center "> Copyright &copy; {new Date().getFullYear()} | G.Kutaladze | All Rights Reserved </div><br/>
    </div>
</footer>
    );
  }
  
  export default Footer;