'use client'
import { useSearchParams } from 'next/navigation'

export default function Price() {
const router =  useSearchParams();
    return(
        <main>
        <h1>{router.getAll("num")}</h1>
        <h1>{router.get("price")}</h1>
        </main>
    )
}