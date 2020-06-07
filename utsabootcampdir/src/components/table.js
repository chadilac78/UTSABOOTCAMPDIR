import React from "react";
import { BootstrapTable, TableHeaderColumn, SearchField } from 'react-bootstrap-table';
import employees from "./employees.json";

// const search = {
//     SearchField: this.createCustomSearchField
// };


export default class DefaultCustomSearchFieldTable extends React.Component {

    createCustomSearchField = (props) => {
        return (
            <SearchField className='name' defaultValue={props.defualtSearch} placeholder="Search  First Name" />
        );
    }


    state = {
        employees
    };


    render() {
        const options = {
            clearSearch: true,
            searchField: this.createCustomSearchField
        };
        return (

            <div>
                <nav class="navbar navbar-dark bg-dark">
                    <a class="navbar-brand">USTA BOOTCAMP 2020 DIRECTORY</a> </nav>
                < BootstrapTable data={employees} options={options} search>
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



