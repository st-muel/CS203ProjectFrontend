"use client";
import { TableDropDown } from "./TableDropDown";
import styles from "../styles";

interface props {
  section: string;
}

export const TableTickets = (props: props) => {
  return (
    <div className={`${styles.innerWidth} mx-auto`}>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl">
          <div className="rounded-lg bg-gray-100 py-3 md:py-5 lg:py-7">
            <h2 className="text-center text-2xl font-bold text-indigo-500 lg:text-3xl">
              Choose Your Ticket
            </h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
              The section that you have selected is {props.section}
            </p>
          </div>
        </div>
      </div>

      <div className="relative flex flex-col overflow-x-auto items-center">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Ticket type
              </th>
              <th scope="col" className="px-6 py-3">
                Ticket Section
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Ticket info
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
                {props.section}
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                $55
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <TableDropDown numSeats={3} />
              </th>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              ></th>
            </tr>
          </tbody>
        </table>
        <div className="mt-8 mb-12">
          <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};
