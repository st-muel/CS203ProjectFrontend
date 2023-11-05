"use client";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components/CustomText";
import ExploreCard from "../components/ExploreCard";
import { staggerContainer } from "../utils/motion";
import { EventCatalogue } from "../explore/page";

interface Props {
  eventCatalogues: EventCatalogue[];
}

export default function EventCatalogueSection({ eventCatalogues }: Props) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className="mx-auto flex flex-col"
    >
      <TypingText title="| Explore" textStyles="text-center" />
      <TitleText title={<>Events Catalogue</>} textStyles="text-center" />
      <div className="mx-auto flex justify-items-center flex lg:flex-row flex-col grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 pt-20 pb-10 lg:pt-40 lg:pb-20">
        {eventCatalogues.map((eventCatalogue, index) => {

          if (eventCatalogue.concertImages == null || eventCatalogue.concertImages.length == 0) {
            return (
              <ExploreCard
                key={`event-card-${eventCatalogue.title}`}
                id={eventCatalogue.id}
                index={index}
                imgUrl="https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
                title={eventCatalogue.title}
                loc={eventCatalogue.venue.name}
                startDate={eventCatalogue.earliestSession == null ? "" : eventCatalogue.earliestSession.datetime}
                endDate={eventCatalogue.latestSession == null ? "" : eventCatalogue.latestSession.datetime}
                description={eventCatalogue.description}
              />
            );
          }

          return (
            <ExploreCard
              key={`event-card-${eventCatalogue.title}`}
              id={eventCatalogue.id}
              index={index}
              imgUrl={
                eventCatalogue.concertImages.length > 0 ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/v1/concerts/${eventCatalogue.id}/images/${eventCatalogue.concertImages[0].id}` : ""
              }
              title={eventCatalogue.title}
              loc={eventCatalogue.venue.name}
              startDate={
                eventCatalogue.earliestSession ? eventCatalogue.earliestSession.datetime : ""
              }
              endDate={
                eventCatalogue.latestSession ? eventCatalogue.latestSession.datetime : ""
              }
              description={eventCatalogue.description}
            />
          );
        })}
      </div>
    </motion.div>
  );
}
