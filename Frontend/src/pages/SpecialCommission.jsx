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
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function SpecialCommission() {
  const [product, setProduct] = useState([]);
  const [doctor, setDoctor] = useState([]);
    const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState("");
  const [productPercentage, setProductPercentage] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [doctorPercentage, setDoctorPercentage] = useState("");

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/products`
      );
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDoctor = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/doctors`
      );
      setDoctor(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
    fetchDoctor();
  }, []);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const formData = {
      product: selectedProduct,
      ProductCommission: Number(productPercentage),
      doctor: selectedDoctor,
      DoctorCommission: Number(doctorPercentage),
    };

     try {
    const res = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/commissions`,
      formData
    );
    setSelectedProduct("");
    setProductPercentage("");
    setSelectedDoctor("");
    setDoctorPercentage("");
    navigate("/affiliate/commission");
  } catch (error) {
    console.error("❌ Error saving commission:", error);
  }
  };

  return (
    <motion.div
      className="p-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <BreadcrumbComponent
        items={[
          { label: "Affiliate", href: "/affiliate" },
          { label: "Commission", href: "/affiliate/commission" },
          { label: "Special Commission" },
        ]}
      />

      <motion.h1
        className="text-xl font-bold mb-6"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        Add Special Commission
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full"
      >
        {/* Product */}
        <div>
          <Label>
            Product <span className="text-red-500">*</span>
          </Label>
          <Select onValueChange={setSelectedProduct}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please Select a Product" />
            </SelectTrigger>
            <SelectContent>
              {product?.map((item) => (
                <SelectItem key={item._id} value={item._id}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Product Percentage */}
        <div>
          <Label>
            Percentage <span className="text-red-500">*</span>
          </Label>
          <Select onValueChange={setProductPercentage}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please select a Percentage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10%</SelectItem>
              <SelectItem value="20">20%</SelectItem>
              <SelectItem value="30">30%</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Doctor */}
        <div>
          <Label>
            Doctor <span className="text-red-500">*</span>
          </Label>
          <Select onValueChange={setSelectedDoctor}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please select a Doctor" />
            </SelectTrigger>
            <SelectContent>
              {doctor?.map((item) => (
                <SelectItem key={item._id} value={item._id}>
                  {item.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Doctor Percentage */}
        <div>
          <Label>
            Percentage <span className="text-red-500">*</span>
          </Label>
          <Select onValueChange={setDoctorPercentage}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Please select a Percentage" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5%</SelectItem>
              <SelectItem value="10">10%</SelectItem>
              <SelectItem value="15">15%</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Submit */}
        <div className="md:col-span-2 flex justify-end">
          <Button
            type="submit"
            className="w-full md:w-auto bg-[#28643B] hover:bg-[#1f4f2d]"
          >
            Add
          </Button>
        </div>
      </motion.form>
    </motion.div>
  );
}
