const Card = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <img src={props.flag} />
            <p>{props.continent}</p>
            <p>{props.capital}</p>
            <p>{props.subregion}</p>
            <p>{props.area}</p>
            <p>{props.population}</p>
        </div>
    )
}

export default Card;