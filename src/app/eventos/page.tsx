import { EventCard } from "../components/event-card";

const EventsPage = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-5">
      <EventCard
        date="30/07/2024"
        description="Asiste al lanzamiento oficial de BlockBooks"
        image="/images/blockbooks.png"
        link="https://app.unlock-protocol.com/checkout?id=1bf29344-6893-4455-a743-ffa4ef3a9e97"
        title="BlockBooks Launcher"
      />
    </div>
  );
};

export default EventsPage;
