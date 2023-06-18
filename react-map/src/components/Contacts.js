//import HeaderImg from "../image/lion.jpg"
export default function Contacts(props){
   let badgeText
   if(props.openSpots === 0){
    badgeText = "SOLD OUT"
   }else if(props.location === "online"){
    badgeText = "ONLINE"
   }
console.log(badgeText);
    return(
        <div className="image-header">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../image/${props.img}`} alt="lion"/>
            <div>
                <h3>{props.name}</h3>
                <h5>{props.role}</h5>
                <p>{props.paragraph}</p>
                <p>{props.uploads}</p>
            </div>
        </div>
    )
}
