import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BreadcrumbComponent from "@/allCompoent/BreadcrumbComponent";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function CustomizationApp() {
  const navigate = useNavigate();

  const tabTriggerClass =
    "border-0 shadow-none text-grey-600 outline-none ring-0 focus-visible:ring-0 " +
    "data-[state=active]:shadow-none data-[state=active]:border-0 " +
    "data-[state=active]:outline-none data-[state=active]:ring-0 " +
    "data-[state=active]:text-[#3A643B] data-[state=active]:underline";

  const [form, setForm] = useState({
    platform: "",
    title: "",
    question: "",
    answer: "",
    homepage: "no",
  });

  const handleTabClick = () => {
      navigate(`/Customization/`);
  };

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleClear = () => {
    setForm({ platform: "", title: "", question: "", answer: "", homepage: "no" });
  };

  const handleSubmit = () => {
    console.log("Form Submitted:", form);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-10">
      {/* Breadcrumb */}
      <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
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
          <TabsTrigger value="banners" className={tabTriggerClass} onClick={() => handleTabClick()}>
            Banners
          </TabsTrigger>
          <TabsTrigger value="per-page-products" className={tabTriggerClass} onClick={() => handleTabClick()}>
            Per Page Products
          </TabsTrigger>
          <TabsTrigger value="ingredients" className={tabTriggerClass} onClick={() => handleTabClick()}>
            Ingredients
          </TabsTrigger>
          <TabsTrigger value="faq" className={tabTriggerClass}>
            FAQ
          </TabsTrigger>
        </TabsList>

        <TabsContent value="faq" className="mt-6">
          <h1 className="text-2xl font-bold mt-6">Add New FAQ</h1>

          <motion.div
            className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Platform */}
            <motion.div variants={itemVariants}>
              <Label className="mb-2 block">
                Select Platform <span className="text-red-500">*</span>
              </Label>
              <Select value={form.platform} onValueChange={(val) => handleChange("platform", val)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="web">Web</SelectItem>
                  <SelectItem value="app">App</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>

            {/* Title */}
            <motion.div variants={itemVariants}>
              <Label className="mb-2 block">
                Select Title <span className="text-red-500">*</span>
              </Label>
              <Select value={form.title} onValueChange={(val) => handleChange("title", val)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Title" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title1">Title 1</SelectItem>
                  <SelectItem value="title2">Title 2</SelectItem>
                  <SelectItem value="title3">Title 3</SelectItem>
                </SelectContent>
              </Select>
            </motion.div>
          </motion.div>

          {/* Homepage Radio */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="mt-6">
            <motion.fieldset variants={itemVariants}>
              <legend className="mb-2 block">Add to Homepage?</legend>
              <RadioGroup value={form.homepage} onValueChange={(val) => handleChange("homepage", val)} className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="yes" />
                  <Label htmlFor="yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="no" />
                  <Label htmlFor="no">No</Label>
                </div>
              </RadioGroup>
            </motion.fieldset>
          </motion.div>

          {/* Question & Answer */}
          <motion.div
            className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <Label className="mb-2 block">
                Question <span className="text-red-500">*</span>
              </Label>
              <Textarea
                value={form.question}
                onChange={(e) => handleChange("question", e.target.value)}
                placeholder="Enter the Question"
                className="w-full bg-transparent text-sm border border-gray-300 rounded resize-none h-[100px]"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Label className="mb-2 block">
                Answer <span className="text-red-500">*</span>
              </Label>
              <Textarea
                value={form.answer}
                onChange={(e) => handleChange("answer", e.target.value)}
                placeholder="Enter the Answer"
                className="w-full bg-transparent text-sm border border-gray-300 rounded resize-none h-[100px]"
              />
            </motion.div>
          </motion.div>

          {/* Buttons */}
          <div className="flex justify-end space-x-4 mt-6">
            <Button variant="outline" onClick={handleClear}>
              Clear All
            </Button>
            <Button className="bg-[#28643B] text-white hover:bg-[#1f4d2d]" onClick={handleSubmit}>
              Submit
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
