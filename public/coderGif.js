const coderGif = () => {
  return (
    <>
      <div style={{ width: "100%", height: 0, paddingBottom: "75%", position: "relative" }}>
        <iframe
          src="https://giphy.com/embed/dWesBcTLavkZuG35MI"
          width="100%"
          height="100%"
          style={{ position: "absolute" }}
          className="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
      <p>
        <a href="https://giphy.com/gifs/webdesign-webtasrimi-gitialmarketing-dWesBcTLavkZuG35MI">via GIPHY</a>
      </p>
    </>
  );
};

export default coderGif;
