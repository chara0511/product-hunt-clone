import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { formatDistanceToNow } from 'date-fns';
import FirebaseContext from '../../context/firebase/FirebaseContext';
import Layout from '../../components/layout/Layout';
import Error404 from '../../components/layout/404';

const Product = () => {
  const { firebase, user } = useContext(FirebaseContext);

  const [product, setProduct] = useState({});
  const [error, setError] = useState(false);

  const router = useRouter();

  const {
    query: { id },
  } = router;

  const getProduct = async (productId) => {
    const query = await firebase.db.collection('products').doc(productId).get();

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
  }, [id, product]);

  const {
    comments,
    company,
    created,
    description,
    name,
    owner,
    url,
    urlImage,
    votes,
    voted,
  } = product;

  const handleVote = () => {
    if (!user) {
      return router.push('/login');
    }

    const newVotes = votes + 1;

    if (voted.includes(owner.uid)) {
      return null;
    }

    const userVoted = [...voted, owner.uid];

    firebase.db.collection('products').doc(id).update({ votes: newVotes, voted: userVoted });

    return setProduct({ ...product, votes: newVotes });
  };

  return (
    <Layout>
      {!Object.keys(product).length || error ? (
        <Error404 />
      ) : (
        <div>
          <h1>{name}</h1>
          <div>
            <div>
              <p>
                Posted by
                {owner.displayName}
                {`, `}
                {company}
                {` - `}
                {formatDistanceToNow(created)}
                ago.
              </p>

              <img src={urlImage} alt={`${name}`} />

              <p>{description}</p>

              {user && (
                <form>
                  <h3>Comment</h3>

                  <input type="text" name="message" placeholder="Write a comment" />
                  <input type="submit" value="Done" />
                </form>
              )}

              <ul>
                <h3>Comments</h3>

                {comments.map((comment) => (
                  <li>
                    <p>{comment.name}</p>
                    <p>{comment.user}</p>
                  </li>
                ))}
              </ul>
            </div>

            <aside>
              <a target="_blank" rel="noreferrer" href={url}>
                Visit url
              </a>

              <p>
                {votes}
                Votes
              </p>

              {user && (
                <button type="button" onClick={handleVote}>
                  Vote
                </button>
              )}
            </aside>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Product;
