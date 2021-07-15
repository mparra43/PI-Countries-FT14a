import React from 'react';
import {connect} from 'react-redux';
import {Activity}from "../activity/Activity"
import {Link} from 'react-router-dom';

export function Activities(props) {

    return (
        <div>
            <h1>Activities</h1>
            {props.activities.map( (activity)=>  <Link to={`/edit/${activity.id}`} key={activity.id}>  <Activity title={activity.name}/> </Link> ) }
        </div>
    )
};

const mapStateToProps = state => {
    return{ activities: state }

}

export default connect( mapStateToProps)(Activities)