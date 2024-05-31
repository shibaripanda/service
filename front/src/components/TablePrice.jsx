import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableVirtuoso } from 'react-virtuoso';

// function createData(id, q, e, price, r, model, info, cost) {
//   return { id, q, e, price, r, model, info, cost };
// }
function createData(id, model, price, cost) {
  return {id, model, price, cost };
}
const columns = [
  {
    width: '40%',
    label: 'Модель',
    dataKey: 'model',
  },
  {
    width: '10%',
    label: 'Вход',
    dataKey: 'price',
    numeric: true,
  },
  {
    width: '15%',
    label: 'Вход',
    dataKey: 'cost',
    numeric: true,
  }
]
// const columns = [
//   {
//     width: '40%',
//     label: 'Модель',
//     dataKey: 'model',
//   },
//   {
//     width: '35%',
//     label: 'Описание',
//     dataKey: 'info',
//   },
//   {
//     width: '10%',
//     label: 'Вход',
//     dataKey: 'cost',
//     numeric: true,
//   },
//   {
//     width: '15%',
//     label: 'Вход',
//     dataKey: 'price',
//     numeric: true,
//   }
// ]
const rows = (pogremuhi) => Array.from({ length: pogremuhi.length }, (_, index) => {
  const randomSelection = pogremuhi[index];
  return createData(index, ...randomSelection);
})

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table {...props} sx={{ borderCollapse: 'separate', tableLayout: 'fixed' }} />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => <TableBody {...props} ref={ref} />),
}
// function fixedHeaderContent() {
//   return (
//     <TableRow>
//       {columns.map((column) => (
//         <TableCell
//           key={column.dataKey}
//           variant="head"
//           align={column.numeric || false ? 'right' : 'left'}
//           style={{ width: column.width }}
//           sx={{
//             backgroundColor: 'background.paper',
//           }}
//         >
//           {column.label}
//         </TableCell>
//       ))}
//     </TableRow>
//   );
// }
function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell
          style={{ width: column.width }}
          // width={column.width}
          key={column.dataKey}
          align={column.numeric || false ? 'right' : 'left'}
        >
          {row[column.dataKey]}
        </TableCell>
      ))}
    </React.Fragment>
  );
}

export default function TablePrice(searchedPogremuhi, filter) {
    if(filter.length < 2 || searchedPogremuhi.length === 0){
        // return <div>Результаты поиска:</div>
    }
    else{
        return (
            <Paper style={{ height: 1000, width: '100%' }}>
              <TableVirtuoso
                data={rows(searchedPogremuhi)}
                components={VirtuosoTableComponents}
                // fixedHeaderContent={fixedHeaderContent}
                itemContent={rowContent}
              />
            </Paper>
        )
    }
}