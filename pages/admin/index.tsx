import { NextPage } from "next";

import AdminLayout from "../../components/layout/AdminLayout";

interface Props {}

const admin: NextPage<Props> = () => {
  return (
    <AdminLayout>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio facilis neque labore esse
        necessitatibus ducimus sed, laboriosam quod error dolorem similique ut non illo nisi
        sapiente voluptatibus porro ipsum autem consectetur, nam atque, consequatur doloremque.
        Repudiandae, porro. Provident, itaque praesentium!
      </div>
    </AdminLayout>
  );
};

export default admin;
