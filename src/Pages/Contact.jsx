import ContactIllustration from "../assets/illustration/Contact-illustration";
import { motion } from "framer-motion";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
  useFormControl,
} from "@mui/material";
import { pink } from "@mui/material/colors";
import { Email, Phone, WhatsApp } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";

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

const formSchema = z.object({
  name: z.string().nonempty("Name is required"),
  phone: z.string().nonempty("Phone is required"),
  email: z.string().nonempty("Email is required").email("Email is invalid"),
  message: z.string().nonempty("Message is required"),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
  });

  const [name, setname] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [open, setOpen] = useState(false);

  const sendEmail = (e) => {
    const templateParams = {
      name: name,
      phone: phone,
      email: email,
      message: message,
    };
    emailjs
      .send("service_z5uck7l", "template_auvk8vi", templateParams, {
        publicKey: "ZTp9Xsz6VnnZPbs4Z",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setOpen(true);
          setname("");
          setphone("");
          setemail("");
          setmessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 5000)
  }, [open])

  const onSubmit = (data) => {
    console.log(data);
    sendEmail();
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={containerVariants}
    >
      <Container sx={{ position: "relative" }}>
        <Stack
          direction={{ md: "row" }}
          alignItems={"center"}
          height={{ md: "88vh" }}
          justifyContent={"space-between"}
          spacing={5}
        >
          <Box width={{ md: "40%" }}>
            <ContactIllustration />
          </Box>
          <Stack
            direction={"column"}
            justifyContent={"between"}
            alignItems={"center"}
            gap={5}
          >
            <Stack gap={3}>
              <Stack direction={{ sm: "row" }} gap={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    fontSize: 20,
                  }}
                >
                  <Phone sx={{ color: pink[500], fontSize: 30 }} /> +20
                  1147812527
                </Paper>
                <Paper
                  sx={{
                    p: 2,
                    display: "flex",
                    alignItems: "center",
                    gap: 3,
                    fontSize: 20,
                  }}
                >
                  <WhatsApp sx={{ color: pink[500], fontSize: 30 }} /> +20
                  150768953
                </Paper>
              </Stack>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  fontSize: { xs: 12, sm: 20 },
                }}
              >
                <Email sx={{ color: pink[500], fontSize: 30 }} />
                mohab.khaled.elsayed@gmail.com
              </Paper>
            </Stack>
            <Stack
              gap={2}
              width={"100%"}
              component={"form"}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Stack
                direction={{ sm: "row" }}
                justifyContent={"space-between"}
                gap={2}
              >
                <TextField
                  variant="filled"
                  id=""
                  label="Name"
                  name="name"
                  {...register("name")}
                  onChange={(e) => setname(e.target.value)}
                  error={errors.name?.message ? true : false}
                  helperText={errors.name?.message}
                  fullWidth
                />
                <TextField
                  id="phone"
                  type="number"
                  label="Phone"
                  {...register("phone")}
                  onChange={(e) => setphone(e.target.value)}
                  error={errors.phone?.message ? true : false}
                  helperText={errors.phone?.message}
                  variant="filled"
                  fullWidth
                />
              </Stack>
              <TextField
                id="email"
                label="Email"
                {...register("email")}
                onChange={(e) => setemail(e.target.value)}
                error={errors.email?.message ? true : false}
                helperText={errors.email?.message}
                variant="filled"
                fullWidth
              />
              <TextField
                id="message"
                label="Your Message"
                {...register("message")}
                onChange={(e) => setmessage(e.target.value)}
                error={errors.message?.message ? true : false}
                helperText={errors.message?.message}
                variant="filled"
                fullWidth
              />
              <Box textAlign={"right"}>
                <Button
                  variant="contained"
                  type="submit"
                  sx={{
                    backgroundColor: pink[500],
                    transition: ".5s",
                    "&:hover": {
                      backgroundColor: pink[400],
                      letterSpacing: "5px",
                    },
                  }}
                >
                  Send
                </Button>
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Box
          sx={{
            width: {xs: "70%" , md: "50%"},
            position: "absolute",
            top: "10px",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Collapse in={open}>
            <Alert
              variant="filled"
              severity="success"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              sx={{ mb: 2 }}
            >
              Your message has been sent successfully
            </Alert>
          </Collapse>
        </Box>
      </Container>
    </motion.div>
  );
};

export default Contact;
