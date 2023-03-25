import { create } from 'zustand'


export interface dataItemInterface {
  title: string,
  programType: "series" | "movie",
  releaseYear: number,
  description: string,
  images: {
    "Poster Art": {
      height: number,
      width: number,
      url: string,
    },   
  }
}


const sortItems = (
  items: Array<dataItemInterface>,
  attribute: (item: dataItemInterface) => number | string,
  type: "asc" | "desc"):Array<dataItemInterface> =>
{
  if (items.length > 0){
    /* Sorting strings logic */
    if (typeof attribute(items[0]) === "string"){
      if (type === "desc"){
        return items.sort((a, b) => {
          return attribute(a) > attribute(b) ? 1 : -1;
        })
      }else if (type === "asc"){
        return items.sort((a, b) => {
          return attribute(a) > attribute(b) ? -1 : 1;
        })
      }  
    /* Sorting numbers logic */
    }else if (typeof attribute(items[0]) === "number"){
      if (type === "desc"){
        return items.sort((a, b) => {
          return (attribute(b) as number) - (attribute(a) as number);
        })
      }else if (type === "asc"){
        return items.sort((a, b) => {
          return (attribute(a) as number) - (attribute(b) as number);
        })
      }    
    }
  }
  return []
};


interface DataManagerStoreInterface {
  movies: Array<dataItemInterface>,
  series: Array<dataItemInterface>,
  parseItems: (value: Array<dataItemInterface>) => void,
  getSortedItems: (
    items: Array<dataItemInterface>, 
    value: "alphaAsc" | "alphaDesc" | "yearAsc" | "yearDesc")
    => Array<dataItemInterface>,
  getNLatestMovies: (count?: number) => Array<dataItemInterface>,
  getNLatestSeries: (count?: number) => Array<dataItemInterface>,
}


export const useDataManagerStore = create<DataManagerStoreInterface>()((set, get) => ({
  movies: [],
  series: [],

  parseItems: (value) => {
    /* Iterate all items in 'value' and divide them to movies series accordingly */
    let movies: Array<dataItemInterface> = [];
    let series: Array<dataItemInterface> = [];

    value.forEach(item => {
      if (item.programType === "series"){
        series.push(item);
      }else if(item.programType === "movie"){
        movies.push(item);
      }
    });

    set({ movies: movies, series: series })
  },

  getSortedItems: (items, value) => {
    if (value === "yearDesc"){
      return sortItems(items, (item) => item.releaseYear, "desc")  
    }
    else if (value === "yearAsc"){
      return sortItems(items, (item) => item.releaseYear, "asc")  
    }
    else if (value === "alphaAsc"){
      return sortItems(items, (item) => item.title, "asc")  
    }
    else if (value === "alphaDesc"){
      return sortItems(items, (item) => item.title, "desc")  
    }
    return []
  },
  getNLatestMovies: (count=8) => {
    return get().getSortedItems(get().movies, "yearDesc").slice(0, count)
  },
  getNLatestSeries: (count=8) => {
    return get().getSortedItems(get().series, "yearDesc").slice(0, count)
  },
}))
