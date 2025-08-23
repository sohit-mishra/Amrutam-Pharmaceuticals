import React from "react";
import { motion } from "framer-motion";
import BreadcrumbComponent from "@/allCompoent/BreadcrumbComponent";
import TemplatePage from '../pages/TemplatePage';

export default function AffiliateSales() {
  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Breadcrumb with animation */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BreadcrumbComponent
          items={[
            { label: "Affiliate" },
            { label: "Sales", href: "/affiliate/sales" },
          ]}
        />
      </motion.div>

      {/* Example Heading */}
      <motion.h1
        className="text-xl font-bold mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <TemplatePage name={"Affiliate Sales"}/>
      </motion.h1>
    </motion.div>
  );
}
