import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function BreadcrumbComponent({ items }) {
  return (
    <motion.nav
      className="text-sm mb-4 overflow-x-auto scrollbar-hide hidden md:block"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <ol className="flex items-center whitespace-nowrap text-gray-600 min-w-max">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <motion.li
              key={index}
              className="flex items-center"
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {index > 0 && <span className="mx-2 text-gray-400">›</span>}
              {item.href && !isLast ? (
                <Link to={item.href} className="hover:underline text-gray-600">
                  {item.label}
                </Link>
              ) : (
                <span
                  className={`font-medium ${
                    isLast ? "text-[#28643B]" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </span>
              )}
            </motion.li>
          );
        })}
      </ol>
    </motion.nav>
  );
}
