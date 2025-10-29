import { useState, useMemo } from "react";
import svgPaths from "../imports/svg-ehfpuf5zwk";
import imgRectangle1 from "figma:asset/f0ef9ca4526b84a58e088956bb12e059d1a14c13.png";
import img1280PxUpiLogoVectorSvg2 from "figma:asset/fabb8de137d7b9ee8fbd0a384a1dc749810e1287.png";
import imgRuPaySvg1 from "figma:asset/0c4e166e0cc837abdb3135ebd16f103de2afbc9a.png";
import imgMastercardLogoFreePng1 from "figma:asset/a01baa879e338efa52fb177c968e89233eb4c908.png";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

type Transaction = {
  id: string;
  date: Date;
  description: string;
  category: string;
  amount: number;
  paymentMethod: string;
  tag: "Income" | "Expense" | "Invested";
};

type DateFilter = "This Month" | "Last Month" | "Last 3 Months" | "All Time";

const initialTransactions: Transaction[] = [
  {
    id: "1",
    date: new Date("2025-10-13"),
    description: "Weekly Groceries",
    category: "Living Expense",
    amount: 3200,
    paymentMethod: "Cash",
    tag: "Expense",
  },
  {
    id: "2",
    date: new Date("2025-10-12"),
    description: "Dinner with Friends",
    category: "Dining Out",
    amount: 2850,
    paymentMethod: "Visa",
    tag: "Expense",
  },
  {
    id: "3",
    date: new Date("2025-10-12"),
    description: "Freelance Project Payment",
    category: "Variable",
    amount: 3500,
    paymentMethod: "UPI",
    tag: "Income",
  },
  {
    id: "4",
    date: new Date("2025-10-10"),
    description: "Fuel for Car",
    category: "Transport",
    amount: 3000,
    paymentMethod: "RuPay",
    tag: "Expense",
  },
  {
    id: "5",
    date: new Date("2025-10-10"),
    description: "Electricity Bill",
    category: "Living Expense",
    amount: 1280,
    paymentMethod: "UPI",
    tag: "Expense",
  },
  {
    id: "6",
    date: new Date("2025-10-07"),
    description: "Amazon Oder (Electronics)",
    category: "Discretionary",
    amount: 4450,
    paymentMethod: "Mastercard",
    tag: "Expense",
  },
  {
    id: "7",
    date: new Date("2025-10-07"),
    description: "Transfer to Emergency Fund",
    category: "Transfer",
    amount: 20000,
    paymentMethod: "Bank Transfer",
    tag: "Invested",
  },
];

export default function ExpenseTracker() {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [dateFilter, setDateFilter] = useState<DateFilter>("This Month");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newTransaction, setNewTransaction] = useState({
    date: new Date(),
    description: "",
    category: "",
    amount: "",
    paymentMethod: "",
    tag: "Expense" as "Income" | "Expense" | "Invested",
  });

  const filteredTransactions = useMemo(() => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    return transactions.filter((t) => {
      switch (dateFilter) {
        case "This Month":
          return t.date.getMonth() === currentMonth && t.date.getFullYear() === currentYear;
        case "Last Month":
          const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
          const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;
          return t.date.getMonth() === lastMonth && t.date.getFullYear() === lastMonthYear;
        case "Last 3 Months":
          const threeMonthsAgo = new Date();
          threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
          return t.date >= threeMonthsAgo;
        case "All Time":
        default:
          return true;
      }
    }).sort((a, b) => b.date.getTime() - a.date.getTime());
  }, [transactions, dateFilter]);

  const summary = useMemo(() => {
    const income = filteredTransactions
      .filter((t) => t.tag === "Income")
      .reduce((sum, t) => sum + t.amount, 0);
    const expenses = filteredTransactions
      .filter((t) => t.tag === "Expense")
      .reduce((sum, t) => sum + t.amount, 0);
    const invested = filteredTransactions
      .filter((t) => t.tag === "Invested")
      .reduce((sum, t) => sum + t.amount, 0);

    const savings = income * 0.2; // Assuming 20% of income as savings
    const balance = income - expenses - invested - savings;

    // Calculate percentages ensuring they add up to 100%
    let expensePercent = income > 0 ? (expenses / income) * 100 : 0;
    let investmentPercent = income > 0 ? (invested / income) * 100 : 0;
    let savingsPercent = income > 0 ? (savings / income) * 100 : 0;
    let remainingPercent = income > 0 ? Math.max(0, 100 - expensePercent - investmentPercent - savingsPercent) : 0;

    // Normalize if total exceeds 100%
    const total = expensePercent + investmentPercent + savingsPercent + remainingPercent;
    if (total > 100) {
      expensePercent = (expensePercent / total) * 100;
      investmentPercent = (investmentPercent / total) * 100;
      savingsPercent = (savingsPercent / total) * 100;
      remainingPercent = (remainingPercent / total) * 100;
    }

    return {
      balance,
      income,
      expenses,
      invested,
      savings,
      expensePercent,
      investmentPercent,
      savingsPercent,
      remainingPercent,
    };
  }, [filteredTransactions]);

  const handleAddTransaction = () => {
    if (!newTransaction.description || !newTransaction.amount || !newTransaction.category) {
      return;
    }

    const transaction: Transaction = {
      id: Date.now().toString(),
      date: newTransaction.date,
      description: newTransaction.description,
      category: newTransaction.category,
      amount: parseFloat(newTransaction.amount),
      paymentMethod: newTransaction.paymentMethod || "Cash",
      tag: newTransaction.tag,
    };

    setTransactions([transaction, ...transactions]);
    setIsAddDialogOpen(false);
    setNewTransaction({
      date: new Date(),
      description: "",
      category: "",
      amount: "",
      paymentMethod: "",
      tag: "Expense",
    });
  };

  const exportToCSV = () => {
    const headers = ["Date", "Description", "Category", "Amount", "Payment Method", "Tag"];
    const rows = filteredTransactions.map((t) => [
      format(t.date, "dd MMM yyyy"),
      t.description,
      t.category,
      t.amount.toString(),
      t.paymentMethod,
      t.tag,
    ]);

    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `transactions-${format(new Date(), "yyyy-MM-dd")}.csv`;
    a.click();
  };

  return (
    <div className="bg-white relative min-h-screen w-full">
      {/* Header */}
      <div className="h-[100px] w-full border-b border-[#898989]">
        <div className="flex h-[100px] items-center justify-between px-[256px] py-[28px]">
          <p className="font-['DM_Sans:Medium',_sans-serif] font-medium text-[36px] text-black tracking-[-0.72px]" style={{ fontVariationSettings: "'opsz' 14" }}>
            <span className="text-[#005b1e]">Expense</span>
            <span> Tracker</span>
          </p>
          <div className="flex gap-[28px] items-center">
            <div className="flex gap-[4px] items-center bg-white p-[8px]">
              <div className="size-[18px] flex items-center justify-center">
                <div className="h-[14px] w-[13px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 14 16">
                    <path d={svgPaths.p1f0e4980} fill="black" />
                    <path d={svgPaths.p1b5e3900} stroke="black" />
                    <path d="M3.75 11.1284L10.25 11.1284" stroke="black" />
                  </svg>
                </div>
              </div>
              <p className="font-['DM_Sans:Medium',_sans-serif] font-medium text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
                Home
              </p>
            </div>
            <div className="flex gap-[4px] items-center bg-white p-[8px]">
              <div className="size-[18px] flex items-center justify-center">
                <div className="size-[12px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 13 13">
                    <path d={svgPaths.p3de3fb00} fill="#7C7C7C" />
                    <path d={svgPaths.p2c0aa600} fill="#7C7C7C" />
                  </svg>
                </div>
              </div>
              <p className="font-['DM_Sans:Medium',_sans-serif] font-medium text-[#7c7c7c] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                Reports
              </p>
            </div>
            <div className="flex gap-[4px] items-center bg-white p-[8px]">
              <div className="size-[18px] flex items-center justify-center px-px">
                <div className="h-[16px] w-[15.25px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 17 18">
                    <path d={svgPaths.p6d9980} fill="white" stroke="#7C7C7C" strokeLinecap="round" strokeMiterlimit="10" />
                    <path d={svgPaths.p34609500} fill="#7C7C7C" />
                    <path d={svgPaths.p30591d00} fill="white" stroke="#7C7C7C" strokeLinecap="round" strokeMiterlimit="10" />
                    <path d={svgPaths.p14332100} fill="#7C7C7C" />
                    <path d={svgPaths.p3770d580} fill="white" stroke="#7C7C7C" />
                    <path d={svgPaths.p2902b500} fill="white" stroke="#7C7C7C" />
                    <path d={svgPaths.p3a563320} stroke="#7C7C7C" />
                  </svg>
                </div>
              </div>
              <p className="font-['DM_Sans:Medium',_sans-serif] font-medium text-[#7c7c7c] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                Budget
              </p>
            </div>
          </div>
          <div className="flex gap-[10px] items-center">
            <div className="rounded-[44px] size-[44px] border border-[#8f8f8f] overflow-hidden">
              <img alt="" className="object-cover size-full" src={imgRectangle1} />
            </div>
            <div className="flex flex-col gap-[4px]">
              <p className="font-['DM_Sans:Medium',_sans-serif] font-medium text-[16px] text-black tracking-[-0.32px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                Divyashu Singh
              </p>
              <p className="font-['DM_Sans:Medium',_sans-serif] font-medium text-[#6e6e6e] text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                UX Designer
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Summary Header */}
      <div className="flex items-center justify-between px-[256px] mt-[36px] mb-[22px]">
        <p className="font-['DM_Sans:SemiBold',_sans-serif] font-semibold text-[32px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
          Summary
        </p>
        <Select value={dateFilter} onValueChange={(value) => setDateFilter(value as DateFilter)}>
          <SelectTrigger className="bg-white border border-[#383838] rounded-[4px] px-[10px] py-[8px] gap-[8px] w-auto">
            <div className="size-[18px] flex items-center justify-center px-px">
              <div className="h-[16px] w-[14px]">
                <svg className="block size-full" fill="none" viewBox="0 0 15 17">
                  <path d={svgPaths.p1e2c9800} fill="#383838" stroke="#383838" />
                  <path d="M4.875 3.16667V0.5" stroke="#383838" strokeLinecap="square" />
                  <path d="M10.125 3.16667V0.5" stroke="#383838" strokeLinecap="square" />
                  <path d="M6.625 9.38892H7.5H8.375" stroke="#383838" />
                  <path d="M3.125 9.38892H4H4.875" stroke="#383838" />
                  <path d="M10.125 9.38892H11H11.875" stroke="#383838" />
                  <path d="M6.625 12.9445H7.5H8.375" stroke="#383838" />
                  <path d="M3.125 12.9445H4H4.875" stroke="#383838" />
                  <path d="M10.125 12.9445H11H11.875" stroke="#383838" />
                </svg>
              </div>
            </div>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="This Month">This Month</SelectItem>
            <SelectItem value="Last Month">Last Month</SelectItem>
            <SelectItem value="Last 3 Months">Last 3 Months</SelectItem>
            <SelectItem value="All Time">All Time</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Summary Dashboard */}
      <div className="bg-white border border-[#c9c9c9] rounded-[8px] mx-[256px] p-[24px] flex flex-col gap-[24px]">
        {/* Balance and Progress Bar Section */}
        <div className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[4px]">
            <p className="font-['DM_Sans:Medium',_sans-serif] font-medium text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
              Balance
            </p>
            <div className="flex gap-[4px] items-start">
              <p className="font-['DM_Sans:Bold',_sans-serif] font-bold text-[24px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
                {Math.abs(summary.balance).toLocaleString()}
              </p>
              <div className="h-[11.636px] w-[7.75px]">
                <svg className="block size-full" fill="none" viewBox="0 0 8 12">
                  <path d={svgPaths.p11853c80} fill="#313131" />
                </svg>
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="bg-white py-[16px]">
            <div className="flex gap-[10px] items-start w-full relative h-2">
              <div className="absolute h-2 left-0 top-0 w-full bg-[#E8E8E8] rounded-full">
              </div>
              <div className="absolute h-2 top-0 rounded-l-full" style={{ width: `${summary.expensePercent}%`, backgroundColor: '#FE4D01' }}>
              </div>
              <div className="absolute h-2 top-0" style={{ left: `${summary.expensePercent}%`, width: `${summary.investmentPercent}%`, backgroundColor: '#8671FF' }}>
              </div>
              <div className="absolute h-2 top-0" style={{ left: `${summary.expensePercent + summary.investmentPercent}%`, width: `${summary.savingsPercent}%`, backgroundColor: '#FEC021' }}>
              </div>
              <div className="absolute h-2 top-0 rounded-r-full" style={{ left: `${summary.expensePercent + summary.investmentPercent + summary.savingsPercent}%`, width: `${summary.remainingPercent}%`, backgroundColor: '#E8E8E8' }}>
              </div>
            </div>
          </div>

          {/* Legends */}
          <div className="flex gap-[24px] flex-wrap">
            <div className="flex gap-[8px] items-center">
              <div className="w-[12px] h-[12px] rounded-full bg-[#FE4D01]"></div>
              <p className="font-['DM_Sans:Regular',_sans-serif] font-normal text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
                Expenses
              </p>
            </div>
            <div className="flex gap-[8px] items-center">
              <div className="w-[12px] h-[12px] rounded-full bg-[#8671FF]"></div>
              <p className="font-['DM_Sans:Regular',_sans-serif] font-normal text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
                Investment
              </p>
            </div>
            <div className="flex gap-[8px] items-center">
              <div className="w-[12px] h-[12px] rounded-full bg-[#FEC021]"></div>
              <p className="font-['DM_Sans:Regular',_sans-serif] font-normal text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
                Savings
              </p>
            </div>
            <div className="flex gap-[8px] items-center">
              <div className="w-[12px] h-[12px] rounded-full bg-[#E8E8E8]"></div>
              <p className="font-['DM_Sans:Regular',_sans-serif] font-normal text-[14px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
                Remaining
              </p>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="flex flex-wrap gap-[24px]">

          <div className="flex-1 bg-white border border-[#c9c9c9] rounded-[4px] p-[16px] flex flex-col gap-[8px] min-w-[200px]">
            <p className="font-['DM_Sans:SemiBold',_sans-serif] font-semibold text-[#005b1e] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Income
            </p>
            <div className="flex gap-[4px] items-start">
              <p className="font-['DM_Sans:Bold',_sans-serif] font-bold text-[24px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
                {summary.income.toLocaleString()}
              </p>
              <div className="h-[11.636px] w-[7.75px]">
                <svg className="block size-full" fill="none" viewBox="0 0 8 12">
                  <path d={svgPaths.p11853c80} fill="#313131" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white border border-[#c9c9c9] rounded-[4px] p-[16px] flex flex-col gap-[8px] min-w-[200px]">
            <div className="flex items-start justify-between w-full">
              <p className="font-['DM_Sans:SemiBold',_sans-serif] font-semibold text-[#752503] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                Expenses
              </p>
              <div className="border border-[#752503] rounded-[4px] px-[4px]">
                <p className="font-['DM_Sans:SemiBold',_sans-serif] font-semibold text-[#752503] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  {summary.expensePercent.toFixed(1)}%
                </p>
              </div>
            </div>
            <div className="flex gap-[4px] items-start">
              <p className="font-['DM_Sans:Bold',_sans-serif] font-bold text-[24px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
                {summary.expenses.toLocaleString()}
              </p>
              <div className="h-[11.636px] w-[7.75px]">
                <svg className="block size-full" fill="none" viewBox="0 0 8 12">
                  <path d={svgPaths.p11853c80} fill="#313131" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white border border-[#c9c9c9] rounded-[4px] p-[16px] flex flex-col gap-[8px] min-w-[200px]">
            <div className="flex items-start justify-between w-full">
              <p className="font-['DM_Sans:SemiBold',_sans-serif] font-semibold text-[#0d0058] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                Investment
              </p>
              <div className="border border-[#0d0058] rounded-[4px] px-[4px]">
                <p className="font-['DM_Sans:SemiBold',_sans-serif] font-semibold text-[#0d0058] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  {summary.investmentPercent.toFixed(1)}%
                </p>
              </div>
            </div>
            <div className="flex gap-[4px] items-start">
              <p className="font-['DM_Sans:Bold',_sans-serif] font-bold text-[24px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
                {summary.invested.toLocaleString()}
              </p>
              <div className="h-[11.636px] w-[7.75px]">
                <svg className="block size-full" fill="none" viewBox="0 0 8 12">
                  <path d={svgPaths.p11853c80} fill="#313131" />
                </svg>
              </div>
            </div>
          </div>

          <div className="flex-1 bg-white border border-[#c9c9c9] rounded-[4px] p-[16px] flex flex-col gap-[8px] min-w-[200px]">
            <div className="flex items-start justify-between w-full">
              <p className="font-['DM_Sans:SemiBold',_sans-serif] font-semibold text-[#bf7800] text-[18px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                Savings
              </p>
              <div className="border border-[#bf7800] rounded-[4px] px-[4px]">
                <p className="font-['DM_Sans:SemiBold',_sans-serif] font-semibold text-[#bf7800] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                  {summary.savingsPercent.toFixed(1)}%
                </p>
              </div>
            </div>
            <div className="flex gap-[4px] items-start">
              <p className="font-['DM_Sans:Bold',_sans-serif] font-bold text-[24px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
                {summary.savings.toLocaleString()}
              </p>
              <div className="h-[11.636px] w-[7.75px]">
                <svg className="block size-full" fill="none" viewBox="0 0 8 12">
                  <path d={svgPaths.p11853c80} fill="#313131" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Activity Section */}
      <div className="px-[256px] mt-[24px]">
        <div className="flex items-center justify-between pb-[16px] border-b border-[#363636]">
          <p className="font-['DM_Sans:SemiBold',_sans-serif] font-semibold text-[24px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
            Activity
          </p>
          <div className="flex gap-[16px] items-center">
            <button className="border border-[#005a32] rounded-[8px] px-[8px] py-[6px] flex gap-[4px] items-center">
              <div className="size-[18px]">
                <svg className="block size-full" fill="none" viewBox="0 0 18 18">
                  <path d={svgPaths.p3e135800} stroke="#003813" strokeLinecap="round" />
                </svg>
              </div>
            </button>
            <button onClick={exportToCSV} className="border border-[#005a32] rounded-[8px] px-[8px] py-[6px] flex gap-[4px] items-center">
              <div className="size-[18px] flex items-center justify-center p-[3px]">
                <div className="size-[12px]">
                  <svg className="block size-full" fill="none" viewBox="0 0 13 14">
                    <path d={svgPaths.p3c040b00} fill="#003813" />
                    <path d={svgPaths.p2efd40c0} stroke="#003813" strokeLinecap="square" />
                  </svg>
                </div>
              </div>
              <p className="font-['DM_Sans:Regular',_sans-serif] font-normal text-[#003813] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                Export in CSV
              </p>
            </button>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <button className="bg-[#bdeeb8] border border-[#007340] rounded-[8px] px-[8px] py-[6px] flex gap-[4px] items-center">
                  <div className="size-[18px]">
                    <svg className="block size-full" fill="none" viewBox="0 0 18 18">
                      <path d="M9 3V15M15 9H3" stroke="#003813" strokeLinecap="square" />
                    </svg>
                  </div>
                  <p className="font-['DM_Sans:Regular',_sans-serif] font-normal text-[#003813] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                    Add
                  </p>
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add Transaction</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="date">Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="justify-start">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {format(newTransaction.date, "PPP")}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={newTransaction.date}
                          onSelect={(date) => setNewTransaction({ ...newTransaction, date: date || new Date() })}
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Input
                      id="description"
                      value={newTransaction.description}
                      onChange={(e) => setNewTransaction({ ...newTransaction, description: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="category">Category</Label>
                    <Input
                      id="category"
                      value={newTransaction.category}
                      onChange={(e) => setNewTransaction({ ...newTransaction, category: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="amount">Amount</Label>
                    <Input
                      id="amount"
                      type="number"
                      value={newTransaction.amount}
                      onChange={(e) => setNewTransaction({ ...newTransaction, amount: e.target.value })}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="paymentMethod">Payment Method</Label>
                    <Select value={newTransaction.paymentMethod} onValueChange={(value) => setNewTransaction({ ...newTransaction, paymentMethod: value })}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Cash">Cash</SelectItem>
                        <SelectItem value="Visa">Visa</SelectItem>
                        <SelectItem value="UPI">UPI</SelectItem>
                        <SelectItem value="RuPay">RuPay</SelectItem>
                        <SelectItem value="Mastercard">Mastercard</SelectItem>
                        <SelectItem value="Bank Transfer">Bank Transfer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="tag">Tag</Label>
                    <Select value={newTransaction.tag} onValueChange={(value) => setNewTransaction({ ...newTransaction, tag: value as any })}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Income">Income</SelectItem>
                        <SelectItem value="Expense">Expense</SelectItem>
                        <SelectItem value="Invested">Invested</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button onClick={handleAddTransaction}>Add Transaction</Button>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Table */}
        <div className="flex flex-col mt-0">
          {/* Table Header */}
          <div className="flex items-center w-full bg-white">
            <div className="bg-white border-b border-[#efefef] px-[32px] py-[18px] w-[183.4px]">
              <p className="font-['DM_Sans:SemiBold',_sans-serif] font-semibold text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
                Date
              </p>
            </div>
            <div className="bg-white border-b border-[#efefef] px-[32px] py-[18px] w-[299px]">
              <p className="font-['DM_Sans:SemiBold',_sans-serif] font-semibold text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
                Description
              </p>
            </div>
            <div className="bg-white border-b border-[#efefef] px-[32px] py-[18px] w-[183.4px]">
              <p className="font-['DM_Sans:SemiBold',_sans-serif] font-semibold text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
                Category
              </p>
            </div>
            <div className="bg-white border-b border-[#efefef] px-[32px] py-[18px] w-[183.4px]">
              <p className="font-['DM_Sans:SemiBold',_sans-serif] font-semibold text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
                Amount (₹)
              </p>
            </div>
            <div className="bg-white border-b border-[#efefef] px-[12px] py-[18px] w-[183.4px] text-center">
              <p className="font-['DM_Sans:SemiBold',_sans-serif] font-semibold text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
                Payment Method
              </p>
            </div>
            <div className="bg-white border-b border-[#efefef] px-[12px] py-[18px] w-[183.4px] text-center">
              <p className="font-['DM_Sans:SemiBold',_sans-serif] font-semibold text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
                Tag
              </p>
            </div>
          </div>

          {/* Table Rows */}
          {filteredTransactions.map((transaction) => (
            <div key={transaction.id} className="flex items-center w-full bg-white">
              <div className="bg-white border-b border-[#efefef] px-[32px] py-[10px] w-[183.4px]">
                <p className="font-['Inter:Regular',_sans-serif] font-normal text-[12px] text-black">
                  {format(transaction.date, "dd MMM yyyy")}
                </p>
              </div>
              <div className="bg-white border-b border-[#efefef] px-[32px] py-[10px] w-[299px]">
                <p className="font-['DM_Sans:Medium',_sans-serif] font-medium text-[16px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
                  {transaction.description}
                </p>
              </div>
              <div className="bg-white border-b border-[#efefef] px-[32px] py-[10px] w-[183.4px]">
                <div className="border border-[#752503] rounded-[13px] px-[8px] py-[2px] inline-block whitespace-nowrap">
                  <p className="font-['DM_Sans:Regular',_sans-serif] font-normal text-[#752503] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'opsz' 14" }}>
                    {transaction.category}
                  </p>
                </div>
              </div>
              <div className="bg-white border-b border-[#efefef] px-[32px] py-[10px] w-[183.4px]">
                <p className="font-['DM_Sans:Bold',_sans-serif] font-bold text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
                  {transaction.amount.toLocaleString()}
                </p>
              </div>
              <div className="bg-white border-b border-[#efefef] px-[12px] py-[10px] w-[183.4px] flex items-center justify-center">
                <div className="bg-white border-[1.25px] border-[#868686] rounded-[20px] px-[7.5px] py-[2.5px] flex gap-[2.5px] items-center">
                  {transaction.paymentMethod === "Cash" && (
                    <>
                      <div className="size-[20px]">
                        <svg className="block size-full" fill="none" viewBox="0 0 20 20">
                          <path d={svgPaths.p1a8c19c0} stroke="#2C2C2C" strokeLinecap="round" strokeMiterlimit="10" strokeWidth="0.833333" />
                          <path d={svgPaths.p3256180} fill="#2C2C2C" />
                        </svg>
                      </div>
                      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal text-[#282828] text-[12.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Cash
                      </p>
                    </>
                  )}
                  {transaction.paymentMethod === "Visa" && (
                    <div className="h-[10px] w-[30px]">
                      <svg className="block size-full" fill="none" viewBox="0 0 30 10">
                        <path d={svgPaths.p300baa00} fill="#00579F" />
                        <path d={svgPaths.p916c300} fill="#00579F" />
                        <path d={svgPaths.p3a404c80} fill="#00579F" />
                        <path d={svgPaths.p2ccad00} fill="#00579F" />
                        <path d={svgPaths.p23127b80} fill="#FAA61A" />
                      </svg>
                    </div>
                  )}
                  {transaction.paymentMethod === "UPI" && (
                    <div className="h-[8.75px] w-[32.5px]">
                      <img alt="" className="w-full h-full" src={img1280PxUpiLogoVectorSvg2} />
                    </div>
                  )}
                  {transaction.paymentMethod === "RuPay" && (
                    <div className="h-[10.202px] w-[38.75px]">
                      <img alt="" className="w-full h-full object-cover" src={imgRuPaySvg1} />
                    </div>
                  )}
                  {transaction.paymentMethod === "Mastercard" && (
                    <div className="h-[20.833px] w-[31.25px]">
                      <img alt="" className="w-full h-full object-cover" src={imgMastercardLogoFreePng1} />
                    </div>
                  )}
                  {transaction.paymentMethod === "Bank Transfer" && (
                    <>
                      <div className="size-[16.25px]">
                        <svg className="block size-full" fill="none" viewBox="0 0 17 17">
                          <path d={svgPaths.p97f0180} stroke="#282828" strokeWidth="0.902778" />
                        </svg>
                      </div>
                      <p className="font-['DM_Sans:Regular',_sans-serif] font-normal text-[#282828] text-[12.5px]" style={{ fontVariationSettings: "'opsz' 14" }}>
                        Bank Transfer
                      </p>
                    </>
                  )}
                </div>
              </div>
              <div className="bg-white border-b border-[#efefef] px-[12px] py-[10px] w-[183.4px] flex items-center justify-center">
                <div
                  className={`rounded-[4px] px-[10px] py-[4px] border ${
                    transaction.tag === "Income"
                      ? "bg-[#cef2d6] border-[#668871]"
                      : transaction.tag === "Invested"
                      ? "bg-[#dcd8f5] border-[#6e669b]"
                      : "bg-[#f7d6c7] border-[#ac7c68]"
                  }`}
                >
                  <p
                    className={`font-['DM_Sans:Regular',_sans-serif] font-normal text-[12px] ${
                      transaction.tag === "Income" ? "text-[#005b1e]" : transaction.tag === "Invested" ? "text-[#0d0058]" : "text-[#752503]"
                    }`}
                    style={{ fontVariationSettings: "'opsz' 14" }}
                  >
                    {transaction.tag}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
