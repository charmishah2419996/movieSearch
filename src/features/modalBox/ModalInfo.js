import  { Component  } from 'react';
import '../../App.css';
import { connect } from 'react-redux';
import { removeSelectedMovie} from "./actions";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal} from 'react-bootstrap'
class ModalInfo extends Component {
     constructor(props) {
        super(props);
       
        this.state = {
            show:false
           
        };
    
    }
 
    handleClose = () =>{
        this.props.removeSelectedMovie();
        
    }
   
    render() {
        let { movie } = this.props;
        return (
            <div className="">    
                <Modal show={movie != null && movie.Title != undefined} onHide={this.handleClose} scrollable>
                        <Modal.Header closeButton>
                            <Modal.Title> Selected Movie </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <label>Movie Name:</label>
                            <h6> {movie.Title}</h6>

                            <label>Movie Released Date:</label>
                            <h6> {movie.Released}</h6>

                            <label>Actors</label>
                            <h6>{movie.Actors}</h6>

                            <label>imdbRating</label>
                            <h6>{movie.imdbRating}</h6>
                         </Modal.Body>
                    
                    </Modal>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return { movie:state.movieData.movie};
}
export default connect(mapStateToProps, { removeSelectedMovie})(ModalInfo);

