import React from 'react';
import {Card,CardBody,CardImg,CardText,CardTitle,CardSubtitle} from 'reactstrap';

function RenderCard({item})//item will be received from the Home function/component
{
    return(
        <Card>
            <CardImg src={item.image} alt={item.name}/>
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {/* Render the designation only if it is present(in this case only leader has designation);dish and promotions doesn't have designation */}
                {item.designation? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props){
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}/>
                </div>
            </div>
        </div>
    );
}


export default Home;