import { ChartListItem } from '@/common/list/genre/chart/ChartListItem';
import { Layout } from '@/layout/layout';
import { colors } from '@/lib/styled/colors';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import { getCharts } from './api/services';

const Charts = ({ charts }) => {
  const { data, isLoading, isSuccess, isError } = useQuery(
    'charts',
    getCharts,
    { initialData: charts }
  );

  return (
    <Layout>
      <ChartListItem data={data} / >
    </Layout>
  );
};

export default Charts;

export async function getStaticProps() {
  const charts = await getCharts();

  return {
    props: {
      charts: charts,
    },
  };
}
