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
/* Components */
import EntityCard from 'Components/EntityCard/EntityCard';
import { LIST_MODES } from './List.store';
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
  const listMode = useListStore((state) => state.listMode)
  const itemsPerPage = useListStore((state) => state.itemsPerPage)
  const items = useListStore((state) => state.items)
  const setItems = useListStore((state) => state.setItems)
  const getSortedItems = useDataManagerStore((state) => state.getSortedItems)

  /* Get data based on the current listMode */
  useEffect(()=>{
    if (listMode == LIST_MODES.yearDesc){
      setItems(getSortedItems(rawItems, "yearDesc"))
    }else if (listMode == LIST_MODES.yearAsc){
      setItems(getSortedItems(rawItems, "yearAsc"))
    }else if (listMode == LIST_MODES.alphaDesc){
      setItems(getSortedItems(rawItems, "alphaDesc"))
    }else if (listMode == LIST_MODES.alphaAsc){
      setItems(getSortedItems(rawItems, "alphaAsc"))
    }      
  }, [listMode])

  /* Pagination */
  const [page, setPage] = React.useState(1);
  const handlePageChange = (value: number) => {
    if (value !== page){
      setPage(value)
    }
  }

  return (
    <div style={{margin: "0 auto"}}>
      <Box maxWidth={1920} sx={{ flexGrow: 1, margin: 2 }} style={{ backgroundColor: theme.palette.primary.main}}>
        <Grid container alignItems={"center"}>
          {/* Title */}
          <Grid item>
            <h1 className='list-title'>{title}</h1>
          </Grid>
        </Grid>

        {/* Items */}
        <Grid spacing={2} alignItems="center" justifyContent="center" container >
          {
            items.slice((page-1)*itemsPerPage, page*itemsPerPage).map((item)=>{
              return (
                <Grid item key={item.title}> 
                  <EntityCard item={item} />
                </Grid>
              )
            })
          }
        </Grid>
        <Grid container>
          <Grid className={"list-pagination"}>
            <Pagination defaultPage={page} onChange={(e, v: number) => {handlePageChange(v)}} 
                        count={Math.round(items.length/itemsPerPage)} color={'secondary'}
                        variant="outlined"/>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
export default List;