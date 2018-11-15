import React from 'react';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import { orderBy, filterBy } from '@progress/kendo-data-query';
import swal from 'sweetalert2';
import Discontinued from '../Discontinued';

class BasicKendoTable extends React.PureComponent {
  state = { 
    skip: 0, 
    take: 10,
    sort: [
      { field: 'ProductName', dir: 'asc' }
    ],
    filter: {
      logic: "and",
      filters: [
        { field: "ProductName", operator: "contains", value: "Ch" }
      ]
    } 
  }

  pageChange = (event) => {
    this.setState({
      skip: event.page.skip,
      take: event.page.take,
    });
  }

  render () {
    return ( 
      <Grid
        style={{ height: '500px' }}
        data={
          filterBy(
            orderBy(this.props.data
              .slice(this.state.skip, this.state.take + this.state.skip), this.state.sort),
            this.state.filter
          )
        }
        skip={this.state.skip}
        take={this.state.take}
        total={this.props.data.length}
        pageable={true}
        onPageChange={this.pageChange}
        sortable
        sort={this.state.sort}
        onSortChange={(e) => {
          this.setState({
            sort: e.sort
          });
        }}
        filterable
        filter={this.state.filter}
        onFilterChange={(e) => {
          this.setState({
              filter: e.filter
          });
        }}
        onRowClick={e => swal('Details', JSON.stringify(e.dataItem), 'info')}
      >
        <Column field="ProductID" title="ID" filterable={false} width="40px" />
        <Column field="ProductName" title="Product Name" />
        <Column field="Category.CategoryName" title="CategoryName" />
        <Column field="UnitPrice" width="180px" filter="numeric" format="{0:c}" />
        <Column field="UnitsInStock" title="In stock" width="80px" />
        <Column field="Discontinued" width="120px" filter="boolean"
          cell={(props) => (
            <td>
              <input disabled type="checkbox" checked={props.dataItem[props.field]} />
              <Discontinued discontinued={props.dataItem[props.field]} />
            </td>
          )} 
        />
      </Grid>
    );
  }
}

export default BasicKendoTable;