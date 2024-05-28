import { EventCard } from "../components/event-card";

const EventsPage = () => {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-5">
      <EventCard
        date="30/07/2024"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore provident fugiat quae consectetur molestias vero porro omnis, amet ut delectus similique laudantium error? In fugiat vel, sed harum consequatur hic!"
        image="/images/principito.png"
        link="#"
        title="Evento de primavera"
      />
      <EventCard
        date="30/07/2024"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore provident fugiat quae consectetur molestias vero porro omnis, amet ut delectus similique laudantium error? In fugiat vel, sed harum consequatur hic!"
        image="/images/principito.png"
        link="#"
        title="Evento de primavera"
      />
      <EventCard
        date="30/07/2024"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore provident fugiat quae consectetur molestias vero porro omnis, amet ut delectus similique laudantium error? In fugiat vel, sed harum consequatur hic!"
        image="/images/principito.png"
        link="#"
        title="Evento de primavera"
      />
      <EventCard
        date="30/07/2024"
        description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore provident fugiat quae consectetur molestias vero porro omnis, amet ut delectus similique laudantium error? In fugiat vel, sed harum consequatur hic!"
        image="/images/principito.png"
        link="#"
        title="Evento de primavera"
      />
    </div>
  );
};

export default EventsPage;
