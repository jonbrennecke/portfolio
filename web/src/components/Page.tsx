import { Form, LoadingBanner, SideDrawer, unit } from '@portfolio/components';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ContactForm, FooterSection, Navbar } from '.';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    width: 100%;
  }
`;

const DrawerContactFormContainer = styled(Form)`
  padding: ${unit * 10}px;
`;

export function Page({
  children,
}: {
  children: (params: { showMenu(): void }) => React.ReactNode;
}) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <Container>
        <SideDrawer
          open={showMenu}
          alignment="left"
          onClickOutside={() => setShowMenu(false)}
        >
          <DrawerContactFormContainer contentStyle="light">
            <ContactForm />
          </DrawerContactFormContainer>
        </SideDrawer>
        <Navbar
          onClickMenuButton={() => setShowMenu(!showMenu)}
          onClickContactButton={() => setShowMenu(!showMenu)}
        />
        {children({
          showMenu: () => setShowMenu(!showMenu),
        })}
        <FooterSection />
      </Container>
      <LoadingBanner contentStyle="dark" />
    </>
  );
}