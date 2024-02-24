import {faGithub,faHtml5,faCss3Alt,faJsSquare,faReact,faJava,faFigma,faGitAlt, faPython,} from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase } from "@fortawesome/free-solid-svg-icons";
import faStyledComponent from "../../images/styled-components.svg";
import faSpringboot from "../../images/springboot.svg";
import faTypeScript from "../../images/typescript.svg";
import { ButtonScrollTop } from "../../components/buttons";
import {BoxHabilits,ContainerCurriculum,Nota,TitlePrincipal,TitleSecondary,Text,Ul,HabilitsTec,Logos,ImgSpring,ImgStyled} from "./style";
import { useEffect, useState } from "react";
import { text } from "@fortawesome/fontawesome-svg-core";
import myInformations from "./data.json";

const Curriculum = () => {

  return (
    <>
      <ContainerCurriculum>
        <TitlePrincipal>Currículo</TitlePrincipal>

        <TitleSecondary>OBJETIVO</TitleSecondary>
        <Text> {myInformations.text} </Text>

        <TitleSecondary>Formação Acadêmica</TitleSecondary>
        {myInformations.academicFormatting.map((item,index)=>{
            return <Text key={index}> {item.school} - {item.course} - {item.finaly} </Text>
        })}
        <TitleSecondary>Cursos</TitleSecondary>
        {myInformations.courses.map((item,index)=>{
            return <Text key={index}> {item.school} - {item.course} - {item.finaly} </Text>
        })}

        <TitleSecondary>Experiências Profissionais</TitleSecondary>
        {myInformations.professionalExperiences.map((item,index)=>{
            return <Text key={index}> {item.startDate} - {item.endDate} - {item.company} - {item.job} </Text>
        })}

        <BoxHabilits>
          <div>
            <TitleSecondary>Habilidades comportamentais</TitleSecondary>
            <Ul>
              {myInformations.softSkills.map((item,index)=>{
                return <li key={index}> {item} </li>
              })}
            </Ul>
          </div>
          <div>
            <TitleSecondary>
              Metodologias ÁGEIS -<Nota>Noção</Nota>
            </TitleSecondary>
            <Ul>
              {myInformations.agileMethodologies.map((item,index)=>{
                return <li key={index}> {item} </li>
              })}
            </Ul>
          </div>
          <div>
            <TitleSecondary>Habilidades técnicas</TitleSecondary>
            <HabilitsTec>
              <p>
                <Logos icon={faHtml5} /> <br /> HTML{" "}
              </p>
              <p>
                <Logos icon={faCss3Alt} /> <br /> CSS{" "}
              </p>
              <p>
                <Logos icon={faJsSquare} /> <br />
                Javascript{" "}
              </p>
              <p>
                <Logos icon={faReact} /> <br /> React{" "}
              </p>
              <p>
                <ImgSpring src={faTypeScript} /> <br /> TypeScript
              </p>
              <p>
                <Logos icon={faCode} /> <br />
                Clear Code
              </p>
              <p>
                <Logos icon={faFigma} /> <br /> Figma{" "}
              </p>
              <p>
                <Logos icon={faGitAlt} /> <br /> Git{" "}
              </p>
              <p>
                <Logos icon={faGithub} /> <br /> GitHub{" "}
              </p>
              <p>
                <Logos icon={faJava} /> <br /> Java
              </p>
              <p>
                <Logos icon={faDatabase} /> <br /> SQL
              </p>
              <p>
                <Logos icon={faPython} /> <br /> Python
              </p>
              <p>
                <ImgSpring src={faSpringboot} /> <br /> Springboot
              </p>
              <p>
                <ImgStyled src={faStyledComponent} /> <br /> Style Componets
              </p>
            </HabilitsTec>
          </div>
        </BoxHabilits>
      </ContainerCurriculum>
      <ButtonScrollTop link="" />
    </>
  );
};

export { Curriculum };
