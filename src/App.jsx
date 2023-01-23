import { Container } from 'react-bootstrap';
import { Footer } from './components/Footer';
import { Menu } from './components/Menu';
import { Project } from './components/Project';
import { Projects } from './components/Projects';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { useState, useEffect } from 'react';
import { techList } from './functions/techList';
import { socialMedia } from './functions/socialMedia';
import { ScrollToTop } from './components/ScrollToTop';
import { imgLink, imgLinkMobile, link } from './functions/link';
import { formatName } from './functions/formatName';

function App() {

  const [technologies, setTechnologies] = useState([]);
  useEffect(() => {
    setTechnologies(techList);
  }, []);

  const [socialMedias, setSocialMedias] = useState([]);
  useEffect(() => {
    setSocialMedias(socialMedia);
  }, [])

  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/camilasbvieira/repos')
      .then(response => response.json())
      .then(resJson => resJson.filter(r => r.name !== 'CamilaSBVieira'))
      .then(resFiltered => resFiltered.map(r => {
        return {...r, link: `${link}${r.name}`, formatedName: formatName(r.name)};
      }))
      .then(res => setProjects(res));
}, []);

  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/CamilaSBVieira/starred')
      .then((response) => response.json())
      .then((resJson) => resJson.map(r => {
        return {...r, link: `${link}${r.name}`, formatedName: formatName(r.name)};
      }))
      .then(resFiltered => setFavorites(resFiltered));
  }, []);

  const [projectsImages, setProjectsImages] = useState([]);
  useEffect(() => {
    fetch('https://portfolio-server-seven-chi.vercel.app/projectImages')
      .then((response) => response.json())
      .then((resJson) => {
        let array = []
        Object.values(resJson).forEach(value => {
          array.push(value)
        })
        return array
      })
      .then(array => {
        setProjectsImages(array)
      })
  }, [])

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Container fluid>
        <Menu></Menu>
        <Routes>
          <Route path='/' element={<Home favorites={favorites} technologies={technologies} projectsImages={projectsImages} />} />
          <Route path='/projects/*' element={<Projects projects={projects} technologies={technologies} projectsImages={projectsImages} />} />
          <Route path='/projects/:name' element={<Project />} />
          <Route path='/contact/*' element={<Contact socialMedias={socialMedias} />} />
        </Routes>
        <Footer socialMedias={socialMedias}></Footer>
      </Container>
    </BrowserRouter>
  )
}

export default App;