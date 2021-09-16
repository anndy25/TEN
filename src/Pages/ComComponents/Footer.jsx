import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import './footer.css'

const Footer = () => {
    return (
        < >
        <div className="footer py-4">     
        <div className="d-flex justify-content-around align-items-center py-4 ">
            <div>
                <li className='footer-list'><a href="#">About Us</a></li>
                <li className='footer-list'><a href="#">Contack Us</a> </li>
                <li className='footer-list'><a href="#">Our Policy</a> </li>
                <li className='footer-list'><a href="#">Terms & Condition</a></li>
            </div>

            <div className="mb-3">
                <div>
                    <h5>Follow Us On:</h5>
                    <div className="d-flex">
                        <a href="#"><FacebookIcon style={{ fontSize: '2rem' }} /></a>
                        <a href="#"><InstagramIcon className='text-danger' style={{ fontSize: '2rem' }} /></a>
                        <a href="#"><TwitterIcon style={{ fontSize: '2rem' }} /></a>
                        <a href="#"><LinkedInIcon style={{ fontSize: '2rem' }} /></a>
                    </div>
                </div>
            </div>
        </div>
        <h5 className="text-center p-2">© 2020 Limitless Technologies - The Entrepreneurship Network</h5>
        </div>
        </>

    )
}

export default Footer
