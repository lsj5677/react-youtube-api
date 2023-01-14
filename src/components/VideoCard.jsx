import React from "react";
import "../styles/VideoCard.css";
import { formatAgo } from "../util/date";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video, type }) {
  const navigate = useNavigate();
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const isList = type === "list";

  return (
    <li
      className={`${isList ? "video-card-list" : "video-card"} video-card-all`}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img
        src={thumbnails.medium.url}
        alt={title}
        className={isList ? "w-60 mr-2" : "w-full"}
      />
      <div className={isList ? "info-list" : "info"}>
        <p className="title">{title}</p>
        <ul className="info-detail">
          <li>{channelTitle}</li>
          <li className="published">{formatAgo(publishedAt)}</li>
        </ul>
      </div>
    </li>
  );
}
