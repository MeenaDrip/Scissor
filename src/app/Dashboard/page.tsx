'use client';

import React from 'react';
import styled from 'styled-components';
import DashboardSidebar from '@/app/Dash-Folder/Sidebar';
import Footer from '../Dash-Folder/Footer';
import UrlShortener from '../UrlShortener/page';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 2rem;
  margin-left: 80px;
  background-color: #e1e8e6;
`;

const DashboardPage = () => {
  return (
    <Container>
      <DashboardSidebar />
      <MainContent>
        <UrlShortener />
      </MainContent>
      <Footer />
    </Container>
  );
};

export default DashboardPage;
