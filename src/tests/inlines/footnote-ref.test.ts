import { expect, test } from "vitest"
import { parseDocument } from "../../parse"

test("footnote-ref", () => {
  const text = `

a <x> hi </x> b

`
  const document = parseDocument(text)

  expect(document.children.map((node) => node.json())).toEqual([
    {
      kind: "Paragraph",
      children: [
        { kind: "Text", text: "a " },
        { kind: "HtmlInline", text: "<x>" },
        { kind: "Text", text: " hi " },
        { kind: "HtmlInline", text: "</x>" },
        { kind: "Text", text: " b" },
      ],
    },
  ])
})
