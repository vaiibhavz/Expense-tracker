import { useState, useMemo } from "react";
import svgPaths from "./svg-ft4a9xdj21";
import imgRectangle1 from "figma:asset/f0ef9ca4526b84a58e088956bb12e059d1a14c13.png";
import img from "figma:asset/fabb8de137d7b9ee8fbd0a384a1dc749810e1287.png";
import img1 from "figma:asset/0c4e166e0cc837abdb3135ebd16f103de2afbc9a.png";
import img2 from "figma:asset/a01baa879e338efa52fb177c968e89233eb4c908.png";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";

type Transaction = {
  id: string;
  date: string;
  description: string;
  category: string;
  categoryType: "expense" | "income" | "investment" | "savings";
  amount: number;
  paymentMethod: string;
  tag: "Expense" | "Income" | "Invested" | "Saved";
};

type DateFilter = "This Month" | "Last Month" | "Last 3 Months" | "All Time";

const initialTransactions: Transaction[] = [
  { id: "1", date: "13 Oct 2025", description: "Weekly Groceries", category: "Living Expense", categoryType: "expense", amount: 3200, paymentMethod: "Cash", tag: "Expense" },
  { id: "2", date: "12 Oct 2025", description: "Dinner with Friends", category: "Dining Out", categoryType: "expense", amount: 2850, paymentMethod: "Visa", tag: "Expense" },
  { id: "3", date: "12 Oct 2025", description: "Freelance Project Payment", category: "Freelance", categoryType: "income", amount: 3500, paymentMethod: "UPI", tag: "Income" },
  { id: "4", date: "10 Oct 2025", description: "Fuel for Car", category: "Transport", categoryType: "expense", amount: 3000, paymentMethod: "RuPay", tag: "Expense" },
  { id: "5", date: "10 Oct 2025", description: "Electricity Bill", category: "Living Expense", categoryType: "expense", amount: 1280, paymentMethod: "UPI", tag: "Expense" },
  { id: "6", date: "07 Oct 2025", description: "Amazon Oder (Electronics)", category: "Discretionary", categoryType: "expense", amount: 4450, paymentMethod: "Mastercard", tag: "Expense" },
  { id: "7", date: "07 Oct 2025", description: "Transfer to Emergency Fund", category: "Transfer", categoryType: "investment", amount: 20000, paymentMethod: "Bank Transfer", tag: "Invested" },
  { id: "8", date: "05 Oct 2025", description: "Rent of October", category: "Living Expense", categoryType: "expense", amount: 15000, paymentMethod: "UPI", tag: "Expense" },
  { id: "9", date: "06 Oct 2025", description: "Car Loan EMI", category: "Debt Repayment", categoryType: "expense", amount: 8500, paymentMethod: "UPI", tag: "Expense" },
  { id: "10", date: "05 Oct 2025", description: "Monthly SIP - Index", category: "Transfer", categoryType: "savings", amount: 12500, paymentMethod: "Bank Transfer", tag: "Saved" },
  { id: "11", date: "04 Oct 2025", description: "Shopping at Zara", category: "Discretionary", categoryType: "expense", amount: 5500, paymentMethod: "Visa", tag: "Expense" },
  { id: "12", date: "01 Oct 2025", description: "October Salary Credit", category: "Salary", categoryType: "income", amount: 82967, paymentMethod: "UPI", tag: "Income" },
];

function Group9() {
  return (
    <div className="h-[14px] relative shrink-0 w-[13px]">
      <div className="absolute inset-[-4.49%_-3.85%_-3.57%_-3.85%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
          <g id="Group 12">
            <g id="Vector">
              <path d={svgPaths.p1f0e4980} fill="var(--fill-0, #202020)" />
              <path d={svgPaths.p1b5e3900} stroke="var(--stroke-0, #202020)" />
            </g>
            <path d="M3.75 11.1284L10.25 11.1284" id="Vector 16" stroke="var(--stroke-0, #202020)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Group">
      <div className="absolute bottom-[-4.17%] left-[-4.17%] right-[-4.17%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <g id="Group">
            <path d={svgPaths.p3de3fb00} fill="var(--stroke-0, #636363)" id="Vector" />
            <path d={svgPaths.p2c0aa600} fill="var(--stroke-0, #636363)" id="Vector_2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="h-[16px] relative shrink-0 w-[15.25px]">
      <div className="absolute inset-[-4.38%_-3.28%_-3.12%_-3.28%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 18">
          <g id="Group 3">
            <g filter="url(#filter0_d_27_812)" id="Group">
              <path d={svgPaths.p6d9980} fill="var(--fill-0, #FDFDFD)" id="Vector" stroke="var(--stroke-0, #636363)" strokeLinecap="round" strokeMiterlimit="10" />
              <path d={svgPaths.p34609500} fill="var(--fill-0, #636363)" id="â¹" />
            </g>
            <g filter="url(#filter1_d_27_812)" id="Group_2">
              <path d={svgPaths.p20b72e00} fill="var(--fill-0, #FDFDFD)" id="Vector_2" stroke="var(--stroke-0, #636363)" strokeLinecap="round" strokeMiterlimit="10" />
              <path d={svgPaths.p38e69180} fill="var(--fill-0, #636363)" id="â¹_2" />
            </g>
            <g filter="url(#filter2_d_27_812)" id="Vector 15">
              <path d={svgPaths.p3770d580} fill="var(--fill-0, #FDFDFD)" />
              <path d={svgPaths.p3770d580} stroke="var(--stroke-0, #636363)" />
            </g>
            <path d={svgPaths.p2902b500} fill="var(--fill-0, #FDFDFD)" id="Vector 17" stroke="var(--stroke-0, #636363)" />
            <path d={svgPaths.p3a563320} id="Vector 18" stroke="var(--stroke-0, #636363)" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="13.5461" id="filter0_d_27_812" width="13.2541" x="0.390262" y="0">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.3" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_812" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_812" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="12.6103" id="filter1_d_27_812" width="14.0461" x="1.54729" y="0.716095">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dx="-0.3" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_812" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_812" mode="normal" result="shape" />
            </filter>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="10.1891" id="filter2_d_27_812" width="15.3532" x="0" y="7.01108">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="-0.3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_27_812" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_27_812" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex gap-[28px] items-center justify-end relative shrink-0" data-name="Tabs">
      <div className="bg-[#fdfdfd] box-border content-stretch flex gap-[4px] items-center overflow-clip p-[8px] relative shrink-0" data-name="Tabs">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-px relative shrink-0 size-[20px]" data-name="home">
          <Group9 />
        </div>
        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#202020] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Home
        </p>
      </div>
      <div className="bg-[#fdfdfd] box-border content-stretch flex gap-[4px] items-center overflow-clip p-[8px] relative shrink-0" data-name="Tabs">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-px relative shrink-0 size-[20px]" data-name="trending-up">
          <Group />
        </div>
        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#636363] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Reports
        </p>
      </div>
      <div className="bg-[#fdfdfd] box-border content-stretch flex gap-[4px] items-center overflow-clip p-[8px] relative shrink-0" data-name="Tabs">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-px py-0 relative shrink-0 size-[20px]" data-name="wallet">
          <Group2 />
        </div>
        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#636363] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Budgeting
        </p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative rounded-[44px] shrink-0 size-[44px]">
      <div className="overflow-clip relative rounded-[inherit] size-[44px]">
        <div className="absolute left-0 rounded-[61px] size-[44px] top-0">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[61px]">
            <div className="absolute bg-[#d9d9d9] inset-0 rounded-[61px]" />
            <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[61px] size-full" src={imgRectangle1} />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#828282] border-solid inset-[-1px] pointer-events-none rounded-[45px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium gap-[4px] items-start justify-center leading-[normal] relative shrink-0 text-nowrap whitespace-pre">
      <p className="relative shrink-0 text-[16px] text-black tracking-[-0.32px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        Divyashu Singh
      </p>
      <p className="relative shrink-0 text-[#828282] text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'opsz' 14" }}>
        UX Designer
      </p>
    </div>
  );
}

function User() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="User">
      <Frame1 />
      <Frame2 />
    </div>
  );
}

function Header() {
  return (
    <div className="h-[100px] relative shrink-0 w-[1728px]" data-name="Header">
      <div className="box-border content-stretch flex h-[100px] items-center justify-between overflow-clip px-[256px] py-[28px] relative rounded-[inherit] w-[1728px]">
        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-none relative shrink-0 text-[36px] text-black text-nowrap tracking-[-0.72px] whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          <span className="text-[#005b1e]">Expense</span>
          <span>{` Tracker`}</span>
        </p>
        <Tabs />
        <User />
      </div>
      <div aria-hidden="true" className="absolute border-[#898989] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Group1() {
  return (
    <div className="relative shrink-0 size-[12px]">
      <div className="absolute inset-[-4.17%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <g id="Group 2">
            <g id="Vector">
              <path d={svgPaths.p114280} fill="var(--fill-0, #202020)" />
              <path d={svgPaths.p1cb82e00} stroke="var(--stroke-0, #202020)" />
            </g>
            <path d="M4.25 2.5V0.5" id="Vector_2" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
            <path d="M8.75 2.5V0.5" id="Vector_3" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
            <path d="M5.75 7.16669H6.5H7.25" id="Vector 2" stroke="var(--stroke-0, #202020)" />
            <path d="M2.75 7.16669H3.5H4.25" id="Vector 13" stroke="var(--stroke-0, #202020)" />
            <path d="M8.75 7.16669H9.5H10.25" id="Vector 4" stroke="var(--stroke-0, #202020)" />
            <path d="M5.75 9.83334H6.5H7.25" id="Vector 10" stroke="var(--stroke-0, #202020)" />
            <path d="M2.75 9.83334H3.5H4.25" id="Vector 14" stroke="var(--stroke-0, #202020)" />
            <path d="M8.75 9.83334H9.5H10.25" id="Vector 12" stroke="var(--stroke-0, #202020)" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame({ dateFilter, setDateFilter }: { dateFilter: DateFilter; setDateFilter: (value: DateFilter) => void }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-[1216px]" data-name="Frame">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[32px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Summary
      </p>
      <Select value={dateFilter} onValueChange={(value) => setDateFilter(value as DateFilter)}>
        <SelectTrigger className="bg-[#fdfdfd] border border-[#d9d9d9] rounded-[4px] w-auto gap-[8px] h-auto p-[10px]">
          <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-px py-0 relative shrink-0 size-[20px]" data-name="calendar">
            <Group1 />
          </div>
          <div className="flex flex-col font-['DM_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#202020] text-[18px] text-nowrap text-right" style={{ fontVariationSettings: "'opsz' 14" }}>
            <SelectValue />
          </div>
          <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[3px] py-[6px] relative shrink-0 size-[20px]" data-name="drop-down">
            <div className="h-[4px] relative shrink-0 w-[8px]" data-name="Vector">
              <div className="absolute inset-[-8.84%_-4.42%_-17.68%_-4.42%]" style={{ "--stroke-0": "rgba(32, 32, 32, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9 6">
                  <path d={svgPaths.pd04f500} id="Vector" stroke="var(--stroke-0, #202020)" />
                </svg>
              </div>
            </div>
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="This Month">This Month</SelectItem>
          <SelectItem value="Last Month">Last Month</SelectItem>
          <SelectItem value="Last 3 Months">Last 3 Months</SelectItem>
          <SelectItem value="All Time">All Time</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

function Frame4({ balance }: { balance: number }) {
  return (
    <div className="content-stretch flex gap-[4px] items-end relative shrink-0">
      <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Amount">
        <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#202020] text-[24px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          {Math.abs(balance).toLocaleString('en-IN')}
        </p>
        <div className="h-[11.636px] relative shrink-0 w-[7.75px]" data-name="Amount">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 12">
            <path d={svgPaths.p11853c80} fill="var(--fill-0, #313131)" id="Amount" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame3({ balance }: { balance: number }) {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0">
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Balance
      </p>
      <Frame4 balance={balance} />
    </div>
  );
}

function Frame9({ expensePercent, investmentPercent, savingsPercent, remainingPercent }: { 
  expensePercent: number; 
  investmentPercent: number; 
  savingsPercent: number; 
  remainingPercent: number;
}) {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full h-[8px]">
      <div className="absolute h-[8px] left-0 top-0 w-full bg-[#E8E8E8] rounded-full"></div>
      <div 
        className="absolute h-[8px] top-0 rounded-l-full bg-[#FE4D01]" 
        style={{ width: `${expensePercent}%` }}
      ></div>
      <div 
        className="absolute h-[8px] top-0 bg-[#8671FF]" 
        style={{ left: `${expensePercent}%`, width: `${investmentPercent}%` }}
      ></div>
      <div 
        className="absolute h-[8px] top-0 bg-[#FEC021]" 
        style={{ left: `${expensePercent + investmentPercent}%`, width: `${savingsPercent}%` }}
      ></div>
      <div 
        className="absolute h-[8px] top-0 rounded-r-full bg-[#E8E8E8]" 
        style={{ left: `${expensePercent + investmentPercent + savingsPercent}%`, width: `${remainingPercent}%` }}
      ></div>
    </div>
  );
}

function Expenses() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Expenses">
      <div className="relative shrink-0 size-[13px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <circle cx="6.5" cy="6.5" fill="var(--fill-0, #FE4D01)" id="Ellipse 1" r="6.5" />
        </svg>
      </div>
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Expenses
      </p>
    </div>
  );
}

function Investments() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Investments">
      <div className="relative shrink-0 size-[13px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <circle cx="6.5" cy="6.5" fill="var(--fill-0, #8671FF)" id="Ellipse 1" r="6.5" />
        </svg>
      </div>
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Investment
      </p>
    </div>
  );
}

function Savings() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Savings">
      <div className="relative shrink-0 size-[13px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <circle cx="6.5" cy="6.5" fill="var(--fill-0, #FEC021)" id="Ellipse 1" r="6.5" />
        </svg>
      </div>
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Savings
      </p>
    </div>
  );
}

function Remaining() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0" data-name="Remaining">
      <div className="relative shrink-0 size-[13px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
          <circle cx="6.5" cy="6.5" fill="var(--fill-0, #E8E8E8)" id="Ellipse 1" r="6.5" />
        </svg>
      </div>
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Remaining
      </p>
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex gap-[36px] items-center relative shrink-0">
      <Expenses />
      <Investments />
      <Savings />
      <Remaining />
    </div>
  );
}

function Legends({ remainingPercent }: { remainingPercent: number }) {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Legends">
      <Frame91 />
      <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        <span>{`You have `}</span>
        <span className="font-['DM_Sans:Bold',sans-serif] font-bold" style={{ fontVariationSettings: "'opsz' 14" }}>
          {remainingPercent.toFixed(1)}%
        </span>
        <span>{` money remaining to spend`}</span>
      </p>
    </div>
  );
}

function ProgressBar({ expensePercent, investmentPercent, savingsPercent, remainingPercent }: { 
  expensePercent: number; 
  investmentPercent: number; 
  savingsPercent: number; 
  remainingPercent: number;
}) {
  return (
    <div className="bg-[#fdfdfd] box-border content-stretch flex flex-col gap-[24px] items-center justify-center overflow-clip px-[4px] py-[16px] relative shrink-0 w-full" data-name="Progress Bar">
      <Frame9 
        expensePercent={expensePercent}
        investmentPercent={investmentPercent}
        savingsPercent={savingsPercent}
        remainingPercent={remainingPercent}
      />
      <Legends remainingPercent={remainingPercent} />
    </div>
  );
}

function CardIncome({ income }: { income: number }) {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="card/income">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#005b1e] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            Income
          </p>
          <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Amount">
            <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#202020] text-[24px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              {income.toLocaleString('en-IN')}
            </p>
            <div className="h-[11.636px] relative shrink-0 w-[7.75px]" data-name="Amount">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 12">
                <path d={svgPaths.p11853c80} fill="var(--fill-0, #313131)" id="Amount" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c9c9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame7({ percent }: { percent: number }) {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#752503] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#752503] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        {percent.toFixed(1)}%
      </p>
    </div>
  );
}

function Frame8({ percent }: { percent: number }) {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#752503] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Expenses
      </p>
      <Frame7 percent={percent} />
    </div>
  );
}

function CardExpenses({ expenses, percent }: { expenses: number; percent: number }) {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="card/expenses">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <Frame8 percent={percent} />
          <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Amount">
            <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#202020] text-[24px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              {expenses.toLocaleString('en-IN')}
            </p>
            <div className="h-[11.636px] relative shrink-0 w-[7.75px]" data-name="Amount">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 12">
                <path d={svgPaths.p11853c80} fill="var(--fill-0, #313131)" id="Amount" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c9c9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame10({ percent }: { percent: number }) {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#0d0058] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0d0058] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        {percent.toFixed(1)}%
      </p>
    </div>
  );
}

function Frame11({ percent }: { percent: number }) {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#0d0058] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Investment
      </p>
      <Frame10 percent={percent} />
    </div>
  );
}

function CardInvestment({ invested, percent }: { invested: number; percent: number }) {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="card/investment">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <Frame11 percent={percent} />
          <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Amount">
            <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#202020] text-[24px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              {invested.toLocaleString('en-IN')}
            </p>
            <div className="h-[11.636px] relative shrink-0 w-[7.75px]" data-name="Amount">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 12">
                <path d={svgPaths.p11853c80} fill="var(--fill-0, #313131)" id="Amount" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c9c9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame24({ percent }: { percent: number }) {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[4px] py-0 relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#bf7800] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#bf7800] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        {percent.toFixed(1)}%
      </p>
    </div>
  );
}

function Frame25({ percent }: { percent: number }) {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#bf7800] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Savings
      </p>
      <Frame24 percent={percent} />
    </div>
  );
}

function CardSavings({ saved, percent }: { saved: number; percent: number }) {
  return (
    <div className="basis-0 bg-[#fdfdfd] grow min-h-px min-w-px relative rounded-[4px] shrink-0" data-name="card/savings">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
          <Frame25 percent={percent} />
          <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Amount">
            <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#202020] text-[24px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              {saved.toLocaleString('en-IN')}
            </p>
            <div className="h-[11.636px] relative shrink-0 w-[7.75px]" data-name="Amount">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 12">
                <path d={svgPaths.p11853c80} fill="var(--fill-0, #313131)" id="Amount" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#c9c9c9] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function SummaryDashboard({ summary }: { summary: any }) {
  return (
    <div className="bg-[#fdfdfd] relative rounded-[8px] shrink-0 w-[1216px]" data-name="Summary-dashboard">
      <div className="box-border content-start flex flex-wrap gap-[24px] items-start overflow-clip p-[24px] relative rounded-[inherit] w-[1216px]">
        <Frame3 balance={summary.balance} />
        <ProgressBar 
          expensePercent={summary.expensePercent}
          investmentPercent={summary.investmentPercent}
          savingsPercent={summary.savingsPercent}
          remainingPercent={summary.remainingPercent}
        />
        <CardIncome income={summary.income} />
        <CardExpenses expenses={summary.expenses} percent={summary.expensePercent} />
        <CardInvestment invested={summary.invested} percent={summary.investmentPercent} />
        <CardSavings saved={summary.saved} percent={summary.savingsPercent} />
      </div>
      <div aria-hidden="true" className="absolute border border-[#c9c9c9] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Frame6({ exportToCSV, setIsAddDialogOpen }: { exportToCSV: () => void; setIsAddDialogOpen: (value: boolean) => void }) {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0">
      <button onClick={exportToCSV} className="relative rounded-[8px] shrink-0 cursor-pointer" data-name="Button">
        <div className="box-border content-stretch flex gap-[4px] items-center overflow-clip p-[10px] relative rounded-[inherit]">
          <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[2px] relative shrink-0 size-[20px]" data-name="add">
            <div className="relative shrink-0 size-[12px]" data-name="Vector">
              <div className="absolute inset-[-4.167%]" style={{ "--stroke-0": "rgba(32, 32, 32, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                  <path d="M6.5 0.5V12.5M12.5 6.5H0.5" id="Vector" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
                </svg>
              </div>
            </div>
          </div>
          <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#202020] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            Export as CSV
          </p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#202020] border-solid inset-0 pointer-events-none rounded-[8px]" />
      </button>
      <button onClick={() => setIsAddDialogOpen(true)} className="bg-[#202020] box-border content-stretch flex gap-[4px] items-center overflow-clip p-[10px] relative rounded-[8px] shrink-0 cursor-pointer" data-name="Button">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[2px] relative shrink-0 size-[20px]" data-name="add">
          <div className="relative shrink-0 size-[12px]" data-name="Vector">
            <div className="absolute inset-[-4.167%]" style={{ "--stroke-0": "rgba(253, 253, 253, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
                <path d="M6.5 0.5V12.5M12.5 6.5H0.5" id="Vector" stroke="var(--stroke-0, #FDFDFD)" strokeLinecap="square" />
              </svg>
            </div>
          </div>
        </div>
        <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[#fdfdfd] text-[16px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Add
        </p>
      </button>
    </div>
  );
}

function Frame5({ exportToCSV, setIsAddDialogOpen }: { exportToCSV: () => void; setIsAddDialogOpen: (value: boolean) => void }) {
  return (
    <div className="box-border content-stretch flex h-[52px] items-center justify-between pb-[16px] pt-0 px-0 relative shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#363636] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Activity
      </p>
      <Frame6 exportToCSV={exportToCSV} setIsAddDialogOpen={setIsAddDialogOpen} />
    </div>
  );
}

function Frame18() {
  return (
    <div className="[grid-area:2_/_1] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">13 Oct 2025</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame21() {
  return (
    <div className="[grid-area:2_/_2] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Amount">
            <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#202020] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              3,200
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="[grid-area:2_/_3] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="h-[21px] relative shrink-0 w-[218px]" data-name="Description">
            <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium inset-0 leading-[normal] text-[#202020] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Weekly Groceries
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function IncomeTag() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="income-tag">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#752503] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Living Expense
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#752503] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame19() {
  return (
    <div className="[grid-area:2_/_4] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center opacity-80 relative shrink-0" data-name="Category">
            <IncomeTag />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame22() {
  return (
    <div className="[grid-area:2_/_5] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="bg-[#fdfdfd] box-border content-stretch flex gap-[2.5px] h-[24px] items-center justify-center px-[7.5px] py-[2.5px] relative rounded-[4px] shrink-0 w-[56px]" data-name="Payment-method">
            <div aria-hidden="true" className="absolute border-[#868686] border-[1.25px] border-solid inset-[-1.25px] pointer-events-none rounded-[5.25px]" />
            <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282828] text-[12.5px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              Cash
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="[grid-area:2_/_6] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="bg-[#f7d6c7] relative rounded-[4px] shrink-0" data-name="Tags">
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
              <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#752503] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                Expense
              </p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#752503] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame62() {
  return (
    <div className="[grid-area:3_/_1] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">12 Oct 2025</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame63() {
  return (
    <div className="[grid-area:3_/_2] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Amount">
            <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#202020] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              2,850
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame64() {
  return (
    <div className="[grid-area:3_/_3] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="h-[21px] relative shrink-0 w-[218px]" data-name="Description">
            <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium inset-0 leading-[normal] text-[#202020] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Dinner with Friends
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function IncomeTag1() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="income-tag">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#752503] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Dining Out
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#752503] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame65() {
  return (
    <div className="[grid-area:3_/_4] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center opacity-80 relative shrink-0" data-name="Category">
            <IncomeTag1 />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function G() {
  return (
    <div className="h-[10px] relative shrink-0 w-[30px]" data-name="g4158">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 10">
        <g id="g4158">
          <path d={svgPaths.p300baa00} fill="var(--fill-0, #00579F)" id="polygon9" />
          <path d={svgPaths.p916c300} fill="var(--fill-0, #00579F)" id="path11" />
          <path d={svgPaths.p3a404c80} fill="var(--fill-0, #00579F)" id="path13" />
          <path d={svgPaths.p2ccad00} fill="var(--fill-0, #00579F)" id="path15" />
          <path d={svgPaths.p23127b80} fill="var(--fill-0, #FAA61A)" id="path17" />
        </g>
      </svg>
    </div>
  );
}

function Frame66() {
  return (
    <div className="[grid-area:3_/_5] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="bg-[#fdfdfd] box-border content-stretch flex gap-[5px] h-[24px] items-center justify-center px-[13.75px] py-[5px] relative rounded-[4px] shrink-0 w-[56px]" data-name="Payment-method">
            <div aria-hidden="true" className="absolute border-[#868686] border-[1.25px] border-solid inset-[-1.25px] pointer-events-none rounded-[5.25px]" />
            <G />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame67() {
  return (
    <div className="[grid-area:3_/_6] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="bg-[#f7d6c7] relative rounded-[4px] shrink-0" data-name="Tags">
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
              <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#752503] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                Expense
              </p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#752503] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame68() {
  return (
    <div className="[grid-area:4_/_1] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">12 Oct 2025</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame69() {
  return (
    <div className="[grid-area:4_/_2] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Amount">
            <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#202020] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              3,500
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame70() {
  return (
    <div className="[grid-area:4_/_3] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="h-[21px] relative shrink-0 w-[218px]" data-name="Description">
            <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium inset-0 leading-[normal] text-[#202020] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Freelance Project Payment
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function IncomeTag2() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="income-tag">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#005b1e] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Freelance
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#005b1e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame71() {
  return (
    <div className="[grid-area:4_/_4] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Category">
            <IncomeTag2 />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame72() {
  return (
    <div className="[grid-area:4_/_5] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="bg-[#fdfdfd] box-border content-stretch flex flex-col gap-[12.5px] h-[24px] items-center justify-center px-[10px] py-[5px] relative rounded-[4px] shrink-0 w-[56px]" data-name="Payment-method">
            <div aria-hidden="true" className="absolute border-[#868686] border-[1.25px] border-solid inset-[-1.25px] pointer-events-none rounded-[5.25px]" />
            <div className="h-[8.75px] relative shrink-0 w-full" data-name="1280px-UPI-Logo-vector.svg 2">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[130.87%] left-0 max-w-none top-[-1.15%] w-full" src={img} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame73() {
  return (
    <div className="[grid-area:4_/_6] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="bg-[#cef2d6] relative rounded-[4px] shrink-0" data-name="Tags">
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
              <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#005b1e] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                Income
              </p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#005b1e] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame74() {
  return (
    <div className="[grid-area:5_/_1] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">10 Oct 2025</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame75() {
  return (
    <div className="[grid-area:5_/_2] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Amount">
            <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#202020] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              3,000
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame77() {
  return (
    <div className="[grid-area:5_/_3] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="h-[21px] relative shrink-0 w-[218px]" data-name="Description">
            <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium inset-0 leading-[normal] text-[#202020] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Fuel for Car
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function IncomeTag3() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="income-tag">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#752503] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Transport
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#752503] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame78() {
  return (
    <div className="[grid-area:5_/_4] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center opacity-80 relative shrink-0" data-name="Category">
            <IncomeTag3 />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame79() {
  return (
    <div className="[grid-area:5_/_5] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="bg-[#fdfdfd] box-border content-stretch flex flex-col gap-[12.5px] h-[24px] items-center justify-center px-[10px] py-[5px] relative rounded-[4px] shrink-0 w-[56px]" data-name="Payment-method">
            <div aria-hidden="true" className="absolute border-[#868686] border-[1.25px] border-solid inset-[-1.25px] pointer-events-none rounded-[5.25px]" />
            <div className="h-[10.202px] relative shrink-0 w-[38.75px]" data-name="RuPay.svg 1">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img1} />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame80() {
  return (
    <div className="[grid-area:5_/_6] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="bg-[#f7d6c7] relative rounded-[4px] shrink-0" data-name="Tags">
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
              <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#752503] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                Expense
              </p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#752503] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame81() {
  return (
    <div className="[grid-area:6_/_1] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">10 Oct 2025</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame82() {
  return (
    <div className="[grid-area:6_/_2] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Amount">
            <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#202020] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              1,280
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame83() {
  return (
    <div className="[grid-area:6_/_3] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="h-[21px] relative shrink-0 w-[218px]" data-name="Description">
            <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium inset-0 leading-[normal] text-[#202020] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Electricity Bill
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function IncomeTag4() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="income-tag">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#752503] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Living Expense
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#752503] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame84() {
  return (
    <div className="[grid-area:6_/_4] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center opacity-80 relative shrink-0" data-name="Category">
            <IncomeTag4 />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame85() {
  return (
    <div className="[grid-area:6_/_5] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="bg-[#fdfdfd] box-border content-stretch flex flex-col gap-[12.5px] h-[24px] items-center justify-center px-[10px] py-[5px] relative rounded-[4px] shrink-0 w-[56px]" data-name="Payment-method">
            <div aria-hidden="true" className="absolute border-[#868686] border-[1.25px] border-solid inset-[-1.25px] pointer-events-none rounded-[5.25px]" />
            <div className="h-[8.75px] relative shrink-0 w-full" data-name="1280px-UPI-Logo-vector.svg 2">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[130.87%] left-0 max-w-none top-[-1.15%] w-full" src={img} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame86() {
  return (
    <div className="[grid-area:6_/_6] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="bg-[#f7d6c7] relative rounded-[4px] shrink-0" data-name="Tags">
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
              <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#752503] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                Expense
              </p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#752503] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame87() {
  return (
    <div className="[grid-area:7_/_1] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">07 Oct 2025</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame88() {
  return (
    <div className="[grid-area:7_/_2] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Amount">
            <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#202020] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              4,450
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame89() {
  return (
    <div className="[grid-area:7_/_3] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="h-[21px] relative shrink-0 w-[235px]" data-name="Description">
            <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium inset-0 leading-[normal] text-[#202020] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Amazon Oder (Electronics)
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function IncomeTag5() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="income-tag">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#752503] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Discretionary
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#752503] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame90() {
  return (
    <div className="[grid-area:7_/_4] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center opacity-80 relative shrink-0" data-name="Category">
            <IncomeTag5 />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame92() {
  return (
    <div className="[grid-area:7_/_5] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="bg-[#fdfdfd] box-border content-stretch flex gap-[5px] h-[24px] items-center justify-center px-[13.75px] py-[5px] relative rounded-[4px] shrink-0 w-[56px]" data-name="Payment-method">
            <div aria-hidden="true" className="absolute border-[#868686] border-[1.25px] border-solid inset-[-1.25px] pointer-events-none rounded-[5.25px]" />
            <div className="h-[20.833px] relative shrink-0 w-[31.25px]" data-name="Mastercard-Logo-Free-PNG 1">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img2} />
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame93() {
  return (
    <div className="[grid-area:7_/_6] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="bg-[#f7d6c7] relative rounded-[4px] shrink-0" data-name="Tags">
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
              <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#752503] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                Expense
              </p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#752503] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="[grid-area:8_/_1] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">07 Oct 2025</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame29() {
  return (
    <div className="[grid-area:8_/_2] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Amount">
            <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#202020] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              20,000
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame27() {
  return (
    <div className="[grid-area:8_/_3] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="h-[21px] relative shrink-0 w-[218px]" data-name="Description">
            <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium inset-0 leading-[normal] text-[#202020] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Transfer to Emergency Fund
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function IncomeTag6() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="income-tag">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#752503] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Transfer
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#752503] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="[grid-area:8_/_4] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center opacity-80 relative shrink-0" data-name="Category">
            <IncomeTag6 />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame30() {
  return (
    <div className="[grid-area:8_/_5] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="bg-[#fdfdfd] box-border content-stretch flex gap-[2.5px] h-[24px] items-center justify-center px-[7.5px] py-[2.5px] relative rounded-[4px] shrink-0" data-name="Payment-method">
            <div aria-hidden="true" className="absolute border-[#868686] border-[1.25px] border-solid inset-[-1.25px] pointer-events-none rounded-[5.25px]" />
            <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282828] text-[12.5px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              Bank Transfer
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame31() {
  return (
    <div className="[grid-area:8_/_6] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="bg-[#dcd8f5] relative rounded-[4px] shrink-0" data-name="Tags">
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
              <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#0d0058] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                Invested
              </p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#0d0058] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame32() {
  return (
    <div className="[grid-area:9_/_1] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">05 Oct 2025</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame35() {
  return (
    <div className="[grid-area:9_/_2] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Amount">
            <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#202020] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              15,000
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame33() {
  return (
    <div className="[grid-area:9_/_3] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="h-[21px] relative shrink-0 w-[218px]" data-name="Description">
            <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium inset-0 leading-[normal] text-[#202020] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Rent of October
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function IncomeTag7() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="income-tag">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#752503] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Living Expense
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#752503] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame34() {
  return (
    <div className="[grid-area:9_/_4] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center opacity-80 relative shrink-0" data-name="Category">
            <IncomeTag7 />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame36() {
  return (
    <div className="[grid-area:9_/_5] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="bg-[#fdfdfd] box-border content-stretch flex flex-col gap-[12.5px] h-[24px] items-center justify-center px-[10px] py-[5px] relative rounded-[4px] shrink-0 w-[56px]" data-name="Payment-method">
            <div aria-hidden="true" className="absolute border-[#868686] border-[1.25px] border-solid inset-[-1.25px] pointer-events-none rounded-[5.25px]" />
            <div className="h-[8.75px] relative shrink-0 w-full" data-name="1280px-UPI-Logo-vector.svg 2">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[130.87%] left-0 max-w-none top-[-1.15%] w-full" src={img} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame37() {
  return (
    <div className="[grid-area:9_/_6] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="bg-[#f7d6c7] relative rounded-[4px] shrink-0" data-name="Tags">
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
              <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#752503] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                Expense
              </p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#752503] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame38() {
  return (
    <div className="[grid-area:10_/_1] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">06 Oct 2025</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame41() {
  return (
    <div className="[grid-area:10_/_2] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Amount">
            <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#202020] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              8,500
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame39() {
  return (
    <div className="[grid-area:10_/_3] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="h-[21px] relative shrink-0 w-[218px]" data-name="Description">
            <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium inset-0 leading-[normal] text-[#202020] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Car Loan EMI
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function IncomeTag8() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="income-tag">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#752503] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Debt Repayment
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#752503] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame40() {
  return (
    <div className="[grid-area:10_/_4] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center opacity-80 relative shrink-0" data-name="Category">
            <IncomeTag8 />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame42() {
  return (
    <div className="[grid-area:10_/_5] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="bg-[#fdfdfd] box-border content-stretch flex flex-col gap-[12.5px] h-[24px] items-center justify-center px-[10px] py-[5px] relative rounded-[4px] shrink-0 w-[56px]" data-name="Payment-method">
            <div aria-hidden="true" className="absolute border-[#868686] border-[1.25px] border-solid inset-[-1.25px] pointer-events-none rounded-[5.25px]" />
            <div className="h-[8.75px] relative shrink-0 w-full" data-name="1280px-UPI-Logo-vector.svg 2">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[130.87%] left-0 max-w-none top-[-1.15%] w-full" src={img} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame43() {
  return (
    <div className="[grid-area:10_/_6] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="bg-[#f7d6c7] relative rounded-[4px] shrink-0" data-name="Tags">
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
              <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#752503] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                Expense
              </p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#752503] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame44() {
  return (
    <div className="[grid-area:11_/_1] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">05 Oct 2025</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame47() {
  return (
    <div className="[grid-area:11_/_2] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Amount">
            <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#202020] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              12,500
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame45() {
  return (
    <div className="[grid-area:11_/_3] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="h-[21px] relative shrink-0 w-[218px]" data-name="Description">
            <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium inset-0 leading-[normal] text-[#202020] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Monthly SIP - Index
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function IncomeTag9() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="income-tag">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#752503] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Transfer
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#752503] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame46() {
  return (
    <div className="[grid-area:11_/_4] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center opacity-80 relative shrink-0" data-name="Category">
            <IncomeTag9 />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame48() {
  return (
    <div className="[grid-area:11_/_5] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="bg-[#fdfdfd] box-border content-stretch flex gap-[2.5px] h-[24px] items-center justify-center px-[7.5px] py-[2.5px] relative rounded-[4px] shrink-0" data-name="Payment-method">
            <div aria-hidden="true" className="absolute border-[#868686] border-[1.25px] border-solid inset-[-1.25px] pointer-events-none rounded-[5.25px]" />
            <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#282828] text-[12.5px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              Bank Transfer
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame49() {
  return (
    <div className="[grid-area:11_/_6] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="bg-[#f8e9c1] relative rounded-[4px] shrink-0" data-name="Tags">
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
              <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#563e00] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                Saved
              </p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#563e00] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame50() {
  return (
    <div className="[grid-area:12_/_1] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">04 Oct 2025</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame53() {
  return (
    <div className="[grid-area:12_/_2] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Amount">
            <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#202020] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              5,500
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame51() {
  return (
    <div className="[grid-area:12_/_3] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="h-[21px] relative shrink-0 w-[218px]" data-name="Description">
            <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium inset-0 leading-[normal] text-[#202020] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              Shopping at Zara
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function IncomeTag10() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="income-tag">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#752503] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Discretionary
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#752503] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame52() {
  return (
    <div className="[grid-area:12_/_4] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center opacity-80 relative shrink-0" data-name="Category">
            <IncomeTag10 />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function G1() {
  return (
    <div className="h-[10px] relative shrink-0 w-[30px]" data-name="g4158">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 10">
        <g id="g4158">
          <path d={svgPaths.p300baa00} fill="var(--fill-0, #00579F)" id="polygon9" />
          <path d={svgPaths.p916c300} fill="var(--fill-0, #00579F)" id="path11" />
          <path d={svgPaths.p3a404c80} fill="var(--fill-0, #00579F)" id="path13" />
          <path d={svgPaths.p2ccad00} fill="var(--fill-0, #00579F)" id="path15" />
          <path d={svgPaths.p23127b80} fill="var(--fill-0, #FAA61A)" id="path17" />
        </g>
      </svg>
    </div>
  );
}

function Frame54() {
  return (
    <div className="[grid-area:12_/_5] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="bg-[#fdfdfd] box-border content-stretch flex gap-[5px] h-[24px] items-center justify-center px-[13.75px] py-[5px] relative rounded-[4px] shrink-0 w-[56px]" data-name="Payment-method">
            <div aria-hidden="true" className="absolute border-[#868686] border-[1.25px] border-solid inset-[-1.25px] pointer-events-none rounded-[5.25px]" />
            <G1 />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame55() {
  return (
    <div className="[grid-area:12_/_6] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="bg-[#f7d6c7] relative rounded-[4px] shrink-0" data-name="Tags">
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
              <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#752503] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                Expense
              </p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#752503] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame56() {
  return (
    <div className="[grid-area:13_/_1] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">01 Oct 2025</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame59() {
  return (
    <div className="[grid-area:13_/_2] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Amount">
            <p className="font-['DM_Sans:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#202020] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
              82,967
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame57() {
  return (
    <div className="[grid-area:13_/_3] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="h-[21px] relative shrink-0 w-[218px]" data-name="Description">
            <p className="absolute font-['DM_Sans:Medium',sans-serif] font-medium inset-0 leading-[normal] text-[#202020] text-[16px]" style={{ fontVariationSettings: "'opsz' 14" }}>
              October Salary Credit
            </p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function IncomeTag11() {
  return (
    <div className="relative rounded-[4px] shrink-0" data-name="income-tag">
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[8px] py-[4px] relative rounded-[inherit]">
        <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#005b1e] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
          Salary
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#005b1e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame58() {
  return (
    <div className="[grid-area:13_/_4] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Category">
            <IncomeTag11 />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame60() {
  return (
    <div className="[grid-area:13_/_5] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[10px] relative size-full">
          <div className="bg-[#fdfdfd] box-border content-stretch flex flex-col gap-[12.5px] h-[24px] items-center justify-center px-[10px] py-[5px] relative rounded-[4px] shrink-0 w-[56px]" data-name="Payment-method">
            <div aria-hidden="true" className="absolute border-[#868686] border-[1.25px] border-solid inset-[-1.25px] pointer-events-none rounded-[5.25px]" />
            <div className="h-[8.75px] relative shrink-0 w-full" data-name="1280px-UPI-Logo-vector.svg 2">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[130.87%] left-0 max-w-none top-[-1.15%] w-full" src={img} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame61() {
  return (
    <div className="[grid-area:13_/_6] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[10px] relative size-full">
          <div className="bg-[#cef2d6] relative rounded-[4px] shrink-0" data-name="Tags">
            <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip px-[10px] py-[4px] relative rounded-[inherit]">
              <p className="font-['DM_Sans:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#005b1e] text-[12px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
                Income
              </p>
            </div>
            <div aria-hidden="true" className="absolute border border-[#005b1e] border-solid inset-0 pointer-events-none rounded-[4px]" />
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="[grid-area:1_/_1] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-[32px] pr-[12px] py-[18px] relative size-full">
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            Date
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="[grid-area:1_/_2] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-[32px] pr-[12px] py-[18px] relative size-full">
          <p className="font-['DM_Sans:Medium',sans-serif] font-medium leading-[normal] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            <span className="font-['DM_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'opsz' 14" }}>
              Amount (
            </span>
            <span className="font-['Inter:Medium',sans-serif] not-italic">₹</span>
            <span className="font-['DM_Sans:SemiBold',sans-serif] font-semibold" style={{ fontVariationSettings: "'opsz' 14" }}>
              )
            </span>
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame14() {
  return (
    <div className="[grid-area:1_/_3] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center pl-[32px] pr-[12px] py-[18px] relative size-full">
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            Description
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame13() {
  return (
    <div className="[grid-area:1_/_4] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[18px] relative size-full">
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            Category
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="[grid-area:1_/_5] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[32px] py-[18px] relative size-full">
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            Payment Method
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="[grid-area:1_/_6] bg-[#fdfdfd] relative shrink-0">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center px-[12px] py-[18px] relative size-full">
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[18px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
            Tag
          </p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#cecece] border-[0px_0px_1px_1px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Group3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Group">
      <div className="absolute inset-[-4.45%_-4.45%_-3.13%_-3.13%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Group">
            <path d={svgPaths.p2f3f1f00} id="Vector" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
            <path d={svgPaths.p329a3300} id="Vector_2" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Group">
      <div className="absolute inset-[-4.45%_-4.45%_-3.13%_-3.13%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Group">
            <path d={svgPaths.p2f3f1f00} id="Vector" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
            <path d={svgPaths.p329a3300} id="Vector_2" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Group">
      <div className="absolute inset-[-4.45%_-4.45%_-3.13%_-3.13%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Group">
            <path d={svgPaths.p2f3f1f00} id="Vector" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
            <path d={svgPaths.p329a3300} id="Vector_2" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Group">
      <div className="absolute inset-[-4.45%_-4.45%_-3.13%_-3.13%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Group">
            <path d={svgPaths.p2f3f1f00} id="Vector" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
            <path d={svgPaths.p329a3300} id="Vector_2" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Group">
      <div className="absolute inset-[-4.45%_-4.45%_-3.13%_-3.13%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Group">
            <path d={svgPaths.p2f3f1f00} id="Vector" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
            <path d={svgPaths.p329a3300} id="Vector_2" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Group">
      <div className="absolute inset-[-4.45%_-4.45%_-3.13%_-3.13%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Group">
            <path d={svgPaths.p2f3f1f00} id="Vector" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
            <path d={svgPaths.p329a3300} id="Vector_2" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Group">
      <div className="absolute inset-[-4.45%_-4.45%_-3.13%_-3.13%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Group">
            <path d={svgPaths.p2f3f1f00} id="Vector" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
            <path d={svgPaths.p329a3300} id="Vector_2" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Group">
      <div className="absolute inset-[-4.45%_-4.45%_-3.13%_-3.13%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Group">
            <path d={svgPaths.p2f3f1f00} id="Vector" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
            <path d={svgPaths.p329a3300} id="Vector_2" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group12() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Group">
      <div className="absolute inset-[-4.45%_-4.45%_-3.13%_-3.13%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Group">
            <path d={svgPaths.p2f3f1f00} id="Vector" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
            <path d={svgPaths.p329a3300} id="Vector_2" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Group">
      <div className="absolute inset-[-4.45%_-4.45%_-3.13%_-3.13%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Group">
            <path d={svgPaths.p2f3f1f00} id="Vector" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
            <path d={svgPaths.p329a3300} id="Vector_2" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group14() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Group">
          <g id="Vector"></g>
          <g id="Vector_2"></g>
        </g>
      </svg>
    </div>
  );
}

function Group15() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Group">
      <div className="absolute inset-[-4.45%_-4.45%_-3.13%_-3.13%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Group">
            <path d={svgPaths.p2f3f1f00} id="Vector" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
            <path d={svgPaths.p329a3300} id="Vector_2" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group16() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Group">
      <div className="absolute inset-[-4.45%_-4.45%_-3.13%_-3.13%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
          <g id="Group">
            <path d={svgPaths.p2f3f1f00} id="Vector" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
            <path d={svgPaths.p329a3300} id="Vector_2" stroke="var(--stroke-0, #202020)" strokeLinecap="square" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame94({ transactions, setEditingId }: { transactions: Transaction[]; setEditingId: (id: string | null) => void }) {
  const getTagColor = (tag: string) => {
    switch (tag) {
      case "Expense": return { bg: "#f7d6c7", text: "#752503", border: "#752503" };
      case "Income": return { bg: "#cef2d6", text: "#005b1e", border: "#005b1e" };
      case "Invested": return { bg: "#dcd8f5", text: "#0d0058", border: "#0d0058" };
      case "Saved": return { bg: "#f8e9c1", text: "#563e00", border: "#563e00" };
      default: return { bg: "#f7d6c7", text: "#752503", border: "#752503" };
    }
  };

  const getCategoryColor = (categoryType: string) => {
    if (categoryType === "income") return { text: "#005b1e", border: "#005b1e" };
    return { text: "#752503", border: "#752503" };
  };

  return (
    <div className="bg-[#fdfdfd] w-full">
      {/* Table Header */}
      <div className="grid grid-cols-[136px_170px_365px_minmax(0px,1fr)_211px_97px_56px] border-b border-[#cecece]">
        <div className="bg-[#fdfdfd] p-[18px_32px] border-r border-[#cecece]">
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>Date</p>
        </div>
        <div className="bg-[#fdfdfd] p-[18px_32px] border-r border-[#cecece]">
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>
            <span>Amount (</span><span className="font-['Inter:Medium',sans-serif]">₹</span><span>)</span>
          </p>
        </div>
        <div className="bg-[#fdfdfd] p-[18px_32px] border-r border-[#cecece]">
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>Description</p>
        </div>
        <div className="bg-[#fdfdfd] p-[18px_32px] border-r border-[#cecece]">
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>Category</p>
        </div>
        <div className="bg-[#fdfdfd] p-[18px_32px] border-r border-[#cecece]">
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>Payment Method</p>
        </div>
        <div className="bg-[#fdfdfd] p-[18px_12px] border-r border-[#cecece] text-center">
          <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] text-[18px] text-black" style={{ fontVariationSettings: "'opsz' 14" }}>Tag</p>
        </div>
        <div className="bg-white border-r border-[#cecece]"></div>
      </div>

      {/* Table Rows */}
      {transactions.map((transaction) => {
        const tagColors = getTagColor(transaction.tag);
        const catColors = getCategoryColor(transaction.categoryType);
        
        return (
          <div key={transaction.id} className="grid grid-cols-[136px_170px_365px_minmax(0px,1fr)_211px_97px_56px] border-b border-[#cecece]">
            <div className="bg-[#fdfdfd] p-[10px_32px] border-r border-[#cecece] flex items-center">
              <p className="font-['Inter:Regular',sans-serif] font-normal text-[12px] text-black">{transaction.date}</p>
            </div>
            <div className="bg-[#fdfdfd] p-[10px_32px] border-r border-[#cecece] flex items-center">
              <p className="font-['DM_Sans:Bold',sans-serif] font-bold text-[18px] text-[#202020]" style={{ fontVariationSettings: "'opsz' 14" }}>
                {transaction.amount.toLocaleString('en-IN')}
              </p>
            </div>
            <div className="bg-[#fdfdfd] p-[10px_32px] border-r border-[#cecece] flex items-center">
              <p className="font-['DM_Sans:Medium',sans-serif] font-medium text-[16px] text-[#202020]" style={{ fontVariationSettings: "'opsz' 14" }}>
                {transaction.description}
              </p>
            </div>
            <div className="bg-[#fdfdfd] p-[10px_32px] border-r border-[#cecece] flex items-center">
              <div className="border rounded-[4px] px-[8px] py-[4px]" style={{ borderColor: catColors.border }}>
                <p className="font-['DM_Sans:Regular',sans-serif] font-normal text-[12px]" style={{ color: catColors.text, fontVariationSettings: "'opsz' 14" }}>
                  {transaction.category}
                </p>
              </div>
            </div>
            <div className="bg-[#fdfdfd] p-[10px_32px] border-r border-[#cecece] flex items-center">
              <div className="border-[1.25px] border-[#868686] rounded-[4px] px-[8px] py-[4px] text-[12.5px] text-[#282828]">
                {transaction.paymentMethod}
              </div>
            </div>
            <div className="bg-[#fdfdfd] p-[10px_12px] border-r border-[#cecece] flex items-center justify-center">
              <div className="rounded-[4px] px-[10px] py-[4px] border" style={{ backgroundColor: tagColors.bg, borderColor: tagColors.border }}>
                <p className="font-['DM_Sans:Regular',sans-serif] font-normal text-[12px]" style={{ color: tagColors.text, fontVariationSettings: "'opsz' 14" }}>
                  {transaction.tag}
                </p>
              </div>
            </div>
            <button onClick={() => setEditingId(transaction.id)} className="bg-white border-r border-[#cecece] flex items-center justify-center cursor-pointer hover:bg-gray-50">
              <svg className="block size-[16px]" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <path d={svgPaths.p2f3f1f00} stroke="#202020" strokeLinecap="square" />
                <path d={svgPaths.p329a3300} stroke="#202020" strokeLinecap="square" />
              </svg>
            </button>
          </div>
        );
      })}
    </div>
  );
}

function Frame76() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-0 py-[32px] relative shrink-0 w-full">
      <p className="font-['DM_Sans:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[#535353] text-[18px] text-nowrap whitespace-pre" style={{ fontVariationSettings: "'opsz' 14" }}>
        Load More
      </p>
    </div>
  );
}

function Frame95({ 
  transactions, 
  exportToCSV, 
  setIsAddDialogOpen,
  setEditingId 
}: { 
  transactions: Transaction[]; 
  exportToCSV: () => void;
  setIsAddDialogOpen: (value: boolean) => void;
  setEditingId: (id: string | null) => void;
}) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1216px]">
      <Frame5 exportToCSV={exportToCSV} setIsAddDialogOpen={setIsAddDialogOpen} />
      <Frame94 transactions={transactions.slice(0, 12)} setEditingId={setEditingId} />
      <Frame76 />
    </div>
  );
}

export default function Desktop() {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);
  const [dateFilter, setDateFilter] = useState<DateFilter>("This Month");
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [newTransaction, setNewTransaction] = useState({
    date: "",
    description: "",
    category: "",
    categoryType: "expense" as "expense" | "income" | "investment" | "savings",
    amount: "",
    paymentMethod: "Cash",
    tag: "Expense" as "Expense" | "Income" | "Invested" | "Saved",
  });

  const summary = useMemo(() => {
    const income = transactions.filter(t => t.tag === "Income").reduce((sum, t) => sum + t.amount, 0);
    const expenses = transactions.filter(t => t.tag === "Expense").reduce((sum, t) => sum + t.amount, 0);
    const invested = transactions.filter(t => t.tag === "Invested").reduce((sum, t) => sum + t.amount, 0);
    const saved = transactions.filter(t => t.tag === "Saved").reduce((sum, t) => sum + t.amount, 0);
    
    const balance = income - expenses - invested - saved;
    
    const expensePercent = income > 0 ? (expenses / income) * 100 : 0;
    const investmentPercent = income > 0 ? (invested / income) * 100 : 0;
    const savingsPercent = income > 0 ? (saved / income) * 100 : 0;
    const remainingPercent = Math.max(0, 100 - expensePercent - investmentPercent - savingsPercent);
    
    return {
      balance,
      income,
      expenses,
      invested,
      saved,
      expensePercent,
      investmentPercent,
      savingsPercent,
      remainingPercent,
    };
  }, [transactions]);

  const handleAddTransaction = () => {
    if (!newTransaction.description || !newTransaction.amount || !newTransaction.category) {
      return;
    }

    const transaction: Transaction = {
      id: Date.now().toString(),
      date: newTransaction.date || new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      description: newTransaction.description,
      category: newTransaction.category,
      categoryType: newTransaction.categoryType,
      amount: parseFloat(newTransaction.amount),
      paymentMethod: newTransaction.paymentMethod,
      tag: newTransaction.tag,
    };

    setTransactions([transaction, ...transactions]);
    setIsAddDialogOpen(false);
    setNewTransaction({
      date: "",
      description: "",
      category: "",
      categoryType: "expense",
      amount: "",
      paymentMethod: "Cash",
      tag: "Expense",
    });
  };

  const exportToCSV = () => {
    const headers = ["Date", "Amount (₹)", "Description", "Category", "Payment Method", "Tag"];
    const rows = transactions.map((t) => [
      t.date,
      t.amount.toString(),
      t.description,
      t.category,
      t.paymentMethod,
      t.tag,
    ]);

    const csv = [headers, ...rows].map((row) => row.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `transactions-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
  };

  return (
    <div className="bg-[#fdfdfd] content-stretch flex flex-col gap-[32px] items-center relative size-full" data-name="Desktop">
      <Header />
      <Frame dateFilter={dateFilter} setDateFilter={setDateFilter} />
      <SummaryDashboard summary={summary} />
      <Frame95 
        transactions={transactions} 
        exportToCSV={exportToCSV}
        setIsAddDialogOpen={setIsAddDialogOpen}
        setEditingId={setEditingId}
      />
      
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Add Transaction</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                placeholder="DD MMM YYYY"
                value={newTransaction.date}
                onChange={(e) => setNewTransaction({ ...newTransaction, date: e.target.value })}
              />
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
                  <SelectValue />
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
                  <SelectItem value="Saved">Saved</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button onClick={handleAddTransaction}>Add Transaction</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}