import CarLeaseTemplate from "../carLeaseTemplate";

const CarLeaseDeluxeTemplate = () => {
  return (
    <CarLeaseTemplate
      callNumber="(814) 524-3427"
      address="201 Valley View Blvd Altoona, PA 16602"
      logoUrl="https://hfnyib.stripocdn.email/content/guids/CABINET_d1efa66e0e421f089f519d44b5b671dd5eb805b9fa34355a2a054dbdb2d66820/images/alhlogo.png"
      offerTitle="LIKE-NEW SPECIAL"
      offerDetails="Certified 2021 Honda Pilot Touring 8 Passenger AWD SUV available at Altoona Honda"
      carImageUrl="https://images.dealer.com/ddc/vehicles/2021/Honda/Pilot/SUV/trim_Touring_8_Passenger_fbc3de/color/Platinum%20White%20Pearl-WY-224%2C221%2C212-640-en_US.jpg"
      carLink="https://www.altoonahonda.com"
      features={[
        "85 Point Inspection",
        "Vehicle History Report",
        "Roadside Assistance",
      ]}
      buttons={[
        {
          text: "Inventory",
          link: "https://www.altoonahonda.com/used-inventory/index.htm",
        },
        {
          text: "Value Trade",
          link: "https://www.altoonahonda.com/carfax-value-your-trade.htm",
        },
      ]}
    />
  );
};

export default CarLeaseDeluxeTemplate;
