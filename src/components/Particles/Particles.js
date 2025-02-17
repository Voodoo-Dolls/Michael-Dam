'use client'
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
import { useCallback, useMemo } from "react";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (props) => {
    // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
    const options = useMemo(() => {
        // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
        // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
        return {
            background: {
                color: "#121212", // this sets a background color for the canvas
            },
            fullScreen: {
                zIndex: -1, // this is the z-index value used when the fullScreen is enabled, it's 0 by default
            },
            particles: {
                number:{
                    value: 70
                },
                links: {
                    enable: true, // enabling this will make particles linked together
                    distance: 120, // maximum distance for linking the particles
                    color:"#fcd34d",

                },
                move: {
                    enable: true, // enabling this will make particles move in the canvas
                    speed: { min: 1, max: 2 }, // using a range in speed value will make particles move in a random speed between min/max values, each particles have its own value, it won't change in time by default
                },
                opacity: {
                    value: { min: 0.3, max: 0.7 }, // using a different opacity, to have some semitransparent effects
                },
                size: {
                    value: { min: 1, max: 3 }, // let's randomize the particles size a bit
                },
                color:"#fcd34d"
            },
            container:{

            }
        };
    }, []);

    // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
    const particlesInit = useCallback((engine) => {
        loadSlim(engine);
    }, []);

    // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
    return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;