import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, Container } from "@mui/material";
import { cyan, deepPurple, lightBlue, pink } from "@mui/material/colors";
import { motion } from "framer-motion";

const projects = [
  {
    name: "Education Website",
    image: require("../assets/Projects/Education.PNG"),
    description:
      "It is an educational platform that has many advantages. It has more than one user such as (teacher, admin, student, guardian). It has the background and colors to be changed. It has balls for quick movement between pages and can be hidden. It has lectures and exams in an organized and tidy form, and the exams are Identical to the format of the school exam",
    link: "",
  },
  {
    name: "Admin Dashboard",
    image: require("../assets/Projects/Admin-Dashboard.PNG"),
    description:
      "Developed an admin dashboard featuring interactive data tables and various charts using [technologies used such as React js, MUI, React Hook Form ].Designed and implemented an intuitive and user-friendly interface for data visualization and analysis using chart libraries like [nivo].Created dynamic data tables that support sorting, filtering, and searching to facilitate quick and efficient access to important information.",
    link: "https://admin-dashboard-6bea7.web.app/",
  },
  {
    name: "E-commerce",
    image: require("../assets/Projects/E-commerce.PNG"),
    description:
      "Led the front-end development using React, ensuring a responsive and user-friendly interface that enhances the shopping experience across all devices.",
    link: "https://e-commerce-661c3.web.app/",
  },
  {
    name: "Chat App",
    image: require("../assets/Projects/chat-app.png"),
    description:
      "The division of friends explains in a good way, as well as building the chat, designing it, and paying attention to the details of the chat, controlling the movement between the pages in Solh",
    link: "https://chat-app-97fd5.web.app/app",
  },
  {
    name: "Gaming Store",
    image: require("../assets/Projects/Gaming-Store.PNG"),
    description:
      "A store that sells games. It has a list of popular games and the games are also divided into categories so that the user can easily find the game he wants. There is also a shopping cart to give the user the option to cancel the purchase or end the purchase.",
    link: "",
  },
  {
    name: "cruds",
    image: require("../assets/Projects/cruds system.PNG"),
    description:
      "It allows the user to manage products through this page. It allows him to add products and their prices, as well as discounts and taxes, and in the end it gives him the price of the final product. The user can search for the product or department he wants.",
    link: "https://hoba1.github.io/cruds-system/",
  },
  {
    name: "Expenses",
    image: require("../assets/Projects/expenses.PNG"),
    description:
      "Developed an innovative website for expense and spending tracking using [React js, redux , MUI].Designed and implemented a system for managing expenses and spending with an interactive and user-friendly interface.",
    link: "https://host-expenses-api.web.app/",
  },
  {
    name: "To-Do List",
    image: require("../assets/Projects/To-Do List.PNG"),
    description:
      "It enables the user to remember the tasks that must be done, and what is completed of them is marked as completed, and what is not done or implemented is marked as not executed, and the task can be deleted.",
    link: "https://hoba1.github.io/To-Do-List/",
  },
  {
    name: "weather app",
    image: require("../assets/Projects/weather app.PNG"),
    description:
      "It takes the name of the country or city from the user and gives him the weather condition in this country or city that he entered via the API.",
    link: "https://hoba1.github.io/weather-app/",
  },
  {
    name: "X O Game",
    image: require("../assets/Projects/X O Game.PNG"),
    description:
      "It is an entertaining game played between two players. The number of points for each player is automatically calculated and the name of the winner is displayed, then a point is added to him and the game is completed.",
    link: "https://hoba1.github.io/X-O-Game/",
  },
  {
    name: "Mr Mostafa ELgon",
    image: require("../assets/Projects/project-mostafa.jpg"),
    description:
      "creative landing page for portfolio website, for mr Mostafa Elgon,it contains the simple information,social links.",
    link: "https://hoba1.github.io/elgon/",
  },
  {
    name: "Mr Said Hussien",
    image: require("../assets/Projects/project-said.png"),
    description:
      "creative landing page for portfolio website, for mr Said Hussien,it contains the simple information,social links.",
    link: "https://hoba1.github.io/mr-said_hussien-portfolio/",
  },
  {
    name: "Dr Ahmed Mekky",
    image: require("../assets/Projects/project-dr-ahmed.jpg"),
    description:
      "It contains all the information about Dr. Ahmed, the places where he works, and some examples of his work.",
    link: "https://hoba1.github.io/dr-ahmed-mekky-portfolio/",
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 1.5 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

const Projects = () => {
  return (
    <Container>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
      >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  image={project.image}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {project.description}
                  </Typography>
                  {project.link && (
                    <Box mt={1} textAlign={"right"}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: lightBlue[500],
                          transition: ".5s",
                          "&:hover": {
                            letterSpacing: "5px",
                          },
                        }}
                        href={project.link}
                        target="_blank"
                      >
                        Watch
                      </Button>
                    </Box>
                  )}
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </Container>
  );
};

export default Projects;
