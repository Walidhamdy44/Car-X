export async function catchData(limit) {
  const headers = {
    "X-RapidAPI-Key": "2652a2d2d4mshb62e5a73de6f498p1d357djsn0fa7957d64e1",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?year=2022&limit=${limit}`,
    { headers: headers }
  );
  const result = await response.json();
  return result;
}
