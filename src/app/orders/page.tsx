import OrderTable from "@/components/table/OrderTable";
import { Suspense } from "react";
import Loading from "../loading";

export default function Orders() {
  return (
    <div className="page">
      <h1 className="title">Siparişler</h1>

      <Suspense fallback={<Loading designs="my-20" />}>
        <OrderTable />
      </Suspense>
    </div>
  );
}