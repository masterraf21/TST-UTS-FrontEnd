import React, { Component } from 'react'
import './index.css'
import { JsonToTable } from 'react-json-to-table'
import axios from 'axios'
const API_URL = 'https://tstbackend.azurewebsites.net/api/GetPesan'
const API_KEY = 'M9SVVaicgoRARQp/EDgYh1G6xvqlDBcRlil24y1flAjyMev08ygKVw=='

class TampilPesan extends Component {
  constructor (props) {
    super(props)
    this.state = {
      pesan: [],
      loaded: false
    }
    this.getData()
  }

  getData () {
    axios
      .get(API_URL, {
        headers: {
          'x-functions-key': API_KEY
        }
      })
      .then(data => {
        if (data) {
          this.setState({
            loaded: true
          })
          let pesan = {}
          var toAdd = []
          data.data.forEach(element => {
            pesan = {
              sender: element.sender,
              receiver: element.receiver,
              message: element.message
            }
            toAdd.push(pesan)
          })
          this.setState({
            pesan: toAdd
          })
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    return (
      <div className='tampilan'>
        {this.state.loaded && this.state.pesan ? (
          <div id='tampilanData'>
            <JsonToTable json={this.state.pesan} />
          </div>
        ) : (
          <div id='tampilanData'>Loading API gan</div>
        )}
      </div>
    )
  }
}

export default TampilPesan
