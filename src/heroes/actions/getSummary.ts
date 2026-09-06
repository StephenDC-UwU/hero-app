import { heroApi } from "../api/hero.api";
import type { SummaryResponse } from "../types/summaryResponse";



const getSummary = async () => {
    const {data} = await heroApi.get<SummaryResponse>('/summary');
    return data;
}

export default getSummary;
