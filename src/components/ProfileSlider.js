import React, { useState } from 'react';
import './css/ProfileSlider.css';
import {teams} from '../data/ProfileSliderData';

function ProfileSlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [urlImage,setURL]=useState("");
    
    const handlePrevClick = () => {
      if (activeIndex > 0) {
        setActiveIndex(activeIndex - 1);
      }
    };
  
    const handleNextClick = () => {
      if (activeIndex < teams.length - 1) {
        setActiveIndex(activeIndex + 1);
      }
    };
  
    return (
      <div className='sld bg-black'>
        <div className="container">
          <div className="row">
            <h2><p className="text-center text-white">CPC Members</p></h2>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className="media-carousel">
                <div className="carousel-inner">
                  {teams.map((team, teamIndex) => (
                    <div className={`item ${teamIndex === activeIndex ? 'active' : ''}`} key={teamIndex}>
                      <div className="bg-black row">
                        {team.map((member, memberIndex) => (
                          <div className="bg-black col-md-4" key={memberIndex}>
                            <a className="bg-black thumbnail" href="#">
                              <div className="bg-black card swiper-slide">
                                <div className="image-content">
                                  <span className="overlay"></span>
                                  <div className="card-image">
                                  
                                    <img src={urlImage} alt="Not Loading"  />
                                  </div>
                                </div>
                                <div className="text-white card-content">
                                  <h4 className="p-5 name">{member.name}</h4>
                                  <h3 className="name">{member.role}</h3>
                                  <p className="description"></p>
                                  <button className="button">View More</button>
                                </div>
                              </div>
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="carousel-controls">
                <a data-slide="prev" href="#media" className="left carousel-control" onClick={handlePrevClick}>‹</a>
                <a data-slide="next" href="#media" className="right carousel-control" onClick={handleNextClick}>›</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default ProfileSlider;