import { motion } from "framer-motion";
import Programmer from "../assets/illustration/Programmer";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSquareJs,
  faReact,
  faGithub,
  faBootstrap,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { pink } from "@mui/material/colors";

const skillsIcons = [
  {
    icon: <FontAwesomeIcon icon={faHtml5} size="2x" />,
    name: "HTML",
  },
  {
    icon: <FontAwesomeIcon icon={faCss3Alt} size="2x" />,
    name: "CSS",
  },
  {
    icon: <FontAwesomeIcon icon={faSquareJs} size="2x" />,
    name: "JavaScript",
  },
  {
    icon: <FontAwesomeIcon icon={faReact} size="2x" />,
    name: "React",
  },
  {
    icon: <FontAwesomeIcon icon={faGithub} size="2x" />,
    name: "GitHub",
  },
  {
    icon: <FontAwesomeIcon icon={faBootstrap} size="2x" />,
    name: "Bootstrap",
  },
  {
    icon: <FontAwesomeIcon icon={faSass} size="2x" />,
    name: "Sass",
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

const About = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <Container>
        <Stack
          direction={{ md: "row" }}
          alignItems={"center"}
          height={{ md: "88vh" }}
          justifyContent={"space-between"}
          spacing={5}
        >
          <Box width={{ md: "40%" }}>
            <Programmer />
          </Box>
          <Stack
            direction={"column"}
            justifyContent={"between"}
            alignItems={"center"}
            width={{ md: "50%" }}
          >
            <Stack spacing={2} width={'100%'}>
              <Typography
                variant="h5"
                style={{ color: pink[500], fontWeight: "bold" }}
              >
                About me
              </Typography>
              <Typography variant="body1">
                I am a Junior front end developer with react, I'm actively
                seeking training to further elevate my skills in collaborative
                teamwork and the execution of advanced projects, I have the
                ability to learn more techniques required by the work and keep
                up with the current changes. I have the ability to create
                responsive and creative websites. I am always working to develop
                my programming skills and learn more
              </Typography>
            </Stack>
            <Box mt={5} width={'100%'}>
              <Typography
                variant="h5"
                mb={2}
                style={{ color: pink[500], fontWeight: "bold" }}
              >
                Skills
              </Typography>
              <Grid container spacing={2}>
                {skillsIcons.map((icon) => (
                  <Grid
                    item
                    key={icon.icon}
                    display={"flex"}
                    direction={"column"}
                    alignItems={"center"}
                    xs={3}
                  >
                    {icon.icon}
                    {icon.name}
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Stack>
        </Stack>
      </Container>
    </motion.div>
  );
};

export default About;
