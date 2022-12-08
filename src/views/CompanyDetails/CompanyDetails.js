import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';

import Main from 'layouts/Main';
import Container from 'components/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { useParams } from 'react-router-dom';
import Card from '@mui/material/Card';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import ArrowDownward from '@mui/icons-material/ArrowDownward';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import axios from 'axios';
import MainVisual from 'components/MainVisual';

const CompanyList = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  
  const api_endpoint = 'http://localhost:8000';

  const { id } = useParams();

  const [postData, setData] = useState({
    id: id,
    start_year: '2014',
    end_year: '2018',
  });

  const [company, setCompany] = useState();
  const [yearData, setYear] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchEmossionYear();
    fetchCompany();
  }, []);

  const fetchEmossionYear = async () => {
    await axios.post(`${api_endpoint}/api/getYear`).then(({data})=>{
      setYear(data.data);
    });
  };

  const fetchCompany = async () => {
    await axios.post(`${api_endpoint}/api/getDetail`, postData).then(({data})=>{
      let len = data.data.length;
      for (var i = 0; i < len - 1; i++) {
        const first  = data.data[i].after_gas_emission ? data.data[i].after_gas_emission : 0;
        const second = data.data[i+1].after_gas_emission ? data.data[i+1].after_gas_emission : 0;
        data.data[i].reduction_emission = parseInt(second) - parseInt(first);
      }
      if (data.data[len - 1].emossion_year == postData.start_year - 1)
        data.data.splice(-1);
      else
        data.data[len - 1].reduction_emission = data.data[len - 1].after_gas_emission;
      setCompany(data.data);
    });
  };

  const searchConfirm = () => {
    fetchCompany();
  };

  return (
    <Main colorInvert={true}>
      <Box bgcolor={'alternate.main'} position={'relative'}>
        <MainVisual title={'企業詳細'} />

        <Container paddingY={{ xs: 15, md: 13.5 }}>
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
                            年度検索
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <FormControl variant="outlined" sx={{ minWidth: 1 }}>
                            <InputLabel id="career-listing__jobs-role--label">開始年度</InputLabel>
                            <Select
                              labelId="career-listing__jobs-role--label"
                              label="開始年度"
                              onChange={e=>{
                                setData({
                                  ...postData,
                                  start_year: e.target.value,
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
                            <InputLabel id="career-listing__jobs-role--label">終了年度</InputLabel>
                            <Select
                              labelId="career-listing__jobs-role--label"
                              label="終了年度"
                              onChange={e=>{
                                setData({
                                  ...postData,
                                  end_year: e.target.value,
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
              <Box
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                <Typography
                  gutterBottom
                  align={'center'}
                  sx={{
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#262626',
                  }}
                >
                  {company && company[0].name}
                </Typography>
                <Typography
                  variant="h6"
                  component="p"
                  color="text.primary"
                  align={'center'}
                  sx={{ marginBottom: 2 }}
                >
                  {'-'}
                </Typography>
              </Box>
              <Box
                marginBottom={5}
                sx={{
                  width: '80px',
                  height: '5px',
                  backgroundColor: '#009F41',
                  marginX: 'auto',
                }}
              >
              </Box>
              <Grid container>
                <Grid xs={12} md={6}>
                  <Box
                    marginBottom={{ xs: 0, sm: 4 }}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                  >
                    <Typography
                      align={'center'}
                      sx={{
                        fontSize: {
                          xs: '14px',
                          md: '16px',
                        },
                        fontWeight: 500,
                        color: '#262626',
                        marginBottom: '40px',
                      }}
                    >
                      過去5年削減量
                    </Typography>
                    <Box>
                      <Table aria-label="simple table">
                        <TableBody>
                          {
                            company && company.length > 0 && (
                              company.map((item, i) => (
                                <TableRow
                                  key={i}
                                  component="p"
                                >
                                  <TableCell
                                    sx={{
                                      fontSize: '16px',
                                      fontWeight: '500',
                                      color: '#262626'
                                    }}
                                  >
                                    {item.emossion_year}年
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      fontSize: '16px',
                                      fontWeight: '500',
                                      color: '#262626'
                                    }}
                                  >
                                    削減量 {parseInt(item.reduction_emission).toLocaleString()} tCO2
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      fontSize: '16px',
                                      fontWeight: '500',
                                      color: '#262626'
                                    }}
                                  >
                                    {item.reduction_emission >= 0 ? <ArrowUpward sx={{ verticalAlign: 'middle' }} /> : <ArrowDownward sx={{ verticalAlign: 'middle' }} />}
                                  </TableCell>
                                </TableRow>
                              ))
                            )
                          }
                        </TableBody>
                      </Table>
                    </Box>
                  </Box>
                </Grid>
                <Grid xs={12} md={6}>
                  <Box
                    marginBottom={{ xs: 0, sm: 4 }}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                  >
                    <Typography
                      align={'center'}
                      sx={{
                        fontSize: {
                          xs: '14px',
                          md: '16px',
                        },
                        fontWeight: 500,
                        color: '#262626',
                        marginTop: {
                          xs: '72px',
                          md: '0px',
                        },
                        marginBottom: '40px',
                      }}
                    >
                      過去5年排出量
                    </Typography>
                    <Box>
                      <Table aria-label="simple table">
                        <TableBody>
                          {
                            company && company.length > 0 && (
                              company.map((item, i) => (
                                <TableRow
                                  key={i}
                                  component="p"
                                >
                                  <TableCell
                                    sx={{
                                      fontSize: '16px',
                                      fontWeight: '500',
                                      color: '#262626'
                                    }}
                                  >
                                    {item.emossion_year}年
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      fontSize: '16px',
                                      fontWeight: '500',
                                      color: '#262626'
                                    }}
                                  >
                                    排出量 {parseInt(item.after_gas_emission).toLocaleString()} tCO2
                                  </TableCell>
                                  <TableCell
                                    sx={{
                                      fontSize: '16px',
                                      fontWeight: '500',
                                      color: '#262626'
                                    }}
                                  >
                                    {item.after_gas_emission >= 0 ? <ArrowUpward sx={{ verticalAlign: 'middle' }} /> : <ArrowDownward sx={{ verticalAlign: 'middle' }} />}
                                  </TableCell>
                                </TableRow>
                              ))
                            )
                          }
                        </TableBody>
                      </Table>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Main>
  );
};

export default CompanyList;