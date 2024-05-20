import {FC} from 'react'
import clsx from 'clsx'

export interface HomePegeProps {
    className?: string
}

const HomePege: FC<HomePegeProps> = ({className}) => {
    console.log('HomePege::render')
    return <div className={clsx('flex flex-col', className)}>HomePege</div>
}

export default HomePege
