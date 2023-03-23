import React from 'react';
import { create } from 'zustand'
/* Constants */
import data from "Assets/data/data.json";


/* Zustand */
import { dataItemInterface, DataManagerStore } from './DataManager.store';


export const initializeDataManager = () => {
  const parseItems = DataManagerStore((state) => state.parseItems);
  parseItems(data.entries as Array<dataItemInterface>)
}