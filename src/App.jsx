import { useEffect, useState } from "react";
import { motion, stagger } from "framer-motion";
import {
  Clock,
  Trophy,
  User,
  BriefcaseBusiness,
  ExternalLink,
  Mail,
} from "lucide-react";
import {
  personalInfo,
  projects,
  socialLinks,
  tools,
  goals,
  skills,
  certificates,
  animatedBlobs,
  education,
} from "./constants/data.jsx";
import pp from "./assets/pp.jpg";
function App() {
  const [time, setTime] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setTime(new Date().toLocaleTimeString());
    const timer = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => clearInterval(timer);
  }, []);

  const containerVarients = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        ease: "easeOut",
        duration: 0.7,
      },
    },
  };

  const itemVarients = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  return (
    <>
      <div className="relative min-h-screen flex justify-center items-center bg-[#0a0a0a] text-white p-4 md:py-14 font-mono overflow-hidden">
        {animatedBlobs.map((blob, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${blob.className}`}
            animate={blob.animate}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              repeatType: "mirror",
            }}
          ></motion.div>
        ))}

        <motion.main
          variants={containerVarients}
          initial="hidden"
          animate={mounted ? "show" : "hidden"}
          className="main-grid"
        >
          <motion.div
            variants={itemVarients}
            className="card card-cyan md:col-span-1 row-span-3 flex flex-col justify-center gap-3"
          >
            <img
              src={pp}
              className="w-[70px] h-[70px] rounded-full object-cover mt-5"
              alt=""
            />
            <h2 className="section-title">
              <User size={22} className="text-cyan-400" />
              <p>{personalInfo.name}</p>
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              {personalInfo.bio}
            </p>
          </motion.div>

          <motion.div
            variants={itemVarients}
            className="card card-violet md:col-span-1 row-span-5 flex flex-col gap-4"
          >
            <h2 className="section-title">
              <Trophy size={20} className="text-violet-400" />
              <span>Projects</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-3 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  className="relative group rounded-xl overflow-hidden w-full aspect-video cursor-pointer"
                >
                  <video
                    src={`projectvid${project.id}.mp4`}
                    muted
                    loop
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  ></video>

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gradient-btn flex items-center gap-2"
                    >
                      Open Project
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVarients}
            className="card card-blue row-span-2 flex flex-col justify-center items-start gap-3 overflow-hidden"
          >
            <h2 className="section-title">
              <Clock size={20} className="text-blue-400" />
              <span>My Local Time [{personalInfo.location}]</span>
            </h2>
            <p className="text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-violet-200 to-cyan-200 bg-clip-text text-transparent">
              {time}
            </p>
          </motion.div>

          <motion.div
            variants={itemVarients}
            className="card card-green row-span-2 flex flex-col justify-center overflow-hidden"
          >
            <h2 className="section-title">
              <Mail size={20} className="text-green-400" />
              <span>Contacts</span>
            </h2>
            <div className="text-slate-300 flex flex-col gap-4">
              <p className="text-sm text-slate-400 leading-relaxed">
                Have a project, idea, or collab in mind? Let’s turn code into
                creativity.
              </p>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-full bg-green-500/10 border
                border-green-500/20
                hover:border-green-500/50
                text-green-400 hover:text-white font-medium py-2 rounded-lg text-center transition-all duration-300"
              >
                Send Mail
              </a>
            </div>
          </motion.div>

          <motion.div className="card card-rose md:col-span-1 row-span-2 flex flex-col justify-center gap-4">
            <h2 className="section-title">
              <User size={20} className="text-rose-400" />
              <span>Social Links</span>
            </h2>
            <ul className="space-y-3">
              {socialLinks.map((social, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <a
                    href={social.link}
                    target="_blank"
                    className={`group flex gap-3 items-center text-slate-400 ${social.color}`}
                  >
                    <span className="p-2 rounded-lg bg-white/5 group-hover:bg-white/10 transition duration-300 group-hover:scale-110">
                      <social.icon size={18} />
                    </span>
                    <span className="relative font-medium">
                      {social.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-violet-500 to-cyan-50 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={itemVarients}
            className="card card-pink row-span-3 flex flex-col justify-center gap-3 group"
          >
            <h2 className="section-title">
              <BriefcaseBusiness size={20} className="text-pink-400" />
              <span>Favourite Tools</span>
            </h2>
            <ul className="space-y-2 text-sm">
              {tools.map((tool, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 group"
                >
                  <span className="bullet bg-pink-400/50 group-hover:bg-pink-400"></span>
                  {tool}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={itemVarients}
            className="card card-yellow row-span-2 flex flex-col justify-center group"
          >
            <h2 className="section-title">
              <Trophy size={20} className="text-yellow-400" />
              <span>Goals</span>
            </h2>
            <ul className="text-slate-400 text-sm space-y-2">
              {goals.map((goal, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 group"
                >
                  <span className="bullet bg-yellow-400/50 group-hover:bg-yellow-400"></span>
                  {goal}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={itemVarients}
            className="card card-emerald row-span-5 flex flex-col overflow-hidden"
          >
            <h2 className="section-title">
              <User size={20} className="text-emerald-400" />
              <span>Skills</span>
            </h2>
            <ul className="space-y-4 text-sm text-slate-400 overflow-y-auto max-h-[450px]">
              {skills.map((group, i) => (
                <li key={i} className="space-y-3">
                  <span className="font-medium text-white/90">
                    {group.category}
                  </span>
                  <ul className="ml-4 space-y-1">
                    {group.skills.map((skill, j) => (
                      <li key={j} className="hover-item mt-1">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={itemVarients}
            className="card card-red row-span-2 flex flex-col justify-center group"
          >
            <h2 className="section-title">
              <Trophy size={20} className="text-red-400" />
              <span>Certificates</span>
            </h2>
            <ul className="text-slate-400 text-sm space-y-2">
              {certificates.map((cert, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-2 group"
                >
                  <span className="bullet bg-red-400/50 group-hover:bg-red-400"></span>
                  {cert}
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={itemVarients}
            className="card card-lime row-span-3 flex flex-col justify-center group"
          >
            <h2 className="section-title">
              <Trophy size={20} className="text-lime-400" />
              <span>Education</span>
            </h2>

            <ul className="text-slate-400 text-sm space-y-2">
              {education.map((edu, i) => (
                <motion.li
                  key={i}
                  whileHover={{ x: 4 }}
                  className="flex flex-col group"
                >
                  <div className="flex items-center gap-2">
                    <span className="bullet bg-lime-400/50 group-hover:bg-lime-400"></span>
                    <span className="text-white font-medium">{edu.year}</span>
                  </div>
                  <p className="ml-5 text-slate-400">
                    {edu.degree} at{" "}
                    <span className="text-white font-semibold">
                      {edu.institution}
                    </span>{" "}
                    {edu.cgpa && <span>(CGPA: {edu.cgpa})</span>}
                    {edu.percentage && <span>({edu.percentage})</span>}
                  </p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.main>
      </div>
    </>
  );
}

export default App;
