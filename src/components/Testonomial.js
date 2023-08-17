import React,{useState} from 'react';
import "./css/Testonomial.css";
import { TestonomialData } from '../data/TestonomialData';
function Testonomial() {
    const [cursol,setCursol]=useState(0);
    function ToggleNext(index){
        if(index===3){
            setCursol(0);
        }else{
            setCursol(index+1);
        }
    }
    function TogglePrev(index){
        if(index===0){
            setCursol(3);
        }else{
            setCursol(index-1);
        }
    }
    return (
        <React.Fragment>
            <div class="bg-black">
                <h2 className='text-white text-center'>Testonomial</h2>
                <div class="container">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-12">
                            <div class="text-center mb-4 pb-2">
                                <i class="fas fa-quote-left fa-3x text-white"></i>
                            </div>
                            <div class="card">
                                <div class="card-body px-4 py-5">
                                    <div id="carouselLightVariant" class="carousel slide carousel-dark" data-mdb-ride="carousel">
                                        <div class="carousel-inner pb-5">
                                        {TestonomialData.map((item,index)=>
                                            <div class={cursol===index ? "":"cur-item"} >
                                                <div class="row d-flex justify-content-center">
                                                    <div class="col-lg-10 col-xl-8">
                                                        <div class="row" key={index} >
                                                            <div class="col-lg-4 d-flex justify-content-center">
                                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                                                    class="rounded-circle shadow-1 mb-4 mb-lg-0" alt="woman avatar" width="150"
                                                                    height="150" />
                                                            </div>
                                                            <div class="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                                                <h4 class="mb-4">{item.name}</h4>
                                                                <p class="mb-0 pb-3">
                                                                   {item.testimonial}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )} 
                                        </div>
                                        <button class="carousel-control-prev" type="button" onClick={()=>{TogglePrev(cursol)}}>
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        </button>
                                        <button class="carousel-control-next" type="button" onClick={()=>{ToggleNext(cursol)}}>
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div class="text-center mt-4 pt-2">
                                <i class="fas fa-quote-right fa-3x text-white"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment >

    )
}

export default Testonomial