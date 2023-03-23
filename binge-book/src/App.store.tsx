import React from 'react';
import { create } from 'zustand'
/* Constants */
import { FRONTEND_ENDPOINTS } from 'config';


interface AppStoreInterface {
  activeEndpoint: FRONTEND_ENDPOINTS
  setActiveEndpoint: (value: string) => void
}


export const useAppStore = create<AppStoreInterface>()((set) => ({
  activeEndpoint: FRONTEND_ENDPOINTS.HOMEPAGE,
  setActiveEndpoint: (value) => {
    if ((Object.values(FRONTEND_ENDPOINTS) as string[]).includes(value)){
      console.log(`${value} in endpoints`)
      set({ activeEndpoint: value as FRONTEND_ENDPOINTS })
    }else{
      console.log(`${value} not in endpoitns`)
      set({ activeEndpoint: FRONTEND_ENDPOINTS.HOMEPAGE })
    }
  }
}))
