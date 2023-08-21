import React, { useState } from 'react'
import styles from './SongsTable.module.css';
import { Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@mui/material';

const SongsTable = ({songsData}) => {
	const columns=[
		{ id: 'title', label: 'Title', align: 'left' },
		{ id: 'artists', label: 'Artist', align: 'left'},
		{ id: 'durationInMs', label: 'Duration', align: 'right'}
	];
	const [page, setPage] = useState(0);
	const [rowsPerPage, setRowsPerPage] = useState(10);

	const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

	function getDuration(ms) {
		let secs = Math.floor((ms/1000) << 0)
		let mins = Math.floor(secs/60);
		return `${mins}:${secs}`
	}

  return (
    <div className={styles.wrapper}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
									style={{ background: '#000', color: '#FFF', border: '0px'}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {songsData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {/* {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })} */}
										<TableCell key="title" style={{color: '#FFF'}}>
											<div className={styles.tableCellWrapper}>
												<img src={row.image} alt={row.title} height="50" width="50" />
												<p>{row.title}</p>
											</div>
										</TableCell>
										<TableCell key="artists" style={{color: '#FFF'}}>{row.artists.join(',')}</TableCell>
										<TableCell key="durationInMs" align='right' style={{color: '#FFF'}}>{getDuration(row.durationInMs)}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={songsData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
				style={{ color: '#FFF'}}
      />
    </div>
  )
}

export default SongsTable