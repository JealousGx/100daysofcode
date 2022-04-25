const today = new Date().getFullYear()
const years = []
const dates = []
let startYear = 1870
while (startYear <= today) {
  years.push(startYear++)
}
years.reverse()
years.splice(0, 3)

let i = 1
while (i <= 31) {
  dates.push(i++)
}

export const DOB = [
  {
    months: [
      {
        id: 0,
        name: "January",
      },
      {
        id: 1,
        name: "February",
      },
      {
        id: 2,
        name: "March",
      },
      {
        id: 3,
        name: "April",
      },
      {
        id: 4,
        name: "May",
      },
      {
        id: 5,
        name: "June",
      },
      {
        id: 6,
        name: "July",
      },
      {
        id: 7,
        name: "August",
      },
      {
        id: 8,
        name: "September",
      },
      {
        id: 9,
        name: "October",
      },
      {
        id: 10,
        name: "November",
      },
      {
        id: 11,
        name: "December",
      },
    ],
    years,
    dates,
  },
]
