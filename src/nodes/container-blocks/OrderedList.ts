import * as Nodes from "../../nodes"

export type OrderedList = {
  kind: "OrderedList"
  start: number
  delimiter: string
  children: Array<Nodes.OrderedItem>
}
