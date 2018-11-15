import React from "react";
import { sampleProducts } from '../KendoReact/productsWithDate.jsx';
import ReactTable from "react-table";
import "react-table/react-table.css";

class EditableReactTable extends React.Component {

    constructor() {
      super();
      this.state = {
        data: sampleProducts.slice(0)
      };
      this.renderEditable = this.renderEditable.bind(this);
    }

    renderEditable(cellInfo) {
      return (
        <div
          style={{ backgroundColor: "#fafafa" }}
          contentEditable
          suppressContentEditableWarning
          onBlur={e => {
            const data = [...this.state.data];
            data[cellInfo.index][cellInfo.column.id] = e.target.innerHTML;
            this.setState({ data });
          }}
          dangerouslySetInnerHTML={{
            __html: this.state.data[cellInfo.index][cellInfo.column.id]
          }}
        />
      );
    }
    render() {
      const { data } = this.state;
      return (
        <div>
          <ReactTable
            data={data}
            columns={[
              {
                Header: "Product ID",
                accessor: "ProductID"
              },
              {
                Header: "Product Name",
                accessor: "ProductName",
                Cell: this.renderEditable
              },
              {
                Header: "First Ordered On",
                accessor: "FirstOrderedOn",
                Cell: this.renderEditable
              },
              {
                Header: "Units In Stock",
                accessor: "UnitsInStock",
                Cell: this.renderEditable
              },
              {
                Header: "Discontinued",
                accessor: "Discontinued",
                Cell: this.renderEditable
              },
            ]}
            defaultPageSize={10}
            className="-striped -highlight"
          />
          <br />
        </div>
      );
    }
  }

  export default EditableReactTable;