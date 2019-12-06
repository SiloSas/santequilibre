import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import productsData from "assets/json/pratiques"

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>{productsData.title}</h2>
            <h5 className={classes.description}>
              {productsData.text}
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
              {productsData.pratiques.map((pratique, i) => {
                  return <GridItem key={i} xs={12} sm={12} md={4}>
                            <InfoArea
                                title={pratique.title}
                                description={pratique.description}
                                image={pratique.image}
                                iconColor="info"
                                vertical
                            />
                        </GridItem>
              })}
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
