import React, { useEffect, useRef } from 'react';
import './css/ProfileSlider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { teams } from '../data/ProfileSliderData';
import SwiperCore from 'swiper';
SwiperCore.use([Navigation, Pagination]);
const TeamMembers = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.update();
    }
  });
  return (
    <div className='sld bg-black'>
      <div className='container'>
        <div className='row'>
          <h2>
            <p className='text-center text-white'>CPC Members</p>
          </h2>
        </div>
        <div className='row'>
          <div className='col-md-12'>
            {/* Swiper component with navigation and pagination modules */}
            <Swiper
              modules={[Navigation, Pagination]}
              navigation={{
                nextEl: '.next-button',
                prevEl: '.prev-button',
              }}
              pagination
              slidesPerView={1}
              spaceBetween={40}
              loop
              groupedSlides={3} 
              key={teams.length} // add this prop and set it to a unique value that changes when the data changes
            >
              {/* Map over the teams array and create a SwiperSlide for each team */}
              {teams.map((team, teamIndex) => (
                <SwiperSlide key={teamIndex} slidesPerView={3}>
                  <div className='bg-black row'>
                    {/* Map over the team members and create a card for each member */}
                    {team.map((member, memberIndex) => (
                      <div className='bg-black col-md-4' key={memberIndex}>
                        <a className='bg-black thumbnail' href='#'>
                          <div className='bg-black card swiper-slide'>
                            <div className='image-content'>
                              <span className='overlay'></span>
                              <div className='card-image'>
                                <img src={member.image} alt='' className='card-img' />
                              </div>
                            </div>
                            <div className='text-white card-content'>
                              <h4 className='p-5 name'>{member.name}</h4>
                              <h3 className='name'>{member.role}</h3>
                              <p className='description'></p>
                              <button className='button'>View More</button>
                            </div>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className='carousel-controls'>
              <button className='prev-button'>Previous</button>
              <button className='next-button'>Next</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TeamMembers;
