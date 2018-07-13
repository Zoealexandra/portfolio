import React from 'react'

import Nav from './Nav'
import Intro from './Intro'
import Body from './Body'
import Footer from './Footer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div className='app'>
        <Nav />
        <Intro />
        <Body />
        <Footer />
    </div>
    )
  }
}

export default App