import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { RefreshCcw, Download, ArrowUpDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FAQ() {
const navigate = useNavigate(); 
  const tabTriggerClass =
    "border-0 shadow-none text-grey-600 outline-none ring-0 focus-visible:ring-0 " +
    "data-[state=active]:shadow-none data-[state=active]:border-0 " +
    "data-[state=active]:outline-none data-[state=active]:ring-0 " +
    "data-[state=active]:text-[#3A643B] data-[state=active]:underline -2";

  const faqs = [
    {
      q: "What types of consultations are available?",
      a: "We offer video, audio, and chat consultations with certified practitioners.",
    },
    {
      q: "Can I get refund for the wallet money?",
      a: "Refunds are possible only in case of failed transactions. Otherwise, wallet money is non-refundable.",
    },
    {
      q: "What is the Amrutam Forum?",
      a: "The Amrutam Forum is a community where users can ask health-related questions and interact with experts.",
    },
    {
      q: "Can I pause the audio consultation?",
      a: "No, once an audio consultation starts, it cannot be paused. You may rebook if needed.",
    },
    {
      q: "Is there a minimum duration for an audio consultation?",
      a: "Yes, the minimum duration for an audio consultation is 15 minutes.",
    },
  ];

 const handleAddFAQ = () => {
    navigate("/Customization/App/add");
  };

  return (
    <div className="bg-white rounded-xl shadow p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-3">
        <div className="flex gap-3 items-center w-full md:w-auto">
          <h2 className="text-lg font-semibold">FAQ List</h2>
          <div className="relative flex items-center w-full md:w-64 bg-gray-50 rounded-lg px-3 py-2">
            <Input
              placeholder="Search here"
              className="border-0 shadow-none focus-visible:ring-0 bg-transparent p-0 text-gray-700 placeholder:text-gray-400"
            />
            <RefreshCcw className="h-4 w-4 text-[#3A643B] ml-2 cursor-pointer" />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <Button className="bg-[#3A643B] text-white hover:bg-[#325a33] rounded-lg" onClick={handleAddFAQ}>
            Add New FAQ
          </Button>

          <div className="hidden md:flex gap-2">
            <Button
              variant="outline"
              size="icon"
              className="bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <ArrowUpDown className="h-4 w-4 text-[#3A643B]" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-gray-50 rounded-lg hover:bg-gray-100"
            >
              <Download className="h-4 w-4 text-[#3A643B]" />
            </Button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="consultation" className="w-full">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="consultation" className={tabTriggerClass}>
            Consultation
          </TabsTrigger>
          <TabsTrigger value="shop" className={tabTriggerClass}>
            Shop
          </TabsTrigger>
          <TabsTrigger value="wallet" className={tabTriggerClass}>
            Wallet
          </TabsTrigger>
          <TabsTrigger value="forum" className={tabTriggerClass}>
            Forum
          </TabsTrigger>
          <TabsTrigger value="additional" className={tabTriggerClass}>
            Additional
          </TabsTrigger>
        </TabsList>

        <TabsContent value="consultation" className="mt-6">
          <Accordion
            type="single"
            collapsible
            className="w-full border rounded-lg divide-y"
          >
            {Array.from(
              new Map(faqs.map((item) => [item.q, item])).values()
            ).map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="px-4 py-2">
                  <div className="flex items-center gap-3 px-4">
                    <span className="cursor-move">⋮⋮</span>
                    <input type="checkbox" className="h-4 w-4" />
                    <span>{item.q}</span>
                  </div>
                </AccordionTrigger>

                <AccordionContent className="px-10 pb-4 text-sm text-gray-600">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Pagination */}
          <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
            <span>Rows per page: 8</span>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                &lt;
              </Button>
              <span className="px-2 py-1 border rounded">1</span>
              <Button variant="ghost" size="icon">
                &gt;
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
