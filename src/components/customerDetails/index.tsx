import { StyledContainer, CardWrapper, Header } from "../styledComponents";
import CustomerInfo from "../customerInfo";
import StatusCard from "../statusCard";
import EmailHistory from "../emailHistory";
import mockData from "../../mockData";

const CustomerDetails = () => {
  return (
    <StyledContainer>
      <CustomerInfo
        name={mockData.customer.name}
        email={mockData.customer.email}
      />
      <CardWrapper>
        <StatusCard
          status={mockData.original.status}
          date={mockData.original.date}
          dealer={mockData.original.dealer}
          color="blue"
        />
        <StatusCard
          status={mockData.revised.status}
          date={mockData.revised.date}
          dealer={mockData.revised.dealer}
          color="green"
        />
      </CardWrapper>
      <Header variant="h5" sx={{ margin: "30px" }}>
        Email Tracking History
      </Header>
      <EmailHistory emailHistory={mockData.emailHistory} />
    </StyledContainer>
  );
};

export default CustomerDetails;
