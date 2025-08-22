import React, { useState } from "react";
import Navbar from "@/allCompoent/Navbar";
import Sidebar from "@/allCompoent/Sidebar";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const NAVBAR_HEIGHT = 64; // navbar height in px

  return (
    <div className="h-screen flex flex-col">
      {/* Navbar */}
      <Navbar toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />

      <div className="flex flex-1" style={{ paddingTop: NAVBAR_HEIGHT }}>
        {/* Desktop Sidebar */}
        <div
          className="hidden md:block w-60 fixed left-0 z-30"
          style={{
            top: NAVBAR_HEIGHT,
            height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
          }}
        >
          <Sidebar />
        </div>

        {/* Mobile Sidebar (overlay) */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black bg-opacity-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <div
              className="w-60 bg-white h-full pt-12 shadow-md transform transition-transform duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              <Sidebar />
            </div>
          </div>
        )}


        <main
          className="flex-1 p-4 pt-4 overflow-auto transition-all"
          style={{
            marginLeft: "0", 
          }}
        >
          <div className="md:ml-60">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
