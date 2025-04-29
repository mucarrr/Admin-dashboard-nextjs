import { TiHome } from "react-icons/ti";
import {
  FaUsers,
  FaHeart,
  FaBox,
  FaChartArea,
  FaDiceD6,
  FaCog,
} from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { Option } from "@/types";


export const sections: Option[] = [
  {
    icon: <TiHome />,
    name: "Anasayfa",
    url: "/",
  },

  {
    icon: <FaDiceD6 />,
    name: "Ürünler",
    url: "/products",
  },

  {
    icon: <FaUsers />,
    name: "Kullanıcılar",
    url: "/users",
  },
  {
    icon: <IoIosPricetags />,
    name: "Siparişler",
    url: "/orders",
  },

  {
    icon: <FaChartArea />,
    name: "Grafikler",
  },
  {
    icon: <FaHeart />,
    name: "Favoriler",
  },
  {
    icon: <FaBox />,
    name: "Envanter",
  },
  {
    icon: <FaCog />,
    name: "Ayarlar",
  },
];

export const inputs = [
  {
    label: "İsim",
    name: "name",
  },
  {
    label: "Marka",
    name: "brand",
  },
  {
    label: "Kategori",
    name: "category",
  },
  {
    label: "Fiyat",
    name: "price",
    type: "number",
  },
  {
    label: "Stok",
    name: "stock",
    type: "number",
  },
  {
    label: "Açıklama",
    name: "description",
  },
];

export const array = [
  {
    label: "Ürün Adı",
    name: "name",
    type: "text",
    required: true,
  },
  {
    label: "Marka",
    name: "brand",
    type: "text",
    required: true,
  },
  {
    label: "Kategori",
    name: "category",
    type: "select",
    required: true,
    options: ["Elektronik", "Giyim", "Ev Eşyası", "Oyuncak", "Kitap", "Müzik", "Hediyelik", "Diğer"],
  },
  {
    label: "Ürün Fiyatı",
    name: "price",
    type: "number",
    required: true,
    min: 0,
    step: "0.01",
    defaultValue: 0
  },
  {
    label: "Stok",
    name: "stock",
    type: "number",
    required: true,
  },
  {
    label: "Rayting (0-5)",
    name: "rating",
    type: "number",
    required: true,
    defaultValue: 0,
    min: 0,
    max: 5,
  },
  {
    label: "Yorum Sayısı",
    name: "reviews_count",
    type: "number",
    required: true,
    defaultValue: 0,
  }
]
