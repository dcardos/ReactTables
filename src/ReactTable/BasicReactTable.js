import React from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import matchSorter from 'match-sorter'
import imageOui from '../assets/oui.jpg';
import imageNo from '../assets/grumpy-cat-no-1.jpg';
import swal from 'sweetalert2';

const onChangeFct = () => {alert('do something')}

const columns = [{
    Header: 'ID',
    accessor: 'ProductID'
},
{
    Header: 'Name',
    accessor: 'ProductName',
    render: props => <input value={props.row.name} onChange={onChangeFct} />
},
{
    Header: 'Category Name',
    id: 'CategoryName',
    accessor: d => d.CategoryName
},
{
    Header: 'Price',
    accessor: 'UnitPrice'
},
{
    Header: 'In Stock',
    accessor: 'UnitsInStock'
},
{
    Header: 'Discontinued',
    accessor: 'Discontinued',
    Cell: row => (
        <div>
            <input disabled type="checkbox" checked={row.value} />
            {row.value ? 
                <img src={imageOui} alt="oui" style={{margin: '10px', width: '60px'}}/>
                : <img src={imageNo} alt="non" style={{margin: '10px', width: '60px'}}/>}
        </div>
    )
}]

const basicReactTable = (props) => {
    return <ReactTable
        style={{ height: '500px' }}
        data={props.data}
        columns={columns}
        filterable
        defaultFilterMethod={(filter, row) =>
            matchSorter([row[filter.id]], filter.value).length !== 0}
        getTdProps={(state, rowInfo, column, instance) => {
            return {
            onClick: (e, handleOriginal) => {
                swal('Details', JSON.stringify(rowInfo.row), 'info');
        
                // IMPORTANT! React-Table uses onClick internally to trigger
                // events like expanding SubComponents and pivots.
                // By default a custom 'onClick' handler will override this functionality.
                // If you want to fire the original onClick handler, call the
                // 'handleOriginal' function.
                if (handleOriginal) {
                handleOriginal();
                }
            }
            };
        }}
    />
}

export default basicReactTable;