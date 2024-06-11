export function NextVideo() {
    return (
      <video className="w-full h-full" controls preload="none">
        <source src="https://streamable.com/pvxi6y" type="video/mp4" />
        <track
          src="/path/to/captions.vtt"
          kind="subtitles"
          srcLang="en"
          label="English"
        />
        Your browser does not support the video tag.
      </video>
    )
  }