/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Customer {
  name: string;
  email: string;
}

export interface Status {
  status: string;
  date: string;
  dealer: string;
  color?: string;
}

export interface Email {
  id: string;
  date: string;
  subject: string;
  details: any;
  time: string;
  opened: string;
  clicked: string;
  replied: string;
}

export interface EmailHistoryProps {
  emailHistory: Email[];
}
