import React from 'react'
import CoursesData from './CoursesData'
const Courses = () => {
    document.title = 'TEN | Courses';
    return (
        < >

            <div className="row p-3">
                <div className='col-lg-3 col-sm-3' style={{backgroundColor :'#525252'}}></div>
                <div className='container col-lg-9 col-md-9 col-sm-12' >
                    <div className='row gy-3' >
                        {CoursesData.map((elm, index) => {
                            return (
                                < >
                                    <div className="col-lg-4 col-md-4 col-sm-6  p-2" >
                                        <div className="card ">
                                            <img src={elm.imgSrc} className="card-img-top" style={{ width: '100%', height: '12rem' }} alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">{elm.title}</h5>
                                                <p className="card-text">{elm.price}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )

                        })}

                    </div>

                </div>

            </div>



        </>
    )
}

export default Courses;
