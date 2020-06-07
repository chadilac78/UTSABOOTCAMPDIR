import React from "react";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import employees from "./employees.json";


export default class SortTable extends React.Component {

    state = {
        employees
    };


    render() {
        return (
            <div>
                <nav class="navbar navbar-dark bg-dark">
                    <a class="navbar-brand">USTA BOOTCAMP 2020 DIRECTORY</a> </nav>
                < BootstrapTable data={employees} options={this.options} >
                    <TableHeaderColumn isKey dataField='id' dataSort={true}>Student ID</TableHeaderColumn>
                    <TableHeaderColumn dataField='name' dataSort={true}>Name</TableHeaderColumn>
                    <TableHeaderColumn dataField='role' dataSort={true}>Role</TableHeaderColumn>
                    <TableHeaderColumn dataField='Instructor' dataSort={true}>Instructor</TableHeaderColumn>
                    <TableHeaderColumn dataField='TA' dataSort={true}>Teachers Assistant</TableHeaderColumn>
                </BootstrapTable >
            </div>
        );
    }
}



