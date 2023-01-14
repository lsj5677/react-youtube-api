import React from "react";
import { useYoutubeApi } from "../context/YoutubeApiContext";
import { useQuery } from "@tanstack/react-query";
import "../styles/ChannelInfo.css";

export default function ChennelInfo({ id, name }) {
  const { youtube } = useYoutubeApi();

  const { data: url } = useQuery(
    ["channel", id],
    () => youtube.channelImageURL(id),
    { staleTime: 1000 * 60 * 5 }
  );
  return (
    <>
      <ul className="channel-info">
        <li className="channel-thumb">{url && <img src={url} alt={name} />}</li>
        <li className="channel-title">{name}</li>
      </ul>
    </>
  );
}
