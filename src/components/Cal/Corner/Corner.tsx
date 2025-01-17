'use client'

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function MyApp() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "online-talk" });
            cal("floatingButton", { "calLink": "michael-dam/online-talk", "config": { "layout": "month_view" }, "buttonText": "Book a Meeting", "buttonPosition": "bottom-left", "buttonColor": "#ffffff", "buttonTextColor": "#000000" });
            cal("ui", { "hideEventTypeDetails": false, "layout": "month_view" });

        })();
    }, [])
};