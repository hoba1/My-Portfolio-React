import {
  FacebookOutlined,
  GitHub,
  Instagram,
  LinkedIn,
  X,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import {
  blueGrey,
  deepPurple,
  grey,
  lightBlue,
  purple,
} from "@mui/material/colors";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import CircleDot from "../components/Circle-Dot";

const links = [
  {
    link: "https://www.facebook.com/hoba.khaled.555",
    icon: <FacebookOutlined />,
  },
  {
    link: "https://www.instagram.com/hoba.khaled66/",
    icon: <Instagram />,
  },
  {
    link: "https://x.com/hobakhaled99?t=XcuwpGuE5xDlL-c_DbMknQ",
    icon: <X />,
  },
  {
    link: "https://github.com/hoba1",
    icon: <GitHub />,
  },
  {
    link: "https://www.linkedin.com/in/mohab-khaled-/",
    icon: <LinkedIn />,
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

const Home = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Mohab Khaled.", "Front End Developer."],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: true,
      showCursor: false,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <Container>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
        style={{ position: "relative" }}
      >
        <Stack
          className="home"
          direction={{ md: "row" }}
          alignItems={"center"}
          height={{ md: "88vh" }}
          justifyContent={"space-between"}
          gap={5}
        >
          <Stack sx={{ alignItems: { md: "flex-start", xs: "center" } }} mt={3}>
            <Box>
              <Typography
                variant="h3"
                component="h3"
                ref={el}
                color={deepPurple[300]}
                sx={{fontSize: {md: "35px", xs: "28px"}}}
              ></Typography>
            </Box>
            <Typography variant="subtitle1" component="h6">
              I am a creative Front End Developer based in Cairo,
              <br /> and I am passionate about creating beautiful and functional
              websites.
            </Typography>
            <Stack direction={"row"} mt={2} spacing={1}>
              <Button
                variant="contained"
                color="inherit"
                href="/contact"
                sx={{
                  borderRadius: "250px",
                  background: "linear-gradient(315deg, #00ccff, #d400d4)",
                  transition: "0.3s",
                  "&:hover": { transform: "scale(1.1)" },
                }}
              >
                Contact Me
              </Button>
              <Button
                variant="contained"
                component="a"
                href={require("../assets/MOHAB_KHALED_JUNIOR _FRONT_END.pdf")}
                download={"MOHAB_KHALED_JUNIOR_FRONT_END.pdf"}
                sx={{
                  backgroundColor: grey[900],
                  color: grey[400],
                  border: `2px solid ${grey[900]}`,
                  transition: "0.3s",
                  "&:hover": {
                    backgroundColor: grey[900],
                    border: `2px solid ${purple[500]}`,
                    color: grey[50],
                  },
                }}
              >
                Download CV
              </Button>
            </Stack>
            <Stack direction={"row"} mt={2}>
              {links.map((item, index) => (
                <IconButton
                  key={index}
                  sx={{
                    color: purple[500],
                    transition: "0.3s",
                    "&:hover": { backgroundColor: blueGrey[900] },
                  }}
                  href={item.link}
                  target="_blank"
                >
                  {item.icon}
                </IconButton>
              ))}
            </Stack>
          </Stack>
          <Stack>
            <Box
              className="avatar-box"
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Avatar
                src={require("../assets/hoba.jpg")}
                sx={{ width: 300, height: 300, zIndex: 2 }}
              />
            </Box>
          </Stack>
        </Stack>
        <CircleDot />
      </motion.div>
    </Container>
  );
};

export default Home;
