
export type AlbumProps = {
  image: string;
  name: string;
  author_name: any[];
}

export default function albums (props: AlbumProps) {
    return (
      <div>
      <a className="links" href="/">
        <img className="cover" src={props.image} alt="cover-img"></img>
        <p className="box">
          {props.name}
        </p>
        <p className="box2">
            {props.author_name}
        </p>  
        </a>
    </div>
  );
}