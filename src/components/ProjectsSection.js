import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "Little Lemon Restaurant",
    description:
      "A responsive website for the little lemons' restaurant with many cool features like booking a table...",
    getImageSrc: () => require("../images/restaurant.jpg"),
    url: "https://thedatadj.github.io/littlelemon/"
  },
  {
    title: "Todo App",
    description:
      "A mobile app to register you task of the day, nice interface and user-friendly business logic.",
    getImageSrc: () => require("../images/todo.jpeg"),
    url: "https://thedatadj.github.io/todo/"
  },
  {
    title: "Games Collection",
    description:
      "A One-stop page for games to play my latest games, allowing them to have fun in the cloud",
    getImageSrc: () => require("../images/game-screen.avif"),
    url: "https://thedatadj.github.io/games/"
  },
  {
    title: "Xercise 3000",
    description:
      "A mobile application for planning your exercise routine and keep track of your progress  with a few taps",
    getImageSrc: () => require("../images/exercise.avif"),
    url: "https://thedatadj.github.io/xercise3000/"
  },
];

const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#14532d"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">Featured Projects</Heading>
      <Box
        display="grid"
        gridTemplateColumns={{ lg: "repeat(2,minmax(0,1fr))", sm: "repeat(1, miman(0, 1fr))"}}
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
