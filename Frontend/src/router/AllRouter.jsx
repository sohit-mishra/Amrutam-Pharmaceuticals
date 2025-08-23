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
import TemplatePage from '../pages/TemplatePage';

export default function AllRouter() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<TemplatePage name={"Dashboard"}/>} />
        <Route path="profile" element={<TemplatePage name={"Profile"}/>} />

        <Route path="doctor" element={<TemplatePage name={"Doctor List"}/>} />
        <Route path="doctor/add" element={<TemplatePage name={"Doctor Add"}/>} />

         <Route path="patients" element={<TemplatePage name={"Patients List"}/>} />
        <Route path="patients/add" element={<TemplatePage name={"Patients Add"}/>} />

  <Route path="appointment" element={<TemplatePage name={"Appointment List"}/>} />
        <Route path="appointment/add" element={<TemplatePage name={"Appointment Add"}/>} />

          <Route path="specialties" element={<TemplatePage name={"Specialties List"}/>} />
        <Route path="specialties/add" element={<TemplatePage name={"Specialties Add"}/>} />

          <Route path="coupons" element={<TemplatePage name={"Coupons List"}/>} />
        <Route path="coupons/add" element={<TemplatePage name={"Coupons Add"}/>} />

              <Route path="concerns" element={<TemplatePage name={"Concerns List"}/>} />
        <Route path="concerns/add" element={<TemplatePage name={"Concerns Add"}/>} />

              <Route path="referral" element={<TemplatePage name={"Referral List"}/>} />
        <Route path="referral/add" element={<TemplatePage name={"Referral Add"}/>} />
      
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
