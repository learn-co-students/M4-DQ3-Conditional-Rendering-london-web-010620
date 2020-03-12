import React from "react";

const MenuBar = props => {
  const { setSelectedTab, selectedTab } = props;
  const handleClick = event => {
    setSelectedTab(event.target.id);
  };

  //=> Change class name from item to item active

  return (
    <div className="ui four item menu">
      <a
        className={"item " + (selectedTab === "profile" ? "active" : null)}
        id="profile"
        onClick={handleClick}
      >
        <i className="user large icon" id="profile" />
      </a>

      <a
        className={"item " + (selectedTab === "photo" ? "active" : null)}
        id="photo"
        onClick={handleClick}
      >
        <i className="photo large icon" id="photo" />
      </a>

      <a
        className={"item " + (selectedTab === "cocktail" ? "active" : null)}
        id="cocktail"
        onClick={handleClick}
      >
        <i className="cocktail large icon" id="cocktail" />
      </a>

      <a
        className={"item " + (selectedTab === "pokemon" ? "active" : null)}
        id="pokemon"
        onClick={handleClick}
      >
        <i className=" themeisle large icon" id="pokemon" />
      </a>
    </div>
  );
};

export default MenuBar;
