export interface Post {
    created_at: Date;
    title: string;
    author: string;
    points: number;
    num_comments: number;
    created_at_i: number;
    objectID: string;
    children: Comment[]
}

export interface SearchedPosts {
    hits: Post[];
}

export interface Comment {
    id: number,
    created_at: Date;
    text: string;
    author: string;
    created_at_i: number;
}