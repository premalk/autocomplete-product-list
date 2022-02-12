import React, { useEffect } from 'react';
import { number, func, array } from 'prop-types';
import styled from 'styled-components';

const Footer = styled.div`
  background-color: #f1f1f1;
  padding: 8px 0px;
  width: 100%;
  font-weight: 500;
  text-align: left;
  font-size: 16px;
  color: #2c3e50;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border: none;
  padding: 7px 14px;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 4px;
  margin-left: 4px;
  .activeButton {
    color: white;
    background: #185adb;
  }
  .inactiveButton {
    color: #2c3e50;
    background: #f9f9f9;
  }
`;

const Pagination = ({ range, setPage, page, slice }) => {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  return (
    <Footer>
      {range.map((el, index) => (
        <Button
          key={index}
          className={`${page === el ? 'activeButton' : 'inactiveButton'}`}
          onClick={() => {
            setPage(el);
          }}>
          {el}
        </Button>
      ))}
    </Footer>
  );
};

Pagination.propTypes = {
  range: array,
  setPage: func,
  page: number,
  slice: array
};

export default Pagination;
