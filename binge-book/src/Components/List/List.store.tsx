import React from 'react';
import { create } from 'zustand'
import { dataItemInterface } from 'Components/DataManager/DataManager.store';


export enum LIST_MODES {
  alphaDesc,
  alphaAsc,
  yearDesc,
  yearAsc,
}


interface ListStoreInterface {
  listMode: LIST_MODES,
  itemsPerPage: number,
  items: Array<dataItemInterface>,
  setItems: (items: Array<dataItemInterface>) => void,
}

export const useListStore = create<ListStoreInterface>()((set) => ({
  listMode: LIST_MODES.yearDesc,
  itemsPerPage: 15,
  items: [],
  setItems: (items) => {
    set({items: items})
  }
}))
