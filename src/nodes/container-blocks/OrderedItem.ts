import * as Nodes from ".."
import { Node, Span } from "../../node"
import { NodeVisitor } from "../../node-visitor"

export class OrderedItem extends Nodes.Item {
  kind = "OrderedItem"

  span: Span
  number: number
  delimiter: "." | ")"
  children: Array<Node>

  constructor(options: {
    children: Array<Node>
    number: number
    delimiter: "." | ")"
    span: Span
  }) {
    super(options)
    this.span = options.span
    this.number = options.number
    this.delimiter = options.delimiter
    this.children = options.children
  }

  shallowCopy(): OrderedItem {
    return new OrderedItem(this)
  }

  json() {
    return {
      kind: this.kind,
      number: this.number,
      delimiter: this.delimiter,
      children: this.children.map((child) => child.json()),
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onOrderedItem(this)
  }
}
