import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import BreadcrumbComponent from "@/allCompoent/BreadcrumbComponent";
import { motion } from "framer-motion";
import FAQ from "@/allCompoent/FAQ";

export default function CustomizationApp() {
  const tabTriggerClass =
    "border-0 shadow-none text-grey-600 outline-none ring-0 focus-visible:ring-0 " +
    "data-[state=active]:shadow-none data-[state=active]:border-0 " +
    "data-[state=active]:outline-none data-[state=active]:ring-0 " +
    "data-[state=active]:text-[#3A643B] data-[state=active]:underline -2";

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-10">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <BreadcrumbComponent
          items={[
            { label: "FAQ" },
            { label: "App" },
            { label: "Customization", href: "Customization/App" },
          ]}
        />
      </motion.div>

      <Tabs defaultValue="faq" className="mt-6 w-full">
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="banners" className={tabTriggerClass}>
            Banners
          </TabsTrigger>
          <TabsTrigger value="per-page-products" className={tabTriggerClass}>
            Per Page Products
          </TabsTrigger>
          <TabsTrigger value="ingredients" className={tabTriggerClass}>
            Ingredients
          </TabsTrigger>
          <TabsTrigger value="faq" className={tabTriggerClass}>
            FAQ
          </TabsTrigger>
        </TabsList>

        {/* FAQ Tab */}
        <TabsContent value="faq" className="mt-6">
          <Tabs defaultValue="consumer" className="w-full">
            <TabsList className="grid grid-cols-2 w-full">
              <TabsTrigger value="consumer" className={tabTriggerClass}>Consumer</TabsTrigger>
              <TabsTrigger value="doctor" className={tabTriggerClass}>Doctor</TabsTrigger>
            </TabsList>

            <TabsContent value="consumer">
              <FAQ/>
            </TabsContent>
            <TabsContent value="doctor">
              <FAQ/>
            </TabsContent>
          </Tabs>
        </TabsContent>

        <TabsContent value="banners" className="mt-6">
          <div className="p-4">Banners Settings</div>
        </TabsContent>
        <TabsContent value="per-page-products" className="mt-6">
          <div className="p-4">Per Page Products Settings</div>
        </TabsContent>
        <TabsContent value="ingredients" className="mt-6">
          <div className="p-4">Ingredients Settings</div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
