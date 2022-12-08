import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import useMediaQuery from '@mui/material/useMediaQuery';
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import ForwardOutlined from '@mui/icons-material/ForwardOutlined';
import axios from 'axios';

import MainVisual from 'components/MainVisual';

const Emossion = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const api_endpoint = 'http://localhost:8000';

  const [postData, setData] = useState({
    page: 0,
    name: '',
    emossion_year: 2018,
    emoss_amount: 0
  });

  const [companies, setCompanies] = useState([]);
  const [totalPage, setTotalPage] = useState([]);
  const [yearData, setYear] = useState([]);

  useEffect(()=>{
    fetchEmossionYear();
    fetchCompanies();
  }, []);

  useEffect(() => {
    fetchCompanies();
  }, [postData.page]);

  const fetchEmossionYear = async () => {
    await axios.post(`${api_endpoint}/api/getYear`).then(({data})=>{
      setYear(data.data);
    });
  };

  const fetchCompanies = async () => {
    await axios.post(`${api_endpoint}/api/getEmossionRank`, postData).then(({data})=>{
      setCompanies(data.data);
      setTotalPage(data.total);
    });
  };

  const searchConfirm = () => {
    fetchCompanies();
  };

  const getPage = (e) => {
    setData({
      ...postData,
      page: e.target.textContent - 1,
    });
  };

  return (
    <Main colorInvert={true}>
      <Box bgcolor={'alternate.main'} position={'relative'}>
        <MainVisual title={'排出量ランキング'} />

        <Container paddingY={15}>
          <Grid container spacing={isMd ? 4 : 0}>
            <Grid item xs={12} md={3}>
              <Box
                component={Card}
                variant={'outlined'}
                padding={2}
                bgcolor={'transparent'}
              >
                <Grid container spacing={4}>
                  <Grid item xs={12}>
                    <form>
                      <Grid container spacing={2}>
                        <Grid item xs={12}>
                          <Typography variant={'subtitle1'} sx={{ marginBottom: 2 }}>
                            企業検索
                          </Typography>
                          <TextField
                            label="企業名"
                            variant="outlined"
                            name={'email'}
                            fullWidth
                            onChange={e => {
                              setData({
                                ...postData,
                                name: e.target.value,
                              });
                            }}
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <FormControl variant="outlined" sx={{ minWidth: 1 }}>
                            <InputLabel id="career-listing__jobs-role--label">公共排出年度</InputLabel>
                            <Select
                              labelId="career-listing__jobs-role--label"
                              label="公共排出年度"
                              onChange={e=> {
                                setData({
                                  ...postData,
                                  emossion_year: e.target.value,
                                });
                              }}
                            >
                              {
                                yearData && yearData.length > 0 && (
                                  yearData.map((year, i) => (
                                    <MenuItem year value={year.emossion_year} key={i}>
                                      {year.emossion_year}
                                    </MenuItem>
                                  ))
                                )
                              }
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                          <FormControl variant="outlined" sx={{ minWidth: 1 }}>
                            <InputLabel id="career-listing__jobs-role--label">排出量</InputLabel>
                            <Select
                              labelId="career-listing__jobs-role--label"
                              label="排出量"
                              onChange={e => {
                                setData({
                                  ...postData,
                                  emoss_amount: e.target.value,
                                });
                              }}
                            >
                              <MenuItem value={'1'}>～50,000</MenuItem>
                              <MenuItem value={'2'}>50,000～200,000</MenuItem>
                              <MenuItem value={'3'}>200,000～</MenuItem>
                            </Select>
                          </FormControl>
                        </Grid>
                        <Grid item container xs={12}>
                          <Box
                            display="flex"
                            flexDirection={{ xs: 'column', sm: 'row' }}
                            alignItems={{ xs: 'stretched', sm: 'center' }}
                            justifyContent={'space-between'}
                            width={1}
                            maxWidth={600}
                            margin={'0 auto'}
                          >
                            <Button
                              size={'large'}
                              variant={'contained'}
                              onClick={searchConfirm}
                              sx={{
                                backgroundColor: '#009F41',
                                fontSize: '14px',
                                '&:hover': {
                                  backgroundColor: 'rgba(51, 178, 103, 1)'
                                }
                              }}
                            >
                              検索
                            </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </form>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={9} marginTop={{ xs: '40px', md: '0px' }}>
              <Box>
                <TableContainer>
                  <Table aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align='center' sx={{ color: '#262626', borderColor: '#BEC0C4', fontSize: { xs: '10px', md: '14px' }, fontWeight: { xs: '400', md: '500' } }}>No</TableCell>
                        <TableCell align='center' sx={{ color: '#262626', borderColor: '#BEC0C4', fontSize: { xs: '10px', md: '14px' }, fontWeight: { xs: '400', md: '500' }, width: { xs: '30%', md: '50%' } }}>企業名</TableCell>
                        <TableCell align='center' sx={{ color: '#262626', borderColor: '#BEC0C4', fontSize: { xs: '10px', md: '14px' }, fontWeight: { xs: '400', md: '500' }, width: { xs: '65px', md: '75px' } }}>所在地</TableCell>
                        <TableCell align='center' sx={{ color: '#262626', borderColor: '#BEC0C4', fontSize: { xs: '10px', md: '14px' }, fontWeight: { xs: '400', md: '500' } }}>排出量</TableCell>
                        <TableCell sx={{ borderColor: '#BEC0C4', display: { xs: 'none', md: 'revert' } }}></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {
                        companies && companies.length > 0 && (
                          companies.map((item, i) => (
                            <TableRow
                              component={Link}
                              key={i}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 }, textDecoration: 'none' }}
                              to={`company/${item.company_id}`}
                            >
                              <TableCell sx={{ color: '#262626', borderColor: '#BEC0C4', fontSize: { xs: '10px', md: '14px' }, fontWeight: { xs: '400', md: '500' } }}>{postData.page * 50 + i + 1}</TableCell>
                              <TableCell component="td" scope="row" sx={{ color: '#262626', borderColor: '#BEC0C4', fontSize: { xs: '10px', md: '14px' }, fontWeight: { xs: '400', md: '500' }, paddingX: { xs: '0px', md: 2 } }}>{item.name}</TableCell>
                              <TableCell align='center' sx={{ color: '#262626', borderColor: '#BEC0C4', fontSize: { xs: '10px', md: '14px' }, fontWeight: { xs: '400', md: '500' } }}>{'-'}</TableCell>
                              <TableCell sx={{ color: '#262626', borderColor: '#BEC0C4', fontSize: { xs: '10px', md: '14px' }, fontWeight: { xs: '400', md: '500' } }}>
                                {item.emossion_year}年度 排出量 {item.after_gas_emission ? parseInt(item.after_gas_emission).toLocaleString() : 0} tCO2
                              </TableCell>
                              <TableCell sx={{ borderColor: '#BEC0C4', display: { xs: 'none', md: 'revert' } }}>
                                <Link to={`company/${item.company_id}`}>
                                  <ForwardOutlined
                                    sx={{
                                      color: '#000000',
                                    }}
                                  />
                                </Link>
                              </TableCell>
                            </TableRow>
                          ))
                        )
                      }
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Grid>
          </Grid>
          <Grid item container justifyContent={'center'} xs={12} marginTop={2}>
            <Pagination
              count={Math.ceil(totalPage / 50)}
              size={'medium'}
              onChange={getPage}
            />
          </Grid>
        </Container>
      </Box>
    </Main>
  );
};

export default Emossion;