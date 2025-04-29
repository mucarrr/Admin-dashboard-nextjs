"use client";
import { deleteProduct } from "@/utils/service";
import React, { useState }  from "react";
import { useRouter } from "next/navigation";

export default function DeleteButton({ id }: { id: string }) {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const handleDelete = async () => {
        if(!confirm("Bu ürünü silmek istediğinize emin misiniz?")){
            return;
        }
        try {
            setIsLoading(true);
            await deleteProduct(id);
            router.refresh();
            alert("Ürün başarıyla silindi.");
        } catch (error) {
            alert("Bir hata oluştu. Lütfen daha sonra tekrar deneyiniz.");
        } finally {
            setIsLoading(false);
        }
    };
  return <button
  onClick={handleDelete}
  disabled={isLoading}  
  className={`bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors w-19 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed`}
>
    {isLoading ? "Siliniyor..." : "Sil"}
</button>;
}
