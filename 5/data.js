export const fetchData = async () => {
  let responce = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_page=1"
  );
  if (responce.ok) {
    const recivedData = await responce.json();
    return recivedData;
  } else {
    alert("fetch error" + responce.status);
  }
};
