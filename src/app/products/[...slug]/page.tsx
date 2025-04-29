import Field from "@/components/form/Field";
import ImagePreview from "@/components/form/ImagePreview";
import { Product } from "@/types";
import { array } from "@/utils/constants";
import { createProduct, getProduct, updateProduct } from "@/utils/service";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import React from "react";

const handleSubmit = async (formData: FormData) => {
  "use server";
  
  try {
    const id = formData.get("id") as string;
    const name = formData.get("name") as string;
    const brand = formData.get("brand") as string;
    const category = formData.get("category") as string;
    const price = formData.get("price") as string;
    const image_url = formData.get("image_url") as string;
    const description = formData.get("description") as string;
    const stock = formData.get("stock") as string;
    const rating = formData.get("rating") as string;
    const reviews_count = formData.get("reviews_count") as string;

    // Price validasyonu
    const priceValue = parseFloat(price);
    if (isNaN(priceValue) || priceValue < 0) {
      throw new Error("Geçersiz fiyat değeri");
    }

    const product: Omit<Product, "id"> = {
      name,
      brand,
      category,
      price: priceValue,
      image_url,
      description,
      stock: parseInt(stock),
      rating: parseFloat(rating),
      reviews_count: parseInt(reviews_count),
    };
if(id){
  await updateProduct(id, product);
} else {
  await createProduct(product);
}
    redirect("/products");
  } catch(error) {
    if(isRedirectError(error)) {
      redirect("/products");
    }
    console.error("Ürün oluşturma hatası:", error);
    throw new Error(error instanceof Error ? error.message : "Yeni ürün oluşturma hatası");
  }
}

function ProductForm({product}: {product: Product | null}) {
  return <form action={handleSubmit} className="space-y-6">
    {product && <input type="hidden" name="id" value={product?.id} />}
    <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 gap-4">
      <div className="space-y-6">
        {array.map((item) => (
          <div key={item.name}>
            {item.type === "select" ? (
              <Field htmlFor={item.name} label={item.label}>
                <select className="input" name={item.name} id={item.name} defaultValue={product?.category}>
                  <option value="" disabled className="text-gray-300">Kategori Seçiniz</option>
                  {item.options?.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </Field>
            ) : (
              <Field htmlFor={item.name} label={item.label}>
                <input type={item.type} className="input" name={item.name} id={item.name} required={item.required} defaultValue={product?.[item.name as keyof Product]} min={item.min} max={item.max} />
              </Field>
            )}
          </div>
        ))}

      </div>

      <div className="space-y-6">
      <Field htmlFor="image_url" label="Resim Url">
          <input className="input" name="image_url" id="image_url" type="url" required defaultValue={product?.image_url} />
        </Field>
        <ImagePreview image_url="image_url"/>
        <Field htmlFor="description" label="Açıklama">
          <textarea className="input min-h-66" name="description" id="description" defaultValue={product?.description} />
        </Field>
      </div>
    </div>
    <div className="flex justify-end">
    <button type="submit" className=" bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors transition">{product ? "Güncelle" : "Oluştur"}</button>
    </div>
  </form>
}

export default async function FormPage({params}: {params: Promise<{slug: string}>}) {
  const {slug} = await params;
  let product: Product | null = null;

  if(slug[0] === "edit" && slug[1]) {
    try {
      product = await getProduct(slug[1]);
      if(!product) {
        notFound();
      }
    } catch(error) {
      notFound();
    }
  }
  
  return (
    <div className="page container mx-auto p-4 md:p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="title">{product ? "Ürünü Düzenle" : "Yeni Ürün Oluştur"}</h1>
        <Link href={"/products"} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 cursor-pointer transition-colors transition">Geri</Link>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <ProductForm product={product} />
      </div>
    </div>
  );
}

 