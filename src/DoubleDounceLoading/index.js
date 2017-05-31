// @flow
import React from 'react'
import { Child, StyledDoubleBounce } from './styles'

type Props = {
  size: number,
  color: string,
}

type DefaultProps = Props

class DoubleBounce extends React.PureComponent<DefaultProps, Props, void> {
  static defaultProps = {
    color: '#333',
    size: 40,
  }

  static displayName = `__styled-spinkit__DoubleBounce`

  render() {
    return (
      <StyledDoubleBounce {...this.props}>
        <Child />
        <Child isDelay />
      </StyledDoubleBounce>
    )
  }
}

export default DoubleBounce
