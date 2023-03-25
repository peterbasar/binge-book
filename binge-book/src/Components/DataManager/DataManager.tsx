/* Zustand */
import { dataItemInterface, useDataManagerStore } from './DataManager.store';


export const useInitializeDataManager = (data: Array<dataItemInterface>) => {
  const parseItems = useDataManagerStore((state) => state.parseItems);
  parseItems(data as Array<dataItemInterface>)
}