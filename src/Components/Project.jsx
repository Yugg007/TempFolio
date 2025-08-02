import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Box,
    Container,
    Typography,
    Button,
    Card,
    CardContent
} from "@mui/material";
import Projects from "../Utils/Projects";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Project = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const project = Projects.find(p => p.id === id);

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true
    };

    if (!project) {
        return (
            <Container
                sx={{
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center"
                }}
            >
                <Typography variant="h4" gutterBottom>
                    Project not found
                </Typography>
                <Button onClick={() => navigate("/")}>Go to Home</Button>
            </Container>
        );
    }

    return (
        <Container
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <Card
                sx={{
                    p: 3,
                    maxWidth: 800,
                    width: "100%",
                    borderRadius: 4,
                    mx: "auto",
                    boxShadow: 4
                }}
            >
                {project.images?.length > 0 && (
                    <Box sx={{ mb: 3 }}>
                        <Slider {...sliderSettings}>
                            {project.images.map((imgUrl, idx) => (
                                <Box key={idx} sx={{ px: 1 }}>
                                    <img
                                        src={imgUrl}
                                        alt={`Slide ${idx + 1}`}
                                        style={{
                                            width: "100%",
                                            height: "350px",
                                            objectFit: "cover",
                                            borderRadius: "12px"
                                        }}
                                    />
                                </Box>
                            ))}
                        </Slider>
                    </Box>
                )}

                <CardContent
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center"
                    }}
                >
                    <Typography variant="h4" gutterBottom>
                        {project.name}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ whiteSpace: 'pre-line', textAlign: 'left' }}
                    >
                        {project.description}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            gap: 2,
                            mt: 2,
                            flexWrap: "wrap",
                            justifyContent: "center"
                        }}
                    >
                        <Button variant="contained" href={project.github} target="_blank">
                            GitHub
                        </Button>
                        <Button variant="outlined" href={project.live} target="_blank">
                            Live Demo
                        </Button>
                        <Button onClick={() => navigate("/")}>Go to Home</Button>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    );
};

export default Project;
