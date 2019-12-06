import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import infoStyle from "assets/jss/material-kit-react/components/infoStyle.jsx";

const images = {
  reflexiologie: require("assets/img/reflexiologie.jpg"),
    herboriste: require("assets/img/herboriste.jpg"),
    medecine_chinoise: require("assets/img/medecine_chinoise.jpg"),
}

function InfoArea({ ...props }) {
  const { classes, title, description, iconColor, vertical, image } = props;
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical
  });
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  });
  return (
    <div className={classes.infoArea}>
      <div className={iconWrapper}>
       <img src={images[image]}
            className={
           classes.imgRaised +
           " " +
           classes.imgRounded +
           " " +
           classes.imgFluid
       }/>
      </div>
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
}

InfoArea.defaultProps = {
  iconColor: "gray"
};

InfoArea.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconColor: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  vertical: PropTypes.bool
};

export default withStyles(infoStyle)(InfoArea);
