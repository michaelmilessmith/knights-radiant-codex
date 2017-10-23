import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  background-color: white;
  padding: 0.5em;
  color: ${({ colour }) => colour};
`

const OrderName = styled.h2`font-size: 3em;`

const Ideals = styled.div`
  background-color: ${({ colour }) => colour};
  height: 22em;
  padding: 1em;
  color: white;
  flex-grow: 1;
`

const Ideal = styled.p`font-size: large;`

const OrderPage = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const Glyph = styled.img`height: 18em;`

const Order = ({ name, ideals, colour, glyph }) =>
  <OrderPage>
    <Header colour={colour}>
      {glyph && <Glyph src={glyph} alt={`${name} glyph`} />}
      <OrderName>
        {name}
      </OrderName>
    </Header>
    <Ideals colour={colour}>
      {ideals.map(ideal =>
        <Ideal>
          {ideal}
        </Ideal>
      )}
    </Ideals>
  </OrderPage>

export default Order
