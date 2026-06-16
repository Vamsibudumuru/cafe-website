function GalleryPreview() {
  const images = [
    "https://images.unsplash.com/photo-1554118811-1e0d58224f24",
    "https://images.unsplash.com/photo-1521017432531-fbd92d768814",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
  ];

  return (
    <section>
      <div className="container">
        <h2>Our Gallery</h2>

        <div className="gallery-grid">
          {images.map((img, index) => (
            <img key={index} src={img} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default GalleryPreview;