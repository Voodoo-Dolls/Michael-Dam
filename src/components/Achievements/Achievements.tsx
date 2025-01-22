'use client'
import { Reveal } from "../Framer/Reveal/Reveal";
import { AnimatedNumber } from "../Framer/AnimatedNumber/AnimatedNumber";



const achievementsList = [
    {
        metric: "Projects",
        value: 10,
        postfix: "+",
    },
    {
        metric: "Commits",
        value: 1000,
        postfix: "+",
    },
    {
        metric: "Years of Experience",
        value: 2,
    },
    {
        metric: "Clients Served",
        value: 7
    }
];


export default function Achievements() {
    return (
        <div className={`p-8 mb-4 bg-opacity-50 bg-black2 relative`}>
            <div className={`w-full h-full absolute top-0 left-0 pattern`}></div>
            <div className="container grid gap-6 p-4 mx-auto text-center md:grid-cols-2 lg:grid-cols-4">
                {achievementsList.map((achievement, index) => {
                    return (
                        <Reveal key={index} delay={index}>

                            <div>
                                <div className="flex justify-center">
                                    <p className="font-bold text-h1">
                                        <span className="text-primary drop-shadow-2xl">
                                            <AnimatedNumber
                                                value={achievement.value}
                                                delay={index}
                                            />
                                            {achievement.postfix}
                                        </span>
                                    </p>

                                </div>
                                <p className="font-bold text-white text-h3">{achievement.metric} </p>
                            </div>
                        </Reveal>
                    )
                })}
            </div>
        </div>
    );
};
