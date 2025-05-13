import {
    FaJava, FaHtml5, FaCss3, FaJs, FaReact, FaPython, FaPhp,
    FaNodeJs, FaGitAlt, FaGithub, FaLinux 
  } from 'react-icons/fa';
  import { RiTailwindCssFill } from 'react-icons/ri';
  import { BiLogoSpringBoot, BiLogoPostgresql } from 'react-icons/bi';
  import {
    SiHibernate, SiSpringboot, SiMysql, SiSqlite,
    SiDotnet, SiMongodb, SiEclipseide, SiIntellijidea,
  } from 'react-icons/si';
  import { TbBrandCpp, TbBrandCSharp } from 'react-icons/tb';
  import { FaGolang } from 'react-icons/fa6';
  import { DiMsqlServer } from 'react-icons/di';
  import { VscVscode } from 'react-icons/vsc';


const technologies = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaJava />, name: "Java" },
    { icon: <TbBrandCpp />, name: "C++" },
    { icon: <TbBrandCSharp />, name: "C#" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <FaPython />, name: "Python" },
    { icon: <FaGolang />, name: "Go" },
    { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
    { icon: <FaReact />, name: "React" },
    { icon: <BiLogoSpringBoot />, name: "Spring Boot" },
    { icon: <SiSpringboot />, name: "Spring" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiDotnet />, name: ".NET" },
    { icon: <SiHibernate />, name: "Hibernate" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <BiLogoPostgresql />, name: "PostgreSQL" },
    { icon: <DiMsqlServer />, name: "SQL Server" },
    { icon: <SiSqlite />, name: "SQLite" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaLinux />, name: "Linux" },
    { icon: <VscVscode />, name: "VS Code" },
    { icon: <SiIntellijidea />, name: "IntelliJ" },
    { icon: <SiEclipseide />, name: "Eclipse" },
];

export default technologies