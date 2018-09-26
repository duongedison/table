import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import orderBy from "lodash/orderBy";

import Form from "./Form";
import Table from "./Table";
import "./App.css";

injectTapEventPlugin();

const invertDirection = {
  asc: "desc",
  desc: "asc"
};

class App extends Component {
  state = {
    data: [
      {
        firstName: "Adan",
        lastName: "Aburto",
        empno: "28058",
        myid: "G30663",
        dept: "MFG",
        costctr: "VX1045",
        type: "TEC",
        level: "T01",
        fm: "Roach",
        email: "blank",
        passsword: "123",
      },
      {
        firstName: "Hayley",
        lastName: "Allen",
        empno: "39183",
        myid: "A67537",
        dept: "SWDT",
        costctr: "VX1072",
        type: "SW",
        level: "T03",
        fm: "Zen",
        email: "blank",
        passsword: "123",
      },
      {
        firstName: "Yolanda",
        lastName: "Ancheta",
        empno: "33459",
        myid: "A10001",
        dept: "SWDT",
        costctr: "VC1072",
        type: "SW",
        level: "T02",
        fm: "Burlap",
        email: "blank",
        passsword: "123",
      },
      {
        firstName: "Enda",
        lastName: "Apicella",
        empno: "21254",
        myid: "B62234",
        dept: "SEIT",
        costctr: "VC1082",
        type: "SE",
        level: "T01",
        fm: "Grand",
        email: "blank",
        passsword: "123",
      },
      {
        firstName: "Tomiko",
        lastName: "Arzu",
        empno: "33569",
        myid: "J90661",
        dept: "MA",
        costctr: "VM1261",
        type: "DM",
        level: "T02",
        fm: "Green",
        email: "blank",
        passsword: "123",
      },
      {
        firstName: "Granville",
        lastName: "Auerbach",
        empno: "29790",
        myid: "A32726",
        dept: "SWDT",
        costctr: "VC1072",
        type: "SW",
        level: "T01",
        fm: "Zen",
        email: "blank",
        passsword: "123",
      },
      {
        firstName: "Adelaide",
        lastName: "Baccus",
        empno: "32767",
        myid: "J19927",
        dept: "SWDT",
        costctr: "VC1072",
        type: "FW",
        level: "T02",
        fm: "Rocker",
        email: "blank",
        passsword: "123",
      },
      {
        firstName: "Arianna",
        lastName: "Bacher",
        empno: "30741",
        myid: "A48136",
        dept: "SWDT",
        costctr: "VC1072",
        type: "SW",
        level: "T02",
        fm: "Rosen",
        email: "blank",
        passsword: "123",
      },
      {
        firstName: "Dennis",
        lastName: "Ballance",
        empno: "26093",
        myid: "J98231",
        dept: "SWDT",
        costctr: "VC1072",
        type: "FW",
        level: "T01",
        fm: "Rocker",
        email: "blank",
        passsword: "123",
      }
    ],
    editIdx: -1,
    columnToSort: "",
    sortDirection: "desc"
  };

  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(state => ({
      data: state.data.map(
        (row, j) => (j === i ? { ...row, [name]: value } : row)
      )
    }));
  };

  handleSort = columnName => {
    this.setState(state => ({
      columnToSort: columnName,
      sortDirection:
        state.columnToSort === columnName
          ? invertDirection[state.sortDirection]
          : "asc"
    }));
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Form
            /*onSubmit={submission =>
              this.setState({
                data: [...this.state.data, submission]
              })
            }*/
          />
          <Table
            handleSort={this.handleSort}
            handleRemove={this.handleRemove}
            startEditing={this.startEditing}
            editIdx={this.state.editIdx}
            stopEditing={this.stopEditing}
            handleChange={this.handleChange}
            columnToSort={this.state.columnToSort}
            sortDirection={this.state.sortDirection}
            data={orderBy(
              this.state.data,
              this.state.columnToSort,
              this.state.sortDirection
            )}
            header={[
              {
                name: "First name",
                prop: "firstName"
              },
              {
                name: "Last name",
                prop: "lastName"
              },
              {
                name: "EmpNo",
                prop: "empno"
              },
              {
                name: "MyID",
                prop: "myid"
              },
              {
                name: "Dept",
                prop: "dept"
              },
              {
                name: "CostCtr",
                prop: "costctr"
              },
              {
                name: "Type",
                prop: "type"
              },
              {
                name: "Level",
                prop: "level"
              },
              {
                name: "FM",
                prop: "fm"
              },
              {
                name: "Email",
                prop: "email"
              }
            ]}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
