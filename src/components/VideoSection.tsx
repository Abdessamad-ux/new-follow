const VideoSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="relative rounded-2xl overflow-hidden shadow-elevated aspect-[9/16] md:aspect-video max-w-md md:max-w-full mx-auto">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/qKzJBlCQ5KE"
            title="Social Followers Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
