import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div>
      <footer class="footer">
            <div class="address">
                <h5>OFFICE ADDRESS</h5>
                <p>Lorem ipsum dolar,234 <br/>1200 consecutive <br/> Argentina</p>
            </div>
            <div class="address">
                <h5>FOLLOW US</h5>
                <i class="fa fa-facebook"></i>
                <i class="fa fa-linkedin"></i>
                <i class="fa fa-twitter"></i>
                <i class="fa fa-google grow"></i>
                <i class="fa fa-github grow"></i>
            </div>
            <div class="address">
                <h5>CONTACT US</h5>
                <p>+91 9815450774<br/>mahesh@skype <br/> enquiry@mahesh.com</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer
