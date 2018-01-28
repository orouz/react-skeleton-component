import * as React from "react"
import "./style.css"

const ANIMATION_NAME = `skeleton_loading`
const BACKGROUND_WIDTH_SCALE_FACTOR = 6

export interface SkeletonProps {
  colors: [string, string]
  width: number
  height: number
  count?: number
  duration?: number
  direction?: "ltr" | "rtl"
  style?: React.CSSProperties
  className?: string
}

const default_props: SkeletonProps = {
  width: 100,
  height: 10,
  duration: 1.2,
  direction: "ltr",
  colors: ["#29292d", "#35353a"]
}

export class Skeleton extends React.Component<SkeletonProps, undefined> {
  public renderRow = () => {
    const config = { ...default_props, ...this.props }
    return <div style={makeStyles(config)} className={this.props.className} />
  }
  public render() {
    const { count: length } = this.props
    return length ? Array.from({ length }, this.renderRow) : this.renderRow()
  }
}

function makeStyles({
  width,
  height,
  count,
  duration,
  colors,
  style,
  direction
}: SkeletonProps): React.CSSProperties {
  return {
    ...style,
    width,
    height,
    backgroundImage: `linear-gradient(to left, ${colors[0]} 0%, ${
      colors[1]
    } 20%, ${colors[0]} 40%, ${colors[0]} 100%)`,
    animation: `${ANIMATION_NAME} ${
      direction === "ltr" ? "reverse" : ""
    } infinite  ${duration}s  cubic-bezier(0.445, 0.05, 0.55, 0.95)`,
    backgroundSize: `${width * BACKGROUND_WIDTH_SCALE_FACTOR}px ${height}px`
  }
}
