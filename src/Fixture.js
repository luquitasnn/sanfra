import React, { Component } from 'react';
import logo from './logo.png';
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
  
  class Fixture extends Component {
    constructor() {
      super()
      this.state = {
        data: []
      }
    }
  
    componentDidMount() {
      Tabletop.init({
        key: '1xODCpZLd9t6k33sFoCcBnbgAZ5-Ne3TDqofIrv-bwi0',
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
                    <CardTitle tag="h4">Fixture</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <Table className="tablesorter" responsive>
                      <thead className="text-primary">
                        <tr>
                          <th>Dia</th>
                          <th>Hora</th>
                          <th>Cancha</th>
                          <th>Local</th>
                          <th> </th>
                          <th> </th>
                          <th> </th>
                          <th>Visitante</th>
                        </tr>
                      </thead>
                      <tbody>
                      { data.map(obj => (
                        <tr>
                          <td>{obj.Dia}</td>
                          <td>{obj.Hora}</td>
                          <td>{obj.Cancha}</td>
                          <td>{obj.Local}</td>
                          <td>{obj.Golesl}</td>
                          <td> - </td>
                          <td>{obj.Golesv}</td>
                          <td>{obj.Visitante}</td>
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

export default Fixture;