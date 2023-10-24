"use client";
import { TableDropDown } from "./TableDropDown";
import styles from "../styles";
import axios from "axios";
import { Stripe, loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { jwtTokenAtom, userAtom } from "../jotai";
import { useAtomValue } from "jotai";
import { notification } from "antd";
import { FaSpinner } from "react-icons/fa";
import { CategoryPricing } from "../ballot/page";

interface props {
  category: string;
  price: number;
  concertId: number;
}

// async function getSectionsPricing(concertId: number) {
async function getSectionsPricing(concertId: number) {
  return await axios.get(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/concerts/${concertId}/prices`
  );
}

export const CategoryTable = (props: props) => {
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const jwtToken = useAtomValue(jwtTokenAtom);

  return (
    <div className={`${styles.innerWidth} mx-auto`}>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl">
          <div className="rounded-lg bg-gray-100 py-3 md:py-5 lg:py-7">
            {/* <h2 className="text-center text-2xl font-bold text-indigo-500 lg:text-3xl">
              Choose Your Category
            </h2> */}
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              The category that you have selected is {props.category}
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col overflow-x-auto items-center">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Ticket Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price Per Ticket
              </th>
              <th scope="col" className="px-6 py-3">
                Subtotal
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Standard
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {props.price}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {props.price * quantity}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <TableDropDown quantity={quantity} setQuantity={setQuantity} />
              </th>
            </tr>
          </tbody>
        </table>
        <div className="mt-8 mb-12">
          <button
            className="flex justify-center items-center w-[150px] h-[50px] bg-blue-500 hover:bg-blue-400 disabled:bg-neutral-500 disabled:hover:bg-neutral-500 disabled:cursor-default disabled:border-neutral-700 disabled:hover:border-neutral-700 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
            // onClick={() => processStripeCheckout(props.section)}
            disabled={loading}
          >
            {loading ? <FaSpinner /> : <div>Checkout</div>}
          </button>
        </div>
      </div>
    </div>
  );
};
