import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const Exercise = ({movieList}) => {
    return (
        <div>

        <div>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            </ButtonGroup>
        </div>
        <br></br><br></br>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>영화 제목</TableCell>
            <TableCell>개봉 날짜</TableCell>
            <TableCell>포스터</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {movieList.map((movie) => (
            <TableRow
              key={movie.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              
              <TableCell>{movie.title}</TableCell>
              <TableCell>{movie.title}</TableCell>
              <TableCell>{movie.open}</TableCell>
              <TableCell><img src={movie.img}/></TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
        </div>
    );
};

export default Exercise;