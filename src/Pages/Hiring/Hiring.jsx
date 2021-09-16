import React from 'react'
import './Hiring.css'

const Hiring = () => {
    document.title = 'TEN | Hiring';
    return (
        < >
            <div className='hiring-container pb-3'>
                <div className="main-content">
                    <h2 className='header' >We Are Hiring Interns </h2>
                    <p>The Student Intern program is a structured and guided work-based learning program for students currently enrolled in India.</p>
                    <p>There is a small registration fee, INR 400 /- (RUPEES Four HUNDRED ONLY) applicable to all incoming interns  as part of this One-of-a-Kind Point based Program. This is required not just to ensure a seamless on-boarding and exit process but also to supply the interns with relevant study material and make them aware of how a corporate setup works.
                    </p>
                    <div className=" cont-sect-main d-flex">
                        <div className=" content-section1">
                            <h3 className='header'>Scan the QR code to complete your payment and submit the below application form to start with your registration process.</h3>
                            <p>Please keep the payment transaction ID handy for submitting the form.</p>
                            <p>Note: This internship does not offer an opportunity to earn money,rather helps an individual grow by working on the job andearn a certificate upon successful completion.</p>
                            <p>
                                Check out few of our open internship positions below
                                Refer the application form for more open positions
                            </p>
                            <ul>
                                <li><strong>Digital Marketing Interns</strong></li>
                                <li><strong>General Management Interns</strong></li>
                                <li><strong>Technical/Software Experts</strong></li>
                                <li><strong>Product Management Interns</strong></li>
                                <li><strong>Content Interns and more...</strong></li>
                            </ul>

                        </div>
                        <div className="border content-section">
                            <img className="qr-img" src="https://static.wixstatic.com/media/693073_4c899eb662c84031926c133cf5f32b95~mv2.jpg/v1/fill/w_448,h_598,al_c,q_80,usm_0.66_1.00_0.01/TEN_PAY_1.webp" alt="QR Code" />

                        </div>
                    </div>



                </div>
            </div>
            <div className="form-cont my-3 ">
                <h3 className="mt-5">Application Form</h3>
                <small className="mb-5">Registration Fee Rs. 100/-</small>
                <label for="select2" className="label my-3 form-label">Choose relevant internship opening*</label>
                <select className="w-75 form-select w-75" id="select2" required>
                    <option selected></option>
                    <option value="1">Digital Marketing</option>
                    <option value="2">General Management</option>
                    <option value="3">Java Developer</option>
                    <option value="4">Product Management</option>
                    <option value="5">React Developer</option>
                    <option value="6">Angular Developer</option>
                    <option value="6">Graphic Content Preparation</option>
                    <option value="6">Text Content Preparation</option>
                </select>
                <label for="select3" className=" my-3 form-label">What’s your employment status?*</label>
                <select className="w-75 form-select" id='select3' required>
                    <option selected></option>
                    <option value="1">College Student</option>
                    <option value="2">Employed</option>
                    <option value="3">Un-Employed</option>
                    <option value="4">Others</option>
                </select>

                <label for="select4" className="my-3 form-label">Do you have previous experience?*</label>
                <select className="w-75 form-select" id='select4' placeholder="" required>
                    <option selected></option>
                    <option value="1">Yes</option>
                    <option value="2">No</option>
                </select>
                <label for="exampleFormControlInput1" className="my-3 form-label">Payment Transaction ID*</label>
                <input type="email" className="w-75 form-control" id="exampleFormControlInput1" placeholder="" required />
                <div className='d-flex justify-content-end  w-75'>
                    <button className="btn-form my-4 btn btn-secondary btn-lg" type="submit">Next</button>
                </div>
            </div>


        </>

    )
}

export default Hiring
