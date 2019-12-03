import React, { Component } from 'react';
import test from './test.png';
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

class Home extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    Tabletop.init({
      key: '1PNC8wvsKL-eUs0Dp3ZeW3uKT0xoXs3rjOZzBkOmHwd4',
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
        <div id="card">
        Esto es un Demo para la pagina del Torneo Sanfra 2020 ATR
        </div>
          <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Novedades</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Anuncio</th>
                        <th>Fecha</th>
                      </tr>
                    </thead>
                    <tbody>
                    { data.map(obj => (
                      <tr>
                        <td>{obj.Novedades}</td>
                        <td>{obj.fecha}</td>
                      </tr>
                     ))} 
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
        <div id="fotos">
        <p>Fotos</p>
        <img src={test} alt="test" width="600" height="400"/>


        </div>
      </div>
    );
  }
}

export default Home;