"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seatmap from "../components/Seatmap";
import { useEffect, useState } from "react";
import { CategoryTable } from "../components/CategoryTable";
import Legend from "../components/Legend";
import styles from "../styles";
import axios from "axios";
import { get } from "http";

interface Props {
  searchParams: any;
  catPricing: CategoryPricing[]; // Pass the fetched data as a prop
}

export interface CategoryPricing {
  category: {
    id: number;
    name: string;
    venue: {
      id: number;
      name: string;
    };
  };
  price: number;
}

async function getCategoryPricing(concertId: number) {
  try {
    return await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/concerts/${concertId}/prices`
    );
  } catch (e) {
    console.log(e);
    return [];
  }
}

export default function Ballot({ searchParams }: Props) {
  const [categoryId, setCategoryId] = useState("");
  const [catPricing, setCatPricing] = useState<CategoryPricing[]>([]);

  useEffect(() => {
    // Fetch data when the component mounts
    async function fetchData() {
      const data = await getCategoryPricing(searchParams.id).then(
        (res) => res.data as CategoryPricing[]
      );
      setCatPricing(data);
    }
    fetchData();
  }, [searchParams.id]); // Add the dependencies that trigger data fetching

  useEffect(() => {
    console.log(categoryId); // TO BE REMOVED
  }, [categoryId]);

  const getPriceByCategoryId = () => {
    let price = 0.0;
    catPricing.forEach((pricing) => {
      if (pricing.category.id + "" == categoryId) {
        price = pricing.price;
      }
    });
    return price;
  }


  return (
    <main>
      <div className="bg-primary-black overflow-hidden">
        <Navbar />
        <div className="bg-white py-6 sm:py-8 lg:py-12">
          <div
            className={`${styles.innerWidth} mx-auto flex md:flex-row flex-col gap-4 justify-center`}
          >
            <div className="relative md:w-[270px] w-full h-[150px]">
              <Image
                className="rounded-[32px]"
                src={searchParams.imgUrl}
                alt="concert"
                objectFit="cover"
                fill
              />
            </div>
            <div className="w-full flex justify-between items-center">
              <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
                <h4 className="font-normal lg:text-[40px] text-[26px] text-black">
                  {searchParams.title}
                </h4>
                <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">
                  {searchParams.loc} -{" "}
                  {new Date(searchParams.startDate).toDateString()}
                </p>
              </div>
            </div>
          </div>

          <div className={`${styles.innerWidth} mx-auto`}>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
              <div className="mx-auto max-w-screen-2xl">
                <div className="rounded-lg bg-gray-100 py-3 md:py-5 lg:py-7">
                  <h2 className="text-center text-2xl font-bold text-indigo-500 lg:text-3xl">
                    Choose Your Category
                  </h2>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-center items-center">
            <a href="#categorysection">
              <Seatmap setSection={setCategoryId} />
            </a>
            <Legend />
          </div>

          {categoryId && (
            <div className="bg-white" id="categorysection">
              {" "}
              <CategoryTable
                category={categoryId}
                price={getPriceByCategoryId()}
                concertId={searchParams.id}
              />
            </div>
          )}
        </div>
        <Footer />
      </div>
    </main>
  );
}
