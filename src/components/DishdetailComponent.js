import React from 'react';
import {Card,CardImg,CardBody,CardTitle,CardText,Breadcrumb,BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';



    //function to add "Dishes" to the view
    function RenderDish({dish}){
        if(dish!=null){
            console.log()
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
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
    function RenderComments({comments}){
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
                </div>
            )
        }
        else{
            return(<div></div>)
        }
    }


    const DishDetail=(props)=>{
        console.log("props : ",props);
        if(props.dish!=null){
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
                        <RenderComments comments={props.comments}/>
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

export default DishDetail;