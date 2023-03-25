import React, { useEffect } from 'react';
import './List.css';
import { Link } from "react-router-dom";
import { dataItemInterface } from 'Components/DataManager/DataManager.store';
/* MUI */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { SelectChangeEvent } from "@mui/material";
/* Components */
import EntityCard from 'Components/EntityCard/EntityCard';
import { LIST_MODES } from './List.store';
import ListSelect from 'Components/ListSelect/ListSelect';
/* Zustand */
import { useDataManagerStore } from 'Components/DataManager/DataManager.store';
import { useListStore } from './List.store';


interface ListInterface {
  title: string,
  rawItems: Array<dataItemInterface>,
}


const List = ({title, rawItems}: ListInterface) => {
  const theme = useTheme();

  /* Zustand */
  // useListStore
  const listMode = useListStore((state) => state.listMode)
  const setListMode = useListStore((state) => state.setListMode)
  const itemsPerPage = useListStore((state) => state.itemsPerPage)
  const items = useListStore((state) => state.items)
  const setItems = useListStore((state) => state.setItems)
  const currentPageItems = useListStore((state) => state.currentPageItems)
  const setCurrentPageItems = useListStore((state) => state.setCurrentPageItems)
  const page = useListStore((state) => state.page)
  const setPage = useListStore((state) => state.setPage)
  // useDataManagerStore
  const getSortedItems = useDataManagerStore((state) => state.getSortedItems)


  /* Get data based on the current listMode */
  useEffect(()=>{
    let mode: "yearDesc" | "yearAsc" | "alphaDesc" | "alphaAsc" = "yearDesc";
    if (listMode == LIST_MODES.yearDesc){
      mode = "yearDesc";
    }else if (listMode == LIST_MODES.yearAsc){
      mode = "yearAsc";
    }else if (listMode == LIST_MODES.alphaDesc){
      mode = "alphaDesc";
    }else if (listMode == LIST_MODES.alphaAsc){
      mode = "alphaAsc";
    };
    setItems(getSortedItems(rawItems, mode));
  }, [listMode])


  /* Detect page or items change */
  useEffect(()=>{
    setCurrentPageItems(items.slice((page-1)*itemsPerPage, page*itemsPerPage));
  }, [items, listMode, page])


  return (
    <div style={{margin: "0 auto"}}>
      <Box maxWidth={1920} sx={{ flexGrow: 1, margin: 2 }} style={{ backgroundColor: theme.palette.primary.main}}>
        
        {/* Title */}
        <Grid container alignItems={"center"}>
          <Grid item>
            <h1 className='list-title'>{title}</h1>
          </Grid>
        </Grid>

        {/* Options */}
        <Grid container marginBottom={2} justifyContent={"flex-end"}>
          <Grid>
            <ListSelect
              activeOption={listMode}
              options={Object.values(LIST_MODES)}
              handleChange={(value: SelectChangeEvent<any>)=>{setListMode(value.target.value)}}
            />
          </Grid>
        </Grid>

        {/* Items */}
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          {
            currentPageItems.map((item)=>{
              return (
                <Grid item key={item.title}> 
                  <EntityCard item={item} />
                </Grid>
              )
            })
          }
        </Grid>

        {/* Pagination */}
        <Grid container>
          <Grid className={"list-pagination"}>
            <Pagination defaultPage={page} onChange={(e, v: number) => {setPage(v)}} 
                        count={Math.round(items.length/itemsPerPage)} color={'secondary'}
                        variant="outlined"/>
          </Grid>
        </Grid>
        
      </Box>
    </div>
  );
}
export default List;