import React from 'react';
import ReactDOM from 'react-dom';
import products from './products.json';
import KendoBasicTable from './KendoReact/BasicKendoTable'
import BasicReactTable from './ReactTable/BasicReactTable.js';

import Swal from 'sweetalert2'

class App extends React.Component {

  clickHandler = () => {
    // const MySwal = withReactContent(Swal);
    // MySwal.fire({
    //   title: <p>Hello World</p>,
    //   footer: 'Copyright 2018',
    //   onOpen: () => {
    //     // `MySwal` is a subclass of `Swal`
    //     //   with all the same instance & static methods
    //     MySwal.clickConfirm()
    //   }
    // }).then(() => {
    //   return MySwal.fire(<p>Shorthand works too</p>)
    // });
    Swal('Olar', 'Senhora?', "success");

  }

  render() {
    console.log(products);
    return (
      <div>
        <h1>Kendo Table</h1>
        <KendoBasicTable data={products} />
        <div style={{margin: '50px'}}/>
        <h1>React Table</h1>
        <BasicReactTable data={products} />
        <button onClick={this.clickHandler} style={{margin: '30px'}}>Show SweetAlert2</button>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('my-app')
);