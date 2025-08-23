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

export default function PaymentPending() {
  const data = [
    {
      id: 1,
      doctorName: "Isabel Wiza",
      doctorImg: "https://randomuser.me/api/portraits/women/1.jpg",
      email: "alinamath@gmail.com",
      mobile: "+91 8805322849",
      amountWithdrawal: "4,290",
      requestedDate: "1 Feb 2024",
      walletAmount: "30,000",
    },
    {
      id: 2,
      doctorName: "Sourmy Maheswari",
      doctorImg: "https://randomuser.me/api/portraits/men/2.jpg",
      email: "alinamath@gmail.com",
      mobile: "+91 8805322849",
      amountWithdrawal: "5,290",
      requestedDate: "1 Feb 2024",
      walletAmount: "30,000",
    },
    {
      id: 3,
      doctorName: "Margie O'Reilley",
      doctorImg: "https://randomuser.me/api/portraits/women/3.jpg",
      email: "alinamath@gmail.com",
      mobile: "+91 8805322849",
      amountWithdrawal: "4,290",
      requestedDate: "1 Feb 2024",
      walletAmount: "30,000",
    },
    {
      id: 4,
      doctorName: "Lucas Legros",
      doctorImg: "https://randomuser.me/api/portraits/men/4.jpg",
      email: "alinamath@gmail.com",
      mobile: "+91 8805322849",
      amountWithdrawal: "4,290",
      requestedDate: "1 Feb 2024",
      walletAmount: "30,000",
    },
  ];

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
            { label: "Pending Payment", href: "payment/pending" },
          ]}
        />
      </motion.div>

      {/* Header with actions */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-3 gap-3 w-full">
          <h2 className="text-lg font-semibold">Pending Payment Request</h2>

          {/* Search bar */}
          <div className="relative flex items-center w-full md:w-64 bg-gray-50 rounded-lg px-3 py-2">
            <span className="h-3 w-3 rounded-full bg-[#3A643B] mr-2"></span>
            <Input
              placeholder="Search here"
              className="border-0 shadow-none focus-visible:ring-0 bg-transparent p-0 text-gray-700 placeholder:text-gray-400"
            />
          </div>

          {/* Action buttons (left side) */}
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

            {/* Mobile download button */}
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

        {/* Right side buttons (Sort + Download, only desktop) */}
        <div className="hidden md:flex justify-end space-x-3">
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

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>   <input
                type="checkbox"

              /></TableHead>
            <TableHead>Doctor Name</TableHead>
            <TableHead>Email-id</TableHead>
            <TableHead>Mobile</TableHead>
            <TableHead>Amount Withdrawal</TableHead>
            <TableHead>Requested Date</TableHead>
            <TableHead>Wallet Amount</TableHead>
            <TableHead>Details</TableHead>
            <TableHead className="text-right">Approval</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <input
                type="checkbox"

              /> 
              </TableCell>
              <TableCell className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={row.doctorImg} alt={row.doctorName} />
                  <AvatarFallback>{row.doctorName.charAt(0)}</AvatarFallback>
                </Avatar>
                <span>{row.doctorName}</span>
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.mobile}</TableCell>
              <TableCell>{row.amountWithdrawal}</TableCell>
              <TableCell>{row.requestedDate}</TableCell>
              <TableCell>{row.walletAmount}</TableCell>
              <TableCell className="text-green-600 cursor-pointer">
                View All
              </TableCell>
              <TableCell className="flex space-x-2 justify-end">
                <Button variant="link" className="text-green-600 p-0">
                  Accept
                </Button>
                <Button variant="link" className="text-red-500 p-0">
                  Decline
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
        <span>Rows per page: 7</span>
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
    </div>
  );
}
