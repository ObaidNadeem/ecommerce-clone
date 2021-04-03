import React, { Component } from 'react';
import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

import { facebook_login } from '../../Store/action/index'


class FbAuth extends Component {
  render(){
  return (
    <div >

      <button onClick = {() => this.props.facebook_login()} ><span><svg width="22px" height="22px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-367TP rui-27W37" d="M512 85.325c235.648 0 426.667 191.019 426.667 426.667s-191.019 426.667-426.667 426.667c-235.648 0-426.667-191.019-426.667-426.667s191.019-426.667 426.667-426.667zM512 150.605c-199.595 0-361.429 161.792-361.429 361.387 0 199.637 161.835 361.429 361.429 361.429s361.429-161.792 361.429-361.429c0-199.595-161.835-361.387-361.429-361.387zM616.789 301.133v57.6h-61.312c-15.403 0-28.8 14.848-28.8 31.616v0 63.147h90.069v53.845h-90.069v215.509h-67.115v-215.509h-78.592v-53.845h78.592v-74.325c0-42.752 34.517-78.037 76.672-78.037v0h80.555z"></path></svg ></span > Continue with facebook</button>
     
    </div>                                         
  );                                               
}
}

const mapStateToProps = (state) => ({
  users: state.current_user,
})

const mapDispatchToProps = (dispatch) => ({
  facebook_login: (history) =>dispatch(facebook_login()),
})

export default connect(mapStateToProps, mapDispatchToProps)(FbAuth);

