import React from "react";

const MenuBar = props => {
  console.log(props);
  const { selectedTab, setSelectedTab } = props;
  const handleClick = event => {
    setSelectedTab(event.target.id);
  };

  /*

  The 'a' tags below are the menu items. Think about the way a menu 
  should work. When you click a menu item, the button typically becomes
  'active' to indicate that it is currently selected. How could we achieve
  this programatically? What other behavior do we expect when we click
  on a menu item? Do we need state in this component, and if not, how can
  this component be made aware of what is currently the active menu item?

  */

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
