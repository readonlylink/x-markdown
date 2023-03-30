import * as Nodes from ".."
import { Span } from "../../node"
import { NodeVisitor } from "../../node-visitor"

export class CodeBlock extends Nodes.LeafBlock {
  kind = "CodeBlock"

  span: Span
  info: string
  text: string
  isIndentedCodeBlock: boolean

  constructor(options: {
    span: Span
    info: string
    text: string
    isIndentedCodeBlock: boolean
  }) {
    super()
    this.span = options.span
    this.info = options.info
    this.text = options.text
    this.isIndentedCodeBlock = options.isIndentedCodeBlock
  }

  get name(): string {
    const [name] = this.info.split(" ")
    return name
  }

  get extraInfo(): string {
    const [_name, ...extra] = this.info.split(" ")
    return extra.join(" ")
  }

  shallowCopy(): CodeBlock {
    return new CodeBlock(this)
  }

  json() {
    return {
      kind: this.kind,
      info: this.info,
      text: this.text,
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onCodeBlock(this)
  }

  format(): string {
    return ["``` " + this.info, this.text.trim(), "```"].join("\n")
  }
}