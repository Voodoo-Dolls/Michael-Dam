'use client'
import dynamic from "next/dynamic";
const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
    ssr: false,
});

const achievementsList = [
    {
        metric: "Projects",
        value: "10",
        postfix: "+",
    },
    {
        metric: "Commits",
        value: "1000",
        postfix: "+",
    },
    {
        metric: "Years of Experience",
        value: "2",
    },
    {
        metric: "Clients Served",
        value: "7"
    }
];

export default function Achievements() {
    return (
        <div className="container grid gap-6 p-4 mx-auto text-center md:grid-cols-2 lg:grid-cols-4">
            {achievementsList.map((achievement, index) => {
                return (
                    <div key={index} className="text-h1">
                        <div className="flex justify-center">
                            <AnimatedNumbers
                                includeComma
                                animateToNumber={parseInt(achievement.value)}
                                locale="en-US"
                                className="text-4xl font-bold text-white"
                                transitions={(index) => ({
                                    type: "spring",
                                    duration: index + 0.3,
                                })}
                            />

                            {achievement.postfix}
                        </div>
                        <h3>{achievement.metric} </h3>
                    </div>
                )
            })}
        </div>
    );
};
