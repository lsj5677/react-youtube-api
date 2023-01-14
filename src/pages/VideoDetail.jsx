import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../components/ChannelInfo";
import RelatedVideos from "../components/RelatedVideos";
import "../styles/VideoDetail.css";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();

  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section className="video-detail-section">
      <article className="video-detail">
        <iframe
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          title={title}
        ></iframe>
        <div className="video-info">
          <h2 className="video-title">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className="desc">{description}</pre>
        </div>
      </article>
      <section className="related-videos">
        <RelatedVideos id={video.id} />
      </section>
    </section>
  );
}
