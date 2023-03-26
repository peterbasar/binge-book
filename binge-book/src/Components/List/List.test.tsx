import { dataItemInterface } from "Components/DataManager/DataManager.store";
import { render, renderHook, act, within } from '@testing-library/react'
/* Testing data */
import { 
    testData,
    yearDescData, yearAscData,
    titleDescData, titleAscData,
} from "Components/DataManager/tests/data";
import List from "Components/List/List";
import { useListStore, LIST_MODES } from "Components/List/List.store";


test('List: contents, all modes and item order, pagination', async () => {
    const mockedListTitle = "List mocked title"
    let testItems: Array<dataItemInterface> = testData;

    const toRender = (
        <List
            title={mockedListTitle}
            rawItems={testItems}
        />
    )
    const { rerender, container } = render(toRender);
    act(() => rerender(toRender));

    /* Get access to all useListStore variables */
    const listMode = renderHook(() => 
        useListStore((state) => state.listMode)).result.current;
    const setListMode = renderHook(() =>
        useListStore((state) => state.setListMode)).result.current;
    const itemsPerPage = renderHook(() =>
        useListStore((state) => state.itemsPerPage)).result.current;
    const setItemsPerPage = renderHook(() =>
        useListStore((state) => state.setItemsPerPage)).result.current;
    const items = renderHook(() =>
        useListStore((state) => state.items)).result.current;
    const setItems = renderHook(() =>
        useListStore((state) => state.setItems)).result.current;
    const currentPageItems = renderHook(() =>
        useListStore((state) => state.currentPageItems)).result.current;
    const setCurrentPageItems = renderHook(() =>
        useListStore((state) => state.setCurrentPageItems)).result.current;
    const page = renderHook(() =>
        useListStore((state) => state.page)).result.current;
    const setPage = renderHook(() =>
        useListStore((state) => state.setPage)).result.current;



    /* Test all the modes and expected data */
    act(() => setPage(1))
    act(() => setItemsPerPage(testData.length))

    /* MODE: yearDesc */
    act(() => setListMode(LIST_MODES.yearDesc))
    expect(items).toEqual(yearDescData);
    /* Check order of titles for the newly rendered elements */
    let foundItems = Array.from(container.querySelectorAll('.entitycard-card-wrapper'));
    foundItems.forEach((item, index) => {
        expect(within(item as HTMLElement).getByText(yearDescData[index].title)).toBeInTheDocument();
    });
    
    /* MODE: yearAsc */
    act(() => setListMode(LIST_MODES.yearAsc))
    expect(items).toEqual(yearAscData);
    /* Check order of titles for the newly rendered elements */
    foundItems = Array.from(container.querySelectorAll('.entitycard-card-wrapper'));
    foundItems.forEach((item, index) => {
        expect(within(item as HTMLElement).getByText(yearAscData[index].title)).toBeInTheDocument();
    });

    /* MODE: alphgaDesc */
    act(() => setListMode(LIST_MODES.alphaDesc))
    expect(items).toEqual(titleDescData);
    /* Check order of titles for the newly rendered elements */
    foundItems = Array.from(container.querySelectorAll('.entitycard-card-wrapper'));
    foundItems.forEach((item, index) => {
        expect(within(item as HTMLElement).getByText(titleDescData[index].title)).toBeInTheDocument();
    });

    /* MODE: alphgaAsc */
    act(() => setListMode(LIST_MODES.alphaAsc))
    expect(items).toEqual(titleAscData);
    /* Check order of titles for the newly rendered elements */
    foundItems = Array.from(container.querySelectorAll('.entitycard-card-wrapper'));
    foundItems.forEach((item, index) => {
        expect(within(item as HTMLElement).getByText(titleAscData[index].title)).toBeInTheDocument();
    });


    /*  Surpress pagination MUI error for the remainder of the test
        - MUI: A component is changing the default page state ... */
    console = {...console, error: jest.fn()};

    /* ITEM PER PAGE: 3 Set different items per page and check if the count matches */
    act(() => setPage(1))
    act(() => setItemsPerPage(3))
    foundItems = Array.from(container.querySelectorAll('.entitycard-card-wrapper'));
    expect(foundItems).toHaveLength(3)

    /* Second page should have only 1 item */
    act(() => setPage(2))
    foundItems = Array.from(container.querySelectorAll('.entitycard-card-wrapper'));
    expect(foundItems).toHaveLength(1)

    /* ITEM PER PAGE: 2 Set different items per page and check if the count matches */
    act(() => setPage(1))
    act(() => setItemsPerPage(2))
    foundItems = Array.from(container.querySelectorAll('.entitycard-card-wrapper'));
    expect(foundItems).toHaveLength(2)

    /* Second page should have 2 item */
    act(() => setPage(2))
    foundItems = Array.from(container.querySelectorAll('.entitycard-card-wrapper'));
    expect(foundItems).toHaveLength(2)
});
