import React, { useState, useEffect } from "react";
import {
    Container,
    Typography,
    Grid,
    Box,
    AppBar,
    Toolbar,
    Tabs,
    Tab,
    Button,
    Card,
    CardContent,
    TextField,
    IconButton
} from "@mui/material";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import { useNavigate, Link } from "react-router-dom";
import Skills from "../Utils/Skills";

const sections = ["Home", "Skills", "Qualification", "Project", "Resume"];

const projectsList = [
    { id: "talentai", name: "TalentAI – AI Resume Screener" },
    { id: "whishper", name: "Whishper App - Anonymous Secret Sharing Platform" },
    { id: "skybnb", name: "SkyBnb – Airbnb clone" },
    { id: "investfin", name: "InvestFin AI – Personal Finance Advisor" }
];

export default function Portfolio() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        const sectionId = sections[newValue].toLowerCase().replace(/ /g, "");
        const element = document.getElementById(sectionId);
        const yOffset = -64; // Offset for fixed navbar height
        const yPosition = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yPosition, behavior: "smooth" });
    };

    const [projectIndex, setProjectIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setProjectIndex((prevIndex) => (prevIndex + 1) % projectsList.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const nextProject = () => setProjectIndex((projectIndex + 1) % projectsList.length);
    const prevProject = () => setProjectIndex((projectIndex - 1 + projectsList.length) % projectsList.length);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        My Portfolio
                    </Typography>
                    <Tabs value={value} onChange={handleChange} textColor="inherit" indicatorColor="secondary">
                        {sections.map((section, index) => (
                            <Tab key={index} label={section} />
                        ))}
                    </Tabs>
                </Toolbar>
            </AppBar>

            <Toolbar />
            <Container sx={{ mt: 4, mb: 4 }}>
                <Section id="home" title="Home">
                    <Typography variant="h5">Hi, I'm Yogendra 👋</Typography>
                    <Typography variant="body1">
                        A passionate full-stack software engineer with experience in building scalable web applications.
                    </Typography>
                </Section>

                <Section id="skills" title="Skills">
                    <Grid container spacing={2}>
                        {Skills.map((skill) => (
                            <Grid item key={skill} xs={6} sm={4} md={3}>
                                <Card sx={{ textAlign: "center", p: 2 }}>
                                    <CardContent>
                                        <Typography variant="subtitle1">{skill}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Section>

                <Section id="qualification" title="Qualification">
                    <Typography>🎓 B.Tech from NIT Trichy</Typography>
                    <Typography>🏢 Senior Software Developer at ICICI Prudential Life Insurance</Typography>
                    <Typography>🛠️ Google Summer of Code – Full Stack Developer</Typography>
                </Section>

                <Section id="project" title="Projects">
                    <Grid container spacing={2}>
                        {projectsList.map((project) => (
                            <Grid item xs={12} sm={6} md={4} key={project.id}>
                                <Card component={Link} to={`/project/${project.id}`} sx={{ textDecoration: "none" }}>
                                    <CardContent>
                                        <Typography variant="h6">{project.name}</Typography>
                                        <Typography variant="body2">Click to explore more.</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Section>

                {/* <Section id="contactme" title="Contact Me">
          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2, width: "100%", maxWidth: 500 }}>
            <TextField label="Name" variant="outlined" required />
            <TextField label="Email" variant="outlined" required type="email" />
            <TextField label="Message" variant="outlined" multiline rows={4} required />
            <Button variant="contained">Send Message</Button>
          </Box>
        </Section> */}

                <Section id="resume" title="Resume">
                    <Typography variant="body1" sx={{ mb: 2 }}>
                        Click the button below to download my resume.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        href="/TempFolio/Yogendra Jhala.pdf"
                        download
                        sx={{ textTransform: "none" }}
                    >
                        Download Resume
                    </Button>
                </Section>

            </Container>
        </Box>
    );
}

function Section({ id, title, children }) {
    return (
        <Box id={id} sx={{ mb: 6, scrollMarginTop: '80px' }}>
            <Typography variant="h4" gutterBottom>{title}</Typography>
            {children}
        </Box>
    );
}
