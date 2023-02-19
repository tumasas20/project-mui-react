import React from 'react';
import {
  Container,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';

const tableData = [{
  id: 1,
  first_name: 'Jammal',
  last_name: 'Bruinemann',
  email: 'jbruinemann0@people.com.cn',
  gender: 'Male',
  ip_address: '121.216.87.31',
}, {
  id: 2,
  first_name: 'Aldwin',
  last_name: 'Rasp',
  email: 'arasp1@spotify.com',
  gender: 'Male',
  ip_address: '214.39.94.112',
}, {
  id: 3,
  first_name: 'Duncan',
  last_name: 'Waldera',
  email: 'dwaldera2@about.com',
  gender: 'Male',
  ip_address: '169.83.178.77',
}, {
  id: 4,
  first_name: 'Drake',
  last_name: 'Lugton',
  email: 'dlugton3@hud.gov',
  gender: 'Male',
  ip_address: '85.224.91.151',
}, {
  id: 5,
  first_name: 'Efren',
  last_name: 'Mountstephen',
  email: 'emountstephen4@va.gov',
  gender: 'Male',
  ip_address: '107.255.97.225',
}, {
  id: 6,
  first_name: 'Burl',
  last_name: 'Dulany',
  email: 'bdulany5@delicious.com',
  gender: 'Male',
  ip_address: '186.121.242.222',
}, {
  id: 7,
  first_name: 'Kristel',
  last_name: 'Rabier',
  email: 'krabier6@guardian.co.uk',
  gender: 'Female',
  ip_address: '41.220.178.141',
}, {
  id: 8,
  first_name: 'Mame',
  last_name: 'Stockin',
  email: 'mstockin7@chronoengine.com',
  gender: 'Female',
  ip_address: '68.182.23.146',
}, {
  id: 9,
  first_name: 'Daniele',
  last_name: 'Phidgin',
  email: 'dphidgin8@friendfeed.com',
  gender: 'Female',
  ip_address: '125.63.101.51',
}, {
  id: 10,
  first_name: 'Lacey',
  last_name: 'Carek',
  email: 'lcarek9@xing.com',
  gender: 'Polygender',
  ip_address: '93.148.136.130',
}];

const TablePage = () => (
  <Container sx={{
    my: 6, p: 4, boxShadow: 3, borderRadius: 2, bgcolor: ' #d0ece7',
  }}
  >
    <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First name</TableCell>
            <TableCell>Last name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
                tableData.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.first_name}</TableCell>
                    <TableCell>{row.last_name}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                  </TableRow>
                ))
            }
        </TableBody>
      </Table>
    </TableContainer>
  </Container>
);

export default TablePage;
