/* eslint-disable no-plusplus */
export const nextFiveDays = () => {
    const arrayOfDays = []
    const arrayOfDates = []
    const addZero = arg => {
        if (arg < 10) {
            return `0${arg}`
        }
        return arg
    }
    const today = new Date()
    for (let i = 0; i < 5; i++) {
        arrayOfDays.push(new Date(today))
        arrayOfDays[i].setDate(arrayOfDays[i].getDate() + i + 1)
    }
    arrayOfDays.map((item, index) =>
        arrayOfDates.push(
            index === 0
                ? 'Tomorrow'
                : `${addZero(item.getDate())}.${addZero(
                      item.getMonth() + 1,
                  )}`,
        ),
    )
    return arrayOfDates
}
