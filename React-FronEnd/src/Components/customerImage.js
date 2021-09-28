import React from 'react';
import News from './News';
import StockMarket from './StockMarket';
import customerimage from './Images/customerimage.jpg';

export default class CustomerImage extends React.Component{

  render(){
    return (
      <div>
        <marquee><StockMarket></StockMarket></marquee>
        <img src={customerimage} alt="customer" />
        <br/><br/>
        <p>
        The Bank of America Corporation is an American multinational investment bank and financial services holding company headquartered in Charlotte, North Carolina. The bank was founded in San Francisco, and took its present form when NationsBank of Charlotte acquired it in 1998. 
        </p>
        <br/>
        <News></News>
        <br/>
      </div>
    );
  }
  
}

