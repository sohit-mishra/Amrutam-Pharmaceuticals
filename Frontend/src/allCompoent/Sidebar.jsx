import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import DashboardIcon from "@/assets/icon/Dashboard.svg";
import DoctorIcon from "@/assets/icon/Doctor.svg";
import AppointmentIcon from "@/assets/icon/Appointment.svg";
import ConcernsIcon from "@/assets/icon/Concerns.svg";
import CouponsIcon from "@/assets/icon/Coupons.svg";
import CustomizationsIcon from "@/assets/icon/Customizations.svg";
import PatientsIcon from "@/assets/icon/Patients.svg";
import ReferralIcon from "@/assets/icon/Referral.svg";
import SpecialtiesIcon from "@/assets/icon/Specialties.svg";
import Message from "@/assets/message.svg";

const sidebarItems = [
  {
    icon: <img src={DashboardIcon} alt="Dashboard" className="w-5 h-5" />,
    label: "Dashboard",
    submenu: [
      { label: "Dashboard", path: "/" },
      { label: "Profile", path: "/profile" },
    ],
  },
  {
    icon: <img src={DoctorIcon} alt="Doctor" className="w-5 h-5" />,
    label: "Doctor",
    submenu: [
      { label: "Doctor List", path: "/doctor" },
      { label: "Doctor Add", path: "/doctor/add" },
    ],
  },
  {
    icon: <img src={PatientsIcon} alt="Patients" className="w-5 h-5" />,
    label: "Patients",
    submenu: [
      { label: "Patients List", path: "/patients" },
      { label: "Patients Add", path: "/patients/add" },
    ],
  },
  {
    icon: <img src={AppointmentIcon} alt="Appointment" className="w-5 h-5" />,
    label: "Appointment",
    submenu: [
      { label: "Appointment List", path: "/appointment" },
      { label: "Appointment Add", path: "/appointment/add" },
    ],
  },
  {
    icon: <img src={SpecialtiesIcon} alt="Specialties" className="w-5 h-5" />,
    label: "Specialties",
    submenu: [
      { label: "Specialties List", path: "/specialties" },
      { label: "Specialties Add", path: "/specialties/add" },
    ],
  },
  {
    icon: <img src={CouponsIcon} alt="Coupons" className="w-5 h-5" />,
    label: "Coupons",
    submenu: [
      { label: "Coupons List", path: "/coupons" },
      { label: "Coupons Add", path: "/coupons/add" },
    ],
  },
  {
    icon: <img src={ConcernsIcon} alt="Concerns" className="w-5 h-5" />,
    label: "Concerns",
    submenu: [
      { label: "Concerns List", path: "/concerns" },
      { label: "Concerns Add", path: "/concerns/add" },
    ],
  },
  {
    icon: <img src={ReferralIcon} alt="Referral" className="w-5 h-5" />,
    label: "Referral",
    submenu: [
      { label: "Referral List", path: "/referral" },
      { label: "Referral Add", path: "/referral/add" },
    ],
  },
  {
    icon: <img src={Message} alt="Customization" className="w-5 h-5" />,
    label: "Customization",
    submenu: [
      { label: "Web ", path: "/Customization" },
      { label: "App", path: "/Customization/App" },
    ],
  },
  {
    icon: <img src={CustomizationsIcon} alt="Affiliate" className="w-5 h-5" />,
    label: "Affiliate",
    submenu: [
      { label: "Dashboard", path: "/affiliate/dashboard" },
      { label: "Commission", path: "/affiliate/commission" },
      { label: "Coupons", path: "/affiliate/coupons" },
      {
        label: "Payment",
        submenu: [
          { label: "Pending Payment", path: "/payment/pending" },
          { label: "Payment History", path: "/payment/history" },
        ],
      },
      { label: "Sales", path: "/affiliate/sales" },
      { label: "Doctors", path: "/affiliate/doctors" },
    ],
  },
];

function Sidebar() {
  const location = useLocation();
  const [openMenus, setOpenMenus] = useState([]);

  const toggleMenu = (label) => {
    setOpenMenus((prev) =>
      prev.includes(label) ? prev.filter((m) => m !== label) : [...prev, label]
    );
  };

  const renderSubmenu = (submenu, level = 1) => (
    <ul className={`mt-2 ml-${level * 4} space-y-1`}>
      {submenu.map((sub) => {
        const isActive = sub.path && location.pathname === sub.path;
        const isOpen = sub.submenu && openMenus.includes(sub.label);

        return (
          <li key={sub.label}>
            {sub.submenu ? (
              <>
                <button
                  onClick={() => toggleMenu(sub.label)}
                  className={`flex w-full items-center justify-between px-2 py-1 rounded-md text-sm ${
                    isOpen ? "text-[#3A643B] font-medium" : "text-gray-600"
                  }`}
                >
                  <span>{sub.label}</span>
                  {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  {renderSubmenu(sub.submenu, level + 1)}
                </motion.div>
              </>
            ) : (
              <Link
                to={sub.path || "#"}
                className={`block px-2 py-1 rounded-md text-sm ${
                  isActive
                    ? "text-[#3A643B] font-medium bg-gray-100"
                    : "text-gray-600 hover:text-[#3A643B] hover:bg-gray-50"
                }`}
              >
                {sub.label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <motion.aside
      initial={{ x: -250 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 }}
      className="w-60 h-screen overflow-y-auto pt-8 bg-white border-r p-4 pb-20"
    >
      <h2 className="text-md font-semibold text-gray-500 tracking-wider px-2 mb-3">
        Main
      </h2>
      <nav className="space-y-2">
        {sidebarItems.map((item) => {
          const isOpen = openMenus.includes(item.label);

          return (
            <div key={item.label}>
              {item.submenu ? (
                <>
                  <button
                    onClick={() => toggleMenu(item.label)}
                    className={`w-full flex items-center justify-between px-2 py-2 rounded hover:bg-gray-100 ${
                      isOpen ? "bg-gray-100 font-medium" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2 text-[#3A643B]">
                      {item.icon}
                      <span className="text-sm">{item.label}</span>
                    </div>
                    {isOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                  </button>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="ml-4 overflow-hidden"
                  >
                    {renderSubmenu(item.submenu)}
                  </motion.div>
                </>
              ) : (
                <Link
                  to={item.path || "#"}
                  className="flex items-center gap-2 px-2 py-2 rounded text-sm hover:bg-gray-100"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </motion.aside>
  );
}

export default Sidebar;
