import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  styled,
  alpha,
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputBase,
  TableContainer,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import debounce from "lodash.debounce";

// Styled components for the search bar
const SearchWrapper = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const Pricing = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [order, setOrder] = useState("asc");
  const [sortKey, setSortKey] = useState("id");
  const [searchTerm, setSearchTerm] = useState("");
  const elementRef = useRef();

  const fetchUsers = async (resetPage = false) => {
    try {
      const currentPage = resetPage ? 0 : page;
      let url;
      if (searchTerm) {
        url = `https://dummyjson.com/users/filter?key=firstName&value=${searchTerm}&sortBy=${sortKey}&order=${order}&limit=10&skip=${currentPage * 10}`;
      } else {
        url = `https://dummyjson.com/users?sortBy=${sortKey}&order=${order}&limit=10&skip=${currentPage * 10}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (data.users && data.users.length > 0) {
        setUsers((prevUsers) =>
          resetPage ? data.users : [...prevUsers, ...data.users]
        );
        setPage((prevPage) => prevPage + 1);
        setHasMore(data.users.length === 10);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to fetch users:", error);
      setHasMore(false);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setPage(0);
    fetchUsers(true); // Call fetchUsers with resetPage = true
  };

  const debouncedHandleSearchChange = useCallback(
    debounce(handleSearchChange, 300),
    []
  );

  const onIntersection = (entries) => {
    const firstEntry = entries[0];
    if (firstEntry.isIntersecting && hasMore) {
      fetchUsers();
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection);
    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, hasMore]);

  useEffect(() => {
    fetchUsers(true); // Fetch users when sortKey or order changes
  }, [sortKey, order]);

  const handleSort = (key) => {
    setSortKey(key);
    setOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
    setPage(0);
    setUsers([]);
  };

  const arrowShow = (key) => {
    return sortKey === key ? (order === "asc" ? "↑" : "↓") : "";
  };

  return (
    <>
      <Box className="bg-white">
        <Box sx={{ flexGrow: 1 }} className="bg-slate-950">
          <AppBar position="static">
            <Toolbar>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                Material UI
              </Typography>
              <SearchWrapper>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search here..."
                  value={searchTerm}
                  onChange={debouncedHandleSearchChange}
                />
              </SearchWrapper>
            </Toolbar>
          </AppBar>
        </Box>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell onClick={() => handleSort("id")}>
                  ID {arrowShow("id")}
                </TableCell>
                <TableCell onClick={() => handleSort("firstName")}>
                  Name {arrowShow("firstName")}
                </TableCell>
                <TableCell onClick={() => handleSort("age")}>
                  Age {arrowShow("age")}
                </TableCell>
                <TableCell onClick={() => handleSort("gender")}>
                  Gender {arrowShow("gender")}
                </TableCell>
                <TableCell>Image</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, index) => (
                <TableRow
                  key={`${user.id}-${index}`}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="td" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell component="td" scope="row" align="left">
                    {user.firstName}
                  </TableCell>
                  <TableCell component="td" scope="row" align="left">
                    {user.age}
                  </TableCell>
                  <TableCell component="td" scope="row" align="left">
                    {user.gender}
                  </TableCell>
                  <TableCell component="td" scope="row" align="left">
                    <img src={user.image} alt={user.firstName} width="50" />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {hasMore && (
          <div ref={elementRef} className="loading">
            <div className="loader"></div>
          </div>
        )}
      </Box>
    </>
  );
};

export default Pricing;
