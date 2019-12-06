import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
const axios = require('axios');

class WorkSection extends React.Component {
    state = {
        from_name: "",
        email: "",
        message: "",
    }
  sendEmail = () => {
      var data = {
          service_id: 'gmail',
          template_id: 'template_POqahvoR',
          user_id: 'user_j4WIYReDjFBvY9GBQEymf',
          template_params: {
              'from_name': this.state.from_name,
              'email': this.state.email,
              'message': this.state.message,
          }
      };

      axios.post('https://api.emailjs.com/api/v1.0/email/send', data).then(function() {
          alert('Votre mail à bien été envoyé!');
      }).catch(function(error) {
          alert('Oops... ' + JSON.stringify(error));
      });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>Contactez-nous</h2>
            <h4 className={classes.description}>
              Contactez-nous pour une prise de rendez-vous ou pour en savoir plus.
            </h4>
            <form>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Votre nom"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                        onChange: (text) => {
                            this.setState({from_name: text.target.value})
                        },
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Votre email"
                    id="email"
                    inputProps={{
                        onChange: (text) => {
                            this.setState({email: text.target.value})
                        },
                    }}
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="Votre message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5,
                    onChange: (text) => {
                        this.setState({message: text.target.value})
                    },
                  }}
                />
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                    <Button color="primary" onClick={() => this.sendEmail()}>Envoyer le message</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(WorkSection);
