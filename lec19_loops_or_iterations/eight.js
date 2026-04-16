const myNums = [1, 2, 3 ]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc : ${acc} and currval : ${currval}`);
//     return acc + currval
// }, 0 )


const myTotal = myNums.reduce( (acc , curr) => acc + curr ,0)
console.log(myTotal);


const shoopingCart = [
    {
        itemName: "js course",
        price: 2999
    },

    {
        itemName: "py course",
        price: 999
    },

    {
        itemName: "java course",
        price: 3000
    },
    {
        itemName: "mobile course",
        price: 5000
    },
    {
        itemName: "cpp course",
        price: 4000
    },
]

const priceToPay = shoopingCart.reduce( (acc ,item) => acc + item.price,0)

console.log(priceToPay);
