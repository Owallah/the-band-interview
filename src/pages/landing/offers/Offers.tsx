import "./Offers.css";

const Offers = () => {
  const offers = [
    {
      id: 1,
      title: "Summer Sale",
      description: "Get up to 50% off on selected items!",
      image: "https://sa1s3optim.patientpop.com/assets/images/provider/photos/2005252.jpg",
    },
    {
      id: 2,
      title: "Free Shipping",
      description: "Enjoy free shipping on orders over $50.",
      image: "https://t4.ftcdn.net/jpg/04/21/17/37/360_F_421173720_VCRtkONOOmhaMefv1A7BQVHWaINe0aMM.jpg",
    },
    {
      id: 3,
      title: "New Arrivals",
      description: "Check out our latest collection.",
      image: "https://img.freepik.com/free-vector/stylish-new-arrival-sale-offer-background-brush-stroke-style_1017-49946.jpg",
    },
  ];

  return (
    <div className="offers">
      <h2 className="offers_title">Current Offers</h2>
      <div className="offers_grid">
        {offers.map((offer) => (
          <div key={offer.id} className="offer_card">
            <img src={offer.image} alt={offer.title} className="offer_image" />
            <h3 className="offer_title">{offer.title}</h3>
            <p className="offer_description">{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Offers;