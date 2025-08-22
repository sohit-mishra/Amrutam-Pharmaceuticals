"use client";

import BreadcrumbComponent from "@/allCompoent/BreadcrumbComponent";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";

export default function SpecialCommission() {
  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BreadcrumbComponent
          items={[
            { label: "Affiliate", href: "/affiliate" },
            { label: "Commission", href: "/affiliate/commission" },
            { label: "Special Commission" },
          ]}
        />
      </motion.div>

      <motion.h1
        className="text-xl font-bold mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        Add Special Commission
      </motion.h1>

      <motion.form
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1, 
            },
          },
        }}
      >
  
        <motion.div
          className="w-full"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Label className="mb-2 block">
            Product <span className="text-red-500">*</span>
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please Select a Product" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="product1">Product 1</SelectItem>
              <SelectItem value="product2">Product 2</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>


        <motion.div
          className="w-full"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Label className="mb-2 block">
            Percentage <span className="text-red-500">*</span>
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please select a Percentage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10%</SelectItem>
              <SelectItem value="20">20%</SelectItem>
              <SelectItem value="30">30%</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

      
        <motion.div
          className="w-full"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Label className="mb-2 block">
            Doctor <span className="text-red-500">*</span>
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please select a Doctor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dr1">Dr. John Doe</SelectItem>
              <SelectItem value="dr2">Dr. Jane Smith</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>
 
        <motion.div
          className="w-full"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Label className="mb-2 block">
            Percentage <span className="text-red-500">*</span>
          </Label>
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please select a Percentage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5%</SelectItem>
              <SelectItem value="10">10%</SelectItem>
              <SelectItem value="15">15%</SelectItem>
            </SelectContent>
          </Select>
        </motion.div>

  
        <motion.div
          className="md:col-span-2 flex justify-end"
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <Button className="w-full md:w-auto bg-[#28643B] hover:bg-[#1f4f2d]">
            Add
          </Button>
        </motion.div>
      </motion.form>
    </motion.div>
  );
}
