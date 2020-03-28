import React,{Component} from 'react';
import {Card,CardImg,CardBody,CardTitle,CardText,Breadcrumb,BreadcrumbItem, ModalHeader,  Label} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Modal,ModalBody,Button,Row,Col} from 'reactstrap';

import {Control,LocalForm,Errors} from 'react-redux-form';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';

    //function to add "Dishes" to the view
    function RenderDish({dish}){
        if(dish!=null){
            console.log()
            return(
                <Card>
                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            )
        }
        else{
            return(
                <div></div>
            )
        }
    }

    //function for adding 'Comments' to the view
    function RenderComments({comments,postComment,dishId}){
        console.log("Comments : ",comments);
        if(comments!=null){
            const comm = comments.map((cmnt)=>{
                return(
                    <div key = {cmnt.id} >
                        <ul className="list-unstyled">
                            <li>{cmnt.comment}</li>
                            <li>--{cmnt.author} , {
                                //display the date in day-month-year format
                                new Intl.DateTimeFormat('en-IN',{year:'numeric',month:'short',day:'2-digit'})
                                .format(new Date(Date.parse(cmnt.date)))
                            }</li>
                        </ul>
                    </div>
                );
            })
            return(
                <div>
                    <h4 className="col-12">Comments</h4>
                    <div>{comm}</div>
                    <CommentForm dishId={dishId} postComment={postComment}/>    
                </div>
            )
        }
        else{
            return(<div></div>)
        }
    }


    const DishDetail=(props)=>{
        console.log("props : ",props);
        if(props.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading/>
                    </div>
                </div>
            );
        }
        else if(props.errMsg){
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMsg}</h4>
                    </div>
                </div>
            );
        }
        else if(props.dish!=null){
            console.log("Inside DishDetail");
            return(
                <div className="container">
                    <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr/>
                </div>
                </div>

                <div className="row">
                    <div className="col-12 col-md-5 m-1" >
                        <RenderDish dish={props.dish}/>
                    </div>
                    <div className="col-12 col-md-5">
                        <RenderComments comments={props.comments}
                            postComment = {props.postComment}
                            dishId = {props.dish.id}/>
                    </div>
                </div>     
                </div> 
         );
        }
        else{
            return(
                <div></div>
            )
        }
            
     }

//Comment Form Component

const Required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => !(val) || (val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            isModalOpen : false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen : !this.state.isModalOpen
        });
    }

    handleSubmit(values){
        this.toggleModal();
        this.props.postComment(this.props.dishId,values.rating,values.author,values.comment);
    }

    render(){
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-pencil fa-lg">Submit Comment</span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values)=>this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label> 
                                <Col md={12}>
                                <Control.select model=".rating" 
                                        name="rating"
                                        className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                                </Col>
                                
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={12}>Your Name</Label>
                                <Col md={12}>
                                <Control.text model=".author"
                                        className="form-control"
                                        name="author"
                                        id="comment"
                                        placeholder = "Your Name"
                                        validators={{
                                            Required,
                                            minLength : minLength(3),
                                            maxLength : maxLength(15)
                                        }}
                                        />
                                <Errors
                                    className="text-danger"
                                    model = ".author"
                                    show="touched"
                                    messages={{
                                        Required : 'Required',
                                        minLength : 'Must be greater than 2 characters',
                                        maxLength : 'Must be 15 characters or less'
                                    }}
                                />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="comment" md={12}>Comment</Label>
                                <Col md={12}>
                                <Control.textarea model=".comment"
                                        className="form-control"
                                        name="comment"
                                        id="comment"
                                        rows="6"/>
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}



export default DishDetail;