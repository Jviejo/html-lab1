
import { expect, test } from "bun:test";
import express from "express"
import path from "path"
import { parse } from 'node-html-parser';
async function setup() {
    const app = express()
    app.use(express.static(path.join(__dirname, 'public')))
    app.listen(
        4444
    )
    const response = await fetch("localhost:3333")
    const html = await response.text()
    return parse(html)
}

test("id1 existe", async () => {
    // arrange
    const parsed = await setup()
    // act
    const elemento = parsed.getElementById("id1")
    // assert
    expect(elemento).not.toBeNull();
});