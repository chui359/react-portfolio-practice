import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
/*==================== BASE ====================*/
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0 0 var(--header-height) 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  background-color: var(--body-color);
  color: var(--text-color);
}

h1, h2, h3, h4 {
  color: var(--title-color);
  font-weight: var(--font-semi-bold);
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}

/*==================== REUSABLE CSS CLASSES ====================*/
.section {
  padding: 2rem 0 4rem;
}

.section-title {
  font-size: var(--h1-font-size);
  color: var(--title-color);
}

.section-subtitle {
  display: block;
  font-size: var(--small-font-size);
  margin-bottom: var(--mb-3);
}

.section-title, 
.section-subtitle {
  text-align: center;
}

/*==================== LAYOUT ====================*/
.container {
  max-width: 768px;
  margin-left: var(--mb-1-5);
  margin-right: var(--mb-1-5);
}

.grid {
  display: grid;
  gap: 1.5rem;
}

.header {
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: var(--body-color);
}

.button {
  display: inline-block;
  background-color: var(--first-color);
  color: #fff;
  padding: 1rem;
  border-radius: .5em;
  font-weight: var(--font-medium);
}
.button:hover {
  background-color: var(--first-color-alt);
}
.button-icon {
  font-size: 1.25rem;
  margin-left: var(--mb-0-5);
  transition: .3s;
}
.button-flex {
  display: inline-flex;
  align-items: center;
}

/*==================== MEDIA QUERIES ====================*/
/* For small devices */
@media screen and (max-width: 350px) {
  .container{
    margin-left: var(--mb-1);
    margin-right: var(--mb-1);
  }
}

/* For medium devices */
@media screen and (min-width: 768px) {
  .container{
    margin-left: auto;
    margin-right: auto;
  }

  body{
    margin: 0;
  }

  .section{
    padding: 6rem 0 2rem;
  }
  .section-subtitle{
    margin-bottom: 4rem;
  }

}

/* For large devices */
@media screen and (min-width: 1024px) {

  }

`

export default GlobalStyles