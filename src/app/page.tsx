import Image from 'next/image'
import Navbar from './components/Navbar'
import ConcertListItem from './components/ConcertListItem'
import { Carousel } from './components/Carousel'

const concerts = [
	{
		title: 'The Weeknd After Hours Tour',
		description: 'Come join us for a night of fun and music with The Weeknd! Come join us for a night of fun and music with The Weeknd! Come join us for a night of fun and music with The Weeknd! Come join us for a night of fun and music with The Weeknd!',
		id: 1
	},
	{
		title: 'The Weeknd After Hours Tour',
		description: 'Come join us for a night of fun and music with The Weeknd! Come join us for a night of fun and music with The Weeknd! Come join us for a night of fun and music with The Weeknd! Come join us for a night of fun and music with The Weeknd!',
		id: 1
	},
	{
		title: 'The Weeknd After Hours Tour',
		description: 'Come join us for a night of fun and music with The Weeknd! Come join us for a night of fun and music with The Weeknd! Come join us for a night of fun and music with The Weeknd! Come join us for a night of fun and music with The Weeknd!',
		id: 1
	},
	{
		title: 'The Weeknd After Hours Tour',
		description: 'Come join us for a night of fun and music with The Weeknd! Come join us for a night of fun and music with The Weeknd! Come join us for a night of fun and music with The Weeknd! Come join us for a night of fun and music with The Weeknd!',
		id: 1
	}
]

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center bg-white">
			<Navbar />
			<Carousel />
			<div className='w-1/2 text-black pt-12'>
				<h2 className='font-bold text-3xl border-b mb-4'>Upcoming Concerts</h2>
				<div className='flex flex-col gap-6 w-full'>
					{ concerts.map((concert, idx) => (
						<ConcertListItem 
							title={concert.title}
							description={concert.description}
							id = {concert.id}
							key={ `concert-item-${idx}` }
						/> 
					) )}
				</div>
			</div>
		</main>
	)
}
