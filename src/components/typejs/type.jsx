import { useEffect, useRef } from "react";
import Typed from "typed.js";
// my picture section part
export function Type() {
    // Create Ref element
    const kuchb = useRef(null);
    useEffect(() => {
        const typed = new Typed(kuchb.current, {
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
        <div className="md:mt-24 mt-28 md:mx-24 md:px-14 px-4 flex flex-col items-start text-start text-white">
            <h1 className="text-4xl font-medium">Hey</h1>
            <h4 className="text-md mt-2 animate-zoom-out font-light" data-aos="zoom-out">WELCOME TO MY WEBSITE</h4>
            <h4 className="text-5xl font-light" data-aos="fade-up">
                I'm
                <span className="text-primary"> Muskan Khan</span> a<br />
                <span ref={kuchb}></span>
            </h4>
            <button class="flex items-start px-5 mb-5 mt-3 bg-yellow-500 hover:bg-yellow-600 transition-colors duration-200  text-white border-0 py-2 focus:outline-none rounded text-md">CONTACT</button>
        </div>
    );
}