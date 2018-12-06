import React, { Component } from "react";

import axios from "axios";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

class TodoDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: ""
    };
  }

  componentWillMount() {
    this.getTodos();
  }
  printDocument() {
    const input = document.getElementById("divToPrint");
    html2canvas(input).then(canvas => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "JPEG", 0, 0);
      // pdf.output('dataurlnewwindow');
      pdf.save("download.pdf");
    });
  }
  getTodos() {
    let todoId = this.props.match.params.id;
    axios
      .get(`http://localhost:3000/api/TodoModels/${todoId}`, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` }
      })
      .then(response => {
        this.setState({ details: response.data }, () => {
          console.log(this.state);
        });
      })
      .catch(err => console.log(err));
  }
  onDelete() {
    let TodoId = this.state.details.id;

    axios
      .delete(`http://localhost:3000/api/TodoModels/${TodoId}`, {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` }
      })
      .then(response => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div>
        <br />
        <Link className="btn grey" to="/">
          Back
        </Link>

        <h1>
          {this.state.details.topic}{" "}
          <button
            onClick={this.printDocument.bind(this)}
            className="btn blue right"
          >
            Export PDF
          </button>
        </h1>
        <div id="divToPrint" className="mt4">
          <ul className="collection">
            <li className="collection-item">
              Topic:{this.state.details.topic}
            </li>
            <li className="collection-item">Name:{this.state.details.name}</li>
          </ul>
        </div>
        <Link className="btn" to={`/todo/edit/${this.state.details.id}`}>
          Edit
        </Link>

        <button onClick={this.onDelete.bind(this)} className="btn red right">
          Delete
        </button>
      </div>
    );
  }
}

export default TodoDetails;
