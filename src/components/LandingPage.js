// import React, { useEffect, useRef } from 'react'
// import './css/LandingPage.css'
// import bgVideo from '../videos/background-video.mp4'
// function LandingPage() {
//     const videoEl = useRef(null);
//     const attemptPlay = () => {
//         videoEl &&
//             videoEl.current &&
//             videoEl.current.play().catch(error => {
//                 console.error("Error attempting to play", error);
//             });
//     };
//     useEffect(() => {
//         attemptPlay();
//     }, []);
//     return (
//         <React.Fragment>
//             <div class="left-ctr-1">
//                 <span>
//                     <h1>Code</h1>
//                 </span>
//                 <span>
//                     <h1>Iterate <span class="yellow-amp">&amp; </span></h1>
//                 </span>
//                 <span>
//                     <h1>Excel</h1>
//                 </span>
//                 <span>
//                     <h1>Welcome</h1>
//                 </span>
//                 <span>
//                     <h1>To Our Family</h1>
//                 </span>
//             </div>
//             <div class="video-background">
//                 <video
//                     style={{ maxWidth: "100%", margin: "0 auto" }}
//                     playsInline
//                     loop
//                     muted
//                     ref={videoEl}
//                 >
//                     <source src={bgVideo}></source>
//                 </video>
//             </div>

//             <div class="right-ctr">
//                 <div class="right-ctr-box">
//                     <div class="right-ctr-box-inner-1">
//                         <h1>Join Our Family</h1>
//                         <p>Competitive programming Club</p>
//                     </div>
//                     <div class="right-ctr-box-inner-2">
//                         <h1>Login<img src="" width="15" alt="" /></h1>
//                         <p>#Code<br /> #love<br /> #eat</p>
//                     </div>
//                 </div>
//             </div>
//         </React.Fragment>
//     )
// }

// export default LandingPage

import React, { useEffect, useRef } from 'react'
import './css/LandingPage.css'
import bgVideo from '../videos/background-video.mp4'

function LandingPage() {
    const videoEl = useRef(null);

    const attemptPlay = () => {
        if (videoEl.current) {
            videoEl.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
        }
    };

    useEffect(() => {
        attemptPlay();
    }, []);

    return (
        <React.Fragment>
            <div className="left-ctr">
                <span>
                    <h1>Code</h1>
                </span>
                <span>
                    <h1>Iterate <span className="yellow-amp">&amp; </span></h1>
                </span>
                <span>
                    <h1>Excel</h1>
                </span>
                <span>
                    <h1>Welcome</h1>
                </span>
                <span>
                    <h1>To Our Family</h1>
                </span>
            </div>
            <div className="video-background">
                <video
                    style={{ maxWidth: "100%", width: "100%" }}
                    playsInline
                    loop
                    muted
                    ref={videoEl}
                >
                    <source src={bgVideo}></source>
                </video>
            </div>

            <div className="right-ctr">
                <div className="right-ctr-box">
                    <div className="right-ctr-box-inner">
                        <h1>Join Our Family</h1>
                        <p>Competitive Programming Club</p>
                    </div>
                    <div className="right-ctr-box-inner">
                        <h1>Login<img src="" width="15" alt="" /></h1>
                        <p>#Code<br /> #Love<br /> #Eat</p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default LandingPage;
