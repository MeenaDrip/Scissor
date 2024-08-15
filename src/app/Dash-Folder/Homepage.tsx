// 'use client';

// import React from 'react';
// import styled, { keyframes } from 'styled-components';
// import UrlShortener from '../UrlShortener/page' ;
// import Image from 'next/image';
// import logo from '../assets/SniplinkLogo.png';

// // Keyframe animation
// const fadeIn = keyframes`
//   0% {
//     opacity: 0;
//     transform: translateY(-20px);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `;
// const bounce = keyframes`
//   0% { transform: translateY(0); }
//   50% { transform: translateY(-10px); }
//   100% { transform: translateY(0); }
// `;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   min-height: 100vh;
//   padding: 1rem;
//   background-color: #fff;
// `;

// const LogoContainer = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   width: 100%;
//   margin: -3rem;
// `;

// const Logo = styled.h1`
//   display: flex;
//   align-items: center;
//   font-size: 24px;
//   color: #333;
//   animation: ${bounce} 2s infinite;
// `;

// const Span = styled.span`
//   color: #2d614b;
//   font-weight: bold;
// `;

// const Homepage = () => {
//   return (
//     <Container>
//       <LogoContainer>
//         <Logo>
//           <Image src={logo} alt="Sniplink Logo" width={50} height={50} />
//           Snip<Span>Link</Span>
//         </Logo>
//       </LogoContainer>
//       <UrlShortener />
//     </Container>
//   );
// };

// export default Homepage;
