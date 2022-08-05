export interface Post {
    created_at: Date;
    title: string;
    author: string;
    points: number;
    num_comments: number;
    created_at_i: number;
    objectID: string;
}

export interface SearchedPosts {
    hits: Post[];
}