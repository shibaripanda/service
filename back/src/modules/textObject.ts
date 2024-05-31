import * as fs from "node:fs";

export function textObject (dir: fs.PathLike){
    const files = []
        let allFiles = fs.readdirSync(dir)
        for (let i = 0; i < allFiles.length; i++){
            files.push(dir + allFiles[i])
        }
        const text = {}
        for(let i of files){
            const data = JSON.parse(fs.readFileSync(i, { encoding: "utf-8" }))
            text[i.split('/')[3].slice(0, -5)] = {}
            for(let a of data){
                text[i.split('/')[3].slice(0, -5)][a.symbol] = a.text
            }  
        }
        console.log('# text ready')
        return text
}


