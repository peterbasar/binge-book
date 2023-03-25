import React from "react";

const apiCall = async (url: string) => {
    try {
        const response = await fetch(url);

        /* Extract status and data */
        const status = await response.status;
        const data = await response.body;
           
        return [status, data]
    } catch (error){
        return [400, {}]
    }
}

export default apiCall;