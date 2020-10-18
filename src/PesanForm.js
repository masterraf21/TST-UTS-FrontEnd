import React, { Component } from 'react'
import axios from 'axios'
import 'mdbreact/dist/css/mdb.css'

import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact'

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
      <MDBContainer>
        <MDBRow>
          <MDBCol md='6'>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor='defaultFormContactNameEx' className='grey-text'>
                Sender
              </label>
              <br />
              <input
                type='text'
                id='defaultFormContactNameEx'
                className='form-control'
                name='sender'
                defaultValue={this.state.sender}
                onChange={e => this.senderHandler(e)}
              />
              <br />
              <label
                htmlFor='defaultFormContactSubjectEx'
                className='grey-text'
              >
                Receiver
              </label>
              <br />
              <input
                type='text'
                id='defaultFormContactSubjectEx'
                className='form-control'
                name='receiver'
                defaultValue={this.state.receiver}
                onChange={e => this.receiverHandler(e)}
              />
              <br />
              <label
                htmlFor='defaultFormContactMessageEx'
                className='grey-text'
              >
                Your message
              </label>
              <br />
              <textarea
                type='text'
                id='defaultFormContactMessageEx'
                className='form-control'
                rows='3'
                name='message'
                defaultValue={this.state.message}
                onChange={e => this.messageHandler(e)}
              />
              <div className='text-center mt-4'>
                <MDBBtn color='warning' outline type='submit'>
                  Send
                  <MDBIcon far icon='paper-plane' className='ml-2' />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    )
  }
}

export default PesanForm
