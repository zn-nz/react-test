import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { changeTheme } from 'store/app/action'
import { setToken } from 'store/user/action'
import { Button } from 'element-react'

class LayoutConsole extends React.Component {
  static propTypes = {
    changeTheme: PropTypes.func.isRequired,
    theme: PropTypes.object.isRequired,
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return (
      <div style={{ backgroundColor: this.props.theme.bgColor }}>
        console
        <Link to="/show">
          <Button>进入前台</Button>
        </Link>
        <Link to="/login">
          <Button>登陆</Button>
        </Link>
      </div>
    )
  }
}
export default connect(
  state => ({ theme: state.theme, token: state.token }),
  { changeTheme, setToken },
)(LayoutConsole)
