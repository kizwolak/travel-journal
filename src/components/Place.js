import pin from '../location-pin-svgrepo-com.svg'

export default function Place(props) {
    
    return (
        <div className="place">
            <img src={props.place.imageUrl} alt='El Caminito in La Boca'/>
            <div className="place-desc">
                <div className="basic-info">
                    <img src={pin} alt='Pin'/>
                    <p className="location">{props.place.location}</p>
                    <a href={props.place.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2>{props.place.title}</h2>
                <p className="dates">{props.place.startDate} - {props.place.endDate}</p>
                <p className="desc">{props.place.description}</p>
            </div>
        </div>
    )
}