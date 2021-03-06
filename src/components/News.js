import React, { Component } from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';


export class News extends Component {

    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    capitalize = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = `${this.capitalize(this.props.category)} - NewsMonkey`; 
    }

    async updateNews(){
        this.props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults, loading:false})
        this.props.setProgress(100);
    }

    async componentDidMount(){
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&
        // apikey=0aff92faf5b8430282f81faf3ee7886d&page=1&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({articles:parsedData.articles, totalResults:parsedData.totalResults, loading:false})
        this.updateNews();
    }

    handlePreviousClick = async () =>{
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&
        // apikey=0aff92faf5b8430282f81faf3ee7886d&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // this.setState({loading: true});
        // let data = await fetch(url);
        // let parsedData = await data.json();
        // console.log(parsedData);
        // this.setState({articles:parsedData.articles})

        // this.setState({
        //     page: this.state.page - 1,
        //     // articles: parsedData.articles,
        //     loading: false 


        // })
        this.setState({
            page: this.state.page - 1
        })
        this.updateNews();
    }

    handleNextClick = async () => {

        // if(!this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

   
            
            // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=0aff92faf5b8430282f81faf3ee7886d&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            // this.setState({loading: true});
            // let data = await fetch(url);
            // let parsedData = await data.json();
            // // this.setState({loading: false});
            
            
            // // console.log(parsedData);
            // this.setState({articles:parsedData.articles})

            // this.setState({
            //     page: this.state.page + 1,
            //     // articles: parsedData.articles,
            //     loading: false 

            // })
        // }

        this.setState({
            page: this.state.page + 1
        })
        this.updateNews();
    }

    fetchMoreData = async () => {
        this.setState({page: this.state.page + 1})
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=0aff92faf5b8430282f81faf3ee7886d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles:this.state.articles.concat(parsedData.articles), totalResults:parsedData.totalResults, loading:false})    }

  render() {
    return(
        <>
            <h2 className='text-center my-3'>NewsMonkeys - Top Headlines</h2> 


            <InfiniteScroll 
            dataLength = {this.state.articles.length}
            next = {this.fetchMoreData}
            hasMore = {this.state.articles.length !== this.state.totalResults}
            loader={<Spinner/>}>

            <div className='container'>
            {/* {this.state.loading && <Spinner/>} */}
                <div className="row">
                {/* !this.state.loading  */}
                 {this.state.articles.map(element => {
                    return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element?element.title:''} description={element?element.description:''} urlToImage={element.urlToImage} newUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name }/>
                            
                        </div>

                      
                    })}
                    
                </div>
                </div>
                </InfiniteScroll>

                {/* <div className='container d-flex justify-content-between'>
                <button disabled={this.state.page<=1} type="button" className="btn btn-primary" onClick={this.handlePreviousClick}>Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-primary" onClick={this.handleNextClick}>Next</button>

                </div> */}

        </>
    )
  }
}

export default News;
