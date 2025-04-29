import InfoCard from "@/components/card/InfoCard";
import SalesChart from "@/components/home/SalesChart";
import CategoryChart from "@/components/home/CategoryChart";
import { InfoCardItem } from "@/types";
import { getValues } from "@/utils/service";
import icon1 from "@/assets/icon-1.webp";
import icon2 from "@/assets/icon-2.webp";
import icon3 from "@/assets/icon-3.webp";
import icon4 from "@/assets/icon-4.png";

export default async function Home() {
  const values = await getValues();
  const cards: InfoCardItem[] = [
    {
      icon: icon1,
      label: "Toplam Kullanıcı",
      value: values.totalUsers * 56,
    },
    {
      icon: icon2,
      label: "Toplam Sipariş",
      value: values.totalOrders * 123,
    },
    {
      icon: icon3,
      label: "Toplam Satış",
      value: (values.totalPrice * 123).toLocaleString() + "₺",
    },
    {
      icon: icon4,
      label: "Toplam Ürün",
      value: values.totalProducts * 123,
    },
  ];

  return (
    <div className="page">
      <h1 className="title">Admin Paneli</h1>

      <section className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-5 rounded-2xl p-4 my-8">
        {cards.map((i, key) => (
          <InfoCard key={key} item={i} />
        ))}
      </section>

      <section className="grid lg:grid-cols-14 gap-5 my-10">
        <div className="lg:col-span-9">
          <SalesChart />
        </div>

        <div className="lg:col-span-5">
          <CategoryChart />
        </div>
      </section>
    </div>
  );
}