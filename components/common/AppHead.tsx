import { FC } from "react";
import Head from "next/head";
interface Props {
  title?: string;
  desc?: string;
}

export const APP_Name = "Sweet Wish";

const AppHead: FC<Props> = ({ title, desc }): JSX.Element => {
  return (
    <Head>
      <title>{title ? title + " | " + APP_Name : APP_Name}</title>
      <meta content={desc} name="description" />
    </Head>
  );
};

export default AppHead;
