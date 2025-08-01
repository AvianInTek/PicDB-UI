"use client";


import NotificationButtons from "@/components/dashboard/notification";
import Trash from "@/components/dashboard/trash/main";
import Policy from "@/components/pop/policy";
// import dynamic from "next/dynamic";

// const Loading = dynamic(() => import("@/components/main/loading"), { ssr: false });

export default function FavoritePage() {
    return (
        <div className="h-screen">
            <Policy />
            <NotificationButtons />
            <Trash />
        </div>
    );
}
