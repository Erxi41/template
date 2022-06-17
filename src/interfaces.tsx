
interface IImage {
    url: string;
  }

export interface IAlbum {
    id: string;
    name: string;
    images: IImage[];
    artists: IImage[];
  }
  
export interface IPerformers {
  id: string;
  images: IImage[];
  type: string;
  name: string;
}

export interface ITracks {
  id: string;
  name: string;
  album: IAlbum;
  artists: IImage[];
}
