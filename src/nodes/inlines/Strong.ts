import * as Nodes from ".."
import { Node } from "../../node"
import { NodeVisitor } from "../../node-visitor"

export class Strong extends Nodes.Inline {
  kind = "Strong"

  children: Array<Node>

  constructor(options: { children: Array<Node> }) {
    super()
    this.children = options.children
  }

  shallowCopy(): Strong {
    return new Strong(this)
  }

  json() {
    return {
      kind: this.kind,
      children: this.children.map((child) => child.json()),
    }
  }

  accept<T>(visitor: NodeVisitor<T>): T {
    return visitor.onStrong(this)
  }
}
