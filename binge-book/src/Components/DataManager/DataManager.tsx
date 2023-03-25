/* Constants */
import data from "Assets/data/data.json";


/* Zustand */
import { dataItemInterface, useDataManagerStore } from './DataManager.store';


export const useInitializeDataManager = () => {
  const parseItems = useDataManagerStore((state) => state.parseItems);
  parseItems(data.entries as Array<dataItemInterface>)
}