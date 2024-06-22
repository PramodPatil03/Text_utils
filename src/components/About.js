import React from 'react'
// import React, { useState } from 'react'

export default function About(props) {
    document.title = 'TextUtils - About Us';
    // const [myStyle,nxt] = useState(
    //     {
    //         color:'black',
    //         backgroundColor:'white'
    //     }
    // );
    // const [btnText,setBtnText] = useState("Enable Dark mode");
    // const toggleView = () =>{
    //     if(myStyle.color === 'black'){
    //         nxt(
    //             {
    //                 color:'white',
    //                 backgroundColor:'black'
    //             }
    //         )
    //         setBtnText("Light mode");
    //     }else{
    //         nxt(
    //             {
    //                 color:'black',
    //                 backgroundColor:'white'
    //             }
    //         );
    //         setBtnText("Dark Mode");
    //     }
    // }
    
    return (
        <>
            <h3>About Us</h3>
            <div className={`Container bg-${props.mode} text-${props.mode === 'dark'? 'light':'dark'}`} >
            <div className="accordion" id="accordionExample">
                <div className={`accordion-item bg-${props.mode} text-${props.mode === 'dark'? 'light':'dark'} my-4`}>
                    <h2 className={`accordion-header my-1 bg-${props.mode} text-${props.mode === 'dark'? 'light':'dark'}  `}>
                        <button className={`accordion-button bg-${props.mode} text-${props.mode === 'dark'? 'light':'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            The Developer
                        </button>
                    </h2>
                    <div id="collapseOne" className={`accordion-collapse collapse show bg-${props.mode} text-${props.mode === 'dark'? 'light':'dark'}`} data-bs-parent="#accordionExample">
                        <div className={`accordion-body bg-${props.mode} text-${props.mode === 'dark'? 'light':'dark'}`}>
                            <strong>Pramod Patil</strong> 8th sem CSE undergraduate student at HIT Nidasoshi. He is a passionate developer who love to develop react based websites.
                        </div>
                    </div>
                </div>
                <div className={`accordion-item bg-${props.mode} text-${props.mode === 'dark'? 'light':'dark'}`}>
                    <h2 className={`accordion-header my-1 bg-${props.mode} text-${props.mode === 'dark'? 'light':'dark'}`}>
                        <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'dark'? 'light':'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            About this website
                        </button>
                    </h2>
                    <div id="collapseTwo" className={  `accordion-collapse collapse bg-${props.mode} text-${props.mode === 'dark'? 'light':'dark'}`} data-bs-parent="#accordionExample">
                        <div className={`accordion-body bg-${props.mode} text-${props.mode === 'dark'? 'light':'dark'}`}>
                            <strong>This is a demo website</strong> This website is my first react based website made for understanding how to make react frameworked websites
                        </div>
                    </div>
                </div>
                <div className="accordion-item">  
                    <h2 className="accordion-header">
                        <button className= {`accordion-button collapsed bg-${props.mode} text-${props.mode === 'dark'? 'light':'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
                            Show up
                        </button>
                    </h2>
                    <div id="collapseThree" className={`accordion-collapse collapse bg-${props.mode} text-${props.mode === 'dark'? 'light':'dark'}`} data-bs-parent="#accordionExample">
                        <div className={`accordion-body bg-${props.mode} text-${props.mode === 'dark'? 'light':'dark'}`} >
                            <strong>This is the third item's accordion body.</strong> It isCreated for show up purpose
                        </div>
                    </div>
                </div>
            </div>
            {/* <button className={`btn btn-${props.mode}`} onClick={toggleView}>{btnText}</button> */}
            </div>
        </>
    )
}
