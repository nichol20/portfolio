import { v4 as uuidv4 } from 'uuid';
import { createContext, useState } from 'react'
import styles from '../styles/Toast.module.scss'

interface ToastData {
    title: string
    message: string
    status: 'success' | 'error' | 'warning'
    id: string
}

type ToastFunction = (toast: Omit<ToastData, "id">) => void

export interface ToastContext {
    toast: ToastFunction
}

interface ToastProviderProps {
    children: React.ReactNode
}

export const ToastContext = createContext({} as ToastContext)

export const ToastProvider = ({ children }: ToastProviderProps) => {
    const [list, setList] = useState<ToastData[]>([])

    const toast: ToastFunction = ({ message, title, status }) => {
        const id = 'toast-' + uuidv4()
        setList([...list, { message, status, id, title }])

        requestAnimationFrame(() => {
            const toastEl = document.getElementById(id)
            toastEl?.classList.add(styles.active)
        })

        setTimeout(() => {
            deleteToast(id)
        }, 4000)
    }

    const deleteToast = (id: string) => {
        const toastEl = document.getElementById(id)
        toastEl?.classList.remove(styles.active)
        setTimeout(() => {
            toastEl?.remove()
        }, 300)
    }


    return (
        <ToastContext.Provider value={{ toast }}>
            {children}
            <div className={styles.toast_container} >
                {
                    list.map((t, index) => (
                        <div
                            id={t.id}
                            className={styles.toast}
                            data-status={t.status}
                            onClick={() => deleteToast(t.id)}
                            key={index}
                        >
                            <div className={styles.description}>
                                <h5>{t.title}</h5>
                                <span>{t.message}</span>
                            </div>
                        </div>
                    ))
                }
            </div>
        </ToastContext.Provider>
    )
}