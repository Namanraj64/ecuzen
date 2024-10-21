import React from "react";
import Carousel from "react-material-ui-carousel";
import { Container, Typography, Grid, Avatar, Box, Rating } from "@mui/material";
// import './feedbackData.css'

const feedbackData = [
  {
    name: "Hemant Jangid",
    position: "CEO, Finpayz",
    feedback: "I am very happy with the services provided by Ecuzen Software. They are highly skilled and experienced, and they were able to deliver my project on time and within budget. I would definitely use them again for future projects.",
    image: "https://www.ecuzen.com/images-new/clients/hemant_jangid_finpayz.jpg",
    rating: 5,
  },
  {
    name: "Vikrant Khatik",
    position: "CEO, VonsafePay",
    feedback: "We are very happy with Ecuzen, very serious and consistent in their work. The team of programmers have always been there for us all the time. This is a company I can recommend to anyone.",
    image: "https://www.ecuzen.com/images-new/clients/vikrant_khatik_vonsafepay-2.jpg",
    rating: 5,
  },
  {
    name: "Raghavendra Sharma",
    position: "CEO, Abhirant Info Pvt. Ltd.",
    feedback: "I was very impressed with the quality of work that Ecuzen Software delivered. They were able to understand my requirements perfectly and exceeded my expectations.",
    image: "https://www.ecuzen.com/images-new/clients/raghvendra_sharma_abhirant-2.jpg",
    rating: 5,
  },
  {
    name: "Kamlesh Choudhary",
    position: "CEO, GyanHost",
    feedback: "Ecuzen Software is the best software development company I have ever worked with. They are highly skilled, experienced, and professional. I would highly recommend them to anyone.",
    image: "https://www.ecuzen.com/images-new/clients/kamlesh_jangid_gyanhost-2.jpg",
    rating: 5,
  },
];

const FeedbackItem = ({ feedback }) => {
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item>
        <Avatar
          src={feedback.image}
          alt={feedback.name}
          sx={{
            width: 80,
            height: 80,
            margin: "0 auto",
            animation: "zoomIn 0.5s",
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" sx={{ fontWeight: "bold", mt: 2 }}>
          {feedback.name}
        </Typography>
        <Typography variant="body1" color="textSecondary">
          {feedback.position}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {feedback.feedback}
        </Typography>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
          <Rating name="read-only" value={feedback.rating} readOnly />
        </Box>
      </Grid>
    </Grid>
  );
};

const FeedbackContainer = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Our Happy Customers
      </Typography>
      <Carousel
        navButtonsAlwaysVisible
        indicators={false}
        autoPlay={false}
        sx={{ mt: 5 }}
      >
        {feedbackData.map((feedback, index) => (
          <FeedbackItem key={index} feedback={feedback} />
        ))}
      </Carousel>
    </Container>
  );
};

export default FeedbackContainer;
