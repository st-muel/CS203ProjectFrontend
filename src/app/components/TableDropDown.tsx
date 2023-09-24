'use client'

interface props{
    numSeats:number
}

// function generateOptions(numSeats : number): string {
//     let options = '';
//     for (let i = 0 ; i < numSeats ; i++) {
//       options += `<option>${i}</option>`;
//     }
//     console.log(options)
//     return options;
// }

export const TableDropDown = (props:props) => {
    // const seatsOption = generateOptions(props.numSeats)
    
    return(
    <main>
        <select id = "QuantitySelector" className = "w100 form-select">
            <option>Please select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            {/* {seatsOption} */}
        </select>
    </main>
    )
}