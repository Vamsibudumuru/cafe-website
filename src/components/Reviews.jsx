function Reviews() {
  const reviews = [
    {
      name: "Rahul",
      review: "Best coffee in town!"
    },
    {
      name: "Priya",
      review: "Amazing ambience and desserts."
    },
    {
      name: "Vamsi",
      review: "Perfect place to chill and work."
    }
  ];

  return (
    <section>
      <div className="container">
        <h2>Customer Reviews</h2>

        <div className="cards">
          {reviews.map((item, index) => (
            <div className="card" key={index}>
              <h3>{item.name}</h3>
              <p>{item.review}</p>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;