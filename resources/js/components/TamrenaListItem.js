import React from 'react';

const TamrenaListItem  = (props) => {
        
    return (
        
        <li className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
            <div className="flex-column">
                {props.tamrena.name} 
                <p onClick={props.click} ><small>by {props.tamrena.user.name}</small></p>
                <span className="badge badge-info badge-pill"> 
                    <span className="glyphicon glyphicon-triangle-top">{props.tamrena.stars}</span>
                    Stars
                </span>
            </div>
            <div className="image-parent">
                <img src="..." className="img-fluid" alt="Workouts" />
            </div>
        </li>
    );
}

export default TamrenaListItem;