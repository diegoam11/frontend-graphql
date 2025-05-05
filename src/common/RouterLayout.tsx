import { Sidebar } from "./SideBar";
import { Outlet } from "react-router-dom";

export const RouterLayout = () => {
    return (
        <div className="flex h-screen overflow-hidden border ">
            <Sidebar />
            <div className="flex-1 h-full p-4 bg-gray-100 overflow-hidden">
                <Outlet />
            </div>
        </div>
    );
};
