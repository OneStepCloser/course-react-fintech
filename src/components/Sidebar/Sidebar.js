import React from 'react';
import Money from '../Money/Money';

import {
  NavLink
} from 'react-router-dom';

import './Sidebar.css';

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div className='Sidebar'>
      <div className='Sidebar__header'>
        Счета
      </div>

      {
        Object.keys(this.props.accounts).map(accountId => (
          <NavLink key={accountId} to={'/account/' + accountId} className='Link' activeClassName='Link--active'>
            <div className='Sidebar__account'>
              <div className='Sidebar__account-name'>
                {this.props.accounts[accountId].name}
              </div>
              <div className='Sidebar__account-amount'>
                <Money value={this.props.accounts[accountId].amount} currency={this.props.accounts[accountId].currency}/>
              </div>
            </div>
          </NavLink>
        ))
      }

      {/*<NavLink to='/account/321321' className='Link' activeClassName='Link--active'>*/}
      {/*<div className='Sidebar__account'>*/}
      {/*<div className='Sidebar__account-name'>*/}
      {/*Основной*/}
      {/*</div>*/}
      {/*<div className='Sidebar__account-amount'>*/}
      {/*<Money value={2133.231} />*/}
      {/*</div>*/}
      {/*</div>*/}
      {/*</NavLink>*/}

      <NavLink to='/create-account' className='Link' activeClassName='Link--active'>
        <div className='Sidebar__account'>
          <div className='Sidebar__account-name'>
            Добавить счет
          </div>
        </div>
      </NavLink>
    </div>;
  }
}
