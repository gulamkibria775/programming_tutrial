import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import styled ,{ ThemeProvider } from 'styled-components';

import {lightTheme,darkTheme,GlobalStyles} from './Appbar/Appbar';




const StyledApp=styled.div`
color:${(props)=>props.theme.fontColor}
`;

function App() {
  const [theme,setTheme]=useState("light");
  const themeToggler = ()=>{
    theme==="light"?setTheme("dark"):setTheme("light")
  }

  return (
    <ThemeProvider theme={theme==="light" ? lightTheme : darkTheme}>
      <GlobalStyles/>
    <StyledApp>
    <div>
    <button className='text-black' onClick={() =>themeToggler()}>change-color</button>
      
      <RouterProvider router={routes}></RouterProvider>
      <Toaster></Toaster>
      
    </div>
    </StyledApp>
    </ThemeProvider>
  );
}

export default App;
