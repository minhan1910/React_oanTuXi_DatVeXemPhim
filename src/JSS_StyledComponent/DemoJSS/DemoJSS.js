import React, { Component } from "react";
import { Button, SmallButton } from "../Components/Button";
import {StyledLink} from "../Components/Link";
import {TextField} from "../Components/TextField";

export default class DemoJSS extends Component {
  render() {
    return (
      <div>
        <Button className="button_style" bgPrimary fontSize2x>
          Click Me !
        </Button>

        <SmallButton>
            Hello MinAn
        </SmallButton>

        <StyledLink id="123" name="name">
            ahihi
        </StyledLink>

        <TextField inputColor="green" />
            
      </div>
    );
  }
}
