import {FC} from 'react'
import clsx from 'clsx'
import {NavLink, Outlet} from "react-router-dom";

export interface LayoutProps {
    className?: string
}

const Layout: FC<LayoutProps> = ({className}) => {
    console.log('Layout::render')
    return <div className={clsx('flex flex-col', className)}>
        <header>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/products">Product</NavLink>
                        <NavLink to="/cart">Cart</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
        <Outlet />
    </div>
}

export default Layout
