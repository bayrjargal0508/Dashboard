import React from 'react';
import Dashboard from '../assets/interface.png';
import UsersIcon from '../assets/user.png';
import ProductsIcon from '../assets/product.png';
import DeliveryIcon from '../assets/gift.png';
import StatsIcon from '../assets/bar-chart.png';
import NotificationsIcon from '../assets/active.png';

function Menu() {
  return (
    <div className='bg-gray-100 mt-16 w-96 h-screen ml-40'>
      <nav>
        <ul>
          <p className='underline text-lg font-medium'>Main</p>
          <li>
            <span className="flex items-center mt-4">
              <img className="h-6 w-6" src={Dashboard} alt="Dashboard" />
              <a href="/" className='ml-4'>Dashboard</a>
            </span>
          </li>
          <p className='underline text-lg font-medium mt-4'>Lists</p>
          <li>
              <span className="flex items-center mt-4">
                <img className="h-6 w-6" src={UsersIcon} alt="Users" />
                <a href="/" className='ml-4'>Users</a>
                
              </span>
            </li>

          <li>
            <span className="flex items-center mt-4">
              <img className="h-6 w-6" src={ProductsIcon} alt="Products" />
              <a href="/products" className='ml-4'>Products</a>
            </span>
          </li>
         
          <li>
            <span className="flex items-center mt-4">
              <img className="h-6 w-6" src={DeliveryIcon} alt="Delivery" />
              <a href="/users" className='ml-4'>Delivery</a>
            </span>
          </li>
          <p className='underline text-lg font-medium mt-4'>Useful</p>
          <li>
            <span className="flex items-center mt-4">
              <img className="h-6 w-6" src={StatsIcon} alt="Stats" />
              <a href="/about" className='ml-4'>Stats</a>
            </span>
          </li>
          <li>
            <span className="flex items-center mt-4">
              <img className="h-6 w-6" src={NotificationsIcon} alt="Notifications" />
              <a href="/contact" className='ml-4'>Notifications</a>
            </span>
          </li>
        </ul>
      </nav>
   
    </div>
  );
}

export default Menu;
