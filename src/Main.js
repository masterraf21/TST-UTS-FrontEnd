import React, { Component } from 'react'
import { Route, NavLink, HashRouter } from 'react-router-dom'
import Home from './Home'
import Tambah from './Tambah'
import Ambil from './Ambil'

class Main extends Component {
  render () {
    return (
      <HashRouter>
        <div>
          <h1>Notes for You</h1>
          <h2>Mari bertukar pesan disini</h2>
          <ul className='header'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/tambah'>Tambah Pesan</NavLink>
            </li>
            <li>
              <NavLink to='/ambil'>Tampilkan Pesan</NavLink>
            </li>
          </ul>
          <div className='content'>
            <Route exact path='/' component={Home} />
            <Route path='/tambah' component={Tambah} />
            <Route path='/ambil' component={Ambil} />
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default Main
