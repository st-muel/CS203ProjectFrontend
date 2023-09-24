"use client";

import { legendDetails } from "../constants";
import LegendCard from "./LegendCard";

const Legend = () => {
  return (
    <div className="flex flex-row">
      <div id="legend" className="text-xs">
        <div className="pt-4">
          {legendDetails.map(({ id, name, price, color}) => (
            <LegendCard key={id} name={name} price={price} color={color} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Legend;
