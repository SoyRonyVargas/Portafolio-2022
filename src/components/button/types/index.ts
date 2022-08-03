export type Color = 'primary' | 'secondary' | 'third'

export enum EColors {
    primary = "#FBE2A2",
    secondary = "#D0B3DF"
}

type TypeButton = 'normal' | 'secondary'

export type Props = {
  color?: Color
  title: string
  type: TypeButton
}

export type ColorWrapper = Omit<Props, 'title' | 'type'>