"use client";
import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Experience() {
  return (
    <section id="experience">
      <SectionHeading>My experience</SectionHeading>
      <VerticalTimeline>
        {experiencesData.map((experience, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
            className="vertical-timeline-element--work"
              contentStyle={{
                background: "#f3f4f6",
                boxShadow: "none",
                textAlign: "left",
                border: "1px solid rgba(0,0,0,0.05)",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{ borderRight: "0.4rem solid  #f3f4f6" }}
              date={experience.date}
              icon={experience.icon}
              iconStyle={{
                background: "white",
                fontSize: "1.5rem",
              }}
            >
              <h3>{experience.title}</h3>
              <p>{experience.location}</p>
              <p>{experience.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
