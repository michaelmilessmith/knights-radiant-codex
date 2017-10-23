import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Order from './containers/Order'
import orders from './data/orders'
import styled from 'styled-components'

const Home = () => <Order {...orders.knightsRadiant} />

const Glyph = styled.img`height: 5em;`

const Content = styled.div`
  margin-left: ${({ open }) => (open ? '7em' : 0)};
  display: flex;
`

const Nav = styled.ul`
  list-style-type: none;
  text-align: center;

  height: 100%;
  width: ${({ open }) => (open ? '7em' : 0)};
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding: 1em 0;
  transition: 0.5s;
  margin: 0;
  li {
    padding: 0.3em;
    width: 6em;
    transition: 0.3s;
  }
  li:hover {
    background-color: #ddd;
  }
`

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true
    }
  }
  click = () => {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    return (
      <Router>
        <div>
          <Nav open={this.state.open}>
            <span onClick={this.click}>X</span>
            {Object.entries(orders).map(([key, { glyph, name }]) =>
              <li>
                <Link to={`/order/${key}`}>
                  <Glyph src={glyph} alt={`${name} glyph`} />
                </Link>
              </li>
            )}
          </Nav>
          <Content open={this.state.open}>
            <Route exact path="/" component={Home} />
            <Route
              path="/order/:name"
              render={({ match }) => <Order {...orders[match.params.name]} />}
            />
          </Content>
        </div>
      </Router>
    )
  }
}

export default App
