
export type TrackProps = {
  image: string;
  name: string;
  type: string;
}

export default function performers (props: TrackProps) {
    return (
      <div>
      <a className="links" href="/">
        <img className="cover" src={props.image} alt="cover-img"></img>
        <p className="box">
          {props.name}
        </p>
        <p className="box2">
            {props.type}
        </p>  
        </a>
    </div>
  );
}