import { SocketProvider } from "./context";
import { UiProvider } from "./context/UiProvider";
import { RouterApp } from "./routes/RouterApp";

export const TicketApp = () => {
  return (
    <>
      <SocketProvider>
        <UiProvider>
          <RouterApp />
        </UiProvider>
      </SocketProvider>
    </>
  );
};
