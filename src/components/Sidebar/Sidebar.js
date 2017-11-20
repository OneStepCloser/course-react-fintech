import React from 'react';
import Money from '../Money/Money';

import {
  NavLink
} from 'react-router-dom';

import './Sidebar.css';

export default ({ accounts }) => {
  return ( <div className='Sidebar'>
      <div className='Sidebar__header'>
        Счета
      </div>

      {
        Object.keys(accounts) ? Object.keys(accounts).map(accountId => (
          <NavLink key={accountId} to={'/account/' + accountId} className='Link' activeClassName='Link--active'>
            <div className='Sidebar__account'>
              <div className='Sidebar__account-name'>
                {accounts[accountId].name}
              </div>
              <div className='Sidebar__account-amount'>
                <Money value={accounts[accountId].amount}
                       currency={accounts[accountId].currency}/>
              </div>
            </div>
          </NavLink>
        )) : null
      }

      <NavLink to='/create-account' className='Link' activeClassName='Link--active'>
        <div className='Sidebar__account'>
          <div className='Sidebar__account-name'>
            Добавить счет
          </div>
        </div>
      </NavLink>

      <NavLink to='/about' className='Link' activeClassName='Link--active'>
        <div className='Sidebar__account'>
          <div className='Sidebar__account-name'>
            About
          </div>
        </div>
      </NavLink>

    </div>
  );
}

