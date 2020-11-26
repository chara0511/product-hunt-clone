import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { formatDistanceToNow } from 'date-fns';
import FirebaseContext from '../../context/firebase/FirebaseContext';
import Layout from '../../components/layout/Layout';
import Error404 from '../../components/layout/404';
import {
  StyledProductId,
  StyledTitle,
  StyledImage,
  StyledWrapper,
  StyledInput,
  StyledDescription,
  StyledComments,
  StyledVotes,
} from '../../styles/StyledProductId';

const Product = () => {
  const { firebase, user } = useContext(FirebaseContext);

  const [product, setProduct] = useState({});
  const [comment, setComment] = useState({});
  const [state, setState] = useState(true);
  const [error, setError] = useState(false);

  const router = useRouter();

  const {
    query: { id },
  } = router;

  const getProduct = async (productId) => {
    const query = await firebase.db.collection('products').doc(productId).get();

    if (query.exists) {
      setProduct(query.data());
      setState(false);
    } else {
      setError(true);
      setState(false);
    }
  };

  useEffect(() => {
    if (id && state) {
      getProduct(id);
    }
  }, [id, state]);

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

    if (voted.includes(user.uid)) {
      return null;
    }

    firebase.db
      .collection('products')
      .doc(id)
      .update({ votes: votes + 1, voted: [...voted, user.uid] });

    setProduct({ ...product, votes: votes + 1 });

    return setState(true);
  };

  const handleChangeComment = ({ target }) => {
    setComment({ ...comment, [target.name]: target.value });
  };

  const isOwner = (userId) => owner.uid === userId && true;

  const handleSubmitComment = (e) => {
    e.preventDefault();

    if (!user) {
      return router.push('/login');
    }

    comment.uid = user.uid;
    comment.displayName = user.displayName;
    comment.posted = Date.now();

    const newComment = [...comments, comment];

    firebase.db.collection('products').doc(id).update({ comments: newComment });

    setProduct({ ...product, comments: newComment });

    return setState(true);
  };

  const deleteProduct = () => owner?.uid === user?.uid && true;

  const errorDeleteProduct = (msge) => <p>{msge}</p>;

  const handleDeleteProduct = async () => {
    if (!user) {
      return router.push('/login');
    }

    if (owner.uid !== user.uid) {
      return router.push('/');
    }

    try {
      await firebase.db.collection('products').doc(id).delete();
    } catch (err) {
      errorDeleteProduct(err.message);
    }

    return router.push('/');
  };

  return (
    <Layout>
      {!Object.keys(product).length || error ? (
        <Error404 />
      ) : (
        <StyledProductId>
          <StyledTitle>
            <h1>{name}</h1>

            <p>
              Posted by
              {owner.displayName}
              {`, `}
              {company}
              {` - `}
              {formatDistanceToNow(created)}
              ago.
            </p>
          </StyledTitle>

          <StyledWrapper>
            <StyledImage>
              <img src={urlImage} alt={`${name}`} />
              <StyledDescription>{description}</StyledDescription>
            </StyledImage>
          </StyledWrapper>

          <StyledWrapper>
            {user && (
              <form onSubmit={handleSubmitComment}>
                <h3>Comment</h3>

                <StyledInput
                  type="text"
                  name="comment"
                  placeholder="Write a comment"
                  onChange={handleChangeComment}
                />

                <input type="submit" value="Done" />
              </form>
            )}

            {comments.length === 0 ? (
              <p>No comments</p>
            ) : (
              <StyledComments>
                <h3>Comments</h3>

                {comments.map((comm) => (
                  <li key={comm.posted}>
                    <p>{comm.comment}</p>

                    <p>{comm.displayName}</p>

                    {isOwner(comm.uid) && <p>Owner</p>}
                  </li>
                ))}
              </StyledComments>
            )}

            <aside>
              <a target="_blank" rel="noreferrer" href={url}>
                Visit url
              </a>

              <StyledVotes>
                {votes}
                Votes
              </StyledVotes>

              {user && (
                <button type="button" onClick={handleVote}>
                  Vote
                </button>
              )}
            </aside>

            {deleteProduct() && (
              <button type="button" onClick={handleDeleteProduct}>
                Delete Product
              </button>
            )}
          </StyledWrapper>
        </StyledProductId>
      )}
    </Layout>
  );
};

export default Product;
