import React, { Component } from 'react'
import PesanForm from './PesanForm'
class Tambah extends Component {
  render () {
    return (
      <div>
        <h3 className='main'>Tambahkan pesan anda disini</h3>
        <PesanForm />
      </div>
    )
  }
}

export default Tambah
