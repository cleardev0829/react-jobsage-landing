import { orderBy } from "lodash";
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect, useCallback, useState } from "react";
// material
import {
  Box,
  Grid,
  Skeleton,
  Container,
  Stack,
} from "@material-ui/core";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "../redux/store";
import { getPostsInitial, getMorePosts } from "../redux/slices/blog";
import Page from "../components/Page";
import {
  BlogPostCard,
  BlogPostsSort,
  BlogPostsSearch,
} from "../components/_dashboard/blog";

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: "latest", label: "Latest" },
  { value: "popular", label: "Popular" },
  { value: "oldest", label: "Oldest" },
];

// ----------------------------------------------------------------------

const applySort = (posts, sortBy) => {
  if (sortBy === "latest") {
    return orderBy(posts, ["createdAt"], ["desc"]);
  }
  if (sortBy === "oldest") {
    return orderBy(posts, ["createdAt"], ["asc"]);
  }
  if (sortBy === "popular") {
    return orderBy(posts, ["view"], ["desc"]);
  }
  return posts;
};

// accell: https://drive.google.com/file/d/1U01igxUTKka4XOlUb2IBD6luFPx_1kit/view?usp=sharing
// cogni:  https://drive.google.com/file/d/1vUeqE_jMkBFUo2qfNa6g2TW1p3cj0g8c/view?usp=sharing
// how ai: https://drive.google.com/file/d/1IvnQ44QjUxZb8f9ycbqD8xUEw9-OBYY1/view?usp=sharing
// workfo: https://drive.google.com/file/d/1EqRgm57mYASW7dILs5WkXm432b0JvtYP/view?usp=sharing

const SkeletonLoad = (
  <Grid container spacing={3} sx={{ mt: 2 }}>
    {[...Array(4)].map((_, index) => (
      <Grid item xs={12} md={3} key={index}>
        <Skeleton
          variant="rectangular"
          width="100%"
          sx={{ height: 200, borderRadius: 2 }}
        />
        <Box sx={{ display: "flex", mt: 1.5 }}>
          <Skeleton variant="circular" sx={{ width: 40, height: 40 }} />
          <Skeleton variant="text" sx={{ mx: 1, flexGrow: 1 }} />
        </Box>
      </Grid>
    ))}
  </Grid>
);

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
  },
}));

export default function BlogPosts() {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState("latest");
  const { posts, hasMore, index, step } = useSelector((state) => state.blog); console.log('=============================================', posts)
  const sortedPosts = applySort(posts, filters);
  const onScroll = useCallback(() => dispatch(getMorePosts()), [dispatch]);

  useEffect(() => {
    dispatch(getPostsInitial(index, step));
  }, [dispatch, index, step]);

  const handleChangeSort = (event) => {
    setFilters(event.target.value);
  };

  return (
    <RootStyle>
      <Container sx={{my: 8}}>
        <Stack
          mb={5}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <BlogPostsSearch />
          <BlogPostsSort
            query={filters}
            options={SORT_OPTIONS}
            onSort={handleChangeSort}
          />
        </Stack>

        <InfiniteScroll
          next={onScroll}
          hasMore={hasMore}
          loader={SkeletonLoad}
          dataLength={posts.length}
          style={{ overflow: "inherit" }}
        >
          <Grid container spacing={3}>
            {sortedPosts.splice(0, 4).map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </Grid>
        </InfiniteScroll>
      </Container>
    </RootStyle>
  );
}
