import React from 'react';
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import products from './products.json';
import KendoBasicTable from './KendoReact/BasicKendoTable';
import EditableKendoTable from './KendoReact/EditableKendoTable';
import BasicReactTable from './ReactTable/BasicReactTable.js';
import imageSenhora from './assets/senhora.jpg';
import EditableReactTable from './ReactTable/EditableReactTable.js';

const MySwal = withReactContent(Swal);

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
    MySwal.fire({
      title: <p>Senhora?</p>,
      html: <img src={imageSenhora} style={{width: '475px'}} alt="Eu nunca fiz isso!"/>,
      confirmButtonText: 'Mas por que a senhora está correndo?'
    });
  }

  render() {
    console.log(products);
    return (
      <div>
        <h1>Basic Kendo Table</h1>
        <KendoBasicTable data={products} />
        <div style={{margin: '50px'}}/>
        <h1>Basic React Table</h1>
        <BasicReactTable data={products} />
        <div style={{margin: '50px'}}/>
        <button onClick={this.clickHandler} style={{margin: '30px'}}>Easter Egg</button>
        <div style={{margin: '50px'}}/>
        <h1>Editable Kendo Table</h1>
        <EditableKendoTable />
        <div style={{margin: '50px'}}/>
        <h1>Editable React Table</h1>
        <EditableReactTable />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('my-app')
);