
export const priceForClient = (price, kurs) => {
    let kursPrice = price * kurs
    if(kursPrice < 100){
        return kursPrice + 60
    }
    else if(kursPrice > 99 && kursPrice < 200){
        return kursPrice + 80
    }
    else{
        return kursPrice + 100
    }
}
