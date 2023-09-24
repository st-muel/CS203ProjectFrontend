import { EventCatalogue } from "../explore/page";
import styles from "../styles";
import EventCatalogueSection from "./EventCatalogueSection";

interface Props {
  eventCatalogues: EventCatalogue[];
}

const Events = ({eventCatalogues}: Props) => {
  return (
    <section className={`${styles.paddings}`} id="explore">
      <EventCatalogueSection eventCatalogues={eventCatalogues} />
    </section>
  );
};

export default Events;
