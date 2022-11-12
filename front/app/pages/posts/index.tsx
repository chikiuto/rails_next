import React, { FC } from "react";
import { GetServerSideProps } from 'next'

type Post = {
  id: number;
  title: string;
}

type Props = {
  posts: Post[];
}

const Home: FC<Props> = (props) => {
  return (
	<div>
	<h2>
		POSTの一覧
    </h2>
	<table>
		<thead>
			<tr>
				<th>id</th>
				<th>title</th>
			</tr>
		</thead>
		<tbody>
			{props.posts.map((post) =>
			<tr key={post.id}>
				<td>{post.id}.</td>
				<td>{post.title}</td>
			</tr>
			)}
		</tbody>
	</table>
</div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	console.log(context)
	const response = await fetch("http://api:3000/posts", {method: "GET"});
	const json = await response.json();

	return {
		props: {
		posts: json
		},
	};
}

export default Home;