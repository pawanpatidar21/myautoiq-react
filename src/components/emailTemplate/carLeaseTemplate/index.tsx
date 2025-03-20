import { Box, Typography, Grid } from "@mui/material";
import {
  AddressBox,
  CertifiedSection,
  ContentBox,
  AccordionHeader,
  ImageContainer,
  OfferSection,
  PricingGrid,
  StyledButton,
  Wrapper,
} from "../../styledComponents";

interface CarLeaseTemplateProps {
  callNumber: string;
  address: string;
  logoUrl: string;
  offerTitle: string;
  offerDetails: string;
  carImageUrl: string;
  carLink: string;
  leasePrice?: string;
  leaseTerm?: string;
  dueAtSigning?: string;
  features: string[];
  buttons: { text: string; link: string }[];
}

const CarLeaseTemplate: React.FC<CarLeaseTemplateProps> = ({
  callNumber,
  address,
  logoUrl,
  offerTitle,
  offerDetails,
  carImageUrl,
  carLink,
  leasePrice,
  leaseTerm,
  dueAtSigning,
  features,
  buttons,
}) => {
  return (
    <Wrapper>
      <ContentBox>
        {/* Header */}
        <AccordionHeader>
          <Typography variant="body2">
            Call:{" "}
            <a href={`tel:${callNumber}`} style={{ color: "#FFFFFF" }}>
              {callNumber}
            </a>
          </Typography>
        </AccordionHeader>

        {/* SubHeader */}
        <AddressBox>
          <img src={logoUrl} alt="Logo" height="50" />
          <Typography variant="body2">{address}</Typography>
        </AddressBox>

        {/* Offer Section */}
        <OfferSection>
          <Typography variant="h6" color="green" fontWeight="bold">
            {offerTitle}
          </Typography>
          <Typography variant="h5" color="gray" fontWeight="bold">
            {offerDetails}
          </Typography>
        </OfferSection>

        {/* Image Section */}
        <Box sx={{ textAlign: "center", padding: "20px" }}>
          <a href={carLink}>
            <ImageContainer src={carImageUrl} alt="Car" />
          </a>
        </Box>

        {/* Certified Section */}
        <CertifiedSection>
          <Typography variant="h6" color="#0075b7" fontWeight="bold">
            Peace of Mind{" "}
            <span style={{ color: "#696969" }}>
              and lower cost of ownership
            </span>
          </Typography>
          <ul>
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </CertifiedSection>

        {/* Pricing Section (Optional) */}
        {leasePrice && leaseTerm && dueAtSigning && (
          <PricingGrid container spacing={2} justifyContent="center">
            <Grid item xs={6} sm={3}>
              <Typography variant="body2">Lease For</Typography>
              <Typography variant="h6" fontWeight="bold">
                {leasePrice}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2">Term</Typography>
              <Typography variant="h6" fontWeight="bold">
                {leaseTerm}
              </Typography>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Typography variant="body2">Due at Signing</Typography>
              <Typography variant="h6" fontWeight="bold">
                {dueAtSigning}
              </Typography>
            </Grid>
          </PricingGrid>
        )}

        {/* Buttons */}
        <Box display="flex" justifyContent="center" mt={2} gap={2}>
          {buttons.map((button, index) => (
            <StyledButton key={index} href={button.link}>
              {button.text}
            </StyledButton>
          ))}
        </Box>
      </ContentBox>
    </Wrapper>
  );
};

export default CarLeaseTemplate;
