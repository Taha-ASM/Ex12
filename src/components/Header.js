import { useEffect, useState } from "react";

export default function Header() {
  const [data, setData] = useState();

  async function getProducts() {
    const res = await fetch("https://dummyjson.com/carts/1");
    setData(await res.json());
  }

  useEffect(() => {
    getProducts();
  }, []);

  // console.log(data.products);

  return (
    <>
      {data?.products?.map((i) => (
        <div key={i.id}>
          <img src={i.thumbnail} />
          <p>{i.title}</p>
        </div>
      ))}
    </>
  );
}

// import React, { useEffect, useState } from "react";

// export default function Header() {
//   const [cats, setCats] = useState([]);

//   async function getCats() {
//     const res = await fetch(
//       "https://api.thecatapi.com/v1/images/search?limit=10"
//     );
//     setCats(await res.json());
//   }

//   useEffect(() => {
//     getCats();
//   }, []);

//   console.log(cats);

//   return (
//     <div className="flex gap-4 flex-wrap">
//       {cats.map((i) => (
//         <div>
//           <img className="w-40 h-40" src={i.url} />
//           <p>{i.id}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
