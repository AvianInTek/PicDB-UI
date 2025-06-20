"use client";


import NotificationButtons from "@/components/dashboard/notification";
import Report from "@/components/dashboard/report/main";
import Policy from "@/components/pop/policy";
// import dynamic from "next/dynamic";

// const Loading = dynamic(() => import("@/components/main/loading"), { ssr: false });

export default function ReportPage() {
    return (
        <div className="h-screen">
            <Policy />
            <NotificationButtons />
            <Report />
        </div>
    );
}
