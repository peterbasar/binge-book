import { create } from 'zustand'
import { dataItemInterface } from 'Components/DataManager/DataManager.store';


export enum LIST_MODES {
  yearDesc = "Newest",
  yearAsc = "Oldest",
  alphaDesc = "Title - A to Z",
  alphaAsc = "Title - Z to A", 
}


interface useListStoreInterface {
  listMode: LIST_MODES,
  setListMode: (value: LIST_MODES) => void,
  itemsPerPage: number,
  setItemsPerPage: (value: number) => void,
  items: Array<dataItemInterface>,
  setItems: (items: Array<dataItemInterface>) => void,
  currentPageItems: Array<dataItemInterface>,
  setCurrentPageItems: (items: Array<dataItemInterface>) => void,
  page: number,
  setPage: (value: number) => void,
}

export const useListStore = create<useListStoreInterface>()((set, get) => ({
  listMode: LIST_MODES.yearDesc,
  setListMode: (value) => {
    set({listMode: value})
  },
  itemsPerPage: 15,
  setItemsPerPage: (value) => {
    set({itemsPerPage: value})
  },
  items: [],
  setItems: (items) => {
    set({items: items})
  },
  currentPageItems: [],
  setCurrentPageItems: (items) => {
    set({currentPageItems: items})
  },
  page: 1,
  setPage: (value) => {
    if (get().page !== value){
      set({page: value})
    }
  },
}))
