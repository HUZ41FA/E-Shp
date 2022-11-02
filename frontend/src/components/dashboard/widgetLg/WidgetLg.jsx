import React from 'react'
import styled from 'styled-components'
import EnhancedTable from '../../table/Table'

const LargeWidgetContainer = styled.div`
    flex:2;
    box-shadow: 7px 2px 14px 4px rgba(0,0,0,0.4);
    -webkit-box-shadow: 7px 2px 14px 4px rgba(0,0,0,0.4);
    -moz-box-shadow: 7px 2px 14px 4px rgba(0,0,0,0.4);
    border-radius : 10px;
    padding : 20px;
    max-width : calc(50vw - 60px);
    max-height : 550px;

    &::-webkit-scrollbar {
      width: 12px;
  }
  
`

const Title = styled.span`
    font-size : 24px;
    font-weight : 600;
    margin : 20px;
`

const WidgetLg = () => {
  return (
    <LargeWidgetContainer>
        <Title>
          Latest Transactions
        </Title>
      <EnhancedTable/>
    </LargeWidgetContainer>
  )
}

export default WidgetLg