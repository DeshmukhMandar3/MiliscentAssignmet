import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { TbPlayerTrackPrev, TbPlayerTrackNext } from "react-icons/tb";

const Pagination = ({ page, length, limit, setPage }) => {
  let pages = Math.ceil(length / limit);
  let btn = [];
  for (let i = 1; i <= pages; i++) {
    if (
      i === 1 ||
      i === pages ||
      i === page ||
      i === page - 1 ||
      i === page + 1
    ) {
      btn.push(
        <Button
          onClick={() => setPage(i)}
          isDisabled={i === page}
          backgroundColor={i === page ? "teal" : "none"}
        >
          {i}
        </Button>
      );
    } else if (i === page - 2 || i === page + 2) {
      btn.push(<Button>...</Button>);
    }
  }

  return (
    <Box>
      <Button onClick={() => setPage(page - 1)} isDisabled={page === 1}>
        <TbPlayerTrackPrev />
      </Button>
      {btn}
      <Button onClick={() => setPage(page + 1)} isDisabled={page === pages}>
        <TbPlayerTrackNext />
      </Button>
    </Box>
  );
};

export default Pagination;
