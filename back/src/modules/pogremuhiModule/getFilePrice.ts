import * as fs from "node:fs";
import fetch from "node-fetch"
import xlsToJSON from "excel-to-clean-json"

export const getFilePrice = async (link: string, nameFile: string, limit: number, name: string, list: string) => {
    const date = new Date()
    for(let i = 0; i < limit; date.setDate(date.getDate() - 1)){
        const res = await fetch(link + date.toLocaleDateString("en-GB").split('/').join('.') + '.xls')
        if(res.statusText == 'OK'){
            new Promise((resolve, reject) => {
                const dest = fs.createWriteStream(nameFile)
                res.body.pipe(dest);
                res.body.on("end", () => {
                    setTimeout(() => global.pricePogremuhi = xlsToJSON.rows(nameFile, list), 1500)
                    resolve(name + date.toLocaleDateString())
                })
                dest.on("error", () => {
                    reject('Не обновились Погремухи')
                })
            }).then((x) => console.log(x))
            break
        }
        i++
    }
}

// export const getFilePrice = async (link: string, nameFile: string, limit: number, name: string, list: string) => {
//     const date = new Date()
//     for(let i = 0; i < limit; date.setDate(date.getDate() - 1)){

//         fetch(link + date.toLocaleDateString("en-GB").split('/').join('.') + '.xls')
//         .then(
//             res =>
//             new Promise((resolve, reject) => {
//                 const dest = fs.createWriteStream(nameFile);
//                 res.body.pipe(dest);
//                 res.body.on("end", () => {
//                     console.log(name +  date.toLocaleDateString())
//                     global.pricePogremuhi = xlsToJSON.rows(nameFile, list)
//                     resolve("it worked")
                    
//                 });
//                 dest.on("error", reject);
//             })
//         )
//         .catch(() => {
//             i++
//         })
//     }
// }

// export const getFilePrice = async (link: string, nameFile: string, limit: number, name: string, list: string) => {
//     const date = new Date()
//     for(let i = 0; i < limit; date.setDate(date.getDate() - 1)){
//         const res = await fetch(link + date.toLocaleDateString("en-GB").split('/').join('.') + '.xls')
//         if(res.statusText == 'OK'){
//             res.body.pipe(fs.createWriteStream(nameFile))
//             setTimeout(() => {
//                 fs.stat(nameFile, (err, stats) => {
//                     if(stats.size > 0){
//                         console.log(name +  date.toLocaleDateString())
//                         global.pricePogremuhi = xlsToJSON.rows(nameFile, list)
//                     }
//                 })
//             }, 25000)
//             break
//         }
//         i++
//     }
// }