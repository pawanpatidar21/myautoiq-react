import CarLeaseTemplate from "../carLeaseTemplate";

const CarLeasePremiumTemplate = () => {
  return (
    <CarLeaseTemplate
      callNumber="(814) 524-3427"
      address="201 Valley View Blvd Altoona, PA 16602"
      logoUrl="https://hfnyib.stripocdn.email/content/guids/CABINET_d1efa66e0e421f089f519d44b5b671dd5eb805b9fa34355a2a054dbdb2d66820/images/alhlogo.png"
      offerTitle="LIKE-NEW SPECIAL"
      offerDetails="Certified 2022 Honda CR-V EX SUV available at Altoona Honda"
      carImageUrl="https://pictures.dealer.com/a/altoonahondapa/0945/7bff5869636cd1ce601b69c0c7a830c7x.jpg"
      carLink="https://www.altoonahonda.com"
      features={[
        "85 Point Inspection",
        "Vehicle History Report",
        "2-day Rental Vehicle Coverage",
        "2 YEAR/150,000 Powertrain Warranty",
      ]}
      buttons={[
        {
          text: "More",
          link: "https://www.altoonahonda.com/used/Honda/2022-Honda-CR-V.htm",
        },
      ]}
    />
  );
};

export default CarLeasePremiumTemplate;
