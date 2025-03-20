import CarLeaseTemplate from "../carLeaseTemplate";

const CarLeaseStandardTemplate = () => {
  return (
    <CarLeaseTemplate
      callNumber="(814) 524-3427"
      address="201 Valley View Blvd Altoona, PA 16602"
      logoUrl="https://hfnyib.stripocdn.email/content/guids/CABINET_d1efa66e0e421f089f519d44b5b671dd5eb805b9fa34355a2a054dbdb2d66820/images/alhlogo.png"
      offerTitle="SPECIAL OFFER"
      offerDetails="2024 Honda Accord EX $459/Mo Lease OR 1.9% APR Financing*"
      carImageUrl="https://pictures.dealer.com/a/altoonahondapa/0559/0289c7a151b7d1dca3366bdefa0faff0x.jpg"
      carLink="https://www.altoonahonda.com"
      leasePrice="$239/Mo*"
      leaseTerm="36 Months*"
      dueAtSigning="$3,799*"
      features={["Oil Changes", "Tire Rotation", "Multi-Point Inspection"]}
      buttons={[{ text: "More", link: "https://www.altoonahonda.com" }]}
    />
  );
};

export default CarLeaseStandardTemplate;
