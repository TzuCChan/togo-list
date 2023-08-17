import { v4 as uuidV4 } from "uuid"

type Place = {
  id: string,
  title: string,
  completed: boolean,
  createdAt: Date,
}

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("new-place-form") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("#new-place-title")

form?.addEventListener("submit", e => {
  e.preventDefault()

  if (input?.value == "" || input?.value == null) return

  const newPlace: Place = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date()
  }

  addListItem(newPlace)
})

function addListItem(place: Place) {
  const item = document.createElement("li")
}