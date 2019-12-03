import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tabletop from 'tabletop';

// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1hWHPMCms9pz6nkO1wSJ0rdRbV6Xq9aWaEj_8yIQsYAI',
      callback: googleData => {
        console.log('google sheet data --->', googleData)
        this.setState({
          data: googleData
        })
      },
      simpleSheet: true
    })
  }


render() {
    const { data } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Sanfra Demo</h1>
        </header>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Tabla de posicines</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Posicion</th>
                        <th>Equipo</th>
                        <th>PJ</th>
                        <th>Puntos</th>
                      </tr>
                    </thead>
                    <tbody>
                    { data.map(obj => (
                      <tr>
                        <td>{obj.POSICION}</td>
                        <td>{obj.EQUIPO}</td>
                        <td>{obj.PJ}</td>
                        <td>{obj.Puntos}</td>
                      </tr>
                     ))} 
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default App;