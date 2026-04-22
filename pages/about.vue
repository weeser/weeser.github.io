<script setup lang="ts">
import AboutPerson from '@/components/AboutPerson.vue';

const title = ref('Biography');
const cards = ref([
  {
    title: 'Professional experience',
    content: [
      "Dr. Josh Weese is a Teaching Associate Professor in the Department of Computer Science at Kansas State University. He joined K-State as faculty in Fall 2017 and has served as the CS undergraduate program director since 2024. He earned his associate's and bachelor's degrees from K-State Salina in 2011. He has worked at Philips Lighting as a software engineer, Kasa Industrial Controls Inc. as an IT assistant, and Cerner Corporation as a systems engineer intern. He also served as a teaching and research assistant at K-State, as well as a GK-12 Insight Fellow. He completed a master's degree in 2011 and a doctorate in 2017."
    ],
    image: {
      file: "/images/head-shot.png",
      altText: "Josh Weese's Portrait"
    },
    tags: []
  },
  {
    title: 'Academic highlights',
    content: [
      "Dr. Weese has published over 30 refereed conference papers and book chapters and has presented invited talks and workshops. He has also served as a reviewer for multiple conferences and journals. He has been active in advancing computer science education in Kansas, including helping write PK-12 model standards in 2019, refreshing CTE programming pathway courses, and helping reestablish the Kansas Chapter of the Computer Science Teachers Association. He also helped establish the Advancing Learning and Teaching in Computer Science Lab (https://alt.cs.ksu.edu/) in the Department of Computer Science at Kansas State University with Dr. Nathan Bean. The lab focuses on computer science education research, particularly for PK-12 students and teachers. The ALT+CS Lab also established the Cyber Pipeline program, which has provided training and support for over 200 Kansas teachers to bring high-quality computer science to their classrooms, impacting over 5,000 students.",
      
      "Additionally, Dr. Weese has developed, organized, and led activities for several K-12 outreach programs, impacting more than 4,000 students. These programs include GROW, EXCITE, USD 383 STEM Institute, Kansas STARBASE, Insight GK-12, 4-H Discovery Days, and Hour of Code. He has also developed and taught courses in programming fundamentals, data structures, databases, software testing, and computer science ethics. He is the current faculty mentor for the K-State Student Association for Computing Machinery chapter, which hosts an annual hackathon, programming contest, and other events. Dr. Weese received the Teaching Excellence Award in the Department of Computer Science starting in 2020 and was also named a Kevin and Jacquie Elmore - Carl and Mary Ice Teaching Scholar the same year."
      ],
    tags: []
  },
  {
    title: 'Research',
    content: [
      "Dr. Weese has expertise in data science, software engineering, web technologies, computer science education research, and K-12 outreach programs. He has been a lead developer for Data Explorer, a data analytics and visualization portal hosted on PhysPort by the AAPT. The portal enables physics faculty to upload assessment data and receive instant feedback, including expert recommendations and customized visualizations.",
      "His main area of focus is computer science education, particularly creating and developing curriculum and assessments for K-12 computational thinking. He has been active in outreach programs including Kansas STARBASE, Girl Scouts of the USA, USD 383 summer STEM camp, and more. He has also participated in machine learning research, including polyphonic signal detection, parody detection, and text extraction.",
      "Currently, Dr. Weese is implementing NSF grant projects on broadening participation in computer science, with a focus on rural Kansas students. He is also actively training in-service teachers to teach computer science through grant support from the Kansas Department of Education in relation to K-State's Cyber Pipeline program. He also co-directs the Advancing Learning and Teaching in Computer Science Lab (https://alt.cs.ksu.edu/) in the Department of Computer Science at Kansas State University."
    ],
    tags: [
      "computer science education",
      "computational thinking",
      "PK-12",
      "self-efficacy",
      "teacher education",
      "standards/assessment"
    ]
  }
]);
</script>

<template>
  <AboutPerson :title="title" :cards="cards" />
</template>
