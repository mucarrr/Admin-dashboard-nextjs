"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Field from "./Field";

export default function ImagePreview({image_url}: {image_url: string}) {
  const [image, setImage] = useState<string>(image_url);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const imageInput = document.getElementById('image_url') as HTMLInputElement;

    const handleChange = () => {
      const newUrl = imageInput.value;
      setImage(newUrl);
      setLoading(true);
      
      if(newUrl) {
        const testImg = new globalThis.Image();
        
        testImg.onload = () => {
          setIsValid(true);
          setLoading(false);
        }
        testImg.onerror = () => {
          setIsValid(false);
          setLoading(false);
        };
        testImg.src = newUrl;
      } else {
        setIsValid(false);
        setLoading(false);
      }
    }

    if (imageInput) {
      imageInput.addEventListener('input', handleChange);
      // Initial check
      handleChange();
    }

    return () => {
      if (imageInput) {
        imageInput.removeEventListener('input', handleChange);
      }
    }
  }, [image_url]);

  return (
    <Field htmlFor="image_url" label="Resim Önizleme">
      <div className="relative h-48 w-full bg-gray-100 rounded-md overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center h-full">Resim yükleniyor...</div>
        ) : isValid && image ? (
          <Image 
            src={image} 
            alt="Resim Önizleme" 
            className="object-contain" 
            unoptimized
            fill
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            {image ? "Geçersiz Resim" : "Resim Yüklenmedi"}
          </div>
        )}
      </div>
    </Field>
  );
}

