import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";

class MainBox extends React.Component {
  state = {
    selectedTab: "profile"
  };

  setSelectedTab = selected => {
    this.setState({ selectedTab: selected });
  };
  render() {
    let detailsToDisplay;

    if (this.state.selectedTab === "profile") {
      detailsToDisplay = <Profile />;
    } else if (this.state.selectedTab === "photo")
      detailsToDisplay = <Photos />;
    else if (this.state.selectedTab === "cocktail")
      detailsToDisplay = <Cocktails />;
    else if (this.state.selectedTab === "pokemon")
      detailsToDisplay = <Pokemon />;

    return (
      <div>
        <MenuBar
          setSelectedTab={this.setSelectedTab}
          selectedTab={this.state.selectedTab}
        />
        {detailsToDisplay}
      </div>
    );
  }
}

export default MainBox;
