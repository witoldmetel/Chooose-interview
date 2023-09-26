import InfiniteScroll from 'react-infinite-scroll-component';
import { Center, Container, SimpleGrid, Spinner } from '@chakra-ui/react';

import { Card } from '../core/components';
import useTrips from '../core/hooks/useTrips';

export const Dashboard = () => {
  const { data, fetchNextPage, hasNextPage } = useTrips();

  return (
    <Container maxW="fit" bg="#E7E7E8" p="10">
      <InfiniteScroll
        next={fetchNextPage}
        hasMore={hasNextPage || false}
        loader={
          <Center my={4}>
            <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
          </Center>
        }
        dataLength={data?.pages.reduce((total, page) => total + page.length, 0) || 0}
      >
        <SimpleGrid gap={5} minChildWidth={300}>
          {data?.pages.map((page) =>
            page.map((trip) => (
              <Card
                key={trip.id}
                title={trip.title}
                countriesLength={trip.countries?.length}
                days={trip.days}
                co2kilograms={trip.co2kilograms}
                rating={trip.rating}
                bgImage={trip.photoUrl}
              />
            ))
          )}
        </SimpleGrid>
      </InfiniteScroll>
    </Container>
  );
};
