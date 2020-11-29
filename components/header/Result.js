import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import useProduct from '../../hooks/useProduct';
import { mixins, theme } from '../../styles';

const { colors, fontSizes, transition } = theme;

const StyledTitle = styled.h3`
  text-align: left;
  font-size: ${fontSizes.sm};
  font-weight: 500;
  line-height: 20px;
  color: ${colors.darkslategray};
  text-transform: uppercase;
`;

const StyledResult = styled.li`
  width: 100%;
  margin-bottom: 8px;
`;

const StyledResultLink = styled.div`
  padding: 10px;
  display: block;
  transition: ${transition};

  &:hover,
  &:focus,
  &:active {
    background-color: ${colors.whitesmoke};
  }

  ${mixins.flexLeft};

  & img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  & h3 {
    flex: 1;
    text-align: left;
    font-size: ${fontSizes.sm};
    text-transform: capitalize;
    font-weight: 500;
    line-height: 20px;
    color: ${colors.darkslategray};
  }
`;

const Result = () => {
  const { products } = useProduct('votes');
  const [results, setResults] = useState([]);
  const router = useRouter();

  const {
    query: { q },
  } = router;

  useEffect(() => {
    if (Object.keys(products).length !== 0) {
      setResults(products.filter((product) => product.name.includes(q.toLocaleLowerCase())));
    }
  }, [q]);

  return (
    <div>
      <StyledTitle>products</StyledTitle>
      <ul>
        {results.map((result) => (
          <StyledResult key={result.id}>
            <Link href={`/products/${result.id}`} as={`/products/${result.id}`}>
              <a>
                <StyledResultLink>
                  <img src={result.urlImage} alt={result.name} />
                  <h3>{result.name}</h3>
                </StyledResultLink>
              </a>
            </Link>
          </StyledResult>
        ))}
      </ul>
    </div>
  );
};

export default Result;
