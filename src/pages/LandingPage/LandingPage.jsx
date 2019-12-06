import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import landingData from "assets/json/landing"
// @material-ui/icons

// React icons
import { FaRegEnvelope } from 'react-icons/fa';

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {
    constructor(props) {
        super(props);
        this.contact = React.createRef();
    }
    goToContact = () => {
        if (this.contact) {
            this.contact.current.scrollIntoView({
                behaviour: 'smooth',
                block: 'start',
                inline: 'center',
            });
        }
    }
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="Santéquilibre"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={8}>
                <h1 className={classes.title}>{landingData.title}</h1>
                <h4>
                    {landingData.subTitle}
                </h4>
                <br />
                <Button
                  color="primary"
                  size="lg"
                  onClick={() => this.goToContact()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaRegEnvelope/>
                  {landingData.buttonText}
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
              <div ref={this.contact}>
                <WorkSection />
              </div>
              <div>
                  <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6730.830067595521!2d4.762208272835394!3d44.82226875107885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b549811022286d%3A0x6a9defd82a9590ae!2s10%20Rue%20du%20Bousquet%2C%2007800%20Saint-Laurent-du-Pape!5e0!3m2!1sfr!2sfr!4v1575506015422!5m2!1sfr!2sfr"
                      width="100%" height="450" frameBorder="0" style={{border: 0}} allowFullScreen=""></iframe>
              </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
