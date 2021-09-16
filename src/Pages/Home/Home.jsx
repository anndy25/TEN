import React from 'react'
import './Home.css'
import Button from '@material-ui/core/Button';
import Data from './Data.js'
import CoverImg from './images/CoverImg.jpeg';
import bootomGif from './images/list4.gif';

const Home = () => {
    // const data1 = JSON.parse(Data);
    document.title = 'TEN | Home';
    return (
        < >
            <div className="home-container">
                <div className="home-image">
                    <img  src={CoverImg} alt="ss" />
                </div>
                <div className="sect-1 ">
                    <h3>About Us</h3>
                    <div className="sect-sub-1">
                        <div className="sect-box-1">
                            <h2>Learning Together</h2>
                            <h2>From the Comfort</h2>
                            <h2>of Your Home</h2>
                            <Button className="com-btn " variant="contained" color="default" >Learn More More </Button>
                        </div>
                        <div className="sect-box-1">
                            <img className="img-fluid" src="https://static.wixstatic.com/media/749045033f5b4f539376b91db3710416.jpg/v1/fill/w_551,h_370,al_c,q_80,usm_0.66_1.00_0.01/Teen%20study%20group.webp" alt="" />
                        </div>

                    </div>
                </div>
               
                <div className="sect-sub-2">
                    <h2>Welcome to</h2>
                    <h2>THE NEXT BIG THING</h2>
                    <Button className="com-btn my-4" variant="contained" color="default" >Join TEN Virtual Campus </Button>
                </div>
                <div className="container-fluid">
                    <div className="row ">
                        <div className="cont-box-1 col-lg-8 col-md-7 p-0">
                            <img className="img-1" src="https://static.wixstatic.com/media/11062b_0f10d1a3bc8e4fb1ba089c42056efe9b~mv2.jpg/v1/fill/w_1138,h_590,al_c,q_85,usm_0.66_1.00_0.01/11062b_0f10d1a3bc8e4fb1ba089c42056efe9b~mv2.webp" alt="" srcset="" />
                            <section className="sect-sect-1">
                                <h3 style={{ color: "black" }}>Our Courses</h3>
                                <h1>Your New</h1>
                                <h1>Journey Begins Here,</h1>
                                <h1>Today</h1>
                            </section>
                        </div>
                        <div className="box-1 col-lg-4 col-md-5 p-3">
                            <h2>Entrepreneurship</h2>
                            <h2>made fun</h2>
                            <Button className="com-btn my-4">Explore More</Button>

                        </div>

                        <div className="col-lg-6 col-md-4 border p-0">
                            <img src="https://static.wixstatic.com/media/44a6c2_f9b99e49448943108aa1a3273b1c356b~mv2.jpg/v1/fill/w_850,h_563,al_c,q_85,usm_0.66_1.00_0.01/44a6c2_f9b99e49448943108aa1a3273b1c356b~mv2.webpno" className='img-1' alt="404" />
                        </div>
                        <div className="box-1 col-lg-3 col-md-4 p-4">
                            <h2>Digital</h2>
                            <h2>Marketing</h2>
                            <Button className="com-btn my-4">Explore More</Button>
                        </div>
                        <div className="col-lg-3 col-md-4 border p-0">
                            <img src="https://static.wixstatic.com/media/11062b_557462ab123440368447ab18a66043e5~mv2.jpg/v1/fill/w_425,h_563,al_c,q_80,usm_0.66_1.00_0.01/11062b_557462ab123440368447ab18a66043e5~mv2.webp" alt="404" className="img-1" />
                        </div>

                        <div className="box-1 col-lg-6 col-md-6 border">
                            <h2>Product Management</h2>
                            <h2>like a pro</h2>
                            <Button className="com-btn my-4">Explore More</Button>
                        </div>
                        <div className="col-lg-6 col-md-6 border p-0">
                            <img src="https://static.wixstatic.com/media/a3ac449c86364dd8999922949876d09e.jpg/v1/fill/w_850,h_555,al_c,q_85,usm_0.66_1.00_0.01/a3ac449c86364dd8999922949876d09e.webp" alt="404" className="img-1" />
                        </div>


                    </div>
                </div>
                <div className="sp-sect">
                    <header><h1 id='sp-header'>Our Course Benefits</h1></header>
                    <section className=" my-4">
                        <div className="row ">
                            {Data.map((elm,index) => {
                                return(
                                < >
                                <div className="sp col-lg-4 col-md-4" key={index}>
                                    <div className="sp-card">
                                        <img className="img-card" src={elm.image} className="card-img-top" style={{width: '170px'}} alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title text-center">{elm.name}</h5>
                                            <p className="card-text">{elm.description}</p>
                                        </div>
                                    </div>
                                </div>
                                </>
                                );
                            })}
                        </div>
                    </section>
                    <div id="consulting">
                        <img src={bootomGif}  id='cons-img' alt="Consulting of TEN" />
                        <div className="con-sect">
                            <h1>Power of TEN Consulting</h1>
                            <button type="button" className="com-btn btn btn-light" style={{width:'20rem'}}>Explore More</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
