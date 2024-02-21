import React from 'react'
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
  return (
    <div>
    <div className='footer-section'>
        <div className='footer'>
            <div>
            <span> <FacebookIcon/> </span>
             <span> < InstagramIcon/> </span>
             <span> <WhatsAppIcon/> </span>
            </div>
        
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </div>
</div>
  )
}

export default Footer