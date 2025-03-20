import { CardContent, Typography } from "@mui/material";
import { CustomCard, StatusText } from "../styledComponents";
import { Status } from "../../types";

const StatusCard: React.FC<Status> = ({ status, date, dealer, color }) => (
  <CustomCard>
    <CardContent>
      <StatusText color={color}>{status}</StatusText>
      <Typography>Date: {date}</Typography>
      <Typography>Dealer: {dealer}</Typography>
    </CardContent>
  </CustomCard>
);


export default StatusCard;