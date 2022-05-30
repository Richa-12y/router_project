import React, { Component } from "react";

export default class Table extends Component {
  constructor(props) {
    super(props);
    {
      this.state = {
        tableHeaderW: "Width",
        tableHeaderH: "Height",
        tableCellone: "3000mm",
        tableCelltwo: "3000mm",
        tableHeaderWOne: "Polo Neck,Half Sleeves",
        tableHeaderHOne: "Slim fit",
        tableCellThree: "900mm",
        tableCellFour: "800mm",
      };
    }
  }
  render() {
    const {
      tableHeaderW,
      tableHeaderH,
      tableCellone,
      tableCelltwo,
      tableHeaderWOne,
      tableHeaderHOne,
      tableCellThree,
      tableCellFour,
    } = this.state;

    return (
      <div className="inside">
        <div className="icon">
          <i className="material-icons-3">info_outline</i>
        </div>
        <div className="contents_Table">
          <table>
            <tbody>
              <tr>
                <th>{tableHeaderW}</th>
                <th>{tableHeaderH}</th>
              </tr>
              <tr>
                <td>{tableCellone}</td>
                <td>{tableCelltwo}</td>
              </tr>
              <tr>
                <th>{tableHeaderWOne}</th>
                <th>{tableHeaderHOne}</th>
              </tr>
              <tr>
                <td>{tableCellThree}</td>
                <td>{tableCellFour}</td>
              </tr>
              <tr>
                <th>{tableHeaderWOne}</th>
                <th>{tableHeaderHOne}</th>
              </tr>
              <tr>
                <td>{tableCellone}</td>
                <td>{tableCelltwo}</td>
              </tr>
              <tr>
                <th>{tableHeaderWOne}</th>
                <th>{tableHeaderHOne}</th>
              </tr>
              <tr>
                <td>{tableCellone}</td>
                <td>{tableCelltwo}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
