import React from "react";
import { Stack, Box } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return <Loader />;
  console.log(videos);

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => {
        if (item.id.channelId) {
          return (
            <Box key={idx}>
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
          );
        }
      })}

      {videos.map((item, idx) => {
        if (!item.id.channelId) {
          return (
            <Box key={idx}>{item.id.videoId && <VideoCard video={item} />}</Box>
          );
        }
      })}
    </Stack>
  );
};

export default Videos;
