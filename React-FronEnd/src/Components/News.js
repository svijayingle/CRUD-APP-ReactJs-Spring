import React, { Component } from 'react';
import './Card.css'
import './MarqueeContent.css'
var axios = require("axios").default;
var options = {
  method: 'GET',
  url: 'https://yh-finance.p.rapidapi.com/auto-complete',
  params: {q: 'bac', region: 'US'},
  headers: {
    'x-rapidapi-host': 'yh-finance.p.rapidapi.com',
    'x-rapidapi-key': 'API-KEY'
  }
};

class News extends Component {

    constructor(props){
        super(props);
        this.state ={
                company_news:[]
        }
    }
    componentDidMount(){
        axios.request(options).then( res=>{
            const data = res.data.news
            console.log(data)
                this.setState(
                    {
                        company_news:data
                    }
                )
        }).catch(function (error) {
            console.error(error);
        });
    }
    render() {
        return (
            <div>
                <div><b>We Are in the News</b></div>
                
                <div class="marquee">
                    <div class="marquee-content">       
                        <span class="item-collection-1">    
                            { this.state.company_news.map(news => 
                                    
                                    <span class="item1">    
                                            <div className="card">
                                                <div className="container">
                                                    <b>{news.title}</b>
                                                    <p>By : {news.publisher}</p>
                                                    <p>At : {news.providerPublishTime}</p>
                                                    <a href={news.link} target="_blank" >Full Article</a>
                                                </div>
                                            </div>
                                    </span>
                            )}
                        </span>
                    </div>
                </div>

 
            </div>
        );
    }
}

export default News;
