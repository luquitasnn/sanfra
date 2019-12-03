import React, { Component } from 'react';
import barca from './barca.jpg';
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

class Tablas extends Component {
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
          <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Tabla de posiciones</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Posicion</th>
                        <th>Equipo</th>
                        <th>PJ</th>
                        <th>PG</th>
                        <th>PE</th>
                        <th>PP</th>
                        <th>GF</th>
                        <th>GC</th>
                        <th>DG</th>
                        <th>Puntos</th>
                      </tr>
                    </thead>
                    <tbody>
                    { data.map(obj => (
                      <tr>
                        <td>{obj.POSICION}</td>
                        <td>{obj.EQUIPO}</td>
                        <td>{obj.PJ}</td>
                        <td>{obj.PG}</td>
                        <td>{obj.PE}</td>
                        <td>{obj.PP}</td>
                        <td>{obj.GF}</td>
                        <td>{obj.GC}</td>
                        <td>{obj.DG}</td>
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

export default Tablas;