import React, { Component } from 'react'

class Main extends Component {
  render () {
    return (
      <div>
        <h1>Notes for You</h1>
        <ul className='Header'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/tambah'>Kirim Pesan</a>
          </li>
          <li>
            <a href='/ambil'>Lihat Pesan</a>
          </li>
        </ul>
        <div className='content'></div>
      </div>
    )
  }
}

export default Main
