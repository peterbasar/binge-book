import React from "react";
import apiCall from "./apiCall";
import { API_ENDPOINTS } from "config";


interface getFunFactInterface {
    num: number,
    setStatus: (value: number) => void,
    setResponse: (value: string) => void,
}


const getFunFact = async ({num, setStatus, setResponse}: getFunFactInterface) => {
    /* Build API number call */
    let requestUrl = `${API_ENDPOINTS.NUMBER_FACTS}${num}/year`;

    /* Request and extract text from the API endpoint */
    let xmlRequest = new XMLHttpRequest();
    xmlRequest.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            setResponse(this.responseText);
        }
        setStatus(this.status);
    };
    xmlRequest.open('GET', requestUrl, true);
    await xmlRequest.send();
}

export default getFunFact;