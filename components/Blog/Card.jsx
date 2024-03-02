import Image from "next/image";
import "./Card.css";

const Card = ({ author, date, description, tags, title, image }) => {
  return (
    <div className="card">
      <Image
        src={image}
        width={200}
        height={200}
        alt="Article"
        className="card-image"
      />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
      <p className="card-author">
        By {author} on {date}
      </p>
      <div className="card-tags">
        {tags.map((tag, index) => (
          <span key={index} className="card-tag">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
