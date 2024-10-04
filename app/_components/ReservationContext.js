'use client'
import { createContext, useContext, useState } from "react"

const ReservationContext = createContext()

const initalState = {from: undefined, to: undefined}

const ReservationProvider = ({ children }) => {
    const [range, setRange] = useState(initalState)
    const resetRange = () => {
        setRange(initalState)
    }
    return (
        <ReservationContext.Provider value={{range, setRange, resetRange}}>
            {children}
        </ReservationContext.Provider>
    )
}
const useReservation = () => {
    const context = useContext(ReservationContext)
    if (context === undefined) throw new Error('Context was used outside provider')
    return context
}

export {ReservationProvider, useReservation}