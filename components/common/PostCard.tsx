import { FC } from "react";

import { PostDetail } from "../../utils/types";

interface Props {
  post: PostDetail;
}

const PostCard: FC<Props> = ({ post }): JSX.Element => {
  const { title, meta, slug, tags, thumbnai } = post;
  return (
    <div className="rounded shadow-sm overflow-hidden transition flex flex-col h-full">
      PostCard
    </div>
  );
};

export default PostCard;
