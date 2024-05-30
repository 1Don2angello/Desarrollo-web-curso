import { Box, Button } from "@mui/material";
import {useEffect, useState} from "react";
//import { DataGrid, GridColDef} from '@mui/x-data-grid';
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import axios from "axios";

interface Episodios{
    id:number,
    nombre:string

}
export default function DataGridDemo (){


    const [rows, setRows] = useState <Episodios[]>([]);
    const [loanding,setLoanding] = useState (true);
    const [titulo, setTitulo ] = useState ("");


    const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width:90},
    { field: 'name', headerName: 'Name', width:90},
    { field: 'status', headerName: 'Status', width:90},
    { field: 'species', headerName: 'Species', width:90},

];

    const fecthData = async() => {
        try{
            const response = await axios.get('https://rickandmortyapi.com/api/character');
            const data = response.data.results;
            console.log(data);
            setRows(data);
            setLoanding(true)

        }catch (error){
            console.error('Error fetching data:',error);
        }
    }

    useEffect (() => {
        fecthData();
    },[]);

    useEffect (() => {
        if (loanding == true)
            setTitulo("Datos Cargados");
    },[loanding]);
    return (
        <Box>
            <p>{titulo}</p>
            <Button onClick={()=> setLoanding (true)}>Show Effect</Button>
            <DataGrid
                rows={rows}
                columns={columns}

            />

        </Box>

    )
}