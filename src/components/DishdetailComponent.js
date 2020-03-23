import React from 'react';
import {Card,CardImg,CardBody,CardTitle,CardText} from 'reactstrap';



    //function to add "Dishes" to the view
    function RenderDish({dish}){
        if(dish!=null){
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
    function RenderComments({dish}){
        if(dish!=null){
            const comm = dish.comments.map((cmnt)=>{
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
        if(props.selectedDish!=null){
            return(
                <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1" >
                        <RenderDish dish={props.selectedDish}/>
                    </div>
                    <div className="col-12 col-md-5">
                        <RenderComments dish={props.selectedDish}/>
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