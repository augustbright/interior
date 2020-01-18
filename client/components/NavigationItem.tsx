import React from "react";

interface NavigationItemProps {
  href: string;
  className?: string;
}

export default class NavigationItem extends React.PureComponent<
  NavigationItemProps
> {
  render() {
    const { className } = this.props;
    const classes = (className || "").split(" ");
    const isActive = classes.includes("active");
    classes.push("nav-item");

    const aClasses = ["nav-link", "js-scroll-trigger"];
    if (isActive) {
      aClasses.push("active");
    }

    return (
      <li className={classes.join(" ")}>
        <a className={aClasses.join(" ")} href={this.props.href}>
          {this.props.children}
        </a>
      </li>
    );
  }
}
