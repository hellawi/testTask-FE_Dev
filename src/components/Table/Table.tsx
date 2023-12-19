import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'
import { Pagination } from '@mui/material';

function createData(
  name: string,
  company: string,
  number: string,
  email: string,
  country: string,
  status: React.ReactElement
) {
  return { name, company, number, email, country, status };
}

const rows = [
  createData('Jane Cooper', 'Microsoft', '(225) 555-0118', 'jane@microsoft.com', 'United States', <span className='active'>Active</span>),
  createData('Floyd Miles', 'Yahoo', '(205) 555-0100', 'floyd@yahoo.com', 'Kiribati', <span className='inactive'>Inactive</span>),
  createData('Ronald Richards', 'Adobe', '(302) 555-0107', 'ronald@adobe.com', 'Israel', <span className='inactive'>Inactive</span>),
  createData('Jerome Bell', 'Google', '(629) 555-0129', 'jerome@google.com', 'Réunion', <span className='active'>Active</span>),
  createData('Kathryn Murphy', 'Microsoft', '(406) 555-0120', 'kathryn@microsoft.com', 'Curaçao', <span className='active'>Active</span>),
  createData('Jacob Jones', 'Yahoo', '(208) 555-0112', 'jacob@yahoo.com', 'Brazil', <span className='active'>Active</span>),
  createData('Kristin Watson', 'Facebook', '(704) 555-0127', 'kristin@facebook.com', 'Åland Islands', <span className='inactive'>Inactive</span>),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{borderRadius: '10px'}} className='tableContainer'>
      <div className='preTable-box'>
        <div className='headingsBox'>
          <h1 className='heading'>All customers</h1>
          <p className='activeHeading'>Active members</p>
        </div>
        <input type="text" placeholder='Search' className='search' />
      </div>
      <Table sx={{ minWidth: 968, marginLeft: '10px', paddingRight: '10px' }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell align="right">Company</TableCell>
            <TableCell align="right">Phone Number</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Country</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.company}</TableCell>
              <TableCell align="right">{row.number}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.country}</TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className='pagination'>
        <p className='db-pagination-text'>Showing data 1 to 8 of 256K entries</p>
        <Pagination count={40} color='secondary' shape='rounded'/>
      </div>
      
    </TableContainer>
  );
}