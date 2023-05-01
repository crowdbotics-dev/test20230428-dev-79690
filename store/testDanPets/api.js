import axios from "axios"
const testDanPets = axios.create({
  baseURL: "https://www.test.com/api",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function testdanpets_get_pets_category_id_read(payload) {
  return testDanPets.get(`/pets/${payload.category}/${payload.id}`)
}
export const apiService = { testdanpets_get_pets_category_id_read }
