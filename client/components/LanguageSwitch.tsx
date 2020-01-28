import React, { MouseEvent } from "react";
import styled from "styled-components";
import { WithTranslation } from "next-i18next";
import { withTranslation } from "../../lib/i18n";

type Language = "ru" | "en";

interface ILanguageSwitchProps extends WithTranslation {}
interface ILanguageItem {
  language: Language;
  name: string;
  flag: string;
}

const LANGUAGE_ITEMS: ILanguageItem[] = [
  { language: "ru", name: "Русский", flag: "img/flag/ru.svg" },
  { language: "en", name: "English (US)", flag: "img/flag/us.svg" }
];

const StyledImage = styled.img`
  width: 30px;
  height: 100%;
`;

export default withTranslation()(
  class LanguageSwitch extends React.Component<ILanguageSwitchProps> {
    getCurrentLanguage(): Language {
      const { i18n, t } = this.props;
      return i18n.language as Language;
    }

    onClickLink(event: MouseEvent) {
      event.preventDefault();
    }

    onSetLanguage(event: MouseEvent, language: Language): void {
      event.preventDefault();
      const { i18n } = this.props;
      i18n.changeLanguage(language);
    }

    render() {
      const { t } = this.props;

      return (
        <div className="hover-nav-item">
          <a onClick={this.onClickLink} className="nav-link" href="#">
            <StyledImage
              className="mr-2"
              src={t("language.flag")}
              alt={`${t("language.current language")}: ${t("language.name")}`}
            />
            {t("language.name")}
          </a>
          <div className="hover-nav-dropdown" aria-labelledby="navbarDropdown">
            {LANGUAGE_ITEMS.map(item => (
              <a
                key={item.language}
                onClick={(event) => this.onSetLanguage(event, item.language)}
                className="nav-link"
                href="#"
              >
                <StyledImage className="mr-2" src={item.flag} alt={item.name} />
                {item.name}
              </a>
            ))}
          </div>
        </div>
      );
    }
  }
);
