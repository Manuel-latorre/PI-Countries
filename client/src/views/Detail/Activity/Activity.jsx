const Activity = ({name, difficulty, duration, season}) => {
    return(
        <div>
            <h2>Activity</h2>
            <p>Name: {name}</p>
            <p>Difficulty: {difficulty}</p>
            <p>Duration: {duration}</p>
            <p>Season: {season}</p>
            
        </div>
    )
}

export default Activity;