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
import { SessionDropDown } from "../components/SessionDropDown";

export const dynamic = 'force-dynamic'

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

export interface Session {
  id: number;
  datetime: string;
  concert: {
    id: number;
    title: string;
    description: string;
    artist: string;
    venue: {
      id: number;
      name: string;
    };
    concertImages: [];
  };
}

async function getCategoryPricing(concertId: number) {
  try {
    return await axios.get(
      `/v1/concerts/${concertId}/prices`
    );
  } catch (e) {
    console.log(e);
    return [];
  }
}

async function getSession(id: number) {
  return await axios.get(
    `/v1/concerts/${id}/sessions`
  );
}

export default function Ballot({ searchParams }: Props) {
  const [categoryId, setCategoryId] = useState("");
  const [catPricing, setCatPricing] = useState<CategoryPricing[]>([]);
  const [sessions, setSessions] = useState<Session[]>([]);
  const [currentSession, setCurrentSession] = useState<Session | null>(null);

  useEffect(() => {
    // Fetch data when the component mounts
    async function fetchData() {
      const data = await getCategoryPricing(searchParams.id).then(
        (res) => res.data as CategoryPricing[]
      );
      setCatPricing(data);
    }
    async function fetchSession() {
      const sessions = await getSession(searchParams.id).then(
        (res) => res.data as Session[]
      );
      setSessions(sessions);
      setCurrentSession(sessions[0]);
    }
    fetchData();
    fetchSession();
  }, [searchParams.id]); // Add the dependencies that trigger data fetching

  useEffect(() => {
    console.log(categoryId); // TO BE REMOVED
  }, [categoryId]);

  const getPriceByCategoryId = () => {
    let price = 0.0;
    console.log(sessions[0].id);
    catPricing.forEach((pricing) => {
      if (pricing.category.id + "" == categoryId) {
        price = pricing.price;
      }
    });
    return price;
  };

  const getCategoryNameByCategoryId = (id: string) => {
    let name = "";
    catPricing.forEach((pricing) => {
      if (pricing.category.id + "" == id) {
        name = pricing.category.name;
      }
    });
    return name;
  };

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
                  <div className={`${styles.innerWidth} mx-auto`}>
                    <SessionDropDown
                      sessions={sessions}
                      setCurrentSession={setCurrentSession}
                    />
                  </div>
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
              <Seatmap setSection= {setCategoryId} />
            </a>
            <Legend />
          </div>

          {categoryId && (
            <div className="bg-white" id="categorysection">
              {" "}
              <CategoryTable
                categoryId={categoryId}
                categoryName={getCategoryNameByCategoryId(categoryId)}
                price={getPriceByCategoryId()}
                concertId={searchParams.id}
                sessionId={currentSession?.id}
              />
            </div>
          )}
        </div>
        <Footer />
      </div>
    </main>
  );
}
