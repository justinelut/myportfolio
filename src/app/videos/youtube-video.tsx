"use client"
import React from "react";
import { YouTubeEmbed } from "@next/third-parties/google";

export default function YoutubeVideo({ video_id }: { video_id: string }) {
  return <YouTubeEmbed style="border-radius: 15px; opacity: 25px" videoid={video_id} params="controls=0 " />;
}
