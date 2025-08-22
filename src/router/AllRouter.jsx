import React from "react";
import { Routes, Route } from "react-router-dom";  
import AdminLayout from "../Layout/AdminLayput";
import Home from "../pages/Home";
import AffiliateDashboard from "../pages/AffiliateDashboard";
import AffiliateCommission from "../pages/AffiliateCommission";
import SpecialCommission from "../pages/SpecialCommission";
import AffiliateCoupons from "../pages/AffiliateCoupons";
import AffiliateSales from "../pages/AffiliateSales";
import AffiliateDoctors from "../pages/AffiliateDoctors";
import PaymentPending from "../pages/PaymentPending";
import PaymentHistory from "../pages/PaymentHistory";
import Customization from "../pages/Customization";
import CustomizationApp from "../pages/CustomizationApp";
import AddFaq from "../pages/AddFaq"; 

export default function AllRouter() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Home />} />
        <Route path="affiliate">
          <Route path="dashboard" element={<AffiliateDashboard />} />
          <Route path="commission" element={<AffiliateCommission />} />
          <Route path="commission/:id" element={<SpecialCommission />} />
          <Route path="coupons" element={<AffiliateCoupons />} />
          <Route path="sales" element={<AffiliateSales />} />
          <Route path="doctors" element={<AffiliateDoctors />} />
        </Route>
        <Route path="payment">
          <Route path="pending" element={<PaymentPending />} />
          <Route path="history" element={<PaymentHistory />} />
        </Route>
        <Route path="customization">
          <Route index element={<Customization />} />
          <Route path="app" element={<CustomizationApp />} />
          <Route path="app/add" element={<AddFaq />} />
        </Route>
      </Route>
    </Routes>
  )
}
