'use client'

import React, { useState } from "react";
// import "./SeatSelector.css";

const numRows = 5; // Number of rows
const seatsPerRow = 10; // Number of seats per row

const SeatSelector = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (row, seat) => {
    const isSelected = selectedSeats.some(
      (selectedSeat) => selectedSeat.row === row && selectedSeat.seat === seat
    );

    if (isSelected) {
      setSelectedSeats((prevSelectedSeats) =>
        prevSelectedSeats.filter(
          (selectedSeat) =>
            !(selectedSeat.row === row && selectedSeat.seat === seat)
        )
      );
    } else {
      setSelectedSeats((prevSelectedSeats) => [
        ...prevSelectedSeats,
        { row, seat },
      ]);
    }
  };

  const renderSeats = () => {
    const rows = [];

    for (let row = 1; row <= numRows; row++) {
      const seats = [];

      for (let seat = 1; seat <= seatsPerRow; seat++) {
        const isSelected = selectedSeats.some(
          (selectedSeat) =>
            selectedSeat.row === row && selectedSeat.seat === seat
        );

        seats.push(
          <div
            key={seat}
            className={`seat ${isSelected ? "selected" : ""}`}
            onClick={() => toggleSeat(row, seat)}
          >
            {seat}
          </div>
        );
      }

      rows.push(
        <div key={row} className="seat-row">
          {seats}
        </div>
      );
    }

    return rows;
  };

  return (
    <div className="seat-selector">
      <h2>Concert Seat Selector</h2>
      <div className="seat-grid">{renderSeats()}</div>
      <div className="selected-seats">
        <h3>Selected Seats:</h3>
        <ul>
          {selectedSeats.map(({ row, seat }, index) => (
            <li key={index}>{`Row ${row}, Seat ${seat}`}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SeatSelector;
