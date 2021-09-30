import React, { Component } from 'react';

var axios = require("axios").default;
var options = {
    method: 'GET',
    url: 'https://latest-stock-price.p.rapidapi.com/price',
    params: {Indices: 'NIFTY BANK'},
    headers: {
      'x-rapidapi-host': 'latest-stock-price.p.rapidapi.com',
      'x-rapidapi-key': 'API-KEY'
    }
  };
class StockMarket extends Component {

    constructor(props){
        super(props);
        this.state={
            stock_data:''
        }
    }

    componentDidMount(){
        axios.request(options).then(response=> {
            console.log(response.data);
            this.setState({
                    stock_data:response.data[0]
            })
            console.log(this.state.stock_data)
        }).catch(function (error) {
            console.error(error);
        });
    }
    render() {
        return (
            <div>
                <p>Live Market{" : "}
                    <b>{this.state.stock_data.symbol}</b>{" "}
                    <small>Latest Price :<small style={{color:'#008000'}}> {this.state.stock_data.lastPrice}</small></small>{" "}
                    <small>Last update time :{this.state.stock_data.lastUpdateTime}</small>{" "}
                    <small>Todays Open :  {this.state.stock_data.open}</small>{" "}
                    <small>Price Chance :<small style={{color:' #cc0000'}}> {this.state.stock_data.pChange}</small></small>{" "}
                    <small>Previous Close :{this.state.stock_data.previousClose}</small>{" "}
                </p>
            </div>
        );
    }
}

export default StockMarket;
