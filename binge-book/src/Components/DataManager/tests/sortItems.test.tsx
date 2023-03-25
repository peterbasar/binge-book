import { sortItems } from "Components/DataManager/DataManager.store";
import { dataItemInterface } from "Components/DataManager/DataManager.store";
/* Testing data */
import { 
    testData,
    yearDescData,
    yearAscData,
    titleDescData,
    titleAscData,
} from "Components/DataManager/tests/data";


test('sortItems() functionality', () => {
    /* Testing 2 modes (asc, desc) for each allowed attribute type (string, number) */
    
    /* TEST: '1', TYPE: 'number', MODE: 'desc' */
    let items = sortItems(testData, (item: dataItemInterface) => item.releaseYear, "desc")
    expect(items).toEqual(yearDescData);

    /* TEST: '2', TYPE: 'number', MODE: 'desc' */
    items = sortItems(testData, (item: dataItemInterface) => item.releaseYear, "asc")
    expect(items).toEqual(yearAscData);

    // /* TEST: '3', TYPE: 'number', MODE: 'desc' */
    items = sortItems(testData, (item: dataItemInterface) => item.title, "desc")
    expect(items).toEqual(titleDescData);

    // /* TEST: '4', TYPE: 'number', MODE: 'desc' */
    items = sortItems(testData, (item: dataItemInterface) => item.title, "asc")
    expect(items).toEqual(titleAscData);
});
