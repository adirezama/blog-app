import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from "next";
import Editor, { FinalPost } from "../../../../components/editor";
import db from "../../../../lib/dbConnect";
import Post from "../../../../models/Post";
import AdminLayout from "../../../../components/layout/AdminLayout";
import { generateFormData } from "../../../../utils/helper";
import axios from "axios";

interface PostResponse extends FinalPost {
  id: string;
}
type Props = InferGetServerSidePropsType<typeof getServerSideProps>;

const Update: NextPage<Props> = ({ post }) => {
  const handleSubmit = async (post: FinalPost) => {
    try {
      const formData = generateFormData(post);

      const { data } = await axios.patch("/api/posts/"+post.id, formData);
      console.log(data);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };
  return (
    <AdminLayout title="Update">
      <Editor initialValue={post} onSubmit={handleSubmit} btnTitle="Update" />
    </AdminLayout>
  );
};

interface ServerSideResponse {
  post: PostResponse;
}
export const getServerSideProps: GetServerSideProps<ServerSideResponse> = async (context) => {
  const slug = context.query.slug as string;

  await db();
  const post = await Post.findOne({ slug });
  if (!post) return { notFound: true };
  const { _id, title, content, thumbnail, tags, meta } = post;

  return {
    props: {
      post: {
        id: _id.toString(),
        title,
        content,
        tags: tags.join(", "),
        thumbnail: thumbnail?.url || "",
        slug,
        meta,
      },
    },
  };
};

export default Update;
