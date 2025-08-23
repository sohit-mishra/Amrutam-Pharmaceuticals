"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
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
import { Plus, RefreshCcw, Download, ArrowUpDown } from "lucide-react";
import BreadcrumbComponent from "@/allCompoent/BreadcrumbComponent";
import { motion } from "framer-motion";

export default function PaymentHistory() {
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [limitperpage] = useState(7);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/payments/history?page=${currentPage}&limit=${limitperpage}&search=${search}`
      );
      setData(response.data.paymentRequests || []);
      setTotalPages(response.data.totalPages || 1);
    } catch (error) {
      console.error("Error fetching payment requests:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [currentPage, search]);

  const toggleRow = (id, checked) => {
    if (checked) {
      setSelected([...selected, id]);
    } else {
      setSelected(selected.filter((rowId) => rowId !== id));
    }
  };

  const toggleSelectAll = (checked) => {
    if (checked) {
      setSelected(data.map((row) => row._id));
    } else {
      setSelected([]);
    }
  };

  const handleSort = () => {
    const sorted = [...data].sort((a, b) => {
      if (sortOrder === "asc") {
        return a.amountWithdrawal - b.amountWithdrawal;
      } else {
        return b.amountWithdrawal - a.amountWithdrawal;
      }
    });

    setData(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

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
            { label: "Affiliate" },
            { label: "Payment" },
            { label: "Payment History", href: "payment/history" },
          ]}
        />
      </motion.div>

      {/* Header with actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-3 gap-3 w-full">
          <h2 className="text-lg font-semibold">Payment History</h2>

          <div className="relative flex items-center w-full md:w-64 bg-gray-50 rounded-lg px-3 py-2">
            <span className="h-3 w-3 rounded-full bg-[#3A643B] mr-2"></span>
            <Input
              placeholder="Search here"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              className="border-0 shadow-none focus-visible:ring-0 bg-transparent p-0 text-gray-700 placeholder:text-gray-400"
            />
          </div>

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
              onClick={fetchData}
            >
              <RefreshCcw className="h-4 w-4 text-[#3A643B]" />
            </Button>

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

        <div className="hidden md:flex justify-end space-x-3">
          <Button
            variant="outline"
            size="icon"
            className="bg-gray-50 rounded-lg hover:bg-gray-100"
            onClick={handleSort}
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

      {/* Table */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <input
                  type="checkbox"
                  checked={selected.length === data.length && data.length > 0}
                  onChange={(e) => toggleSelectAll(e.target.checked)}
                />
              </TableHead>
              <TableHead>Doctor Name</TableHead>
              <TableHead>Email-id</TableHead>
              <TableHead>Mobile</TableHead>
              <TableHead>Amount Withdrawal</TableHead>
              <TableHead>Requested Date</TableHead>
              <TableHead>Wallet Amount</TableHead>
              <TableHead>Details</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Approval Date</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((row) => (
              <TableRow key={row._id}>
                <TableCell>
                  <input
                    type="checkbox"
                    checked={selected.includes(row._id)}
                    onChange={(e) => toggleRow(row._id, e.target.checked)}
                  />
                </TableCell>
                <TableCell className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={row.doctor.image} alt={row.doctor.name} />
                    <AvatarFallback>
                      {row.doctor.name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <span>{row.doctor.name}</span>
                </TableCell>
                <TableCell>{row.doctor.email}</TableCell>
                <TableCell>{row.doctor.mobile}</TableCell>
                <TableCell>{row.amountWithdrawal}</TableCell>
                <TableCell>
                  {new Date(row.requestedDate).toLocaleDateString()}
                </TableCell>
                <TableCell>{row.walletAmount}</TableCell>
                <TableCell className="text-[#28643B] cursor-pointer">
                  View All
                </TableCell>
                <TableCell>
                  <span
                    className={`font-medium ${
                      row.status === "Paid"
                        ? "text-[#15C26B]"
                        : "text-[#EC4F3C]"
                    }`}
                  >
                    {row.status}
                  </span>
                </TableCell>
                <TableCell>
                  {row.approvalDate
                    ? new Date(row.approvalDate).toLocaleDateString()
                    : "-"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}

      {/* Pagination */}
      <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
        <span>Rows per page: {limitperpage}</span>
        <div className="flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            disabled={currentPage <= 1}
          >
            &lt;
          </Button>
          <span className="px-2 py-1 border rounded">{currentPage}</span>
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              currentPage < totalPages && setCurrentPage(currentPage + 1)
            }
            disabled={currentPage >= totalPages}
          >
            &gt;
          </Button>
        </div>
      </div>
    </div>
  );
}
