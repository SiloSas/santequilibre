import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// React icons
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import teamData from "assets/json/team"
import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";

const images = {
    Nathalie_Pardo: require("assets/img/faces/Nathalie_Pardo.jpg"),
    Sylvie_Bonnassieux: require("assets/img/faces/Sylvie_Bonnassieux.jpg"),
    Chrystel_Diener: require("assets/img/faces/Chrystel_Diener.jpg"),
    Sylvie_Bonnassieux_work: require("assets/img/reflexiologie.jpg"),
    Chrystel_Diener_work: require("assets/img/herboriste.jpg"),
    Nathalie_Pardo_work: require("assets/img/medecine_chinoise.jpg"),
}


class ProfilePage extends React.Component {

  render() {
    const { classes, name, ...rest } = this.props;
    const doctor = teamData.filter((d) => d.path === name)[0];
    if (!doctor) {
        return null
    }
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
      <div>
        <Header
          color="transparent"
          brand="Santéquilibre"
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 200,
            color: "white"
          }}
          {...rest}
        />
        <Parallax small filter image={images[doctor.image + "_work"]} />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img src={images[doctor.image]} alt="..." className={imageClasses} />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>{doctor.name}</h3>
                      <h6>{doctor.work}</h6>
                        <h6>Sur rendez-vous au: {doctor.phone}</h6>
                        <h6>{doctor.email}</h6>
                      <Button justIcon link className={classes.margin5}>
                        <FaTwitter/>
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <FaInstagram/>
                      </Button>
                      <Button justIcon link className={classes.margin5}>
                        <FaFacebook/>
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  {doctor.smallText}
                </p>
              </div>
                <GridContainer>
                  <GridItem justify="center" md={6} xs={12} sm={12} className={classes.navWrapper}>
                      <h1>Tarifs</h1>
                      <GridContainer>
                          { doctor.tariffs.map((t) => {
                            return <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                                <h3>
                                    {t.name} <small>{t.duration}  {t.price}€</small>
                                </h3>
                                <p>{t.description}</p>
                            </GridItem>
                          })}
                      </GridContainer>
                  </GridItem>
                  <GridItem justify="center" md={6} xs={12} sm={12} className={classes.navWrapper}>
                      <h1>Horaires</h1>
                      <GridContainer>
                          { doctor.slots.map((t) => {
                            return <GridItem xs={12} sm={12} md={12} className={classes.navWrapper}>
                                <h3>
                                    {t.name}
                                </h3>
                                    {t.slots.map((slot) => (<p>{slot}</p>))}
                            </GridItem>
                          })}
                      </GridContainer>
                  </GridItem>
                </GridContainer>
                <div>
                    {doctor.description.map((section) => {
                        return <div>
                            <h2>{section.title}</h2>
                            <div dangerouslySetInnerHTML={{__html: section.text}}/>
                        </div>
                    })}
                </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
