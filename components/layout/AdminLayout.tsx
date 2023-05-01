import { FC, ReactNode } from "react";
import Navbar from "../common/Navbar";
import Link from "next/link";
import { AiOutlineFileAdd } from "react-icons/ai";
import AppHead from "../common/AppHead";

interface Props {
  children: ReactNode;
  title?: string;
}

const AdminLayout: FC<Props> = ({ title, children }): JSX.Element => {
  return (
    <>
      <AppHead title={title} />
      <div className="flex">
        <Navbar />
        <div className="flex-1 p-4">{children}</div>
        <Link
          title="Create New Post"
          href="/admin/posts/create"
          className="bg-color2 dark:bg-secondary-light text-color1 dark:text-primary-dark fixed z-10 right-10 bottom-10 p-3 rounded-full hover:scale-90 shadow-sm transition">
          <AiOutlineFileAdd size={24} />
        </Link>
      </div>
    </>
  );
};

export default AdminLayout;
