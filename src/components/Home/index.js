import {Component} from 'react'

import Message from './components/Message'

class Home extends Component {
  state = {login: true}
  render() {
    const {login} = this.state
    let msg = 'Please Login'
    if (login) {
      msg = 'Welcome User'
    }
    return (
      <div>
        <div>
          <Message textMsg={msg} />
        </div>
      </div>
    )
  }
}

export default Home
