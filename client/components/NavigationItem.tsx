import React from "react";

interface NavigationItemProps {
  href: string;
  className?: string;
  onSelected: () => void;
}

export default class NavigationItem extends React.Component<
  NavigationItemProps
> {
  render() {
    const { className } = this.props;
    const classes = (className || "").split(" ");
    const isActive = classes.includes("active");
    classes.push("nav-item");

    const aClasses = ["nav-link", "js-scroll-trigger", "font-weight-bold"];
    if (isActive) {
      aClasses.push("active");
    }

    return (
      <li className={classes.join(" ")}>
        <a
          onClick={() => {
            this.props.onSelected();
          }}
          className={aClasses.join(" ")}
          href={this.props.href}
        >
          {this.props.children}
        </a>
      </li>
    );
  }
}
