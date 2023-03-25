import { sortItems } from "Components/DataManager/DataManager.store";
import { dataItemInterface } from "Components/DataManager/DataManager.store";
import { renderHook } from '@testing-library/react'
/* Testing data */
import { 
    testData,
    yearDescData, yearAscData,
    titleDescData, titleAscData,
    moviesData, latestMovies1Data, latestMovies2Data,
    seriesData, latestSeries1Data, latestSeries2Data,
} from "Components/DataManager/tests/data";
import { useDataManagerStore } from "Components/DataManager/DataManager.store";
import { useInitializeDataManager } from 'Components/DataManager/DataManager';


test('useDataManagerStore functionality', () => {
    /* Test all operations of 'useDataManagerStore'  */
    
    /* Initialize store - parse items - already tests parseItems() */
    renderHook(() => useInitializeDataManager(testData));

    /* Get all variables and functions from the store */
    const movies = renderHook(() => 
        useDataManagerStore((state) => state.movies)).result.current;
    const series = renderHook(() => 
        useDataManagerStore((state) => state.series)).result.current;
    const getSortedItems = renderHook(() => 
        useDataManagerStore((state) => state.getSortedItems)).result.current;
    const getNLatestMovies = renderHook(() => 
        useDataManagerStore((state) => state.getNLatestMovies)).result.current;
    const getNLatestSeries = renderHook(() => 
        useDataManagerStore((state) => state.getNLatestSeries)).result.current;

    /* Assert that the items have been parsed correctly */
    expect(movies).toEqual(moviesData);
    expect(series).toEqual(seriesData);

    /* Test latest movies */
    let latestMovies = getNLatestMovies(1)
    expect(latestMovies).toEqual(latestMovies1Data);
    latestMovies = getNLatestMovies(2)
    expect(latestMovies).toEqual(latestMovies2Data);

    /* Test latest series */
    let latestSeries = getNLatestSeries(1)
    expect(latestSeries).toEqual(latestSeries1Data);
    latestSeries = getNLatestSeries(2)
    expect(latestSeries).toEqual(latestSeries2Data);

    /* Test getSortedItems all modes: "yearDesc" | "yearAsc" | "alphaAsc" | "alphaDesc" */
    expect(getSortedItems(testData, "yearDesc")).toEqual(yearDescData);
    expect(getSortedItems(testData, "yearAsc")).toEqual(yearAscData);
    expect(getSortedItems(testData, "alphaDesc")).toEqual(titleDescData);
    expect(getSortedItems(testData, "alphaAsc")).toEqual(titleAscData);
});
