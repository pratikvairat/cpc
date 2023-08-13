import React from 'react';
import "./css/Testonomial.css";
import Img from "../img/profile.png"
function Testonomial() {
    return (
        <React.Fragment>
            <section class="gradient-custom">
                <div class="container my-5 py-5">
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-12">
                            <div class="text-center mb-4 pb-2">
                                <i class="fas fa-quote-left fa-3x text-white"></i>
                            </div>

                            <div class="card">
                                <div class="card-body px-4 py-5">
                                    <div id="carouselDarkVariant" class="carousel slide carousel-dark" data-mdb-ride="carousel">
                                        <div class="carousel-inner pb-5">
                                            <div class="carousel-item active">
                                                <div class="row d-flex justify-content-center">
                                                    <div class="col-lg-10 col-xl-8">
                                                        <div class="row">
                                                            <div class="col-lg-4 d-flex justify-content-center">
                                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                                                                    class="rounded-circle shadow-1 mb-4 mb-lg-0" alt="woman avatar" width="150"
                                                                    height="150" />
                                                            </div>
                                                            <div
                                                                class="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                                                <h4 class="mb-4">Maria Smantha - Web Developer</h4>
                                                                <p class="mb-0 pb-3">
                                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                                                                    aliquam amet animi blanditiis consequatur debitis dicta
                                                                    distinctio, enim error eum iste libero modi nam natus
                                                                    perferendis possimus quasi sint sit tempora voluptatem. Est,
                                                                    exercitationem id ipsa ipsum laboriosam perferendis.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="carousel-item">
                                                <div class="row d-flex justify-content-center">
                                                    <div class="col-lg-10 col-xl-8">
                                                        <div class="row">
                                                            <div class="col-lg-4 d-flex justify-content-center">
                                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                                                                    class="rounded-circle shadow-1 mb-4 mb-lg-0" alt="woman avatar" width="150"
                                                                    height="150" />
                                                            </div>
                                                            <div
                                                                class="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                                                <h4 class="mb-4">Lisa Cudrow - Graphic Designer</h4>
                                                                <p class="mb-0 pb-3">
                                                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                                                    accusantium doloremque laudantium, totam rem aperiam, eaque
                                                                    ipsa quae ab illo inventore veritatis et quasi architecto
                                                                    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                                                                    quia voluptas sit aspernatur.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>


                                            <div class="carousel-item">
                                                <div class="row d-flex justify-content-center">
                                                    <div class="col-lg-10 col-xl-8">
                                                        <div class="row">
                                                            <div class="col-lg-4 d-flex justify-content-center">
                                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
                                                                    class="rounded-circle shadow-1 mb-4 mb-lg-0" alt="woman avatar" width="150"
                                                                    height="150" />
                                                            </div>
                                                            <div
                                                                class="col-9 col-md-9 col-lg-7 col-xl-8 text-center text-lg-start mx-auto mx-lg-0">
                                                                <h4 class="mb-4">John Smith - Marketing Specialist</h4>
                                                                <p class="mb-0 pb-3">
                                                                    At vero eos et accusamus et iusto odio dignissimos qui
                                                                    blanditiis praesentium voluptatum deleniti atque corrupti quos
                                                                    dolores et quas molestias excepturi sint occaecati cupiditate
                                                                    non provident, similique sunt in culpa qui officia mollitia
                                                                    animi id laborum et dolorum fuga.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <button class="carousel-control-prev" type="button">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>

                                        </button>
                                        <button class="carousel-control-next" type="button">
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
            </section>
        </React.Fragment >

    )
}

export default Testonomial