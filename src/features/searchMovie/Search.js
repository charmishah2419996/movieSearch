import  { Component } from 'react';
import { connect } from 'react-redux';
import '../../App.css';
import debounce from 'lodash.debounce';
import { fetchSelectedMovie } from './actions';
import ModalInfo from '../modalBox/ModalInfo';

import API from '../../Helpers/API';
import Button from 'react-bootstrap/Button'

class MovieSearch extends Component {
    
    constructor(props) {
        super(props);
       
           
        this.handleChange = debounce(this.handleChange.bind(this), 1000);
        this.handleClick = this.handleClick.bind(this);
           
        this.state = {
            searchValue: '',
            selectedUrl:'',
            searchResult:[],
            counter:1
        };
    
    }
    handleChange(event){
      
        var movieName =event.target.value;
        this.setState({searchValue:movieName});
       this.apiCall();

    }
    handleClick(m){
        this.props.fetchSelectedMovie(m);  

    }
    handleClickNext(){
        var newcounter;
        if(this.state.counter == 100){
             newcounter = 1;
        }else{
            newcounter = this.state.counter + 1;
        }
        this.state.counter =newcounter;
        this.apiCall();
    }
    apiCall(){
        var res= API(`https://www.omdbapi.com/?s=${this.state.searchValue}&apikey=4e1cdf4&page=${this.state.counter}`);
        res.then(res=>{
            this.setState({searchResult:res.Search});
            
        })
    }
    handleClickPrevious(){
        var newcounter;
        if(this.state.counter == 1){
             newcounter = 1;
        }else{
             newcounter = this.state.counter - 1;
        }
        this.state.counter =newcounter;
        this.apiCall();
       
    }

    
    render() {
         let {movie} = this.props; 
        return (
            <div>
                <div className="">
                    <div className="alignTitle">
                        <input type="text" name="name" className="alignTitleip" onChange={this.handleChange} placeholder="Search movie by title"/>
                    </div>
                    {this.state.searchResult  == null || this.state.searchResult[0] == null ? <div /> : <div className="">
                        <div className="grid">
                            {this.state.searchResult.map(m =>
                                <div key={m.imdbID} className="grid_item_inside" onClick={() => this.handleClick(m.Title)}>
                                    
                               {m.Poster == 'N/A' ?<div className="nonImg" />: <img src={m.Poster} width="200px" height="200px"></img>}
                                <div>
                                   <h5> {m.Title}</h5>
                                </div>
                            </div>)}
                        </div>
                    </div>}
                </div>
                <div>             
                    {movie == null || movie.Title == ''? <div />:<div><ModalInfo></ModalInfo></div>}
                </div>
                <div className="pagination">
                    {this.state.searchResult == null  || this.state.counter == 1? <div />:<div> <Button variant="primary" className="btn" onClick={() => this.handleClickPrevious()}>Previous</Button></div>}                    
                    {this.state.searchResult == null || this.state.searchResult[0] == null? <div />:<div> <Button variant="primary" className="btn" onClick={() => this.handleClickNext()}>Next</Button></div>}
                </div>


            </div>
        );
    }
}

const mapStateToProps = state => {
    return {  movie: state.movieData.movie};
}

export default connect(mapStateToProps, { fetchSelectedMovie})(MovieSearch);


