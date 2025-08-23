import { motion } from "framer-motion";
import BreadcrumbComponent from "@/allCompoent/BreadcrumbComponent";
import MonthSoFar from "@/allCompoent/MonthSoFar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function AffiliateDashboard() {
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
            { label: "Dashboard", href: "/affiliate/dashboard" },
          ]}
        />
      </motion.div>

      <Tabs defaultValue="month" className="w-full mt-6">
        <TabsList className="w-full flex justify-between bg-white shadow-none">
          <TabsTrigger
            value="today"
            className="flex-1 text-gray-500 data-[state=active]:text-[#28643B] data-[state=active]:underline data-[state=active]:underline-offset-4"
          >
            Today So Far
          </TabsTrigger>
          <TabsTrigger
            value="week"
            className="flex-1 text-gray-500 data-[state=active]:text-[#28643B] data-[state=active]:underline data-[state=active]:underline-offset-4"
          >
            Week So Far
          </TabsTrigger>
          <TabsTrigger
            value="month"
            className="flex-1 text-gray-500 data-[state=active]:text-[#28643B] data-[state=active]:underline data-[state=active]:underline-offset-4"
          >
            Month So Far
          </TabsTrigger>
          <TabsTrigger
            value="custom"
            className="flex-1 text-gray-500 data-[state=active]:text-[#28643B] data-[state=active]:underline data-[state=active]:underline-offset-4"
          >
            Custom
          </TabsTrigger>
        </TabsList>

        <TabsContent value="today">
          <p className="py-50 flex justify-center items-center text-xl text-center">
            Today’s Data
          </p>
        </TabsContent>

        <TabsContent value="week">
          <p className="py-50 flex justify-center items-center text-xl text-center">
            Week Data Component
          </p>
        </TabsContent>

        <TabsContent value="month">
          <MonthSoFar />
        </TabsContent>

        <TabsContent value="custom">
          <p className="py-50 flex justify-center items-center text-xl text-center">
           Custom Data Component
          </p>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}
