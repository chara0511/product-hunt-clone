import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import FirebaseContext from "../../context/firebase/FirebaseContext";
import Error404 from "../../components/layout/404";
import Layout from "../../components/layout/Layout";
import { formatDistanceToNow, lightFormat } from "date-fns";

const Product = () => {
  const { firebase } = useContext(FirebaseContext);

  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);

  const router = useRouter();

  const {
    query: { id },
  } = router;

  const getProduct = async (id) => {
    const query = await firebase.db.collection("products").doc(id).get();

    if (query.exists) {
      setProduct(query.data());
    } else {
      setError(true);
    }
  };

  useEffect(() => {
    if (id) {
      getProduct(id);
    }
  }, [id]);

  const {
    comments,
    company,
    created,
    description,
    name,
    url,
    urlImage,
    votes,
  } = product;

  return (
    <Layout>
      {!Object.keys(product).length || error ? (
        <Error404 />
      ) : (
        <div>
          <h1>{name}</h1>
          <div>
            <div>
              <p>Posted {formatDistanceToNow(created)} ago.</p>

              <img src={urlImage} alt={`${name} image`} />

              <p>{description}</p>

              <form>
                <input type="text" name="message" />
                <input type="submit" value="Add comment" />
              </form>

              <h2>Comments</h2>

              <ul>
                {comments.map((comment) => (
                  <li>
                    <p>{comment.name}</p>
                    <p>{comment.user}</p>
                  </li>
                ))}
              </ul>
            </div>
            <aside></aside>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Product;
