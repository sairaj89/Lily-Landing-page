"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from "./header.module.scss"

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname() || "/"
  const links = [
    { label: "Home", href: "/" },
    { label: "Network", href: "/network" },
    { label: "Product", href: "/product" },
    { label: "Technology", href: "/technology" },
    { label: "Our Story", href: "/our-story" },
    { label: "Knowledge Center", href: "/knowledge" },
  ]

  return (
    <header className={styles.headerWrap}>
      <div className={styles.headerInner}>
        <div className={styles.left}>
          <Link href="/" className={styles.brand}>
            <span className={styles.logoMark} aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2c2.5 0 4.5 2.5 6 4.5 1.5 2 2 4.5 2 6 0 1.5-1 3-2.5 4C16 18 13 20 12 20s-4-2-7-3.5C3.5 15 2.5 13.5 2.5 12 2.5 10 3.5 7.5 5 5.5 6.5 3.5 9.5 2 12 2z" fill="white" opacity="0.98"/>
              </svg>
            </span>
          </Link>
        </div>

        <nav className={styles.centerNav} aria-label="Primary">
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <div key={l.href} className={styles.navItem}>
                <Link href={l.href} className={`${styles.navLink} ${active ? styles.active : ""}`}>
                  {l.label}
                </Link>
                {active && <span className={styles.dot} aria-hidden="true" />}
              </div>
            )
          })}
        </nav>

        <div className={styles.right}>
          <button className={styles.contactBtn}>Contact Us</button>
          <button className={styles.loginBtn}>Log In</button>
        </div>

        <button className={styles.hamburger} onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} stroke="#111827" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${open ? styles.open : ""}`} role="dialog" aria-hidden={!open}>
        <div className={styles.mobileInner}>
          {links.map((l) => {
            const active = pathname === l.href
            return (
              <Link key={l.href} href={l.href} className={`${styles.mobileLink} ${active ? styles.active : ""}`} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            )
          })}
          <div className={styles.mobileActions}>
            <button className={styles.contactBtn}>Contact Us</button>
            <button className={styles.loginBtn}>Log In</button>
          </div>
        </div>
      </div>
    </header>
  )
}
