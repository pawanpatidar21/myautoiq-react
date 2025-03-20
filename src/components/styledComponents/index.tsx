import { styled } from "@mui/material/styles";
import {
  Container,
  Typography,
  Card,
  Accordion,
  Box,
  Grid,
  Button,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

export const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(4),
  backgroundColor: "#f9f9f9",
  minHeight: "100vh",
}));

export const Header = styled(Typography)({
  textAlign: "center",
  fontWeight: "bold",
  color: "#333",
});

export const SubHeader = styled(Typography)({
  textAlign: "center",
  color: "#666",
});

export const CardWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  marginTop: "20px",
  "@media (min-width: 768px)": {
    flexDirection: "row",
  },
});

export const CustomCard = styled(Card)({
  flex: 1,
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
});

export const StatusText = styled(Typography)(({ theme, color }) => ({
  fontSize: "18px",
  fontWeight: "bold",
  color: color || theme.palette.primary.main,
}));

// export const AccordionContainer = styled("div")({
//   marginTop: "20px",
// });

// export const CustomAccordion = styled(Accordion)({
//   borderRadius: "8px",
//   boxShadow: "none",
//   borderBottom: "1px solid #ddd",
//   "&:last-child": {
//     borderBottom: "none",
//   },
// });

// export const AccordionTitle = styled(Typography)({
//   fontWeight: "bold",
//   color: "#333",
// });

// export const AccordionDetailsText = styled(Typography)({
//   color: "#555",
// });

// /////////

export const Wrapper = styled(Box)({
  backgroundColor: "#F6F6F6",
  width: "100%",
  padding: 0,
  margin: 0,
  display: "flex",
  justifyContent: "center",
});

// 🔹 Content Container
export const ContentBox = styled(Box)({
  backgroundColor: "#FFFFFF",
  padding: "20px",
  width: "100%",
});

// 🔹 Header
export const AccordionHeader = styled(Box)({
  backgroundColor: "#00324F",
  color: "#FFFFFF",
  padding: "5px 20px",
  display: "flex",
  justifyContent: "space-between",
});

// 🔹 SubHeader / Address Box
export const AddressBox = styled(Box)({
  backgroundColor: "#007cc0",
  color: "#FFFFFF",
  padding: "5px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

// 🔹 Offer Section
export const OfferSection = styled(Box)({
  textAlign: "center",
  backgroundColor: "#FFFFFF",
  padding: "20px",
});

// 🔹 Typography (Text Elements)
export const SpecialOffer = styled(Typography)({
  color: "#008000",
  fontSize: "16px",
  textAlign: "center",
  fontWeight: "bold",
});

export const OfferDetails = styled(Typography)({
  color: "#333333",
  fontSize: "22px",
  textAlign: "center",
  fontWeight: "bold",
});

// 🔹 Image Container
export const ImageContainer = styled("img")({
  width: "100%",
  height: "auto",
});

export const ImageBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
});

// 🔹 Pricing Grid Layout
export const PricingGrid = styled(Grid)({
  textAlign: "center",
  marginTop: "10px",
});

export const PriceBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  marginTop: "10px",
});

// 🔹 Call to Action (CTA) Button
export const StyledButton = styled(Button)({
  backgroundColor: "#007cc0",
  color: "#FFFFFF",
  padding: "10px 20px",
  textTransform: "none",
  fontSize: "14px",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#005f99",
  },
});

// 🔹 Certified Section
export const CertifiedSection = styled(Box)({
  marginTop: "20px",
  padding: "20px",
  backgroundColor: "#FFFFFF",
});

export const AccordionContainer = styled(Box)({
  width: "100%",
  margin: "auto",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const CustomAccordion = styled(Accordion)({
  backgroundColor: "#F9F9F9",
  border: "1px solid #E0E0E0",
  borderRadius: "8px",
  boxShadow: "none",
  "&:before": {
    display: "none",
  }
});

export const CustomAccordionSummary = styled(AccordionSummary)({
  backgroundColor: "#FFF",
  borderBottom: "1px solid #E0E0E0",
  padding: "10px 16px",
  "& .MuiTypography-root": {
    fontWeight: "bold",
  },
  "&.Mui-expanded": {
    backgroundColor: "#f1f5f9",
    margin: 0,
  },
});

export const AccordionTitle = styled(Box)({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  gap: "5px",
});

export const AccordionDetailsText = styled(AccordionDetails)({
  padding: "16px",
  backgroundColor: "#FFF",
  fontSize: "14px",
  color: "#333",
  borderTop: "1px solid #E0E0E0",
});
