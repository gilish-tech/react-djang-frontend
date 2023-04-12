import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import rows from "./all_test_cards.json"

// function createData(name, calories, fat, carbs, protein) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

rows.sort(function(a,b){
  return a.cardname.localeCompare(b.cardname)
})

export default function Cards() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ maxWidth: "100%" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            
            <TableCell sx={{ color:"#f0c14b",fontSize:"18px"}}>Card Type</TableCell>
            <TableCell align="right" sx={{ color:"#f0c14b",fontSize:"18px"}}>Card Number</TableCell>
            <TableCell align="right" sx={{ color:"#f0c14b",fontSize:"18px"}}>Name</TableCell>
            <TableCell align="right"  sx={{ color:"#f0c14b",fontSize:"18px"}}>Exp-Date</TableCell>
            <TableCell align="right" sx={{ color:"#f0c14b",fontSize:"18px"}}>CVV</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.cardname}
              </TableCell>
              <TableCell align="right">{row.number}</TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.expiry}</TableCell>
              
             
              <TableCell align="right">Any three Digit</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
