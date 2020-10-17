import React, { Component } from 'react'
import axios from 'axios'
const API_URL = 'https://tstbackend.azurewebsites.net/api/AddPesan'
const API_KEY = 'tuDVNfpDBMzqbQR8mOZlsCm9SejhVYsivMiQZORlcDcATEPtvIbVPg=='

class PesanForm extends Component {
  constructor () {
    super()
    this.state = {
      sender: '',
      receiver: '',
      message: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // onChange (e) {
  //   this.setState({ [e.target.name]: e.target.value })
  // }

  senderHandler (e) {
    this.setState({
      sender: e.target.value
    })
  }

  receiverHandler (e) {
    this.setState({
      receiver: e.target.value
    })
  }

  messageHandler (e) {
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    const data = {
      sender: this.state.sender,
      receiver: this.state.receiver,
      message: this.state.message
    }
    axios
      .post(API_URL, data, {
        headers: {
          'x-functions-key': API_KEY
        }
      })
      .then(response => {
        if (response) {
          console.log(response)
          alert(response.data.message)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Sender:
            <input
              type='text'
              name='sender'
              defaultValue={this.state.sender}
              onChange={e => this.senderHandler(e)}
            />
          </label>
          <label>
            Receiver:
            <input
              type='text'
              name='receiver'
              defaultValue={this.state.receiver}
              onChange={e => this.receiverHandler(e)}
            />
          </label>
          <label>
            Pesan:
            <input
              type='text'
              name='message'
              defaultValue={this.state.message}
              onChange={e => this.messageHandler(e)}
            />
          </label>
          <button type='submit'>Kirim Pesan</button>
        </form>
      </div>
    )
  }
}

export default PesanForm
