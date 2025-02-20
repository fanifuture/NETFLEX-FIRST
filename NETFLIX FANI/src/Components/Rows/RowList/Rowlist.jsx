import React from "react";
import Row from "../Row/Row";
import requests from "../../../Utils/request";

const Rowlist = () => {
  return (
    <div>
      <Row
        title="NETFLIX ORIGINALS"
        url={requests.originals}
        isLargeRow={true}
      />
      <Row title="TRENDING NOW" url={requests.Trending} />
      <Row title="Top Rated" url={requests.top_rated} />
      <Row title="Action Movies" url={requests.Action_movies} />
      <Row title="Comedy Movies" url={requests.Comedy_movies} />
      <Row title="Hooror_Movies" url={requests.Hooror_Movies} />
      <Row title="Romance Movies" url={requests.Romance_Movie} />
      <Row title="Tvshow" url={requests.Tvshow} />
      <Row title="Documenteries" url={requests.Documenteries} />
    </div>
  );
};

export default Rowlist;
