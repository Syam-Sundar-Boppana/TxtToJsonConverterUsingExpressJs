
// function checkString(string) {
//     return /^[0-9]*$/.test(string);
// }

// let slicedData = [];
// let modifedData = "";
// for(let i=0; i < rawData.length; i++){
//     if((rawData[i] === "/" && (rawData[i+6] === "/" || rawData[i+7] === "/")) || (rawData[i] === "*" && (rawData[i+5] === "/" || rawData[i+6] === "/")) 
//         || (rawData[i] === " " && (rawData[i+4] === "/" || rawData[i+5] === "/"))|| (checkString(rawData[i]) && (rawData[i+3] === "/" || rawData[i+4] === "/")
//         || (rawData[i] === " " && (rawData[i+2] === "/" || rawData[i+3] === "/")) || (rawData[i] === "*" && (rawData[i+1] === "/" || rawData[i+2] === "/"))
//         || (rawData[i] === "/") || (rawData[i] === " ") || (rawData[i]==="O" && rawData[i+7] === "d") || (rawData[i] === "(") || (rawData[i] === ")")
//         || (rawData[i]==="b" && rawData[i+6] === "d") || (rawData[i]==="j" && rawData[i+5] === "d")  || (rawData[i]==="e" && rawData[i+4] === "d") 
//         || (rawData[i]==="c" && rawData[i+3] === "d" ) || (rawData[i]==="t" && rawData[i+2] === "d") || (rawData[i]==="I" && rawData[i+1] === "d")
//         || (rawData[i]==="d" && rawData[i-1] === "I"))){
//         slicedData.push(rawData.slice(i, i+7));
//     }
//     else if (rawData[i] !== "}" || i === rawData.length-1){
//         modifedData += rawData[i];
//     }
//     else{
//         modifedData += rawData[i] + ",";
//     }
// }

// modifedData = modifedData.replace(/\r\n/g, "");

// requiredData = JSON.parse("[" + JSON.parse(JSON.stringify(modifedData)) + "]");


// const fileReadPath = path.join(__dirname, "./uploads", fileName);
// const fileWritePath = path.join(__dirname, "..", "write.json");

// let rawData = fs.readFileSync(fileReadPath);
// console.log(rawData);


// const regex = /\/*\* ([0-9]|[1-9][0-9]{1,3}|10000) \*\//gi;
// const objectIdReplaceRegex = /[A-Za-z]+\(/gi;
// const commaReplaceregex = /"\),/gi;
// const commaAddRegex = /\}/gi;
// const bottomremoveRegex = /\},\]/gi;


// rawData = rawData.replace(regex, "\n");
// let modifedData = "[" + rawData + "]";
// modifedData = modifedData.replace(commaAddRegex, '},');
// modifedData = modifedData.replace(objectIdReplaceRegex, "");
// modifedData = modifedData.replace(commaReplaceregex, '",');
// modifedData = modifedData.replace(bottomremoveRegex, "}]");

// let requiredData = JSON.stringify(JSON.parse(modifedData));


// fs.writeFileSync(fileWritePath,JSON.stringify(requiredData));