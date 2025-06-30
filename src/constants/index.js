import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.png";
import project5 from "../assets/projects/project-5.png";
import project6 from "../assets/projects/project-6.png";

export const HERO_CONTENT = `I am a passionate full stack and AI developer with a knack for crafting robust, scalable web and mobile applications, as well as intelligent solutions. With 4 years of hands-on experience, I have honed my skills in front-end, back-end, and AI technologies. My goal is to leverage my expertise to create innovative products that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack and AI developer with a passion for creating efficient, user-friendly, and intelligent products. I have worked with a variety of technologies, such as Kotlin and Flutter for mobile apps, React and Next.js for frontend, Node.js, Flask, and Spring Boot for backend, and Python frameworks for AI and data science.
Currently, I'm pursuing a Master's degree in Computer Science in the US. Besides building scalable and efficient software products, I hold a strong interest in artificial intelligence and I actively participate in hackathons and programming competitions such as ICPC, demonstrating a commitment to continuous learning and problem-solving in dynamic environments.`;

export const EXPERIENCES = [
  {
    year: "May 2025 - Aug 2025",
    role: "Software Engineer Intern",
    company: "LeapFinancial",
    location: "Miami, FL",
    description: `Developed a FastMCP server to streamline both backend API access and RAG systems via LlamaIndex for multi-agent LLMs, powering tools like Claude Desktop and AI financial assistants, while reducing deployment size.
Fine-tuned DeepSeek/Mistral on remittance datasets using HuggingFace Transformers and LoRA, then benchmarked performance via real-world simulations with LangChain and FastAPI, yielding insights for production deployment.
Generated synthetic datasets using open-source models with MLX_LM for fine-tuning, improving response accuracy and relevance while reducing inference latency by 20% and token-level costs.`,
    technologies: [
      "Python",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "FastMCP",
      "OpenAI",
      "FastAPI",
      "HuggingFace",
      "PostgreSQL",
    ],
  },
  {
    year: "Nov 2022 - Jul 2024",
    role: "Software Engineer",
    company: "SmartOSC",
    location: "Australia",
    description: `Built admin website with Next.js, email sending via Node.js and Amazon SES, and integrated payments using 2C2P.
Enhanced customer experience by integrating tap-and-pay SDK and PassKit to enable Apple/Google wallets.
Ensured code quality and streamlined deployments by applying GitHub Actions and Docker for analysis and automation, reducing deployment time by 30% and minimizing manual errors.`,
    technologies: [
      "Next.js",
      "Express.js",
      "PostgreSQL",
      "AWS SQS/SNS",
      "AWS EC2",
      "React Native",
      "Kotlin",
      "Objective-C",
    ],
  },
  {
    year: "Nov 2021 - Oct 2022",
    role: "Software Engineer",
    company: "Deloitte",
    location: "Singapore",
    description: `Handled asynchronous communication between banking microservices built with Spring Boot using Kafka, ensuring data consistency and fault tolerance.
Reduced latency by 70% with data caching using Redis for backend services and Room for the Android app.
Optimized image upload by compressing product images in the Android app and storing them in Amazon S3.
Ensured reliable and maintainable code with Jenkins and SonarQube, achieving 100% unit test function coverage.`,
    technologies: [
      "Java Spring Boot",
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
    company: "Viettel",
    location: "Vietnam",
    description: `Maintained a React-based logistics dashboard with search features powered by Elasticsearch and delivery tracking using Google Maps API, enhancing user experience with fast lookup and live location visibility.
Implemented real-time updates for web and mobile apps using Node.js backend and Firebase Cloud Messaging.`,
    technologies: [
      "React",
      "Node.js",
      "GCP",
      "Google Map API",
      "MongoDB",
      "Elasticsearch",
      "Firebase Storage/Analytics",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Mobile Cooking App",
    image: project6,
    description: `Built a Flutter app with food image search using a self-trained PyTorch classifier on a 6.5 GB dataset.
Integrated a LangChain assistant with Gemini and FastAPI to help users discover recipes via natural language.`,
    link: "https://github.com/hongdnn/appetite_backend",
    technologies: [],
  },
  {
    title: "Social Media Platform",
    image: project1,
    description: `Developed a Next.js frontend and a microservices architecture using Flask, PostgreSQL, Express.js, and MongoDB, integrating Kafka for scalable event-driven communication and data streaming.
Built real-time features with Node.js and Socket.IO, enabling instant notifications and messaging between users.
Managed media storage by integrating the Python service with AWS S3, enabling reliable and secure file handling.`,
    link: "https://yoursocial.site/",
    technologies: [],
  },
  {
    title: "ODSC NVIDIA Hackathon",
    image: project2,
    description: `Leveraged Google Colab and NVIDIA’s Rapids libraries to process 9.31 GB of data, cutting time by 80%.
Developed a disease prediction model with 90% accuracy using scikit-learn and TensorFlow.`,
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
    title: "Recruiting Management Application",
    image: project5,
    description: `Built a Vue.js web application to match resumes with job postings, helping businesses find ideal candidates.
Added PDF editing and resume parsing via Node.js, along with interview scheduling using the Google Calendar API.`,
    link: "https://github.com/hongdnn/Recruiting-Application",
    technologies: [],
  },
];

export const CONTACT = {
  address: "916 Terranova Ct, Stockton, CA 95204",
  phoneNo: "+1 209-684-1862",
  email: "namhongdoan99@gmail.com",
};
