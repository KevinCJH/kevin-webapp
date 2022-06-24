import React from "react";
import { Timeline, TimelineItem } from "vertical-timeline-component-for-react";
import styled from "styled-components";

const ExLink = styled.a`
  color: #333;
  text-decoration: underline;

  &:hover {
    color: #999;
  }
`;

const ExpInfo = styled.li`
  padding: 8px 8px 0 0;
`;

export const Experience = () => {
  return (
    <div>
      <Timeline lineColor={"#ddd"}>
        <TimelineItem
          key="001"
          dateText="Oct 2013 – Mar 2014"
          dateInnerStyle={{ background: "#FFB104" }}
          style={{ color: "#FFB104" }}
        >
          <h3>Application Development Intern</h3>
          <h5>HCL Technologies</h5>
          <ul>
            <ExpInfo>Interned as a mobile application developer</ExpInfo>
            <ExpInfo>
              Research and development of company's mobile application
            </ExpInfo>
            <ExpInfo>
              Developed responsive web development for mobile devices
            </ExpInfo>
            <ExpInfo>
              Experimented with QR code, Optical Character Recognition and
              Augmented Reality on Android
            </ExpInfo>
          </ul>
        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="2011 – 2014"
          dateInnerStyle={{ background: "#26C62F" }}
          style={{ color: "#26C62F" }}
        >
          <h3>Student</h3>
          <h5>Singapore Polytechnic</h5>
          <ul>
            <ExpInfo>
              Student studying{" "}
              <ExLink
                href="https://www.sp.edu.sg/soc/courses/full-time-diplomas/information-technology/overview"
                rel="noopener noreferrer"
                target="_blank"
              >
                Information Technology
              </ExLink>{" "}
              in SP
            </ExpInfo>
            <ExpInfo>Studied web application development</ExpInfo>
            <ExpInfo>Studied Android application development</ExpInfo>
            <ExpInfo>Studied Java application development</ExpInfo>
          </ul>
        </TimelineItem>
        <TimelineItem
          key="003"
          dateText="May 2019 – Aug 2019"
          dateInnerStyle={{ background: "#18BDFF" }}
          style={{ color: "#18BDFF" }}
        >
          <h3>Software Development Intern</h3>
          <h5>NUS-OSS</h5>
          <ul>
            <ExpInfo>Interned as an open-sourced software developer</ExpInfo>
            <ExpInfo>
              Developed software available{" "}
              <ExLink
                href="https://nus-oss.github.io/"
                rel="noopener noreferrer"
                target="_blank"
              >
                here
              </ExLink>
            </ExpInfo>
            <ExpInfo>
              Learnt how to develop desktop and web application using Angular
              and Electron builder
            </ExpInfo>
            <ExpInfo>
              Collaboration with multiple team members via Slack and Github
              across different locations
            </ExpInfo>
          </ul>
        </TimelineItem>  
        <TimelineItem
          key="004"
          dateText="2016 – 2020"
          dateInnerStyle={{ background: "#F22963" }}
          style={{ color: "#F22963" }}
        >
          <h3>Undergraduate</h3>
          <h5>National University of Singapore</h5>
          <ul>
            <ExpInfo>
              Undergraduate studying{" "}
              <ExLink
                href="https://www.comp.nus.edu.sg/programmes/ug/cs/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Computer Science
              </ExLink>{" "}
              in NUS
            </ExpInfo>
            <ExpInfo>Studied data structures and algorithms</ExpInfo>
            <ExpInfo>
              Studied software engineering principles and patterns
            </ExpInfo>
            <ExpInfo>
              Studied qualitative and quantitative user research on user interface
            </ExpInfo>
          </ul>
        </TimelineItem>
        <TimelineItem
          key="005"
          dateText="April 2020 – October 2021"
          dateInnerStyle={{ background: "#FFB104" }}
          style={{ color: "#FFB104" }}
        >
          <h3>Software Engineer</h3>
          <h5>One X Tech Startup</h5>
          <ul>
            <ExpInfo>
              Create web-based applications optimised for desktop and mobile browsers, developing reusable UI components following ReactJS workflows.
            </ExpInfo>
            <ExpInfo>
              Collaborate with design teams and product manager to iterate on design and implmentation of digital solutions
            </ExpInfo>
            <ExpInfo>
              Supervise and mentor team of interns for development across various project
            </ExpInfo>
            <ExpInfo>
              Work with team to design backend architecture and database schemas
            </ExpInfo>
          </ul>
        </TimelineItem>
        <TimelineItem
          key="006"
          dateText="November 2021 – Current"
          dateInnerStyle={{ background: "#26C62F" }}
          style={{ color: "#26C62F" }}
        >
          <h3>Software Engineer</h3>
          <h5>NCS Pte Ltd</h5>
          <ul>
            <ExpInfo>
              Maintain .NET and Java projects in production environment. Implment enhancements and OWASP security patching to current production system.
            </ExpInfo>
            <ExpInfo>
              Attain Professional Scrum Master I certification and gain expertise in agile methodologies.
            </ExpInfo>
            <ExpInfo>
              Client management and requirements gathering for enhancements.
            </ExpInfo>
          </ul>
        </TimelineItem>
      </Timeline>
    </div>
  );
};
