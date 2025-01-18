

import styles from "./Tab.module.css"

const TabButton = ({ title, children, tab, setTab }: any) => {
    // console.log(children)
    return (
        <>
            <button
                onClick={() => setTab(title)}
                className={`order-1 transition-all ${styles.button} ${tab == title ? `text-primary ${styles.border} ` : "text-[#ADB7BE]"}`}>
                {title}
            </button>

            {tab == title && (
                <div className="order-2 w-full">
                    {children}
                </div>
            )}
        </>
    );
};

export default TabButton;