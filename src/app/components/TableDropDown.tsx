
interface props {
    quantity: number;
    setQuantity: (quantity: number) => void;
}

export const TableDropDown = (props: props) => {
    return(
        <main>
            <select 
                className = "w-1/2 form-select text-black text-center"
                onChange={(e) => props.setQuantity(parseInt(e.currentTarget.value))}
            >
                { Array(3).fill(0).map((_, i) => {
                    if (props.quantity == i + 1) return <option selected>{i + 1}</option>
                    else return <option>{i + 1}</option>
                }) }
            </select>
        </main>
    )
}