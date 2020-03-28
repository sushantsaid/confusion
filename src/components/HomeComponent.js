import React from 'react';
import {Card,CardBody,CardImg,CardText,CardTitle,CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderCard({item,isLoading,errMsg})//item will be received from the Home function/component
{
    if(isLoading){
        return(<Loading/>);
    }
    else if(errMsg){
        return(<h4>{errMsg}</h4>);
    }
    else
        return(
            <Card>
                <CardImg src={baseUrl+item.image} alt={item.name}/>
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
                    <RenderCard item={props.dish}
                    isLoading={props.dishesLoading} 
                    errMsg={props.dishesErrMsg}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion}
                    isLoading={props.promosLoading}
                    errMsg={props.promosErrMsg}/>
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader}/>
                </div>
            </div>
        </div>
    );
}


export default Home;