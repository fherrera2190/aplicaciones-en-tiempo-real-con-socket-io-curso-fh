import { UiProvider } from "./context/UiProvider";
import { RouterApp } from "./routes/RouterApp";

export const TicketApp = () => {
  return (
    <>
      <UiProvider>
        <RouterApp />
      </UiProvider>
    </>
  );
};
