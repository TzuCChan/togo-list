import { v4 as uuidV4 } from "uuid"

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("new-place-form") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("#new-place-title")

form?.addEventListener("submit", e => {
  e.preventDefault()

  if (input?.value == "" || input?.value == null) return

  const place = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }
})