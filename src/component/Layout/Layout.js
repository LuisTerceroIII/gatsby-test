import * as React from 'react'
import { Link,graphql, useStaticQuery } from 'gatsby'
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`    
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
    `)


    return (
        <main className={container}>
            <title>{pageTitle} | {data.site.siteMetadata.title} </title>
            <p className={siteTitle}>{data.site.siteMetadata.title}</p>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to={"/blog"} className={navLinkText}>Blog</Link>
                    </li>
                </ul>
            </nav>
            <h1 className={heading}>{data.site.siteMetadata.title}</h1>
            {children}
        </main>
    )
}

export default Layout