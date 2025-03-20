import { Customer } from "../../types";
import { Header, SubHeader } from "../styledComponents";

const CustomerInfo: React.FC<Customer> = ({ name, email }) => (
  <>
    <Header variant="h4">{name}</Header>
    <SubHeader variant="subtitle1">{email}</SubHeader>
  </>
);

export default CustomerInfo;
