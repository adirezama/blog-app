import { NextPage } from "next";
import Editor, { FinalPost } from "../../../../components/editor";
import AdminLayout from "../../../../components/layout/AdminLayout";
import axios from "axios";
import { generateFormData } from "../../../../utils/helper";
interface Props {}

const Create: NextPage<Props> = () => {
  const handleSubmit = async (post: FinalPost) => {
    try {
      const formData = generateFormData(post);

      const { data } = await axios.post("/api/posts", formData);
      console.log(data);
    } catch (error: any) {
      console.log(error.response.data);
    }
  };
  return (
    <AdminLayout title="New Post">
      <Editor onSubmit={handleSubmit} />
    </AdminLayout>
  );
};

export default Create;
