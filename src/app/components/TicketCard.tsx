

interface props {
    title: string
    description: string
    date: string
    time: string
    location: string
}

const TicketCard = (props: props) => {
    return(
        <div className="relative mt-auto flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md bg-[url('../../public/card_background.jpg')]">
        <div className="p-6">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="mb-4 h-12 w-12 text-pink-500"
            >
            <path
                fill-rule="evenodd"
                d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                clip-rule="evenodd"
            ></path>
            <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"></path>
            </svg>
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased justify-items-center text-white">
            {props.title}
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased justify-items-center text-white">
            {props.description}
            {props.date}<br/>
            {props.time}<br/>
            {props.location}<br/>
            </p>
        </div>
        </div>
    );
}
export default TicketCard
