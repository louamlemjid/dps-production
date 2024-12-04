import { wordsCounter } from "./wordsCounter";
import { Report } from "../types/reportType";
//This function stores the words frequency in a oject
//e.g. { '1':{'quantum': 3}}
export const wordsCounterById = (reportsArray:Report[]) => {
    const wordsFrequencyById:{[key: string]: {[key: string]: number}}={};
    reportsArray.forEach((report :Report)=> {
        wordsFrequencyById[report.id] = wordsCounter(report.text);
    });
    return wordsFrequencyById;
}