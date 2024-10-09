import { useEffect, useRef } from "react";
import Typed from "typed.js";
import '../typejs/type.css'
// my picture section part
export function Type() {
    // Create Ref element
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [" Web Developer.", " Freelancer."],
            // Speed setting
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            smartBackspace: true,
            loop: true,
            showCursor: true,
        });
        // Destroy typying
        return () => {
            typed.destroy()
        };
    }, []);

    return (
        <div className='fs-3'>
            <h6 className='website' data-aos="zoom-out">WELCOME TO MY WEBSITE</h6>
            <h4 className='fs-1' data-aos="fade-up">Hi, I'm
                <span className='mushk'> Muskan Khan</span> a<br></br>
                {/* Element to display typing strings */}
                <span ref={el} >  </span>
            </h4>
        </div>
    );
}