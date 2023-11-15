import '../css files/card.css';
const Card = ({title, id, tag}) => {
    return (
        <div className="card-outline">
            <div className="row1">
                <div className="id">{id}</div>
            </div>
            <div className="row2">{title}</div>
            <div className="row3">
                <div className="status-indicator"></div>
                <div className="card-tag">{tag}</div>
            </div>
        </div>
    );
};

export default Card;