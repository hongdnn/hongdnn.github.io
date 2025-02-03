import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web and mobile applications. With 4 years of hands-on experience, I have honed my skills in front-end and back-end technologies. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly products. I have worked with a variety of technologies, such as Kotlin and Flutter for mobile app, React and Next.js for frontend, and Node.js, Flask and Spring Boot for backend.
Currently I'm pursuing a Master's degree in Computer Science in the US. Beside building scalable and efficient software products, I hold a strong interest in data science and AI. I actively participate in hackathons and programming competitions such as ICPC, demonstrating a commitment to continuous learning and problem-solving in dynamic environments.`;

export const EXPERIENCES = [
  {
    year: "Nov 2022 - Jul 2024",
    role: "Software Engineer",
    company: "SmartOSC Corporation",
    description: `Built an admin website to manage cards and send codes via email using Next.js, Node.js, and Amazon SES, while
implementing reliable payments with 2C2P. Enhanced customer shopping experience by integrating tap-and-pay SDK and PassKit, allowing customers to add
gift cards to Apple/Google wallets, leading to a 25% increase in wallet adoption. Ensured code quality and streamlined deployments by applying GitHub Actions for analysis and automation,
reducing deployment time by 30% and minimizing manual errors.`,
    technologies: [
      "Next.js",
      "Express.js",
      "PostgreSQL",
      "AWS SQS/SNS",
      "AWS EC2",
      "Flutter",
      "Kotlin",
      "Objective-C",
    ],
  },
  {
    year: "Nov 2021 - Oct 2022",
    role: "Software Engineer",
    company: "Deloitte",
    description: `Handled asynchronous communication between Spring Boot microservices using Kafka, ensuring data consistency
and fault tolerance. Reduced frontend teams’ workload by developing a reusable Kotlin core package for components across projects.
 Optimized image upload by compressing product images in the Android app and storing them in Amazon S3,
reducing storage size by approximately 40%.
 Ensured reliable and maintainable code by applying integration and unit tests, achieving 100% function coverage,
and utilizing Jenkins and SonarQube for code quality analysis.`,
    technologies: [
      "Spring Boot",
      "Kotlin",
      "Kafka",
      "Redis",
      "PostgreSQL",
      "MongoDB",
      "Amazon EC2/S3",
    ],
  },
  {
    year: "Aug 2020 - Oct 2021",
    role: "Software Engineer Intern",
    company: "IGAP Logistics",
    description: `Maintained a React-based dashboard with search features using Elasticsearch, enhancing user experience by
enabling rapid and efficient search results. Reduced latency by 70% with data caching using Redis for backend services and Room for the Android app. Implemented real-time customer feedback features using Socket.IO and Node.js.`,
    technologies: [
      "React",
      "Java",
      "Node.js",
      "GCP",
      "Google Map API",
      "MongoDB",
      "Redis",
      "Firebase Storage/Analytics",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Social Media Platform",
    image: project1,
    description: `Developed a Next.js frontend and a microservices architecture with Flask, PostgreSQL, Express.js, and MongoDB, ensuring scalability data management. 
      Built real-time features with Node.js and Socket.IO, enabling instant notifications and messaging between users. 
      Managed media storage by integrating the Python service with AWS S3, enabling reliable and secure file handling.`,
    link: "https://yoursocial.site/",
    technologies: [],
  },
  {
    title: "ODSC NVIDIA Hackathon",
    image: project2,
    description: `Leveraged Google Colab and NVIDIA’s Rapids libraries to process a 9.31 GB dataset efficiently and TensorFlow for
training a predictive model. Utilizing pandas and RAPIDS cuDF to reduce data processing time by 80%.`,
    link: "https://github.com/hongdnn/Spooktacular-NVIDIA-Data-Science-Competition-Project",
    technologies: [],
  },
  {
    title: "Disease Forecasting Project",
    image: project3,
    description: `Developed a Python project to forecast diseases using patient data, illness types, and geographical locations. 
      Preprocessed data with pandas and trained model using scikit-learn and TensorFlow, achieving 90% accuracy on
the test dataset.`,
    link: "https://github.com/hongdnn/disease_forecast",
    technologies: [],
  },
  {
    title: "Portfolio Website",
    image: project4,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    link: "",
    technologies: [],
  },
  {
    title: "Recruiting Management Application",
    image: project5,
    description: `Built a web application to help businesses recruit ideal candidates by matching resumes with job postings. 
      Implemented PDF editing features and extracted applicant information from resumes using Node.js libraries. 
      Sent real-time notification using FCM and scheduled recruitment with Calendar API.`,
    link: "https://github.com/hongdnn/Recruiting-Application",
    technologies: [],
  },
];

export const CONTACT = {
  address: "1726 N Hunter St, Stockton, CA, 95204",
  phoneNo: "+1 408 393 8130",
  email: "n_doan9@u.pacific.edu",
};
