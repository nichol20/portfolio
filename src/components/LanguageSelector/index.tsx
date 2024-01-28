import { MouseEvent, useState } from "react";
import { useTranslation } from "react-i18next";

import { LanguageCode } from "../../types/language";
import { supportedLngs } from "../../data/languages";
import styles from './style.module.scss'

export const LanguageSelector = () => {
    const { t, i18n } = useTranslation()
    const [open, setOpen] = useState(false)

    const handleMouseOver = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        setOpen(true)
    }

    const handleMouseOut = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        setOpen(false)
    }

    const handleClick = (event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>, code: LanguageCode) => {
        i18n.changeLanguage(code)
        setOpen(false)
    }

    return (
        <div className={styles.languageSelector}>
            <div className={styles.languageDropdown} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                <div className={styles.title}>{t("language_selector.dropdown_title")}</div>
                {open && (
                    <ul className={styles.list}>
                        {supportedLngs.map((lng, i) => (
                            <li
                                key={i}
                                onClick={e => handleClick(e, lng.code)}
                                className={styles.item}
                            >
                                {`${lng.name[lng.code]} (${lng.name[i18n.language as LanguageCode]})`}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}