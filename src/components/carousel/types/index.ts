export type SliderContent = {
    name: string
    id: string
}

export type Props = {
    pair?: boolean
    last?: boolean
    showStart?: boolean
    children: JSX.Element[] | JSX.Element 
}

export type CarouselProps = {
    backgroundColor?: string
    children: JSX.Element[] | JSX.Element
}