import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Plus, RefreshCcw, Download, } from "lucide-react";
import Edit from '@/assets/edit.svg';

export default function CouponData() {
  const data = [
    {
      id: 1,
      doctorName: "Alina Mathew",
      doctorImg: "https://randomuser.me/api/portraits/women/1.jpg",
      doctorCommission: "30%",
      productName: "Nari Sandariya Malt",
      productCommission: "30%",
    },
    {
      id: 2,
      doctorName: "Jack Rock",
      doctorImg: "https://randomuser.me/api/portraits/men/2.jpg",
      doctorCommission: "30%",
      productName: "Nari Sandariya Malt",
      productCommission: "30%",
    },
    {
      id: 3,
      doctorName: "Alina Mathew",
      doctorImg: "https://randomuser.me/api/portraits/men/3.jpg",
      doctorCommission: "30%",
      productName: "Nari Sandariya Malt",
      productCommission: "30%",
    },
    {
      id: 4,
      doctorName: "Alina Mathew",
      doctorImg: "https://randomuser.me/api/portraits/women/4.jpg",
      doctorCommission: "30%",
      productName: "Nari Sandariya Malt",
      productCommission: "30%",
    },
    {
      id: 5,
      doctorName: "Jack Rock",
      doctorImg: "https://randomuser.me/api/portraits/men/5.jpg",
      doctorCommission: "30%",
      productName: "Nari Sandariya Malt",
      productCommission: "30%",
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow p-6 mt-10">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
  {/* Left side */}
  <div className="flex flex-col md:flex-row md:items-center md:space-x-3 gap-3 w-full">
    <h2 className="text-lg font-semibold">Special Coupons</h2>

    {/* Search Bar */}
    <div className="relative flex items-center w-full md:w-64 bg-gray-50 rounded-lg px-3 py-2">
      <span className="h-3 w-3 rounded-full bg-[#3A643B] mr-2"></span>
      <Input
        placeholder="Search here"
        className="border-0 shadow-none focus-visible:ring-0 bg-transparent p-0 text-gray-700 placeholder:text-gray-400"
      />
    </div>

    {/* Action Buttons */}
    <div className="flex space-x-2">
      <Button
        variant="outline"
        size="icon"
        className="bg-gray-50 rounded-lg hover:bg-gray-100"
      >
        <Plus className="h-4 w-4 text-[#3A643B]" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="bg-gray-50 rounded-lg hover:bg-gray-100"
      >
        <RefreshCcw className="h-4 w-4 text-[#3A643B]" />
      </Button>

      {/* Download joins Refresh on mobile, moves right on desktop */}
      <div className="block md:hidden">
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

  {/* Right side (Download only for desktop) */}
  <div className="hidden md:flex justify-end">
    <Button
      variant="outline"
      size="icon"
      className="bg-gray-50 rounded-lg hover:bg-gray-100"
    >
      <Download className="h-4 w-4 text-[#3A643B]" />
    </Button>
  </div>
</div>





      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Doctor Name</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Usage Limit</TableHead>
            <TableHead>Percentage</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={row.doctorImg} alt={row.doctorName} />
                  <AvatarFallback>
                    {row.doctorName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span>{row.doctorName}</span>
              </TableCell>
              <TableCell>{row.productName}</TableCell>
               <TableCell>{row.doctorCommission}</TableCell>
              <TableCell>{row.productCommission}</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <img src={Edit} className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
        <span>Rows per page: 5</span>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">&lt;</Button>
          <span className="px-2 py-1 border rounded">1</span>
          <Button variant="ghost" size="icon">&gt;</Button>
        </div>
      </div>
    </div>
  );
}
