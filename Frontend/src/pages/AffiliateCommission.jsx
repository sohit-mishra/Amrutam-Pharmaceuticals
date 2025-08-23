import { useState } from "react";
import { motion } from "framer-motion";
import BreadcrumbComponent from "@/allCompoent/BreadcrumbComponent";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import TableData from "@/allCompoent/TableData";

export default function AffiliateCommission() {
  const [enabled, setEnabled] = useState(false);

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
            { label: "Affiliate" },
            { label: "Commission", href: "/affiliate/commission" },
          ]}
        />
      </motion.div>

      <div className="flex items-center justify-end space-x-4">
        <Button className="px-6 md:px-10 bg-[#28643B] hover:bg-[#1f4f2d]">
          Add Special Commission
        </Button>
      </div>

      <div className="flex justify-between items-center mt-6">
        <h1 className="text-2xl font-bold">Default Product Commission</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setEnabled(!enabled)}
            className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 border border-[#3A643B] bg-white`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-[#3A643B] transition-transform duration-300 ${
                enabled ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
        </div>
      </div>

      <motion.div
        className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
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
          <Input
            type="text"
            placeholder="Applies to all the Product"
            className="w-full bg-transparent text-sm border border-gray-300 rounded"
          />
        </motion.div>

        <motion.div
          className="w-full"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Label className="mb-2 block">
            Usage Limit* <span className="text-red-500">*</span>
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
      </motion.div>

      <div className="flex justify-end mt-10">
        <Button className="px-10 md:px-6 bg-[#28643B] hover:bg-[#1f4f2d]">
          Update
        </Button>
      </div>

      <motion.div>
        <div className="flex justify-between items-center mt-6">
          <h1 className="text-2xl font-bold">Default Doctor Commission</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setEnabled(!enabled)}
              className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors duration-300 border border-[#3A643B] bg-white`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-[#3A643B] transition-transform duration-300 ${
                  enabled ? "translate-x-6" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } },
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
            Doctor <span className="text-red-500">*</span>
          </Label>
          <Input
            type="text"
            placeholder="Applies to all the Doctors"
            className="w-full bg-transparent text-sm border border-gray-300 rounded"
          />
        </motion.div>

        <motion.div
          className="w-full"
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Label className="mb-2 block">
            Usage Limit* <span className="text-red-500">*</span>
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
      </motion.div>

      <div className="flex justify-end mt-10">
        <Button className="px-10 md:px-6 bg-[#28643B] hover:bg-[#1f4f2d]">
          Update
        </Button>
      </div>

      <TableData/>
    </motion.div>
  );
}
