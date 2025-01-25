'use client'
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function MyApp() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "online-talk" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return <button data-cal-namespace="online-talk"
        data-cal-link="michael-dam/online-talk"
        data-cal-config='{"layout":"month_view"}'
        className="underline"
    >Book a Meeting</button>;
};
