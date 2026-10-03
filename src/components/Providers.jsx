"use client";

import { BookingProvider } from "./booking/BookingContext";

export const Providers = ({ children }) => (
  <BookingProvider>{children}</BookingProvider>
);
