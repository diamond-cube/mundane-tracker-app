import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  TablePagination,
  Box,
  Stack,
  Paper,
  LinearProgress,
  ButtonGroup,
  IconButton,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import { animeList } from "../constants/dummyData";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CheckIcon from "@mui/icons-material/Check";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import Swal from "sweetalert2";

export default function AnimeList() {
  const [data, setData] = useState([]);
  const [animeId, setAnimeId] = useState(0);
  const [anime, setAnime] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const tableCellStyle = {};
  const tableStyle = {
    boxShadow: "none",
    border: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    mt: 2,
    overflow: "hidden",
  };

  useEffect(() => {
    setData(animeList.map((a) => ({ ...a, isEditing: false })));
  }, []);

  function editItemHandler(id) {
    setAnimeId(id);
    setData((prev) =>
      prev.map((item) => (item.id === id ? { ...item, isEditing: true } : item))
    );
  }

  function saveEditItemHandler(id) {
    //axios POST logic
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isEditing: false } : item
      )
    );

    Swal.fire("Saved successfully!", "", "success");
  }

  function cancelEditItemHandler(id) {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isEditing: false } : item
      )
    );
  }

  function inputChangeHandler(e) {
    const { name, value, type } = e.target;
    const parsedValue = type === "number" ? Number(value) : value;
    setData((prevData) =>
      prevData.map((item) =>
        item.id === animeId ? { ...item, [name]: parsedValue } : item
      )
    );
  }

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  function deleteItemHandler(itemId) {}

  function TableHeadComp() {
    return (
      <TableHead>
        <TableRow>
          {["#", "Name", "Currently On", "Total Episodes", "Completed", ""].map(
            (h) => (
              <TableCell>{h}</TableCell>
            )
          )}
        </TableRow>
      </TableHead>
    );
  }

  function TablePaginationComp() {
    return (
      <TablePagination
        showFirstButton
        showLastButton
        component="div"
        count={data.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    );
  }

  return (
    <>
      <Typography variant="h5">Anime List</Typography>
      <Paper sx={tableStyle}>
        <TableContainer>
          <Table stickyHeader size="small">
            <TableHeadComp />

            <TableBody>
              {data.map((d, index) => (
                <TableRow key={d.id} hover>
                  <TableCell sx={tableCellStyle}>{index + 1}</TableCell>
                  <TableCell sx={tableCellStyle}>
                    {d.isEditing ? (
                      <TextField
                        size="small"
                        name="name"
                        value={d.name}
                        onChange={inputChangeHandler}
                      />
                    ) : (
                      d.name
                    )}
                  </TableCell>
                  <TableCell sx={{ width: "6rem" }}>
                    {d.isEditing ? (
                      <TextField
                        size="small"
                        name="currentlyOn"
                        value={d.currentlyOn}
                        onChange={inputChangeHandler}
                      />
                    ) : (
                      d.currentlyOn
                    )}
                  </TableCell>
                  <TableCell sx={tableCellStyle}>
                    {d.isEditing ? (
                      <TextField
                        size="small"
                        name="totalEpisodes"
                        value={d.totalEpisodes}
                        onChange={inputChangeHandler}
                      />
                    ) : (
                      d.totalEpisodes
                    )}
                  </TableCell>
                  <TableCell sx={{ width: "6rem" }}>
                    <LinearProgress
                      sx={{ borderRadius: 10, height: 8, width: "80%" }}
                      color={
                        d.currentlyOn >= d.totalEpisodes ? "info" : "warning"
                      }
                      variant="determinate"
                      value={(d.currentlyOn / d.totalEpisodes) * 100}
                    />
                  </TableCell>
                  <TableCell
                    sx={{ borderLeft: 1, borderColor: "#ccc", width: "2rem" }}
                  >
                    <ButtonGroup>
                      <IconButton
                        onClick={() =>
                          d.isEditing
                            ? saveEditItemHandler(d.id)
                            : editItemHandler(d.id)
                        }
                      >
                        {d.isEditing ? <DoneIcon /> : <EditOutlinedIcon />}
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() =>
                          d.isEditing
                            ? cancelEditItemHandler(d.id)
                            : deleteItemHandler?.(d.id)
                        }
                      >
                        {d.isEditing ? (
                          <CancelOutlinedIcon />
                        ) : (
                          <DeleteOutlineOutlinedIcon />
                        )}
                      </IconButton>
                    </ButtonGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePaginationComp />
      </Paper>
    </>
  );
}
