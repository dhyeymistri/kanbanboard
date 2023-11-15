import Card from "./Card";
import '../css files/containerCard.css';

const ContainerCard = ({groupby, data}) => {
    return(
        <div className="col" id="col-4">
        <div className="col-title">{groupby}</div>
        <div>
          {data?.map((ticket, i) => (
            <Card
              key = {ticket.id}
              id = {ticket.id}
              tag = {ticket.tag[0]}
              title = {ticket.title}
            />
          ))}
        </div>
        </div>
    )
}

export default ContainerCard;