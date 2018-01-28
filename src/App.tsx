import * as React from "react"
import { Skeleton } from "react-skeleton-component"
import * as style from "./style.css"
import SyntaxHighlighter from "react-syntax-highlighter"
import { paraisoDark } from "react-syntax-highlighter/styles/hljs"
import { duotoneSpace } from "react-syntax-highlighter/styles/prism"

const nav = [
  { id: "demo", text: "Demo" },
  { id: "example", text: "Example" },
  { id: "api", text: "API" }
]
export class App extends React.Component<{}, any> {
  public state = {
    tab: "demo"
  }

  render() {
    const { tab } = this.state
    return (
      <div className={style.wrapper}>
        <h1>React Skeleton</h1>
        <nav className={style.nav}>
          {nav.map(n => (
            <Button
              onClick={() => this.setState({ tab: n.id })}
              text={n.text}
              active={tab === n.id}
            />
          ))}
        </nav>
        <div className={style.content}>
          {tab === "demo" && <Demo />}
          {tab === "api" && <Api />}
          {tab === "example" && <Example />}
        </div>
        <Footer />
      </div>
    )
  }
}

const Demo = () => {
  return (
    <div className={style.card}>
      <div className={style.sidebar}>
        <div className={style.avatar}>
          <Skeleton
            width={45}
            height={45}
            colors={["#e0e0e0", "#fafafa"]}
            className={style.avatar_circle}
          />
          <Skeleton
            width={80}
            height={15}
            colors={["#e0e0e0", "#fafafa"]}
            className={style.avatar_name}
          />
          <Skeleton
            width={50}
            height={10}
            colors={["#e0e0e0", "#fafafa"]}
            className={style.avatar_name}
          />
        </div>
      </div>
      <div className={style.main}>{Array.from({ length: 3 }, Post)}</div>
    </div>
  )
}

const Post = () => {
  return (
    <div style={{ marginTop: 20 }}>
      <Skeleton width={100} height={20} colors={["#e0e0e0", "#fafafa"]} />
      <Skeleton
        width={150}
        height={50}
        colors={["#e0e0e0", "#fafafa"]}
        style={{ marginTop: 10 }}
      />
      <Skeleton
        width={150}
        height={10}
        colors={["#e0e0e0", "#fafafa"]}
        style={{ marginTop: 10 }}
      />
    </div>
  )
}

const Example = () => {
  const codeString = `
  import { Skeleton } from "react-skeleton-component"

  const Avatar = (
    <div className={style.avatar}>
      <Skeleton
          width={45}
          height={45}
            colors={["#e0e0e0", "#fafafa"]}
            style={{borderRadius: "50%"}}
      />
      <Skeleton
          width={80}
          height={15}
          colors={["#e0e0e0", "#fafafa"]}
          className={style.avatar_name}
        />
    </div>
  )
  `
  return (
    <SyntaxHighlighter
      language="javascript"
      style={duotoneSpace}
      customStyle={{
        padding: 0,
        width: `var(--card_width)`,
        height: `var(--card_height)`
      }}
    >
      {codeString}
    </SyntaxHighlighter>
  )
}
const Api = () => {
  const codeString = `
  interface SkeletonProps {
    colors: [string, string]
    width: number
    height: number
    count?: number
    duration?: number
    direction?: "ltr" | "rtl"
    className?: string
    style?: React.CSSProperties
  }
  `
  return (
    <SyntaxHighlighter
      language="typescript"
      style={paraisoDark}
      customStyle={{
        padding: 0,
        width: `var(--card_width)`,
        height: `var(--card_height)`
      }}
    >
      {codeString}
    </SyntaxHighlighter>
  )
}

const Footer = () => {
  return (
    <footer className={style.footer}>
      <h5>
        <a href="https://twitter.com/orouziel">@orouziel</a>
      </h5>
    </footer>
  )
}

const Button = ({ active, text, onClick }) => {
  return (
    <button onClick={onClick} className={active ? style.active_btn : ""}>
      {text}
    </button>
  )
}
