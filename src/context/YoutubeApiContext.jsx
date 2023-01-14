import { createContext, useContext } from "react";
import Youtube from "../api/youtube";
import YoutubeClient from "../api/youtubeClient";

export const YoutubeApisContext = createContext();

const client = new YoutubeClient();
const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApisContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApisContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApisContext);
}
