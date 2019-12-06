import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import teamData from "assets/json/team"
import { globalHistory } from '@reach/router'
// @material-ui/icons
import { Link } from "gatsby"
// React icons
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import Sylvie_Bonnassieux from "assets/img/faces/Sylvie_Bonnassieux.jpg";
import Chrystel_Diener from "assets/img/faces/Chrystel_Diener.jpg";
import Nathalie_Pardo from "assets/img/faces/Nathalie_Pardo.jpg";

const images = {
    Nathalie_Pardo: Nathalie_Pardo,
    Sylvie_Bonnassieux: Sylvie_Bonnassieux,
    Chrystel_Diener: Chrystel_Diener
}

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    return (
      <div className={classes.section}>
        <h2 className={classes.title}>Qui sommes-nous</h2>
        <div>
          <GridContainer>
              {teamData.map((doctor, i) => {
                  return <GridItem key={i} xs={12} sm={12} md={4}>
                      <Card plain>
                          <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                              <img src={images[doctor.image]} alt="..." className={imageClasses}/>
                          </GridItem>
                          <h4 className={classes.cardTitle}>
                              {doctor.name}
                              <br/>
                              <small className={classes.smallTitle}>{doctor.work}</small>
                          </h4>
                          <CardBody>
                              <p className={classes.description}>
                                 {doctor.smallText}
                              </p>
                            <div className={classes.justifyCenter}>
                                <Link to={doctor.path}>
                                    <Button size="lg"
                                            color="primary"
                                            simple
                                    >
                                        En savoir plus
                                    </Button>
                                </Link>
                            </div>
                          </CardBody>
                          <CardFooter className={classes.justifyCenter}>
                              <Button
                                  justIcon
                                  color="transparent"
                                  className={classes.margin5}
                              >
                                  <FaTwitter/>
                              </Button>
                              <Button
                                  justIcon
                                  color="transparent"
                                  className={classes.margin5}
                              >
                                  <FaInstagram/>
                              </Button>
                              <Button
                                  justIcon
                                  color="transparent"
                                  className={classes.margin5}
                              >
                                  <FaFacebook/>
                              </Button>
                          </CardFooter>
                      </Card>
                  </GridItem>
              })}
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
