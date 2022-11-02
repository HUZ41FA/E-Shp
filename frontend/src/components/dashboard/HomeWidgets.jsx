import React from 'react'
import styled from 'styled-components'
import WidgetLg from './widgetLg/WidgetLg'
import WidgetSm from './widgetSm/WidgetSm'


const Container = styled.div`
    display : flex;
    margin : 20px;
`


const HomeWidgets = () => {
  return (
    <Container>
        <WidgetSm/>
        <WidgetLg/>
    </Container>
  )
}

export default HomeWidgets