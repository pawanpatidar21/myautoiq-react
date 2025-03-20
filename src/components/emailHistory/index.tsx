// import {
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
//   Box,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import {
//   AccordionContainer,
//   CustomAccordion,
//   AccordionTitle,
//   AccordionDetailsText,
// } from "../styledComponents";
// import { EmailHistoryProps } from "../../types";
// import CarLeaseStandardTemplate from "../emailTemplate/carLeaseStandardTemplate";
// import CarLeasePremiumTemplate from "../emailTemplate/carLeasePremiumTemplate";
// import CarLeaseDeluxeTemplate from "../emailTemplate/carLeaseDeluxeTemplate";

// const renderEmailTemplate = (id: string) => {
//   switch (id) {
//     case "1":
//       return <CarLeaseStandardTemplate />;
//     case "2":
//       return <CarLeasePremiumTemplate />;
//     case "3":
//       return <CarLeaseDeluxeTemplate />;
//     default:
//       return <p>Data load soon...</p>; // Default case for text-based details
//   }
// };

// const EmailHistory: React.FC<EmailHistoryProps> = ({ emailHistory }) => (
//   <AccordionContainer>
//     {emailHistory.map((email, index) => (
//       <CustomAccordion key={index}>
//         <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//           <AccordionTitle>
//             <Typography variant="body1" fontWeight="bold">
//               Subject: {email.subject}
//             </Typography>
//             <Typography variant="body2" color="textSecondary">
//               Sent on {email.date} at {email.time}
//             </Typography>
//             {/* CRM Details Inside Summary */}
//             <Box mt={1}>
//               <Typography color="error" fontWeight="bold">
//                 CRM: This message was not added to the lead activity.
//               </Typography>
//               <Typography variant="body2">
//                 <strong>Sent:</strong> {email.date} at {email.time} &nbsp; |
//                 &nbsp;
//                 <strong>Opened:</strong> {email.opened ? email.opened : "-"}{" "}
//                 &nbsp; | &nbsp;
//                 <strong>Clicked:</strong> {email.clicked ? email.clicked : "-"}{" "}
//                 &nbsp; | &nbsp;
//                 <strong>Replied:</strong> {email.replied ? email.replied : "-"}
//               </Typography>
//             </Box>
//           </AccordionTitle>
//         </AccordionSummary>
//         <AccordionDetails>
//           <AccordionDetailsText>
//             {renderEmailTemplate(email.id)}
//           </AccordionDetailsText>
//         </AccordionDetails>
//       </CustomAccordion>
//     ))}
//   </AccordionContainer>
// );

// export default EmailHistory;


import {
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  AccordionContainer,
  CustomAccordion,
  CustomAccordionSummary,
  AccordionTitle,
  AccordionDetailsText,
} from "../styledComponents";
import { EmailHistoryProps } from "../../types";
import CarLeaseStandardTemplate from "../emailTemplate/carLeaseStandardTemplate";
import CarLeasePremiumTemplate from "../emailTemplate/carLeasePremiumTemplate";
import CarLeaseDeluxeTemplate from "../emailTemplate/carLeaseDeluxeTemplate";

const renderEmailTemplate = (id: string) => {
  switch (id) {
    case "1":
      return <CarLeaseStandardTemplate />;
    case "2":
      return <CarLeasePremiumTemplate />;
    case "3":
      return <CarLeaseDeluxeTemplate />;
    default:
      return <Typography color="textSecondary">Data load soon...</Typography>;
  }
};

const EmailHistory: React.FC<EmailHistoryProps> = ({ emailHistory }) => (
  <AccordionContainer>
    {emailHistory.map((email, index) => (
      <CustomAccordion key={index}>
        <CustomAccordionSummary expandIcon={<ExpandMoreIcon />}>
          <AccordionTitle>
            <Typography variant="body1" fontWeight="bold">
              {email.subject}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Sent on {email.date} at {email.time}
            </Typography>
            <Box mt={1}>
              <Typography color="error" fontWeight="bold">
                CRM: This message was not added to the lead activity.
              </Typography>
              <Typography variant="body2">
                <strong>Sent:</strong> {email.date} at {email.time} &nbsp; |
                &nbsp;
                <strong>Opened:</strong> {email.opened ? email.opened : "-"}{" "}
                &nbsp; | &nbsp;
                <strong>Clicked:</strong> {email.clicked ? email.clicked : "-"}{" "}
                &nbsp; | &nbsp;
                <strong>Replied:</strong> {email.replied ? email.replied : "-"}
              </Typography>
            </Box>
          </AccordionTitle>
        </CustomAccordionSummary>
        <AccordionDetails>
          <AccordionDetailsText>
            {renderEmailTemplate(email.id)}
          </AccordionDetailsText>
        </AccordionDetails>
      </CustomAccordion>
    ))}
  </AccordionContainer>
);

export default EmailHistory;
