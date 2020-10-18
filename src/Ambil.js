import React, { Component } from 'react'
import TampilPesan from './TampilPesan'
class Ambil extends Component {
  render () {
    return (
      <div>
        <h3 className='main'>Pesan-pesan diantara kita</h3>
        <TampilPesan />
      </div>
    )
  }
}

export default Ambil
