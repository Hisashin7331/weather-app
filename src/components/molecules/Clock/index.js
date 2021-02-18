import React, { useState, useEffect } from 'react'

import { Styled } from './styles'

const Clock = () => {
    const [currentDate, updateDate] = useState(new Date())
    useEffect(() => {
        setTimeout(
            () => setInterval(updateDate(new Date()), 60000),
            60000,
        )
    }, [])
    const correctTime = date => {
        const hours = date.getHours()
        const minutes = date.getMinutes()
        const addZero = number => {
            if (number < 10) return `0${number}`
            return number
        }
        return `${addZero(hours)} : ${addZero(minutes)}`
    }

    return <Styled>{correctTime(currentDate)}</Styled>
}

export default Clock
