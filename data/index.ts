import Image from "next/image";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Adversarial Rubustness & Security Model",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    spareImg: "/adversarial.png",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Interception Tool",
    des: "A CyberSecurity tool for captures and analyze network traffic, aiding in panetration testing",
    img: "/intercept.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/https://github.com/Aadil-hussain-786/Intercept-tool",
  },
  {
    id: 2,
    title: "Deep Learning Chatbot",
    des: "Chatbot using Tensorflow and Keras API",
    img: "/chatbot.png",
    iconLists: ["/tf.png", "/keras.png", "colab.jfif"],
    link: "/Coming Soon",
  },
  
];

export const testimonials = [
  {
    quote:
      "Collaborating with Aadil was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Aadil's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Aadil is the ideal partner.",
    name: "Jaydeep MK",
    title: "BTech CSE , SSIPMT",
  },
  {
    quote:
      "Working with Aadil has been an inspiring experience! Their expertise in AI development and commitment to pushing the boundaries of what's possible make them a standout talent in the field. Whether tackling complex model architectures, optimizing algorithms, or implementing cutting-edge solutions, [Friend's Name] brings both technical depth and a collaborative spirit to every project. Their ability to transform ideas into actionable, impactful AI solutions is truly impressive, and any team would be lucky to have such a dedicated and innovative developer onboard!",
    name: "Hashvardhan Tiwari",
    title: "Researcher",
  
  },
  {
    quote:
      "Aadil is an outstanding backend developer with a specialty in Flask who brings unparalleled expertise and efficiency to server-side development. They design robust, scalable architectures and write clean, maintainable code that ensures applications run smoothly and securely",
    name: "Mohnish Dubey",
    title: "BTech , SSIPMT",
  },
  
];

export const companies = [
  {
    id: 1,
    name: "Tensorflow",
    img: "/tf.png",
    nameImg: "/tf_name'.PNG",
  },
  {
    id: 2,
    name: "Keras",
    img: "/keras.png",
    nameImg: "/keras_name.png",
  },

  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using HTML, CSS ,, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Machine Learning Intern",
    desc: "As an ML intern, I gained hands-on experience developing and deploying machine learning models in a collaborative, fast-paced environment",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/ml.png",
  },
  {
    id: 3,
    title: "Deep Learning Researcher ",
    desc: "As a researcher focused on adversarial robustness and security in neural networks, my work delves into building models resilient to adversarial attacks and ensuring their safe deployment in sensitive applications. This research combines theoretical understanding with practical experimentation, involving the creation and analysis of adversarial examples, designing countermeasures, and developing frameworks for robustness evaluation. I employ a range of techniques, including adversarial training, regularization methods, and robustness testing, with the goal of improving the security and reliability of AI models in high-stakes environments. This work requires continuous learning, experimentation, and cross-disciplinary insight into cybersecurity and AI ethics, aiming to make AI models safer and more trustworthy.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/dl.png",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
