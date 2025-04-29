"use client";

import { ChartData } from "@/types";
import { Doughnut } from "react-chartjs-2";
import "chart.js/auto";

export default function DoughnutGraph({ data }: { data: ChartData }) {
  return (
    <div className="w-full h-full">
      <Doughnut data={data} className="!w-full !h-full max-w-[400px] max-h-[360px]" />
    </div>
  );
}
