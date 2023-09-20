'use client'

import { Stripe, loadStripe } from "@stripe/stripe-js";
import { notification } from "antd";
import axios from "axios";
import { useState } from "react";
import { SeatPicker } from "../components/SeatPicker/SeatPicker";
import "./Seats.css";

const ChooseSeats = () => {
	const [selected, setSelected] = useState([]);
	const [loading, setLoading] = useState(false);

	const processStripeCheckout = async (selectedSeats: string[]) => {
        try {
            setLoading(true)

            const stripe = (await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string) as Stripe)
            const res = await axios.post('/api/stripe/create', {
				seats: selectedSeats
			})
            const sessionId = res.data.sessionId
	
            stripe.redirectToCheckout({
                sessionId: sessionId,
            })
        } catch (err) {
            notification.error({
                message: 'Error',
                description: 'Something went wrong. Please try again later.',
            })
        } finally {
            setLoading(false)
        }
    }

	const rows = [
		[
			{ id: 1, number: "A1" },
			{ id: 2, number: "A2" },
			{ id: 3, number: "A3" },
			{ id: 4, number: "A4" },
			{ id: 24, number: "A5" },
			{ id: 34, number: "A5" },
			{ id: 44, number: "A6" },
			{ id: 54, number: "A7" },
			null,
			{ id: 5, number: "A8" },
			{ id: 6, number: "A9" },
			{ id: 7, number: "A10" },
			{ id: 8, number: "A11" },
			{ id: 9, number: "A12", isReserved: true }
		],
		[
			{ id: 11, number: "B1" },
			{ id: 12, number: "B2" },
			{ id: 13, number: "B3", isReserved: true },
			{ id: 14, number: "B4" },
			{ id: 74, number: "B5" },
			{ id: 84, number: "B6" },
			{ id: 34, number: "B7" },
			{ id: 94, number: "B8" },
			null,
			{ id: 15, number: "B9" },
			{ id: 16, number: "B10" },
			{ id: 17, number: "B11" },
			{ id: 18, number: "B12" },
			{ id: 19, number: "B13" }
		],
		[
			{ id: 21, number: "C1" },
			{ id: 22, number: "C2" },
			{ id: 23, number: "C3" },
			{ id: 24, number: "C4" },
			{ id: 29, number: "C5" },
			{ id: 20, number: "C6" },
			{ id: 99, number: "C7" },
			{ id: 98, number: "C8" },
			null,
			{ id: 25, number: "C9" },
			{ id: 26, number: "C10" },
			{ id: 27, number: "C11", isReserved: true },
			{ id: 28, number: "C12" },
			{ id: 29, number: "C13" },
			null
		],
		[
			{ id: 11, number: "D1" },
			{ id: 12, number: "D2" },
			{ id: 13, number: "D3", isReserved: true },
			{ id: 14, number: "D4" },
			{ id: 74, number: "D5" },
			{ id: 84, number: "D6" },
			{ id: 34, number: "D7" },
			{ id: 94, number: "D8" },
			null,
			{ id: 15, number: "D9" },
			{ id: 16, number: "D10" },
			{ id: 17, number: "D11" },
			{ id: 18, number: "D12" },
			{ id: 19, number: "D13" }
		],
		[
			{ id: 11, number: "E1" },
			{ id: 12, number: "E2" },
			{ id: 13, number: "E3" },
			{ id: 14, number: "E4" },
			{ id: 74, number: "E5" },
			{ id: 84, number: "E6" },
			{ id: 34, number: "E7" },
			{ id: 94, number: "E8" },
			null,
			{ id: 15, number: "E9" },
			{ id: 16, number: "E10" },
			{ id: 17, number: "E11" },
			{ id: 18, number: "E12" },
			{ id: 19, number: "E13" }
		],
		[
			{ id: 11, number: "F1" },
			{ id: 12, number: "F2" },
			{ id: 13, number: "F3" },
			{ id: 14, number: "F4" },
			{ id: 74, number: "F5" },
			{ id: 84, number: "F6" },
			{ id: 34, number: "F7" },
			{ id: 94, number: "F8" },
			null,
			{ id: 15, number: "F9" },
			{ id: 16, number: "F10" },
			{ id: 17, number: "F11" },
			{ id: 18, number: "F12" },
			{ id: 19, number: "F13" }
		],
		[
			{ id: 11, number: "G1" },
			{ id: 12, number: "G2" },
			{ id: 13, number: "G3" },
			{ id: 14, number: "G4" },
			{ id: 74, number: "G5" },
			{ id: 84, number: "G6" },
			{ id: 34, number: "G7", isReserved: true },
			{ id: 94, number: "G8" },
			null,
			{ id: 15, number: "G9" },
			{ id: 16, number: "G10" },
			{ id: 17, number: "G11" },
			{ id: 18, number: "G12" },
			{ id: 19, number: "G13" }
		]
	];
	const price = 30;
	const totalprice = price * selected.length;
	const addSeatCallback = ({ row, number, id }, addCb) => {
		setSelected((prevItems) => [...prevItems, number]);
		const newTooltip = `tooltip for id-${id} added by callback`;
		addCb(row, number, id, newTooltip);
	};

	const removeSeatCallback = ({ row, number, id }, removeCb) => {
		setSelected((list) => list.filter((item) => item !== number));
		removeCb(row, number);
	};

	return (
		<div className="seats">
			<div className="screens">
				<img
					className="screen"
					src="https://th.bing.com/th/id/R.46b63df0f07c3285978bf3b92379dc67?rik=GsaELkhAn8QdGg&riu=http%3a%2f%2fcinimirror.com%2fwp-content%2fuploads%2f2018%2f10%2fIMG_20181102_142411.jpg&ehk=P3Gi5lxqd0PwYjGylWPHd1Ahvq71dbwWjft9A19IN0M%3d&risl=&pid=ImgRaw&r=0"
					alt="img not found"
				/>
			</div>

			<h5 className="seat_price">CLASSIC $30</h5>
			<SeatPicker
				addSeatCallback={addSeatCallback}
				removeSeatCallback={removeSeatCallback}
				rows={rows}
				alpha
				maxReservableSeats={10}
				visible
			/>
			{selected.length !== 0 ? (
				<>
					<div className="seat-price">
						<div className="seat-select">
							<h1 className="seats-select">SEAT: {selected.toString}</h1>
						</div>
						<div className="totalprice">
							<h1 className="price">
								price:{"$"}
								{totalprice}
							</h1>
						</div>
					</div>
						<button
							className="continue"
							onClick={() => processStripeCheckout(selected)}
						>
							continue  
						</button>
				</>
			) : null}
		</div>
	);
}

export default ChooseSeats


