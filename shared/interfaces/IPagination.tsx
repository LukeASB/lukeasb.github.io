interface IPagination {
    totalPosts: number;
    postsPerPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

export default IPagination;