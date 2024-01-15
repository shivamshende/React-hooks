import React, { useState } from 'react'

export default function UseCustom() {
    const [counter, SetCounter] = useState(0)
    const Increment = () => {
        SetCounter(counter + 1)
    }
    const Decrement = () => {
        SetCounter(counter - 1)
    }
    return [counter, Increment, Decrement]
}
