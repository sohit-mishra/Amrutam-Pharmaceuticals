import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Order from "@/assets/order.svg";
import calender from "@/assets/calender.svg";
import doctor from "@/assets/doctor.svg";
import revenue from "@/assets/Revenue.svg";
import femaleDoctor from "@/assets/femaledoctor.png";
import { ArrowUp, ArrowDown } from "lucide-react";
import Malt from '@/assets/malt.png';
import Hair from '@/assets/hair.png';
import Lozenge from '@/assets/Lozenge.png';


export default function MonthSoFar() {
  const stats = [
    {
      label: "Total Coupons clicks",
      image: calender,
      value: "255",
      suffix: "/month",
    },
    { label: "Total Orders", image: Order, value: "55", suffix: "/month" },
    {
      label: "Total Revenue",
      image: revenue,
      value: "5,540",
      suffix: "/month",
    },
    { label: "Total Doctors", image: doctor, value: "5", suffix: "/month" },
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Meenal",
      role: "Gynecology + 2 others",
      change: "+8%",
      positive: true,
    },
    {
      id: 2,
      name: "Dr. Pallav",
      role: "Gynecology + 2 others",
      change: "+1%",
      positive: true,
    },
    {
      id: 3,
      name: "Dr. Sapna",
      role: "Gynecology + 2 others",
      change: "-2%",
      positive: false,
    },
  ];

  const products = [
    { id: 1, name: "Amrutam Nari Sondarya Malt", img: Malt },
    {
      id: 2,
      name: "Amrutam Bhringraj Hair Therapy",
      img: Hair,
    },
    { id: 3, name: "Amrutam Lozenge Malt", img: Lozenge},
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <Card className="rounded-2xl shadow-md">
              <CardContent className="p-4 text-left">
                <p className="text-black-600 text-1xl font-medium mb-3">
                  {stat.label}
                </p>
                <div className="flex items-center">
                  <img src={stat.image} className="mr-3" />

                  <div className="flex items-end">
                    <p className="text-3xl font-bold text-[#28643B]">
                      {stat.value}
                    </p>
                    <p className="text-md text-gray-400">{stat.suffix}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">
              Top Affiliate Doctors
            </h2>
            <div className="space-y-4">
              {doctors.map((doc, index) => (
                <div key={doc.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span>{index + 1}</span>
                    <Avatar>
                      <img
                        src={femaleDoctor}
                        className="w-200 h-15 object-cover rounded-full"
                      />
                      <AvatarFallback>{doc.name.charAt(3)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{doc.name}</p>
                      <p className="text-xs text-gray-500">{doc.role}</p>
                    </div>
                  </div>
                  <span
                    className={`text-sm px-2 py-1 rounded-full flex items-center gap-1 ${
                      doc.positive
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {doc.positive ? (
                      <ArrowUp className="w-4 h-4" />
                    ) : (
                      <ArrowDown className="w-4 h-4" />
                    )}
                    {doc.change}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-4">
            <h2 className="text-lg font-semibold mb-4">
              Top Affiliate Products
            </h2>
            <div className="space-y-4">
              {products.map((prod, idx) => (
                <div key={prod.id} className="flex items-center gap-3">
                  <span className="text-sm font-bold w-5">{idx + 1}.</span>
                  <Avatar>
                    <AvatarImage src={prod.img} />
                    <AvatarFallback>{prod.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <p className="text-sm">{prod.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}
