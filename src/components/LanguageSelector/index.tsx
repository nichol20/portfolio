import { MouseEvent, useContext, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { LanguageCode } from "../../types/language";
import { supportedLngs } from "../../data/languages";
import styles from './style.module.scss'
import { Toast, ToastContext } from "../../contexts/Toast";
import { ThemeContext } from "../../contexts/Theme";

type LanguageWarning = {
    [code in LanguageCode]: Toast
}

const japaneseWarning: LanguageWarning = {
    pt: {
        title: "Atenção!",
        message: 'A tradução em japonês não está completa e pode conter erros.',
        status: "warning"
    },
    en: {
        title: "Attention!",
        message: 'The Japanese translation is not finished and may contain errors.',
        status: "warning"
    },
    ja: {
        title: "Attention!",
        message: 'The Japanese translation is not finished and may contain errors.',
        status: "warning"
    }
}

export const LanguageSelector = () => {
    const { theme } = useContext(ThemeContext)
    const { t, i18n } = useTranslation()
    const [open, setOpen] = useState(false)
    const { toast } = useContext(ToastContext)

    const handleMouseOver = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        setOpen(true)
    }

    const handleMouseOut = (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
        setOpen(false)
    }

    const handleClick = (event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>, code: LanguageCode) => {
        if (code === "ja") {
            toast(japaneseWarning[i18n.language as LanguageCode])
        }
        i18n.changeLanguage(code)
        setOpen(false)
    }

    return (
        <div className={styles.languageSelector} data-theme={theme}>
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
                                {`${lng.name[lng.code]} ${lng.code !== i18n.language ? `(${lng.name[i18n.language as LanguageCode]})` : ""
                                    }`}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}