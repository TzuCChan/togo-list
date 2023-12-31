import { v4 as uuidV4 } from "uuid"

type Place = {
  id: string,
  title: string,
  visited: boolean,
  createdAt: Date,
}

const list = document.querySelector<HTMLUListElement>("#list")
const form = document.getElementById("new-place-form") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("#new-place-title")
const places: Place[] = loadPlaces()
places.forEach(addListItem)

form?.addEventListener("submit", e => {
  e.preventDefault()

  if (input?.value == "" || input?.value == null) return

  const newPlace: Place = {
    id: uuidV4(),
    title: input.value,
    visited: false,
    createdAt: new Date()
  }
  places.push(newPlace)
  savePlaces()

  addListItem(newPlace)
  input.value = ""
})

function addListItem(place: Place) {
  const item = document.createElement("li")
  const label = document.createElement("label")
  const checkbox = document.createElement("input")
  checkbox.addEventListener("change", () => {
    place.visited = checkbox.checked
    savePlaces()
  })
  checkbox.type = "checkbox"
  checkbox.checked = place.visited
  label.append(checkbox, place.title)
  item.append(label)
  list?.append(item)
}

function savePlaces() {
  localStorage.setItem("PLACES", JSON.stringify(places))
}

function loadPlaces(): Place[] {
  const placeJSON = localStorage.getItem("PLACES")
  if (placeJSON == null) return []
  return JSON.parse(placeJSON)
}