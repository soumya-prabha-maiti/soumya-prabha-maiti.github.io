import React from 'react'
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, ButtonContainer, MobileIcon, MobileIcons, MobileMenu, MobileNavLogo, MobileLink, DarkModeToggle } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { Brightness7, Brightness4, Close, Menu } from '@mui/icons-material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useTheme } from 'styled-components';
import { Bio } from '../../data/constants';

const Navbar = ({darkMode,setDarkMode}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme()
  return (
    <Nav>
      <NavbarContainer>
        {/* TODO fix this link so that it scrolls to top */}
        <NavLogo to='/personal-portfolio/#'>
          <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>

          <MobileIcons>
            <DarkModeToggle onClick={()=>{setDarkMode(!darkMode)}}>
              <>{darkMode ? <Brightness7/> : <Brightness4 />}</>
            </DarkModeToggle>
            <MobileIcon onClick={() => {
              setIsOpen(!isOpen)
            }}>
              {isOpen ? <Close /> : <Menu />}
            </MobileIcon>
          </MobileIcons>

        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#education'>Education</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          {/* <NavLink href='#publications'>Publications</NavLink> */}
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          {/* <NavLink href='#awards'>Awards</NavLink> */}
          <NavLink href={Bio.resume} target="_blank">Resume<span><OpenInNewIcon fontSize='small'/></span></NavLink>
          
        </NavItems>
        
        <ButtonContainer>
        <DarkModeToggle onClick={()=>{setDarkMode(!darkMode)}}>
          <>{darkMode ? <Brightness7/> : <Brightness4 />}</>
        </DarkModeToggle>
        </ButtonContainer>
        
        {
          isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setIsOpen(!isOpen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
          </MobileMenu>
        }
      </NavbarContainer>
    </Nav>
  )
}

export default Navbar