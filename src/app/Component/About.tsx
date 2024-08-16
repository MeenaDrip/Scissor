'use client';
import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import AboutLogo from '../assets/AboutLogo.png'; // Adjust the path to your actual image file

// Slide-in keyframe animations
const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const AboutContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #e8e8e8, #ffffff);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin-top: 20px;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

const TextContainer = styled.div<{ animate?: string }>`
  flex: 1;
  margin-right: 20px;
  opacity: 0;
  transform: translateX(-100px);
  animation: ${({ animate }) => (animate === 'true' ? slideInLeft : 'none')} 1s ease forwards;

  @media (max-width: 768px) {
    transform: translateX(0);
    order: 2; /* Order on mobile: text below logo */
    margin-right: 0; /* Remove margin on mobile */
  }
`;

const LogoContainer = styled.div<{ animate?: string }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateX(100px);
  animation: ${({ animate }) => (animate === 'true' ? slideInRight : 'none')} 1s ease forwards;

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
    transform: translateX(0);
    order: 1; /* Order on mobile: logo above text */
  }
`;

const HeroTitle = styled.h2`
  font-size: 48px;
  margin-bottom: 20px;
  color: #2d614b;
  /* text-shadow: 1px 1px 2px black; */
`;

const HeroSubtitle = styled.p`
  font-size: 20px;
  color: #fff;
  margin-bottom: 40px;
  text-shadow: 1px 1px 2px black;
`;

const GetStartedButton = styled.button`
  background-color: #2d614b;
  color: #fff;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #05453d;
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #2d614b;
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
`;

const About = () => {
  const textRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
      }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }
    if (logoRef.current) {
      observer.observe(logoRef.current);
    }

    return () => {
      if (textRef.current) observer.unobserve(textRef.current);
      if (logoRef.current) observer.unobserve(logoRef.current);
    };
  }, []);

  return (
    <AboutContainer>
      <TextContainer ref={textRef} animate={animate ? 'true' : undefined}>
        <HeroTitle>Shorten Your URLs with SnipLink Instantly.</HeroTitle>
        <HeroSubtitle>Make your links more manageable and shareable</HeroSubtitle>
        <Link href='/SignUp'>
          <GetStartedButton>Get Started</GetStartedButton>
        </Link>
      </TextContainer>
      <LogoContainer ref={logoRef} animate={animate ? 'true' : undefined}>
        <Image src={AboutLogo} alt="About Logo" width={500} height={500} />
      </LogoContainer>
    </AboutContainer>
  );
};

export default About;
