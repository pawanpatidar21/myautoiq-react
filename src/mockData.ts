import { Customer, Status, Email } from "./types";

const mockData: {
  customer: Customer;
  original: Status;
  revised: Status;
  emailHistory: Email[];
} = {
  customer: { name: "Jill Jones", email: "jill.jones@example.com" },
  original: {
    status: "Original",
    date: "10th Jan 2024",
    dealer: "Albion Honda",
  },
  revised: {
    status: "Revised",
    date: "15th Jan 2024",
    dealer: "Chapman Honda",
  },
  emailHistory: [
    {
      id: "1", // Unique ID
      date: "1st March 2024",
      time: "07:45 AM",
      subject: "MyAutoIQ Nurturing Started",
      details: "Customer received first automated nurturing email.",
      opened: "08:10 AM",
      clicked: "08:30 AM",
      replied: "-",
    },
    {
      id: "2", // Unique ID
      date: "23rd October 2024",
      time: "09:24 AM",
      subject: "Lead In",
      details: "Customer inquired about a new vehicle.",
      opened: "-",
      clicked: "-",
      replied: "-",
    },
    {
      id: "3", // Unique ID
      date: "23rd June 2024",
      time: "05:53 PM",
      subject: "Vehicle Sold",
      details: "Customer purchased the vehicle.",
      opened: "06:15 PM",
      clicked: "06:45 PM",
      replied: "07:00 PM",
    },
  ],
};

export default mockData;
