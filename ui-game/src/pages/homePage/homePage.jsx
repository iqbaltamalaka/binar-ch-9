import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import OutlinedCard from "../../components/cardProfile/cardProfile";
import axios from "../../utility/axios";
import * as Components from "./styled";
import Pagination from "../../components/pagination/pagination";

export default function HomePage() {
  const [score, setScore] = useState([]);
  const [profile, setProfile] = useState({});
  const [page, setPage] = useState(0);
  const [scorePerPage, setScorePerPage] = useState(5);
  const emptyScore =
    page > 0 ? Math.max(0, (1 + page) * scorePerPage - score.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeScorePerPage = (event) => {
    setScorePerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get("/score/find");
      const { data: dataProfile } = await axios.get("/user/profile");
      setScore(data.data);
      setProfile(dataProfile);
    }
    fetchData();
  }, []);

  return (
    <Components.Root>
      <Grid container spacing={3} mt={10}>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <OutlinedCard profile={profile} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
          <Components.Table>
            <Components.THead>
              <Components.Tr>
                <Components.Td>No</Components.Td>
                <Components.Td>Nama</Components.Td>
                <Components.Td>Game</Components.Td>
                <Components.Td>Status</Components.Td>
              </Components.Tr>
            </Components.THead>
            <Components.TBody>
              {(scorePerPage > 0
                ? score.slice(
                    page * scorePerPage,
                    page * scorePerPage + scorePerPage
                  )
                : score
              ).map((res, i) => {
                return (
                  <Components.Tr>
                    <Components.Td>{i + 1}</Components.Td>
                    <Components.Td>{profile?.username}</Components.Td>
                    <Components.Td>{res?.game?.name}</Components.Td>
                    <Components.Td>{res?.score}</Components.Td>
                  </Components.Tr>
                );
              })}
              {emptyScore > 0 && (
                <Components.Tr>
                  {" "}
                  style={{ height: 41 * emptyScore }}
                  <Components.Td colSpan={3} />
                </Components.Tr>
              )}
            </Components.TBody>
            <Components.Pagination>
            <Pagination
              scorePerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={score.length}
              scorePerPage={scorePerPage}
              page={page}
              slotProps={{
                select: {
                  "aria-label": "score per page",
                },
                actions: {
                  showFirstButton: true,
                  showLastButton: true,
                },
              }}
              onPageChange={() => handleChangePage ()}
              onscorePerPageChange={() => handleChangeScorePerPage()}
            />
            </Components.Pagination>
          </Components.Table>
        </Grid>
      </Grid>
    </Components.Root>
  );
}
